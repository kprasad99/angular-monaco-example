export type BaseType = 'STRING' | 'INTEGER' | 'FLOAT' | 'BOOLEAN' | 'ANY' | 'UNKNOWN';

export interface FunctionMetadata {
  id: string;
  category: string;
  name: string;
  formula: string;
  description: string;
  returnType: string;
}

export interface FunctionArg {
  name: string;
  type: BaseType | BaseType[];
  required: boolean;
  defaultValue?: any;
  enum?: any[];
}

export interface FunctionDefinition {
  name: string;
  returnType: BaseType // | ((argTypes: BaseType[]) => BaseType);
  minArgs?: number
  maxArgs?: number;
  overloads?: FunctionDefinition[];
  args?: FunctionArg[];
  info?: FunctionMetadata;
}
