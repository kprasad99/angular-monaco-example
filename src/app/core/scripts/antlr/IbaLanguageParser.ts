// Generated from IbaLanguage.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import IbaLanguageListener from "./IbaLanguageListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class IbaLanguageParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly KEYWORD = 13;
	public static readonly VARIABLE = 14;
	public static readonly SINGLE_QUOTED_STRING = 15;
	public static readonly DOUBLE_QUOTED_STRING = 16;
	public static readonly FLOAT = 17;
	public static readonly INTEGER = 18;
	public static readonly OPERATOR = 19;
	public static readonly LBRACKET = 20;
	public static readonly RBRACKET = 21;
	public static readonly LPAREN = 22;
	public static readonly RPAREN = 23;
	public static readonly TERMINATOR = 24;
	public static readonly WS = 25;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_rule = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_functionCall = 3;
	public static readonly RULE_literal = 4;
	public static readonly literalNames: (string | null)[] = [ null, "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'>'", 
                                                            "'<'", "'>='", 
                                                            "'<='", "'<>'", 
                                                            "'='", "'^'", 
                                                            "','", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'['", "']'", 
                                                            "'('", "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "KEYWORD", 
                                                             "VARIABLE", 
                                                             "SINGLE_QUOTED_STRING", 
                                                             "DOUBLE_QUOTED_STRING", 
                                                             "FLOAT", "INTEGER", 
                                                             "OPERATOR", 
                                                             "LBRACKET", 
                                                             "RBRACKET", 
                                                             "LPAREN", "RPAREN", 
                                                             "TERMINATOR", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "rule", "expression", "functionCall", "literal",
	];
	public get grammarFileName(): string { return "IbaLanguage.g4"; }
	public get literalNames(): (string | null)[] { return IbaLanguageParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return IbaLanguageParser.symbolicNames; }
	public get ruleNames(): string[] { return IbaLanguageParser.ruleNames; }
	public get serializedATN(): number[] { return IbaLanguageParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, IbaLanguageParser._ATN, IbaLanguageParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, IbaLanguageParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.rule();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4710400) !== 0));
			this.state = 15;
			this.match(IbaLanguageParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rule(): RuleContext {
		let localctx: RuleContext = new RuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, IbaLanguageParser.RULE_rule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 17;
			this.expression(0);
			this.state = 18;
			this.match(IbaLanguageParser.TERMINATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, IbaLanguageParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
				{
				localctx = new ParenthesisExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 21;
				this.match(IbaLanguageParser.LPAREN);
				this.state = 22;
				this.expression(0);
				this.state = 23;
				this.match(IbaLanguageParser.RPAREN);
				}
				break;
			case 13:
				{
				localctx = new FunctionExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 25;
				this.functionCall();
				}
				break;
			case 14:
				{
				localctx = new VariableExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 26;
				this.match(IbaLanguageParser.VARIABLE);
				}
				break;
			case 15:
			case 16:
			case 17:
			case 18:
				{
				localctx = new LiteralExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 27;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 47;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 45;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						localctx = new MulDivExpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, IbaLanguageParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 31;
						_la = this._input.LA(1);
						if(!(_la===1 || _la===2)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 32;
						this.expression(9);
						}
						break;
					case 2:
						{
						localctx = new AddSubExpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, IbaLanguageParser.RULE_expression);
						this.state = 33;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 34;
						_la = this._input.LA(1);
						if(!(_la===3 || _la===4)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 35;
						this.expression(8);
						}
						break;
					case 3:
						{
						localctx = new ComparisonExpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, IbaLanguageParser.RULE_expression);
						this.state = 36;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 37;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 38;
						this.expression(7);
						}
						break;
					case 4:
						{
						localctx = new EqualityExpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, IbaLanguageParser.RULE_expression);
						this.state = 39;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 40;
						this.match(IbaLanguageParser.T__9);
						this.state = 41;
						this.expression(6);
						}
						break;
					case 5:
						{
						localctx = new PowerExpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, IbaLanguageParser.RULE_expression);
						this.state = 42;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 43;
						this.match(IbaLanguageParser.T__10);
						this.state = 44;
						this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, IbaLanguageParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.match(IbaLanguageParser.KEYWORD);
			this.state = 51;
			this.match(IbaLanguageParser.LPAREN);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4710400) !== 0)) {
				{
				this.state = 52;
				this.expression(0);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 53;
					this.match(IbaLanguageParser.T__11);
					this.state = 54;
					this.expression(0);
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 62;
			this.match(IbaLanguageParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, IbaLanguageParser.RULE_literal);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				localctx = new FloatLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 64;
				this.match(IbaLanguageParser.FLOAT);
				}
				break;
			case 18:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 65;
				this.match(IbaLanguageParser.INTEGER);
				}
				break;
			case 15:
				localctx = new SingleQuotedStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 66;
				this.match(IbaLanguageParser.SINGLE_QUOTED_STRING);
				}
				break;
			case 16:
				localctx = new DoubleQuotedStringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 67;
				this.match(IbaLanguageParser.DOUBLE_QUOTED_STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,25,71,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,
	1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,29,8,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,
	3,1,3,1,3,1,3,5,3,56,8,3,10,3,12,3,59,9,3,3,3,61,8,3,1,3,1,3,1,4,1,4,1,
	4,1,4,3,4,69,8,4,1,4,0,1,4,5,0,2,4,6,8,0,3,1,0,1,2,1,0,3,4,1,0,5,9,79,0,
	11,1,0,0,0,2,17,1,0,0,0,4,28,1,0,0,0,6,50,1,0,0,0,8,68,1,0,0,0,10,12,3,
	2,1,0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,
	0,0,15,16,5,0,0,1,16,1,1,0,0,0,17,18,3,4,2,0,18,19,5,24,0,0,19,3,1,0,0,
	0,20,21,6,2,-1,0,21,22,5,22,0,0,22,23,3,4,2,0,23,24,5,23,0,0,24,29,1,0,
	0,0,25,29,3,6,3,0,26,29,5,14,0,0,27,29,3,8,4,0,28,20,1,0,0,0,28,25,1,0,
	0,0,28,26,1,0,0,0,28,27,1,0,0,0,29,47,1,0,0,0,30,31,10,8,0,0,31,32,7,0,
	0,0,32,46,3,4,2,9,33,34,10,7,0,0,34,35,7,1,0,0,35,46,3,4,2,8,36,37,10,6,
	0,0,37,38,7,2,0,0,38,46,3,4,2,7,39,40,10,5,0,0,40,41,5,10,0,0,41,46,3,4,
	2,6,42,43,10,4,0,0,43,44,5,11,0,0,44,46,3,4,2,4,45,30,1,0,0,0,45,33,1,0,
	0,0,45,36,1,0,0,0,45,39,1,0,0,0,45,42,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,
	0,47,48,1,0,0,0,48,5,1,0,0,0,49,47,1,0,0,0,50,51,5,13,0,0,51,60,5,22,0,
	0,52,57,3,4,2,0,53,54,5,12,0,0,54,56,3,4,2,0,55,53,1,0,0,0,56,59,1,0,0,
	0,57,55,1,0,0,0,57,58,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,60,52,1,0,0,0,
	60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,23,0,0,63,7,1,0,0,0,64,69,5,17,0,0,
	65,69,5,18,0,0,66,69,5,15,0,0,67,69,5,16,0,0,68,64,1,0,0,0,68,65,1,0,0,
	0,68,66,1,0,0,0,68,67,1,0,0,0,69,9,1,0,0,0,7,13,28,45,47,57,60,68];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!IbaLanguageParser.__ATN) {
			IbaLanguageParser.__ATN = new ATNDeserializer().deserialize(IbaLanguageParser._serializedATN);
		}

		return IbaLanguageParser.__ATN;
	}


	static DecisionsToDFA = IbaLanguageParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: IbaLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(IbaLanguageParser.EOF, 0);
	}
	public rule_list(): RuleContext[] {
		return this.getTypedRuleContexts(RuleContext) as RuleContext[];
	}
	public rule(i: number): RuleContext {
		return this.getTypedRuleContext(RuleContext, i) as RuleContext;
	}
    public get ruleIndex(): number {
    	return IbaLanguageParser.RULE_program;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
}


