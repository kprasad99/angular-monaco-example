import * as monaco from 'monaco-editor';
import ILineTokens = monaco.languages.ILineTokens;
import {
  CommonTokenStream,
  Token,
  Parser,
  ErrorListener,
  CharStream,
  DefaultErrorStrategy,
  ErrorStrategy
} from 'antlr4';
import IToken = monaco.languages.IToken;
import { createLexer } from './iba-parser';

export class IbaLanguageState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new IbaLanguageState();
  }

  equals(other: monaco.languages.IState): boolean {
    return true;
  }
}

export class IbaLanguageTokensProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new IbaLanguageState();
  }

  tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
    // So far we ignore the state, which is not great for performance reasons
    return tokensForLine(line);
  }
}

export const EOF = -1;

export class IbaLanguageToken implements IToken {
  scopes: string;
  startIndex: number;

  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName.toLowerCase() + '.iba';
    this.startIndex = startIndex;
  }
}

export class IbaLanguageLineTokens implements ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];

  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new IbaLanguageState();
    this.tokens = tokens;
  }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
  let errorStartingPoints: number[] = [];

  class ErrorCollectorListener extends ErrorListener<Token> {
    override syntaxError(recognizer: any, offendingSymbol: any, line: any, column: number, msg: any, e: any) {
      errorStartingPoints.push(column);
    }
  }

  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  let errorListener = new ErrorCollectorListener();
  lexer.addErrorListener(errorListener);
  let done = false;
  let myTokens: monaco.languages.IToken[] = [];
  do {
    let token = lexer.nextToken();
    if (token == null) {
      done = true;
    } else {
      // We exclude EOF
      if (token.type == EOF) {
        done = true;
      } else {
        let tokenTypeName = lexer.symbolicNames[token.type] || lexer.literalNames[token.type];
        let myToken = new IbaLanguageToken(tokenTypeName!, token.column);
        myTokens.push(myToken);
      }
    }
  } while (!done);

  // Add all errors
  for (let e of errorStartingPoints) {
    myTokens.push(new IbaLanguageToken('error.iba', e));
  }
  myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));

  return new IbaLanguageLineTokens(myTokens);
}
