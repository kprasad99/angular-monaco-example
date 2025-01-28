import IbaLanguageListener from '../antlr/IbaLanguageListener';
import IbaLanguageParser, {
  AddSubExpContext,
  ComparisonExpContext,
  EqualityExpContext,
  ExpressionContext,
  FunctionExpContext,
  LiteralExpContext,
  MulDivExpContext,
  ParenthesisExpContext,
  PowerExpContext,
  ProgramContext
} from '../antlr/IbaLanguageParser';
import { ibaFunctions } from './iba-functions';

export function createTypeChecker(): IbaLanguageListener {
  const typechecker = new TypeCheckingListener();
  return typechecker;
}

class TypeCheckingListener implements IbaLanguageListener {
  private typeStack: string[] = [];
  private predefinedFunctions = ibaFunctions;

  enterProgram(ctx: ProgramContext): void {
    // console.log("Entering program...");
  }

  exitProgram(ctx: ProgramContext): void {
    console.log('Type Stack:', this.typeStack);
  }

  enterFunctionExp(ctx: FunctionExpContext): void {
    const functionName = ctx.functionCall().KEYWORD().getText();
    const funcDef = this.predefinedFunctions[functionName];

    if (!funcDef) {
      console.error(`Error: Undefined function "${functionName}"`);
      return;
    }

    const providedArgs = ctx.functionCall().expression_list();

    // Validate argument types
    providedArgs.forEach((argCtx, index) => {
      const actualType = this.getExpressionType(argCtx);
      const expectedType = funcDef.defaultArgs?.[index]?.type;

      if (expectedType) {
        const isValid = Array.isArray(expectedType) ? expectedType.includes(actualType) : expectedType === actualType;

        if (!isValid) {
          console.error(
            `Error: Argument ${
              index + 1
            } of function "${functionName}" expects type "${expectedType}", but got "${actualType}"`
          );
        }
      }
    });

    // Push return type to the stack
    this.typeStack.push(funcDef.returnType);
  }

  exitFunctionExp(ctx: FunctionExpContext): void {
    const functionName = ctx.functionCall().KEYWORD().getText();
    const funcDef = this.predefinedFunctions[functionName];

    const providedArgs = ctx.functionCall().expression_list();
    const argCount = providedArgs.length;

    // Check argument count
    if (funcDef.minArgs !== undefined && argCount < funcDef.minArgs) {
      console.error(
        `Error: Function "${functionName}" expects at least ${funcDef.minArgs} arguments, but got ${argCount}`
      );
    }

    if (funcDef.maxArgs !== undefined && argCount > funcDef.maxArgs) {
      console.error(
        `Error: Function "${functionName}" expects at most ${funcDef.maxArgs} arguments, but got ${argCount}`
      );
    }
  }

  // Process literal expressions
  enterLiteralExp(ctx: LiteralExpContext): void {
    const literal = ctx.literal().getText();
    let type: string;

    if (/^\d+\.\d+$/.test(literal)) {
      type = 'FLOAT';
    } else if (/^\d+$/.test(literal)) {
      type = 'INTEGER';
    } else if (/^'.*'$/.test(literal) || /^".*"$/.test(literal)) {
      type = 'STRING';
    } else {
      console.error(`Error: Unknown literal type for "${literal}"`);
      return;
    }

    this.typeStack.push(type);
  }

  exitLiteralExp(ctx: LiteralExpContext): void {
    // console.log("Exiting literal expression...");
  }

  // Helper function to get expression type
  getExpressionType(ctx: LiteralExpContext | ExpressionContext | FunctionExpContext | ParenthesisExpContext): string {
    // Handle literal expressions
    if (ctx instanceof LiteralExpContext) {
      return ctx.parser?.getSymbolicNames()[ctx.start.type] || 'UNKNOWN';
    }

    // Handle function expressions
    if (ctx instanceof FunctionExpContext) {
      const functionName = ctx.functionCall().KEYWORD().getText();
      const funcDef = this.predefinedFunctions[functionName];
      if (!funcDef) {
        console.error(`Error: Undefined function "${functionName}"`);
        return 'UNKNOWN';
      }
      return funcDef.returnType;
    }

    // Handle parenthesized expressions (recursively resolve the type inside the parentheses)
    if (ctx instanceof ParenthesisExpContext) {
      const childCtx = ctx.expression(); // This should return the inner expression (1 + 2)
      if (childCtx) {
        return this.getExpressionType(childCtx);
      }
    }

    // Handle other expressions (recursively resolve the child expression)
    if (ctx instanceof ExpressionContext) {
      const childCtx = ctx.getChild(0); // Assuming it's a single expression node
      if (childCtx) {
        return this.getExpressionType(childCtx as any);
      }
    }

    // Default return value
    console.error('Error: Unsupported context type for getExpressionType.');
    return 'UNKNOWN';
  }

