grammar IbaLanguage;

/*
 * Parser Rules
 */

options { tokenVocab = IbaLanguageLexer; }

program: rule+ EOF;

rule: expression TERMINATOR;

expression
    : '(' expression ')'                                         #ParenthesisExp
    | expression ('*' | '/') expression                          #MulDivExp
    | expression ('+' | '-') expression                          #AddSubExp
    | expression ('>' | '<' | '>=' | '<=' | '<>') expression     #ComparisonExp
    | expression '=' expression                                  #EqualityExp
    | <assoc=right> expression '^' expression                    #PowerExp
    | functionCall                                               #FunctionExp
    | VARIABLE                                                   #VariableExp
    | literal                                                    #LiteralExp
    ;

functionCall: KEYWORD '(' (expression (',' expression)*)? ')';

literal
    : FLOAT                                    #FloatLiteral
    | INTEGER                                  #IntegerLiteral
    | SINGLE_QUOTED_STRING                     #SingleQuotedStringLiteral
    | DOUBLE_QUOTED_STRING                     #DoubleQuotedStringLiteral;

/*
 * Lexer Rules
 */

KEYWORD:
    'AND' | 'OR' | 'NOT' | 
    'Add' | 'Subtract' | 'Multiply' | 'Divide' | 
    'Greater' | 'Less' | 'Equal' | 'Mod' | 
    'Min' | 'Max' | 'ConcatText' | 'ReplaceText' | 'TrimText';

VARIABLE: '[' .*? ']';

SINGLE_QUOTED_STRING: '\'' ( ~['\\] | '\\'. )* '\'';
DOUBLE_QUOTED_STRING: '"' ( ~["\\] | '\\'. )* '"';

FLOAT: [0-9]+ '.' [0-9]*;
INTEGER: [0-9]+;

OPERATOR: '=' | '>' | '<' | '>=' | '<=' | '<>' | '+' | '-' | '*' | '/' | ',';

LBRACKET: '[';
RBRACKET: ']';
LPAREN: '(';
RPAREN: ')';

TERMINATOR: '\r'? '\n';

WS: [ \t]+ -> skip;