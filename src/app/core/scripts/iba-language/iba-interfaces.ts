type BaseType = 'STRING' | 'INTEGER' | 'FLOAT' | 'BOOLEAN' | 'ANY';

type TypeConstraint = BaseType | BaseType[];

type IbaType = string;

export interface FunctionInfo {
  id: string;
  category: string;
  name: string;
  formula: string;
  description: string;
  returnType: IbaType;
}

export interface FunctionArg {
  name: string;
  type: TypeConstraint;
  required: boolean;
  defaultValue?: any;
  enum?: any[];
}

export interface FunctionDefinition {
  name: string;
  returnType: BaseType | ((argTypes: BaseType[]) => BaseType);
  minArgs?: number; // Minimum number of arguments (optional)
  maxArgs?: number; // Maximum number of arguments (optional)
  overloads?: FunctionDefinition[]; // Overloaded functions (optional)
  args?: FunctionArg[];
  info?: FunctionInfo;
}
