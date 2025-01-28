// Generated from IbaLanguage.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./IbaLanguageParser.js";
import { RuleContext } from "./IbaLanguageParser.js";
import { LiteralExpContext } from "./IbaLanguageParser.js";
import { FunctionExpContext } from "./IbaLanguageParser.js";
import { ParenthesisExpContext } from "./IbaLanguageParser.js";
import { EqualityExpContext } from "./IbaLanguageParser.js";
import { VariableExpContext } from "./IbaLanguageParser.js";
import { ComparisonExpContext } from "./IbaLanguageParser.js";
import { MulDivExpContext } from "./IbaLanguageParser.js";
import { AddSubExpContext } from "./IbaLanguageParser.js";
import { PowerExpContext } from "./IbaLanguageParser.js";
import { FunctionCallContext } from "./IbaLanguageParser.js";
import { FloatLiteralContext } from "./IbaLanguageParser.js";
import { IntegerLiteralContext } from "./IbaLanguageParser.js";
import { SingleQuotedStringLiteralContext } from "./IbaLanguageParser.js";
import { DoubleQuotedStringLiteralContext } from "./IbaLanguageParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `IbaLanguageParser`.
 */
export default class IbaLanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `IbaLanguageParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `IbaLanguageParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `IbaLanguageParser.rule`.
	 * @param ctx the parse tree
	 */
	enterRule?: (ctx: RuleContext) => void;
	/**
	 * Exit a parse tree produced by `IbaLanguageParser.rule`.
	 * @param ctx the parse tree
	 */
	exitRule?: (ctx: RuleContext) => void;
	/**
	 * Enter a parse tree produced by the `LiteralExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExp?: (ctx: LiteralExpContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExp?: (ctx: LiteralExpContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionExp?: (ctx: FunctionExpContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionExp?: (ctx: FunctionExpContext) => void;
	/**
	 * Enter a parse tree produced by the `ParenthesisExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExp?: (ctx: ParenthesisExpContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesisExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExp?: (ctx: ParenthesisExpContext) => void;
	/**
	 * Enter a parse tree produced by the `EqualityExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExp?: (ctx: EqualityExpContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExp?: (ctx: EqualityExpContext) => void;
	/**
	 * Enter a parse tree produced by the `VariableExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVariableExp?: (ctx: VariableExpContext) => void;
	/**
	 * Exit a parse tree produced by the `VariableExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVariableExp?: (ctx: VariableExpContext) => void;
	/**
	 * Enter a parse tree produced by the `ComparisonExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparisonExp?: (ctx: ComparisonExpContext) => void;
	/**
	 * Exit a parse tree produced by the `ComparisonExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparisonExp?: (ctx: ComparisonExpContext) => void;
	/**
	 * Enter a parse tree produced by the `MulDivExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulDivExp?: (ctx: MulDivExpContext) => void;
	/**
	 * Exit a parse tree produced by the `MulDivExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulDivExp?: (ctx: MulDivExpContext) => void;
	/**
	 * Enter a parse tree produced by the `AddSubExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddSubExp?: (ctx: AddSubExpContext) => void;
	/**
	 * Exit a parse tree produced by the `AddSubExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddSubExp?: (ctx: AddSubExpContext) => void;
	/**
	 * Enter a parse tree produced by the `PowerExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExp?: (ctx: PowerExpContext) => void;
	/**
	 * Exit a parse tree produced by the `PowerExp`
	 * labeled alternative in `IbaLanguageParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExp?: (ctx: PowerExpContext) => void;
	/**
	 * Enter a parse tree produced by `IbaLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `IbaLanguageParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by the `FloatLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `FloatLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `SingleQuotedStringLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	enterSingleQuotedStringLiteral?: (ctx: SingleQuotedStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `SingleQuotedStringLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	exitSingleQuotedStringLiteral?: (ctx: SingleQuotedStringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `DoubleQuotedStringLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	enterDoubleQuotedStringLiteral?: (ctx: DoubleQuotedStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `DoubleQuotedStringLiteral`
	 * labeled alternative in `IbaLanguageParser.literal`.
	 * @param ctx the parse tree
	 */
	exitDoubleQuotedStringLiteral?: (ctx: DoubleQuotedStringLiteralContext) => void;
}

