import * as monaco from 'monaco-editor';

const keywordColor = '800080'; // Keywords: Purple
const variableColor = 'FFA500'; // Variables: Orange
const stringColor = 'FF0000'; // Strings: Red
const numberColor = '008000'; // Numbers: Green
const operatorColor = '000000'; // Operators: Black
const delimiterColor = '6A737D'; // Delimiters: Gray (neutral)
const terminatorColor = '959DA5'; // Line Terminators: Light gray
const wsColor = 'FFFFFF'; // Whitespace: Invisible (matches background)
const functionColor = '0000FF'; // Functions: Blue

export const ibaLanguageTheme: monaco.editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  colors: {},
  rules: [
    // Boolean Operators (Logical & Bitwise)
    { token: 'boolean_operator.iba', foreground: keywordColor, fontStyle: 'bold' },

    // Variables
    { token: 'variable.iba', foreground: variableColor, fontStyle: 'italic' }, // Matches VARIABLE token

    // Strings (Merged Single & Double Quoted)
    { token: 'string.iba', foreground: stringColor }, // Matches STRING token

    // Numbers
    { token: 'float.iba', foreground: numberColor }, // FLOAT
    { token: 'integer.iba', foreground: numberColor }, // INTEGER

    // Operators
    { token: 'operator.iba', foreground: operatorColor }, // '=', '+', '-', '*', '/', '^', '<', '>', '<=', '>='

    // Functions (Recognized at runtime)
    { token: 'identifier.iba', foreground: functionColor, fontStyle: 'italic' }, // Matches IDENTIFIER token (e.g., True(), False(), custom functions)

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