export class RuleContext extends ParserRuleContext {
	constructor(parser?: IbaLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public TERMINATOR(): TerminalNode {
		return this.getToken(IbaLanguageParser.TERMINATOR, 0);
	}
    public get ruleIndex(): number {
    	return IbaLanguageParser.RULE_rule;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterRule) {
	 		listener.enterRule(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitRule) {
	 		listener.exitRule(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: IbaLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return IbaLanguageParser.RULE_expression;
	}
	public override copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterLiteralExp) {
	 		listener.enterLiteralExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitLiteralExp) {
	 		listener.exitLiteralExp(this);
		}
	}
}
export class FunctionExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterFunctionExp) {
	 		listener.enterFunctionExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitFunctionExp) {
	 		listener.exitFunctionExp(this);
		}
	}
}
export class ParenthesisExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IbaLanguageParser.LPAREN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IbaLanguageParser.RPAREN, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterParenthesisExp) {
	 		listener.enterParenthesisExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitParenthesisExp) {
	 		listener.exitParenthesisExp(this);
		}
	}
}
export class EqualityExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterEqualityExp) {
	 		listener.enterEqualityExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitEqualityExp) {
	 		listener.exitEqualityExp(this);
		}
	}
}
export class VariableExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIABLE(): TerminalNode {
		return this.getToken(IbaLanguageParser.VARIABLE, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterVariableExp) {
	 		listener.enterVariableExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitVariableExp) {
	 		listener.exitVariableExp(this);
		}
	}
}
export class ComparisonExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterComparisonExp) {
	 		listener.enterComparisonExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitComparisonExp) {
	 		listener.exitComparisonExp(this);
		}
	}
}
export class MulDivExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterMulDivExp) {
	 		listener.enterMulDivExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitMulDivExp) {
	 		listener.exitMulDivExp(this);
		}
	}
}
export class AddSubExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterAddSubExp) {
	 		listener.enterAddSubExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitAddSubExp) {
	 		listener.exitAddSubExp(this);
		}
	}
}
export class PowerExpContext extends ExpressionContext {
	constructor(parser: IbaLanguageParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterPowerExp) {
	 		listener.enterPowerExp(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitPowerExp) {
	 		listener.exitPowerExp(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: IbaLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KEYWORD(): TerminalNode {
		return this.getToken(IbaLanguageParser.KEYWORD, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IbaLanguageParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IbaLanguageParser.RPAREN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return IbaLanguageParser.RULE_functionCall;
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: IbaLanguageParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return IbaLanguageParser.RULE_literal;
	}
	public override copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleQuotedStringLiteralContext extends LiteralContext {
	constructor(parser: IbaLanguageParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SINGLE_QUOTED_STRING(): TerminalNode {
		return this.getToken(IbaLanguageParser.SINGLE_QUOTED_STRING, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterSingleQuotedStringLiteral) {
	 		listener.enterSingleQuotedStringLiteral(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitSingleQuotedStringLiteral) {
	 		listener.exitSingleQuotedStringLiteral(this);
		}
	}
}
export class FloatLiteralContext extends LiteralContext {
	constructor(parser: IbaLanguageParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(IbaLanguageParser.FLOAT, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterFloatLiteral) {
	 		listener.enterFloatLiteral(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitFloatLiteral) {
	 		listener.exitFloatLiteral(this);
		}
	}
}
export class DoubleQuotedStringLiteralContext extends LiteralContext {
	constructor(parser: IbaLanguageParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOUBLE_QUOTED_STRING(): TerminalNode {
		return this.getToken(IbaLanguageParser.DOUBLE_QUOTED_STRING, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterDoubleQuotedStringLiteral) {
	 		listener.enterDoubleQuotedStringLiteral(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitDoubleQuotedStringLiteral) {
	 		listener.exitDoubleQuotedStringLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends LiteralContext {
	constructor(parser: IbaLanguageParser, ctx: LiteralContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(IbaLanguageParser.INTEGER, 0);
	}
	public enterRule(listener: IbaLanguageListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: IbaLanguageListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}
