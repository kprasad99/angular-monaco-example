import {
  CharStream,
  CommonTokenStream,
  DefaultErrorStrategy,
  ErrorListener,
  Lexer,
  Parser,
  ParseTreeWalker,
  RecognitionException,
  Recognizer,
  Token
} from 'antlr4';
import IbaLanguageLexer from '../antlr/IbaLanguageLexer';
import IbaLanguageParser, { ProgramContext } from '../antlr/IbaLanguageParser';
import { createTypeChecker } from './iba-typechecker';

export class ConsoleErrorListener extends ErrorListener<Token> {
  override syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    console.log('ERROR ' + msg);
  }
}

export class Error {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;

  constructor(startLine: number, endLine: number, startCol: number, endCol: number, message: string) {
    this.startLine = startLine;
    this.endLine = endLine;
    this.startCol = startCol;
    this.endCol = endCol;
    this.message = message;
  }
}

export function createLexer(input: string) {
  const chars = new CharStream(input);
  const lexer = new IbaLanguageLexer(chars);
  return lexer;
}

export function getTokens(input: string): Token[] {
  return createLexer(input).getAllTokens();
}

export function createParser(input: string): IbaLanguageParser {
  const lexer = createLexer(input);
  return createParserFromLexer(lexer);
}

export function createParserFromLexer(lexer: Lexer): IbaLanguageParser {
  const tokens = new CommonTokenStream(lexer);
  return new IbaLanguageParser(tokens);
}

export function parseTree(input: string): ProgramContext {
  const parser = createParser(input);
  return parser.program();
}

export function parseTreeStr(input: string): string {
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  // lexer.addErrorListener(new ConsoleErrorListener());
  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  // parser.addErrorListener(new ConsoleErrorListener());
  const tree = parser.program();
  return tree.toStringTree(parser.ruleNames, parser);
}

class CollectorErrorListener extends ErrorListener<Token> {
  private errors: Error[] = [];

  constructor(errors: Error[]) {
    super();
    this.errors = errors;
  }

  override syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ) {
    var endColumn = column + 1;
    if (offendingSymbol.text !== null) {
      endColumn = column + offendingSymbol.text.length;
    }
    this.errors.push(new Error(line, line, column, endColumn, msg));
  }
}

export class IbaLanguageErrorStrategy extends DefaultErrorStrategy {
  reportUnwantedToken(recognizer: Parser) {
    // the TypeScript definition lacks this method
    // @ts-ignore
    return super.reportUnwantedToken(recognizer);
  }

  singleTokenDeletion(recognizer: Parser): Token | null {
    var nextTokenType = recognizer.getTokenStream().LA(2);
    if (recognizer.getTokenStream().LA(1) == IbaLanguageParser.TERMINATOR || nextTokenType == IbaLanguageParser.WS) {
      return null;
    }
    var expecting = this.getExpectedTokens(recognizer);
    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer);
      recognizer.consume(); // simply delete extra token
      // we want to return the token we're actually matching
      var matchedSymbol = recognizer.getCurrentToken();
      // this.reportMatch(recognizer); // we know current token is correct
      return matchedSymbol;
    } else {
      return null;
    }
  }

  getExpectedTokens = (recognizer: Parser) => {
    return recognizer.getExpectedTokens();
  };

  override reportMatch = (recognizer: Parser) => {
    // this.reportMatch(recognizer);
  };
}

export function createParseTreeWalker(): ParseTreeWalker {
  const walker = new ParseTreeWalker();
  return walker;
}

export function validate(input: string): Error[] {
  let errors: Error[] = [];

  try {
    // Step 1: Lexical Analysis (Tokenize the input)
    const lexer = createLexer(input);
    lexer.removeErrorListeners();

    // Step 2: Parse the Token Stream
    const parser = createParserFromLexer(lexer);
    parser.removeErrorListeners();
    const parseTree = parser.program();

    // Step 3: Syntax Analysis
    const typechecker = createTypeChecker();
    const walker = createParseTreeWalker();

    walker.walk(typechecker, parseTree);
  
  } catch (error) {
    console.error('Error during validation:', error);
  }

  return errors;
}
