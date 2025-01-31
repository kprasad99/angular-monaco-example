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
    | expression BOOLEAN_OPERATOR expression                     #BooleanExp
    | BOOLEAN_OPERATOR expression                                #NotExp
    | functionCall                                               #FunctionExp
    | VARIABLE                                                   #VariableExp
    | literal                                                    #LiteralExp
    ;

functionCall: IDENTIFIER '(' (expression (',' expression)*)? ')';

literal
    : FLOAT                 #FloatLiteral
    | INTEGER               #IntegerLiteral
    | STRING                #StringLiteral;

/*
 * Lexer Rules
 */

BOOLEAN_OPERATOR: 'AND' | 'OR' | 'NOT' | 'XOR' | 'bw_AND' | 'bw_OR' | 'bw_XOR';

VARIABLE: '[' ~']'* ']';

STRING: '\'' ( ~['\\] | '\\'. )* '\'' | '"' ( ~["\\] | '\\'. )* '"';

FLOAT: [0-9]+ '.' [0-9]*;
INTEGER: [0-9]+;

OPERATOR: '=' | '>' | '<' | '>=' | '<=' | '<>' | '+' | '-' | '*' | '/' | ',';

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

LBRACKET: '[';
RBRACKET: ']';
LPAREN: '(';
RPAREN: ')';

TERMINATOR: '\r'? '\n';

WS: [ \t]+ -> skip;