  visitTerminal(node: any): void {
    // Implementation for visitTerminal
  }

  visitErrorNode(node: any): void {
    // Implementation for visitErrorNode
  }

  enterEveryRule(ctx: any): void {
    // Implementation for enterEveryRule
  }

  exitEveryRule(ctx: any): void {
    // Implementation for exitEveryRule
  }

  exitEqualityExp(ctx: EqualityExpContext): void {
    if (this.typeStack.length < 2) {
      console.error('Error: Not enough operands for equality operation.');
      return;
    }

    const rightType = this.typeStack.pop()!;
    const leftType = this.typeStack.pop()!;

    if (['INTEGER', 'FLOAT'].includes(leftType) && ['INTEGER', 'FLOAT'].includes(rightType)) {
      this.typeStack.push('BOOLEAN');
    } else if (leftType === 'STRING' && rightType === 'STRING') {
      this.typeStack.push('BOOLEAN');
    } else {
      console.error(`Error: Unsupported operand types for '=' or '<>': ${leftType}, ${rightType}`);
      this.typeStack.push('UNKNOWN');
    }
  }

  exitComparisonExp(ctx: ComparisonExpContext): void {
    if (this.typeStack.length < 2) {
      console.error('Error: Not enough operands for comparison operation.');
      return;
    }

    const rightType = this.typeStack.pop()!;
    const leftType = this.typeStack.pop()!;

    if (['INTEGER', 'FLOAT'].includes(leftType) && ['INTEGER', 'FLOAT'].includes(rightType)) {
      this.typeStack.push('BOOLEAN');
    } else if (leftType === 'STRING' && rightType === 'STRING') {
      this.typeStack.push('BOOLEAN');
    } else {
      console.error(
        `Error: Unsupported operand types for comparison ('>', '<', '>=', '<='): ${leftType}, ${rightType}`
      );
      this.typeStack.push('UNKNOWN');
    }
  }

  exitMulDivExp(ctx: MulDivExpContext): void {
    if (this.typeStack.length < 2) {
      console.error('Error: Not enough operands for multiplication/division.');
      return;
    }

    const rightType = this.typeStack.pop()!;
    const leftType = this.typeStack.pop()!;

    if (['INTEGER', 'FLOAT'].includes(leftType) && ['INTEGER', 'FLOAT'].includes(rightType)) {
      const resultType = leftType === 'FLOAT' || rightType === 'FLOAT' ? 'FLOAT' : 'INTEGER';
      this.typeStack.push(resultType);
    } else {
      console.error(`Error: Unsupported operand types for '*' or '/': ${leftType}, ${rightType}`);
      this.typeStack.push('UNKNOWN');
    }
  }

  exitAddSubExp(ctx: AddSubExpContext): void {
    if (this.typeStack.length < 2) {
      console.error('Error: Not enough operands for addition/subtraction.');
      return;
    }

    const rightType = this.typeStack.pop()!;
    const leftType = this.typeStack.pop()!;

    if (leftType === 'STRING' || rightType === 'STRING') {
      if (ctx.children?.[1]?.getText() === '+') {
        this.typeStack.push('STRING'); // Concatenation
      } else {
        console.error(`Error: Subtraction is not allowed with STRING types (left: ${leftType}, right: ${rightType})`);
        this.typeStack.push('UNKNOWN');
      }
    } else if (['INTEGER', 'FLOAT'].includes(leftType) && ['INTEGER', 'FLOAT'].includes(rightType)) {
      const resultType = leftType === 'FLOAT' || rightType === 'FLOAT' ? 'FLOAT' : 'INTEGER';
      this.typeStack.push(resultType);
    } else {
      console.error(`Error: Unsupported operand types for '+' or '-': ${leftType}, ${rightType}`);
      this.typeStack.push('UNKNOWN');
    }
  }

  exitPowerExp(ctx: PowerExpContext): void {
    if (this.typeStack.length < 2) {
      console.error('Error: Not enough operands for exponentiation.');
      return;
    }

    const rightType = this.typeStack.pop()!;
    const leftType = this.typeStack.pop()!;

    if (['INTEGER', 'FLOAT'].includes(leftType) && ['INTEGER', 'FLOAT'].includes(rightType)) {
      this.typeStack.push('FLOAT'); // Result is always FLOAT for exponentiation
    } else {
      console.error(`Error: Unsupported operand types for '^': ${leftType}, ${rightType}`);
      this.typeStack.push('UNKNOWN');
    }
  }
}
