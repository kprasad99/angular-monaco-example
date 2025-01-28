import * as monaco from 'monaco-editor';

const keywordColor = '800080'; // Keywords: Purple
const variableColor = 'FFA500'; // Variables: Orange
const stringColor = 'FF0000'; // Strings: Red
const numberColor = '008000'; // Numbers: Green
const operatorColor = '000000'; // Operators: Black
const delimiterColor = '6A737D'; // Delimiters: Gray (neutral)
const terminatorColor = '959DA5'; // Line Terminators: Light gray
const wsColor = 'FFFFFF'; // Whitespace: Invisible (matches background)

export const ibaLanguageTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  colors: {},
  rules: [
    // Keywords
    { token: 'keyword.iba', foreground: keywordColor, fontStyle: 'bold' }, // e.g., 'AND', 'OR', 'NOT', etc.

    // Variables
    { token: 'variable.iba', foreground: variableColor, fontStyle: 'italic' }, // e.g., '[variable]'

    // Strings
    { token: 'single_quoted_string.iba', foreground: stringColor }, // SINGLE_QUOTED_STRING
    { token: 'double_quoted_string.iba', foreground: stringColor }, // DOUBLE_QUOTED_STRING

    // Numbers
    { token: 'float.iba', foreground: numberColor }, // FLOAT
    { token: 'integer.iba', foreground: numberColor }, // INTEGER

    // Operators
    { token: 'operator.iba', foreground: operatorColor }, // '=', '+', '-', '*', '/', etc.

    // Brackets
    { token: 'lbracket.iba', foreground: delimiterColor }, // '['
    { token: 'rbracket.iba', foreground: delimiterColor }, // ']'

    // Parentheses
    { token: 'lparen.iba', foreground: delimiterColor }, // '('
    { token: 'rparen.iba', foreground: delimiterColor }, // ')'

    // Line Terminators
    { token: 'terminator.iba', foreground: terminatorColor }, // '\n' or '\r\n'

    // Whitespace (not visible)
    { token: 'ws.iba', foreground: wsColor } // Whitespace (skipped)
  ]
};
