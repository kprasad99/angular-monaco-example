import { FunctionDefinition } from "./iba-interfaces";

export const ibaFunctions: { [key: string]: FunctionDefinition } = {
  Add: {
    name: 'Add',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    defaultArgs: [
      { name: 'a', type: ['INTEGER', 'FLOAT'] },
      { name: 'b', type: ['INTEGER', 'FLOAT'] }
    ]
  },
  ConcatText: {
    name: 'ConcatText',
    returnType: 'STRING',
    minArgs: 2,
    maxArgs: undefined, // Unlimited arguments
    defaultArgs: [
      { name: 'separator', type: ['STRING'] } // 'separator' is a default argument
    ]
  },
  Max: {
    name: 'Max',
    returnType: 'NUMBER',
    minArgs: 1,
    maxArgs: undefined, // Unlimited arguments
    defaultArgs: [] // No default arguments for 'Max'
  },
  TrimText: {
    name: 'TrimText',
    returnType: 'STRING',
    minArgs: 1,
    maxArgs: 2,
    defaultArgs: [
      { name: 'trimChars', type: ['STRING'] } // 'trimChars' is an optional argument with a default type
    ]
  }
  // Add more predefined functions as needed
};
