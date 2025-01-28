export interface FunctionDefinition {
  name: string; // Function name
  returnType: string; // Return type (e.g., 'FLOAT', 'INTEGER', etc.)
  minArgs?: number; // Minimum number of arguments (optional)
  maxArgs?: number; // Maximum number of arguments (optional)
  defaultArgs?: {
    // Default arguments, if any
    name: string; // Placeholder name for the argument
    type: string | string[]; // Argument type(s) - can be one type or multiple types
  }[];
}
