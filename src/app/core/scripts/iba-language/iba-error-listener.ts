import { ErrorListener, RecognitionException, Recognizer } from "antlr4";

export class IbaErrorListener implements ErrorListener<any> {
  private errorStack: string[] = [];

  syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    let errorMessage = `Syntax error at line ${line}, col ${column}: ${msg}`;
    if (msg.includes("missing TERMINATOR")) {
      return;
    }
    if (msg.includes("mismatched input")) {
      errorMessage = `Syntax error at line ${line}, col ${column}: unexpected character '${offendingSymbol.text}'`;
    }
    this.errorStack.push(errorMessage);
  }

  getErrors(): string[] {
    return this.errorStack;
  }
}
