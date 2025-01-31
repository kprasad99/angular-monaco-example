import { FunctionDefinition } from './iba-interfaces';

export const ibaFunctions: { [key: string]: FunctionDefinition } = {
  Abs: {
    name: 'Abs',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 1,
    args: [{ name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true }],
    info: {
      id: '11',
      category: 'Math',
      name: 'Abs',
      formula: 'Abs(Expression)',
      description: 'Returns the absolute value of the given expression.',
      returnType: 'Analog'
    }
  },
  Acos: {
    name: 'Acos',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [{ name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true }],
    info: {
      id: '12',
      category: 'Trigonometric',
      name: 'Acos',
      formula: "Acos('Expression')",
      description: "Returns the arccosine of 'Expression'.",
      returnType: 'Analog'
    }
  },
  Add: {
    name: 'Add',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 3,
    args: [
      { name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true },
      { name: 'Enable', type: ['BOOLEAN'], required: true },
      { name: 'Reset', type: ['BOOLEAN'], required: false, defaultValue: 'False()' }
    ],
    info: {
      id: '13',
      category: 'Math',
      name: 'Add',
      formula: "Add('Expression', 'Enable', 'Reset=0')",
      description:
        "When 'Enable' is 1, the value of 'Expression' is added to the current value. The current value is set to 0 when 'Reset' is 1. 'Reset' is optional.",
      returnType: 'Analog'
    }
  },
  AND: {
    name: 'AND',
    returnType: 'BOOLEAN',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '14',
      category: 'Logical',
      name: 'AND',
      formula: '',
      description: "Logical 'AND'",
      returnType: 'Digital'
    }
  },
  Asin: {
    name: 'Asin',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [{ name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true }],
    info: {
      id: '15',
      category: 'Trigonometric',
      name: 'Asin',
      formula: "Asin('Expression')",
      description: "Returns the arcsine of 'Expression'.",
      returnType: 'Analog'
    }
  },
  Atan: {
    name: 'Atan',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [{ name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true }],
    info: {
      id: '16',
      category: 'Trigonometric',
      name: 'Atan',
      formula: "Atan('Expression')",
      description: "Returns the arctangent of 'Expression'.",
      returnType: 'Analog'
    }
  },
  Avg: {
    name: 'Avg',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 2,
    args: [
      { name: 'Expression', type: ['INTEGER', 'FLOAT'], required: true },
      { name: 'Reset', type: ['BOOLEAN'], required: false, defaultValue: 'False()' }
    ],
    info: {
      id: '17',
      category: 'Statistics',
      name: 'Avg',
      formula: "Avg('Expression', 'Reset=0')",
      description:
        "Returns the average value of 'Expression'. When 'Reset' is TRUE then the calculation is reset and the result is equal to 'Expression'. 'Reset' is optional.",
      returnType: 'Analog'
    }
  },
  Avg2: {
    name: 'Avg2',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 1000,
    args: [
      { name: 'Expression1', type: ['INTEGER', 'FLOAT'], required: true },
      { name: 'Expression2', type: ['INTEGER', 'FLOAT'], required: true }
    ],
    info: {
      id: '18',
      category: 'Statistics',
      name: 'Avg2',
      formula: "Avg('Expression1', 'Expression2', ...)",
      description: 'Returns the average value of all arguments.',
      returnType: 'Analog'
    }
  },
  AvgInTime: {
    name: 'AvgInTime',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: 'ANY', // Assuming expression can be of any type
        required: true
      },
      {
        name: 'Interval',
        type: 'FLOAT', // Assuming interval is a float number
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER', // Reset is an integer (0, 1, 2, or 3)
        required: false,
        defaultValue: 0,
        enum: [0, 1, 2, 3]
      }
    ],
    info: {
      id: '19',
      category: 'Statistics',
      name: 'AvgInTime',
      formula: "AvgInTime('Expression', 'Interval', 'Reset=0')",
      description:
        "Returns the average value of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation:\n'Reset' = 0: Do calculation\n'Reset' = 1: Stop calculation, delete all buffered data and set the result to 0\n'Reset' = 2: Stop calculation, delete all buffered data and keep the result\n'Reset' = 3: Calculate now and then stop calculation",
      returnType: 'Analog'
    }
  },
  BP: {
    name: 'BP',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: 'ANY', // Assuming expression can be of any type
        required: true
      },
      {
        name: 'Frequency1',
        type: 'FLOAT', // Assuming frequency is a float
        required: true
      },
      {
        name: 'Frequency2',
        type: 'FLOAT', // Assuming frequency is a float
        required: true
      }
    ],
    info: {
      id: '20',
      category: 'Filters',
      name: 'BP',
      formula: "BP('Expression', 'Frequency1*', 'Frequency2*')",
      description:
        "Apply a bandpass filter with pass band between frequencies 'Frequency1' and 'Frequency2' to 'Expression'. The filter is a second order Butterworth filter.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  /* bw_AND: {
    name: "bw_AND",
    returnType: "BOOLEAN", // Assuming this function returns a boolean result (bitwise AND)
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: "21",
      category: "Logical",
      name: "bw_AND",
      formula: "",
      description: "bitwise AND",
      returnType: "Analog" // This remains as per the function description, but the returnType in FunctionDefinition is now 'BOOLEAN'
    }
  }, */
  bw_NOT: {
    name: 'bw_NOT',
    returnType: 'BOOLEAN', // Assuming this function returns a boolean result (bitwise NOT)
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'ANY', // Assuming the expression can be of any type
        required: true
      }
    ],
    info: {
      id: '22',
      category: 'Logical',
      name: 'bw_NOT',
      formula: "bw_NOT('Expression')",
      description: 'bitwise NOT',
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'BOOLEAN'
    }
  },
  /* bw_OR: {
    name: "bw_OR",
    returnType: "BOOLEAN", // Assuming this function returns a boolean result (bitwise OR)
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: "23",
      category: "Logical",
      name: "bw_OR",
      formula: "",
      description: "bitwise OR",
      returnType: "Analog" // This remains as per the function description, but the returnType in FunctionDefinition is now 'BOOLEAN'
    }
  }, */
  /* bw_XOR: {
    name: "bw_XOR",
    returnType: "BOOLEAN", // Assuming this function returns a boolean result (bitwise XOR)
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: "24",
      category: "Logical",
      name: "bw_XOR",
      formula: "",
      description: "bitwise XOR",
      returnType: "Analog" // This remains as per the function description, but the returnType in FunctionDefinition is now 'BOOLEAN'
    }
  }, */
  CameraStatus: {
    name: 'CameraStatus',
    returnType: 'INTEGER', // Assuming the return type is an integer based on the status codes (0 = camera not ok, 1 = camera ok)
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'ModuleNo',
        type: 'INTEGER', // Assuming ModuleNo is an integer
        required: true
      },
      {
        name: 'SignalNo',
        type: 'INTEGER', // Assuming SignalNo is an integer
        required: true
      },
      {
        name: 'Timeout',
        type: 'FLOAT', // Timeout is likely a floating-point number
        required: false,
        defaultValue: 2
      }
    ],
    info: {
      id: '25',
      category: 'Diagnose',
      name: 'CameraStatus',
      formula: "CameraStatus('ModuleNo*', 'SignalNo*', 'Timeout*=2')",
      description:
        "This function returns the status of an ibaCapture camera:\n0 = camera not ok\n1 = camera ok\nA camera is not ok when the camera sync signal doesn't change its value within 'Timeout' seconds.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  Ceiling: {
    name: 'Ceiling',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'], // Assuming Expression is a float or integer
        required: true
      }
    ],
    info: {
      id: '26',
      category: 'Math',
      name: 'Ceiling',
      formula: "Ceiling('Expression')",
      description: "Returns the smallest integral value that is greater than or equal to 'Expression'",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  CharValue: {
    name: 'CharValue',
    returnType: 'INTEGER', // Assuming the return type is an integer (ASCII value)
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Text',
        type: 'STRING', // Text is likely a string
        required: true
      },
      {
        name: 'CharNumber',
        type: 'INTEGER', // CharNumber is likely an integer
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '27',
      category: 'Text',
      name: 'CharValue',
      formula: "CharValue('Text', 'CharNumber=0')",
      description: "Returns the ASCII value of the character at position 'CharNumber' in 'Text'.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  ClientInfo: {
    name: 'ClientInfo',
    returnType: 'INTEGER', // Assuming the return type is an integer based on the returned values (1 or 0)
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'ClientAddress',
        type: 'STRING', // ClientAddress is a string (could be IP address or PC name)
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER', // InfoType is an integer determining what information is returned
        required: true
      }
    ],
    info: {
      id: '28',
      category: 'Miscellaneous',
      name: 'ClientInfo',
      formula: "ClientInfo('ClientAddress*', 'InfoType*')",
      description:
        "Returns information about the client determined by 'ClientAddress'. This parameter can be the PC's IP address or the PC's name (case insensitive). 'InfoType' determines what information is returned:\n0: Returns 1 if the client is connected, else returns 0\n1: Returns the number of signals requested by the client\n2: Returns 1 if the client uses a client license, else returns 0\n3: Returns 1 if the client uses a QPanel license, else returns 0\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  ClientInfoText: {
    name: 'ClientInfoText',
    returnType: 'STRING', // Assuming the return type is a string (text information about the client)
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'ClientAddress',
        type: 'STRING', // ClientAddress is a string (could be IP address or PC name)
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER', // InfoType is an integer determining what information is returned
        required: true
      }
    ],
    info: {
      id: '29',
      category: 'Miscellaneous',
      name: 'ClientInfoText',
      formula: "ClientInfoText('ClientAddress*', 'InfoType*')",
      description:
        "Returns information about the client determined by 'ClientAddress'. This parameter can be the PC's IP address or the PC's name (case insensitive). 'InfoType' determines what information is returned:\n0: Returns the PC name of the client\n1: Returns the IP address of the client\n2: Returns Windows user name of the client\n3: Returns the ibaPDA user name of the client\n4: Returns the connection start time of the client\n5: Returns the version of the client\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Text' // This remains as per the function description, but the returnType in FunctionDefinition is now 'STRING'
    }
  },
  CompareText: {
    name: 'CompareText',
    returnType: 'INTEGER', // Assuming the return type is an integer (1, 0, or -1 for comparison results)
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Text1',
        type: 'STRING', // Text1 is a string
        required: true
      },
      {
        name: 'Text2',
        type: 'STRING', // Text2 is a string
        required: true
      },
      {
        name: 'CaseSensitive',
        type: 'INTEGER', // CaseSensitive is an integer (0 or 1)
        required: false,
        defaultValue: 1
      }
    ],
    info: {
      id: '30',
      category: 'Text',
      name: 'CompareText',
      formula: "CompareText('Text1', 'Text2', 'CaseSensitive*=1')",
      description:
        "Compares two texts 'Text1' and 'Text2' alphabetically:\n= 1 when 'Text1' > 'Text2'\n= 0 when 'Text1' = 'Text2'\n= -1 when 'Text1' < 'Text2'\nThe comparison is case sensitive when 'CaseSensitive' is not 0.\nIn case you want to use double quotes in constant texts then write two double quotes after each other.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  ConcatText: {
    name: 'ConcatText',
    returnType: 'STRING', // Assuming the return type is a string (concatenated text)
    minArgs: 2,
    maxArgs: 1000,
    args: [
      {
        name: 'Text1',
        type: 'STRING', // Text1 is a string
        required: true
      },
      {
        name: 'Text2',
        type: 'STRING', // Text2 is a string
        required: true
      }
      // Additional args can be added dynamically based on the number of text arguments
    ],
    info: {
      id: '31',
      category: 'Text',
      name: 'ConcatText',
      formula: "ConcatText('Text1', 'Text2', ...)",
      description:
        "The result of the function is the concatenation of 'Text1', 'Text2' and so on.\nIn case you want to use double quotes in constant texts then write two double quotes after each other.",
      returnType: 'Text' // This remains as per the function description, but the returnType in FunctionDefinition is now 'STRING'
    }
  },
  ConvertFromText: {
    name: 'ConvertFromText',
    returnType: 'FLOAT', // Assuming the return type is a floating-point number
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: 'STRING', // Expression is a string
        required: true
      },
      {
        name: 'DecimalPoint',
        type: 'INTEGER', // DecimalPoint is an integer (0 for point, 1 for comma)
        required: false,
        defaultValue: 0
      },
      {
        name: 'Begin',
        type: 'INTEGER', // Begin is an integer (position to start parsing)
        required: false,
        defaultValue: 0
      },
      {
        name: 'End',
        type: 'INTEGER', // End is an integer (position to stop parsing, or end of text)
        required: false,
        defaultValue: -1 // Default to end of text
      }
    ],
    info: {
      id: '32',
      category: 'Text',
      name: 'ConvertFromText',
      formula: "ConvertFromText('Expression', 'DecimalPoint*=0', 'Begin=0', 'End=-1 (end of text)')",
      description:
        "Parses a floating-point number from a text. Instead of the complete text only a part of the text can be parsed by using the 'Begin' and 'End' parameters. The 'DecimalPoint' parameter determines what is used as decimal point character:\n'DecimalPoint' = 0: Point\n'DecimalPoint' = 1: Comma\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'FLOAT'
    }
  },
  ConvertToText: {
    name: 'ConvertToText',
    returnType: 'STRING', // Assuming the return type is a string (text representation of the number)
    minArgs: 1,
    maxArgs: 5,
    args: [
      {
        name: 'Expression',
        type: 'FLOAT', // Expression is a floating-point number
        required: true
      },
      {
        name: 'IntegerDigits',
        type: 'INTEGER', // IntegerDigits is an integer (number of digits before the decimal point)
        required: false,
        defaultValue: 1
      },
      {
        name: 'FractionalDigits',
        type: 'INTEGER', // FractionalDigits is an integer (number of digits after the decimal point)
        required: false,
        defaultValue: -6
      },
      {
        name: 'PlusSign',
        type: 'INTEGER', // PlusSign is an integer (determines the printing of the plus sign)
        required: false,
        defaultValue: 2
      },
      {
        name: 'DecimalPoint',
        type: 'INTEGER', // DecimalPoint is an integer (0 for point, 1 for comma)
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '33',
      category: 'Text',
      name: 'ConvertToText',
      formula:
        "ConvertToText('Expression', 'IntegerDigits*=1', 'FractionalDigits*=-6', 'PlusSign*=2', 'DecimalPoint*=0')",
      description:
        "Returns the text representation of a floating-point number. The minimum number of digits before the decimal point can be specified via the 'IntegerDigits' parameter. The number of digits after the decimal point can be specified via the 'FractionalDigits' parameter. If 'FractionalDigits' is smaller than zero then only non-zero digits are printed. If 'FractionalDigits' is larger than zero then zeros are printed. The 'PlusSign' parameter determines the printing of the plus sign. There are 3 options:\n'PlusSign' = 0: A space is printed.\n'PlusSign' = 1: + is printed.\n'PlusSign' = 2: Nothing is printed.\nThe 'DecimalPoint' parameter determines what is used as decimal point character:\n'DecimalPoint' = 0: Point\n'DecimalPoint' = 1: Comma\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Text' // This remains as per the function description, but the returnType in FunctionDefinition is now 'STRING'
    }
  },
  ConvertUnixTime: {
    name: 'ConvertUnixTime',
    returnType: 'INTEGER', // Assuming the return type is an integer (depending on the part of the time)
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'UnixTime',
        type: 'INTEGER', // UnixTime is an integer (number of seconds since 1970)
        required: true
      },
      {
        name: 'UnixTimelsUTC',
        type: 'INTEGER', // UnixTimelsUTC is an integer (0 for local time, 1 for UTC)
        required: false,
        defaultValue: 0
      },
      {
        name: 'Part',
        type: 'INTEGER', // Part is an integer (specifies the part of the time to return)
        required: false,
        defaultValue: 1 // Default to seconds
      },
      {
        name: 'UTC',
        type: 'INTEGER', // UTC is an integer (0 for local time, 1 for UTC)
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '34',
      category: 'Miscellaneous',
      name: 'ConvertUnixTime',
      formula: "ConvertUnixTime('UnixTime', 'UnixTimelsUTC*', 'Part*', 'UTC=0*')",
      description:
        "'UnixTime' is the number of seconds that have elapsed since 00:00:00 on 1 January 1970. 'UnixTimeIsUTC' specifies whether 'UnixTime' is a local time (=0) or a UTC time (=1). 'UTC' determines whether the input time needs to be converted to a local time (=0) or a UTC time (=1). This function returns a part of this time.\nPart = 0: milliseconds\nPart = 1: seconds\nPart = 2: minutes\nPart = 3: hour\nPart = 4: day of month\nPart = 5: month\nPart = 6: year\nPart = 7: day of year\nPart = 8: day of week (monday=1, sunday=7)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog' // This remains as per the function description, but the returnType in FunctionDefinition is now 'INTEGER'
    }
  },
  Cos: {
    name: 'Cos',
    returnType: 'FLOAT', // Assuming the return type is a floating-point number for cosine
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'FLOAT', // Assuming Expression is a float (angle in radians)
        required: true
      }
    ],
    info: {
      id: '36',
      category: 'Trigonometric',
      name: 'Cos',
      formula: "Cos('Expression')",
      description: "Returns the cosine of 'Expression'",
      returnType: 'Analog'
    }
  },
  Count: {
    name: 'Count',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 4,
    maxArgs: 5,
    args: [
      {
        name: 'Expression',
        type: 'ANY', // Assuming Expression can be of any type
        required: true
      },
      {
        name: 'Level',
        type: 'FLOAT', // Assuming Level is a floating-point number (threshold for crossings)
        required: true
      },
      {
        name: 'Hysteresis',
        type: 'FLOAT', // Assuming Hysteresis is a floating-point number (range around Level)
        required: true
      },
      {
        name: 'Edgetype',
        type: 'INTEGER', // Edgetype is an integer (defines rising, falling, or both edges)
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER', // Reset is an integer (0 or 1)
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '37',
      category: 'Miscellaneous',
      name: 'Count',
      formula: "Count('Expression', 'Level*', 'Hysteresis*', 'Edgetype*', 'Reset = 0')",
      description:
        "Counts the number of 'Level' crossings of 'Expression'.\nChanges in a range with size 'Hysteresis' around 'Level' are ignored.\n'EdgeType' determines which edges are counted :\n    value < 0 : only falling edges\n    value > 0 : only rising edges\n    value = 0 : both rising and falling edges.\nThe count is reset when 'Reset' is 1.\nParameters ending with * are only evaluated once at the start of the acquisition",
      returnType: 'Analog'
    }
  },
  CountText: {
    name: 'CountText',
    returnType: 'INTEGER', // Assuming the return type is an integer (count of text occurrences)
    minArgs: 1,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: 'STRING',
        required: true
      },
      {
        name: 'CountOnlyDifferent',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '38',
      category: 'Text',
      name: 'CountText',
      formula: "CountText('Expression', 'CountOnlyDifferent*=0', 'Reset=0')",
      description:
        "Counts the number of times there is a new text. When 'CountOnlyDifferent' is not zero then only a text that is different from the previous text is counted. The count is reset when 'Reset' is 1.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  CountUpDown: {
    name: 'CountUpDown',
    returnType: 'FLOAT',
    minArgs: 3,
    maxArgs: 6,
    args: [
      {
        name: 'Up',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Down',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'UpperLimit',
        type: 'FLOAT',
        required: false
      },
      {
        name: 'LowerLimit',
        type: 'FLOAT',
        required: false
      },
      {
        name: 'ResetOnLimit',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '39',
      category: 'Miscellaneous',
      name: 'CountUpDown',
      formula: "CountUpDown('Up', 'Down', 'Reset', 'UpperLimit=none', 'LowerLimit=none', 'ResetOnLimit=0')",
      description:
        "Counts up by 1 when there is a rising edge on 'Up'.\nCounts down by 1 when there is a rising edge on 'Down'.\nThe counter is reset when 'Reset' is 1.\nWhen 'UpperLimit' is defined then the counter will stop increasing when it has reached 'UpperLimit'.\nWhen 'LowerLimit' is defined then the counter will stop decreasing when it has reached 'LowerLimit'.\nWhen 'ResetOnLimit' is 1 and the counter reaches either 'UpperLimit' or 'LowerLimit' then the counter is reset to 0.",
      returnType: 'Analog'
    }
  },
  DataStoreInfo: {
    name: 'DataStoreInfo',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '40',
      category: 'Diagnose',
      name: 'DataStoreInfo',
      formula: "DataStoreInfo('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected data store.\n'DatastoreIndex' >= 0 : normal data store\n'DatastoreIndex' < 0 : ibaQDR data store\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Storing to backup directory:\n\t0=Base directory is used\n\t1=Backup directory is used\n2: Recorded time in the current file expressed in seconds\n3: The free space on the current disk expressed in MB\n4: Is ibaQDR synchronized?\n\t0=ibaQDR is NOT synchronized\n\t1=ibaQDR is synchronized\n5: Image triggers storing to backup directory:\n\t-1=No active or configured image triggers\n\t0=All image triggers are using the base directory\n\t1=All image triggers are using the backup directory\n\t2=Some image triggers are using the base directory and some are using the backup directory\n6: The number of overlapped files\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInfoDB: {
    name: 'DataStoreInfoDB',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '41',
      category: 'Diagnose',
      name: 'DataStoreInfoDB',
      formula: "DataStoreInfoDB('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected DB/Cloud data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n3: Recorded time since last start trigger expressed in seconds. This will be constant 0 for continuous recording.\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInfoHD: {
    name: 'DataStoreInfoHD',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '42',
      category: 'Diagnose',
      name: 'DataStoreInfoHD',
      formula: "DataStoreInfoHD('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected ibaHD data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Post trigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInflux: {
    name: 'DataStoreInflux',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '43',
      category: 'Diagnose',
      name: 'DataStoreInflux',
      formula: "DataStoreInflux('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected InfluxDB data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n3: Recorded time since last start trigger expressed in seconds. This will be constant 0 for continuous recording.\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInfoKafka: {
    name: 'DataStoreInfoKafka',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '44',
      category: 'Diagnose',
      name: 'DataStoreInfoKafka',
      formula: "DataStoreInfoKafka('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected Kafka data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n3: Recorded time since last start trigger expressed in seconds. This will be constant 0 for continuous recording.\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInfoMindSphere: {
    name: 'DataStoreInfoMindSphere',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '45',
      category: 'Diagnose',
      name: 'DataStoreInfoMindSphere',
      formula: "DataStoreInfoMindSphere('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected MindSphere data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n3: Recorded time since last start trigger expressed in seconds. This will be constant 0 for continuous recording.\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreInfoMQTT: {
    name: 'DataStoreInfoMQTT',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '46',
      category: 'Diagnose',
      name: 'DataStoreInfoMQTT',
      formula: "DataStoreInfoMQTT('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected MQTT data store.\n'DatastoreIndex' >= 0\nThe following info types are supported:\n0: Recording status:\n\t0=Stopped\n\t1=Waiting for trigger\n\t2=Recording\n\t3=Posttrigger recording\n1: Data throughput in KB/s\n2: Is server connected?\n3: Recorded time since last start trigger expressed in seconds. This will be constant 0 for continuous recording.\n5: Current buffer usage (in %)\n6: Current file buffer usage (in %)\n7: Unprocessed bytes in file buffer (in %)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DataStoreTextInfo: {
    name: 'DataStoreTextInfo',
    returnType: 'STRING',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '47',
      category: 'Diagnose',
      name: 'DataStoreTextInfo',
      formula: "DataStoreTextInfo('DatastoreIndex*', 'InfoType*')",
      description:
        "This function returns information about the selected data store.\n'DatastoreIndex' >= 0 : normal data store\n'DatastoreIndex' < 0 : ibaQDR data store\n\nThe following info types are supported:\n0: Currently recorded dat file: short file name\n1: Currently recorded dat file: full file name (including the path)\n2: Currently recorded dat file: full UNC path\nIn case of overlapped files, the file index determines the dat file as follows:\n0: the file with the earliest start time\n1: the file with the second earliest start time\n2: ...\nIn case of QDR the file index is the index of the product file.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Text'
    }
  },
  Delay: {
    name: 'Delay',
    returnType: 'ANY',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'NumberSamples',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '48',
      category: 'Miscellaneous',
      name: 'Delay',
      formula: "Delay('Expression', 'NumberSamples*')",
      description:
        "Returns the value of 'Expression' at 'NumberSamples' samples before the current time. 'NumberSamples' cannot be higher than 10000.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Invariant'
    }
  },
  DelayLengthL: {
    name: 'DelayLengthL',
    returnType: 'ANY',
    minArgs: 4,
    maxArgs: 6,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Length',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'MaxLengthDelta',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'DelayInMeter',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Resolution',
        type: ['INTEGER', 'FLOAT'],
        required: false
      },
      {
        name: 'Filter',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '49',
      category: 'Miscellaneous',
      name: 'DelayLengthL',
      formula: "DelayLengthL('Expression', 'Length', 'MaxLenghtDelta', 'DelayInMeter', 'Resolution*', 'Filter=0*')",
      description:
        "This function uses the length signal 'Length' (in m) to create a length-based version of 'Expression' that is delayed over 'DelayInMeter' meters. Changes in the length signal that are larger than 'MaxLengthDelta' are ignored. The 'Resolution' is the length base (in m) of the result.\n'Filter' determines what filter is used during the time to length conversion:\n= 1: minimum filter\n= 2: maximum filter\nother: no filter\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DelayLengthV: {
    name: 'DelayLengthV',
    returnType: 'ANY',
    minArgs: 4,
    maxArgs: 5,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Speed',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'DelayInMeter',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Resolution',
        type: ['INTEGER', 'FLOAT'],
        required: false
      },
      {
        name: 'Filter',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '50',
      category: 'Miscellaneous',
      name: 'DelayLengthV',
      formula: "DelayLengthV('Expression', 'Speed', 'DelayInMeter', 'Resolution*', 'Filter*=0')",
      description:
        "This function uses the speed signal 'Speed' (in m/s) to create a length-based version of 'Expression' that is delayed over 'DelayInMeter' meters. The 'Resolution' is the length base (in m) of the result.\n'Filter' determines what filter is used during the time to length conversion:\n= 1: minimum filter\n= 2: maximum filter\nother: no filter\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  DeleteText: {
    name: 'DeleteText',
    returnType: 'STRING',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      },
      {
        name: 'StartPos',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Length',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '51',
      category: 'Text',
      name: 'DeleteText',
      formula: "DeleteText('Text', 'StartPos', 'Length=100000')",
      description:
        "Deletes 'Length' characters from the 'Text' string beginning with the character at position 'StartPos'.",
      returnType: 'Text'
    }
  },
  Diff: {
    name: 'Diff',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      }
    ],
    info: {
      id: '52',
      category: 'Math',
      name: 'Diff',
      formula: "Diff('Expression')",
      description: "Computes the differential (dy/dt) of 'Expression'.",
      returnType: 'Analog'
    }
  },
  DWORD: {
    name: 'DWORD',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Low',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'High',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '53',
      category: 'Miscellaneous',
      name: 'DWORD',
      formula: "DWORD('Low', 'High')",
      description: "Returns the DWORD consisting of the 2 WORDS 'Low' and 'High'.",
      returnType: 'Analog'
    }
  },
  Eff: {
    name: 'Eff',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Frequency',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '54',
      category: 'Math',
      name: 'Eff',
      formula: "Eff('Expression', 'Frequency')",
      description:
        "This function calculates the effective value of 'Expression' with a fundamental frequency of 'Frequency'.",
      returnType: 'Analog'
    }
  },
  ElapsedTime: {
    name: 'ElapsedTime',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Start',
        type: 'ANY',
        required: true
      },
      {
        name: 'Stop',
        type: 'ANY',
        required: true
      }
    ],
    info: {
      id: '55',
      category: 'Miscellaneous',
      name: 'ElapsedTime',
      formula: "ElapsedTime('Start', 'Stop')",
      description:
        "Returns the time since the last rising edge on 'Start'. The time is stopped when there is a rising edge on 'Stop'.",
      returnType: 'Analog'
    }
  },
  EnvelopeSpectral: {
    name: 'EnvelopeSpectral',
    returnType: 'FLOAT',
    minArgs: 4,
    maxArgs: 5,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Frequency1',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Frequency2',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'CutoffFrequency',
        type: 'FLOAT',
        required: false
      }
    ],
    info: {
      id: '56',
      category: 'Filters',
      name: 'EnvelopeSpectral',
      formula: "EnvelopeSpectral('Expression', 'Frequency1*', 'Frequency2*, 'Cutoff frequency')",
      description:
        "Apply enveloping with constant pass band between frequencies 'Frequency1' and 'Frequency2' to 'Expression'. The parameter 'Cutoff frequency' allows configuring an optional lowpass filter that is applied to the envelope.\nThe 'Expression' signal is resampled at the timebase of the virtual signal; no anti-aliasing filter is applied.\nThe minimum band width is 10% of the Nyquist frequency.\n'Frequency1' cannot be lower than 10% of the Nyquist frequency.\n'Frequency2' cannot be higher than 90% of the Nyquist frequency.\n(Nyquist frequency = sampling frequency / 2)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  ExecuteCommand: {
    name: 'ExecuteCommand',
    returnType: 'ANY',
    minArgs: 5,
    maxArgs: 6,
    args: [
      {
        name: 'Trigger',
        type: 'ANY',
        required: true
      },
      {
        name: 'Command',
        type: 'STRING',
        required: true
      },
      {
        name: 'Arguments',
        type: 'STRING',
        required: true
      },
      {
        name: 'UserName',
        type: 'STRING',
        required: true
      },
      {
        name: 'Password',
        type: 'STRING',
        required: true
      },
      {
        name: 'Timeout',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '57',
      category: 'Miscellaneous',
      name: 'ExecuteCommand',
      formula: "ExecuteCommand('Trigger', \"'Command'\", \"'Arguments'\", \"'UserName'\", \"'Password'\", 'Timeout=0')",
      description:
        "This function executes the command line 'Command' 'Arguments' on a rising edge of 'Trigger'. The return value is 1 when the command is running. Rising edges on 'Trigger' are ignored while the command is running. The optional 'Timeout' parameter can be used to kill the command if it doesn't complete within the specified timeout. The timeout is expressed in seconds. If it is equal or smaller than zero then no timeout is used and the command can run forever. You have to configure the user that will execute the command via the 'UserName' and 'Password' parameters. You can use the text encryption feature to hide the password.",
      returnType: 'NONE'
    }
  },
  Exp: {
    name: 'Exp',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '58',
      category: 'Math',
      name: 'Exp',
      formula: "Exp('Expression')",
      description: "Raises e to the power of 'Expression'.",
      returnType: 'Analog'
    }
  },
  ExtendPulse: {
    name: 'ExtendPulse',
    returnType: 'BOOLEAN',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Input',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Time',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '59',
      category: 'Miscellaneous',
      name: 'ExtendPulse',
      formula: "ExtendPulse('Input', 'Time*')",
      description:
        "A pulse on 'Input' is extended so that it is at least 'Time' seconds long. A rising edge on 'Input' will restart the time. Parameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Digital'
    }
  },
  F_TRIG: {
    name: 'F_TRIG',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '60',
      category: 'Logical (not in app list)',
      name: 'F_TRIG',
      formula: "F_TRIG('Expression')",
      description:
        "Falling edge. This function returns TRUE for 1 sample when a transition from TRUE to FALSE is detected on 'Expression'.",
      returnType: 'Digital'
    }
  },
  FALSE: {
    name: 'FALSE',
    returnType: 'BOOLEAN',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '61',
      category: 'Logical',
      name: 'FALSE',
      formula: 'False()',
      description: 'returns a logical 0',
      returnType: 'Digital'
    }
  },
  FindText: {
    name: 'FindText',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Text1',
        type: 'STRING',
        required: true
      },
      {
        name: 'Text2',
        type: 'STRING',
        required: true
      },
      {
        name: 'CaseSensitive',
        type: 'INTEGER',
        required: false
      },
      {
        name: 'N',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '62',
      category: 'Text',
      name: 'FindText',
      formula: "FindText('Text1', 'Text2', 'CaseSensitive*=1', 'N=1')",
      description:
        "The result of the function is the zerobased index of the 'N'th occurrence of 'Text2' inside of 'Text1'. If 'Text2' is not found 'N' times then the result is -1.\nThe search is case sensitive when 'CaseSensitive' is not 0.\nIn case you want to use double quotes in constant texts then write two double quotes after each other.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  Floor: {
    name: 'Floor',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '63',
      category: 'Math',
      name: 'Floor',
      formula: "Floor('Expression')",
      description: "Returns the largest integral value that is smaller than or equal to 'Expression'.",
      returnType: 'Analog'
    }
  },
  FobDLinkStatus: {
    name: 'FobDLinkStatus',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'LinkNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '64',
      category: 'Diagnose',
      name: 'FobDLinkStatus',
      formula: "FobDLinkStatus('BoardNo*', 'LinkNo*')",
      description:
        "This function returns the status of the ibaFOB-D link:\n0 = link not active\n1 = link ok\n2 = link broken\n3 = link RX ok but flex ring is broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-D board. For ibaFOB-io-ExpressCard and ibaFOB-io-USB 'BoardNo' should be set to 0.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobFastLinkStatus: {
    name: 'FobFastLinkStatus',
    returnType: 'INTEGER',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'LinkNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Filtered',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '65',
      category: 'Diagnose',
      name: 'FobFastLinkStatus',
      formula: "FobFastLinkStatus('BoardNo*', 'LinkNo*', 'Filtered*')",
      description:
        "This function returns the status of an ibaFOB-X board link in 32 Mbit mode:\n0 = link not active\n1 = link ok\n2 = link broken\nWhen 'Filtered' = 1 then any change in link status that is faster than 40 ms will be ignored.\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-X board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobFlexDeviceStatus: {
    name: 'FobFlexDeviceStatus',
    returnType: 'INTEGER',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'LinkNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Address',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '66',
      category: 'Diagnose',
      name: 'FobFlexDeviceStatus',
      formula: "FobFlexDeviceStatus('BoardNo*', 'LinkNo*', 'Address*')",
      description:
        "This function returns the status of the flex device on address 'Address' of link 'LinkNo' of FOB-D board 'BoardNo':\n0 = Device not configured\n1 = Device ok\n2 = Device not connected\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-D board.\nFor ibaFOB-io-ExpressCard and ibaFOB-io-USB 'BoardNo' should be set to 0.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobFLinkStatus: {
    name: 'FobFLinkStatus',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'LinkNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '67',
      category: 'Diagnose',
      name: 'FobFLinkStatus',
      formula: "FobFLinkStatus('BoardNo*', 'LinkNo*')",
      description:
        "This function returns the status of an ibaFOB-S or ibaFOB-X board link in 3 Mbit mode:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-S or ibaFOB-X board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobHLinkStatus: {
    name: 'FobHLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '68',
      category: 'Diagnose',
      name: 'FobHLinkStatus',
      formula: "FobHLinkStatus('BoardNo*')",
      description:
        "This function returns the status of the ibaFOB-H link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-H board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobMLinkStatus: {
    name: 'FobMLinkStatus',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'LinkNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '69',
      category: 'Diagnose',
      name: 'FobMLinkStatus',
      formula: "FobMLinkStatus('BoardNo*', 'LinkNo*')",
      description:
        "This function returns the status of an ibaFOB-S board link in 5 Mbit mode:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-S board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobPlusControlLinkStatus: {
    name: 'FobPlusControlLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '70',
      category: 'Diagnose',
      name: 'FobPlusControlLinkStatus',
      formula: "FobPlusControlLinkStatus('BoardNo*')",
      description:
        "This function returns the status of the ibaFOB-PlusControl link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-PlusControl board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobSDexpLinkStatus: {
    name: 'FobSDexpLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '71',
      category: 'Diagnose',
      name: 'FobSDexpLinkStatus',
      formula: "FobSDexpLinkStatus('BoardNo*')",
      description:
        "This function returns the status of the ibaFOB-SDexp link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-SDexp board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobSDLinkStatus: {
    name: 'FobSDLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '72',
      category: 'Diagnose',
      name: 'FobSDLinkStatus',
      formula: "FobSDLinkStatus('BoardNo')",
      description:
        "This function returns the status of the ibaFOB-SD link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-SD board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobTDCexpLinkStatus: {
    name: 'FobTDCexpLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '73',
      category: 'Diagnose',
      name: 'FobTDCexpLinkStatus',
      formula: "FobTDCexpLinkStatus('BoardNo')",
      description:
        "This function returns the status of the ibaFOB-TDCexp link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-TDCexp board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  FobTDCLinkStatus: {
    name: 'FobTDCLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'BoardNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '74',
      category: 'Diagnose',
      name: 'FobTDCLinkStatus',
      formula: "FobTDCLinkStatus('BoardNo')",
      description:
        "This function returns the status of the ibaFOB-TDC link:\n0 = link not active\n1 = link ok\n2 = link broken\n'BoardNo' should correspond to the value shown on the 7-segment display of the ibaFOB-TDC board.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  GenerateSignal: {
    name: 'GenerateSignal',
    returnType: 'ANY',
    minArgs: 3,
    maxArgs: 4,
    args: [
      {
        name: 'Type',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Amplitude',
        type: 'FLOAT',
        required: false
      },
      {
        name: 'T1',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'T2',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '75',
      category: 'Miscellaneous',
      name: 'GenerateSignal',
      formula: "GenerateSignal('Type', 'Amplitude=10', 'T1=1', 'T2=1')",
      description:
        "Generate a test signal with amplitude 'Amplitude' and periods 'T1' and 'T2' (in s). The following signal types are supported:\n'Type' = 0: Sine\n'Type' = 1: Cosine\n'Type' = 2: Triangle\n'Type' = 3: Square\n'Type' = 4: Random",
      returnType: 'Analog'
    }
  },
  GenerateText: {
    name: 'GenerateText',
    returnType: 'STRING',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '76',
      category: 'Miscellaneous',
      name: 'GenerateText',
      formula: "GenerateText('Text*')",
      description:
        'Generate a text signal. You can use placeholders %1, %2, ... in the text. The placeholder %n will be replaced by the value of a counter that is incremented every n samples.\nParameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Text'
    }
  },
  GetFloatBit: {
    name: 'GetFloatBit',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'BitNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '77',
      category: 'Miscellaneous',
      name: 'GetFloatBit',
      formula: "GetFloatBit('Expression', 'BitNo')",
      description:
        "Treats floating point value 'Expression' as a bit mask and returns the value of bit 'BitNo' (valid range for 'BitNo': 0 (LSB) to 31 (MSB)).",
      returnType: 'Digital'
    }
  },
  GetIntBit: {
    name: 'GetIntBit',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['FLOAT', 'INTEGER'],
        required: true
      },
      {
        name: 'BitNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '78',
      category: 'Miscellaneous',
      name: 'GetIntBit',
      formula: "GetIntBit('Expression', 'BitNo')",
      description:
        "Rounds 'Expression' to the nearest integer and returns the value of bit 'BitNo' (valid range for 'BitNo': 0 (LSB) to 31 (MSB)).",
      returnType: 'Digital'
    }
  },
  GetSignalMetadata: {
    name: 'GetSignalMetadata',
    returnType: 'STRING',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Signal',
        type: 'ANY',
        required: true
      },
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '79',
      category: 'Miscellaneous',
      name: 'GetSignalMetadata',
      formula: "GetSignalMetadata('Signal*', 'InfoType*')",
      description:
        'Returns metadata information of a signal. The following info types are supported:\n0: signal name\n1: signal unit\n2: signal comment 1\n3: signal comment 2\nExamples: GetSignalMetadata([0:0], 1), GetSignalMetadata([signalName], 2)\nIf the signal or the info type is not valid, an empty string is returned.',
      returnType: 'Text'
    }
  },
  GetSystemTime: {
    name: 'GetSystemTime',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Part',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UTC',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '80',
      category: 'Miscellaneous',
      name: 'GetSystemTime',
      formula: "GetSystemTime('Part*', 'UTC=0')",
      description:
        "Returns a part of the system time. 'UTC' determines whether the function uses the UTC system time (=1) or the local system time (=0).\nPart = 0: milliseconds\nPart = 1: seconds\nPart = 2: minutes\nPart = 3: hour\nPart = 4: day of month\nPart = 5: month\nPart = 6: year\nPart = 7: day of year\nPart = 8: day of week (monday=1, sunday=7)\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  GetSystemTimeAsText: {
    name: 'GetSystemTimeAsText',
    returnType: 'STRING',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'DateTimeFormat',
        type: 'STRING',
        required: true
      },
      {
        name: 'UTC',
        type: 'INTEGER',
        required: false
      },
      {
        name: 'Enable',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '81',
      category: 'Miscellaneous',
      name: 'GetSystemTimeAsText',
      formula: "GetSystemTimeAsText('DateTimeFormat*=\"yyyy-MM-dd HH:mm:ss\"', 'UTC*=0', 'Enable=1')",
      description:
        "Returns the system time as text formatted according to 'DateTimeFormat'.\n\nDateTimeFormat format examples:\n - MMM, MMMM: name of the month\n - d, dd: day of the month, a number from 1 to 31\n - ddd, dddd: day of the week\n - h, hh, H, HH: hour in 12 hours or 24 hours format\n - m, mm: minutes\n - s, ss: seconds\n - f, ff, fff, ...: fractional seconds up to 0.1, 0.01, milliseconds, ... precision\n - tt: AM/PM designator (only available when ibaPDA service runs in a culture that supports AM/PM, e.g. English US)\nIf fractional seconds are used in the format, the 'Enable' parameter is mandatory.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Text'
    }
  },
  GetWeekOfYear: {
    name: 'GetWeekOfYear',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Rule',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'FirstDayOfWeek',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '82',
      category: 'Miscellaneous',
      name: 'GetWeekOfYear',
      formula: "GetWeekOfYear('Rule*=0', 'FirstDayOfWeek*=0')",
      description:
        "Returns the current week of the year. The week numbering is done according to 'Rule'.\n\nRule options:\n 0: The first week of the year is the one that includes at least 4 days of that year (ISO 8601).\n 1: The first week of the year starts on January 1st.\n 2: The first week of the year starts on the first day of the week on or after January 1st.\n\nThe first day of the week is defined by 'FirstDayOfWeek':\n 0: Monday (ISO 8601)\n 1: Tuesday\n 2: Wednesday\n 3: Thursday\n 4: Friday\n 5: Saturday\n 6: Sunday\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  HP: {
    name: 'HP',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Frequency',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '83',
      category: 'Filters',
      name: 'HP',
      formula: "HP('Expression', 'Frequency*')",
      description:
        "Apply a highpass filter with pass frequency 'Frequency' to 'Expression'. The filter is a second order Butterworth filter.\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  ICPSensorStatus: {
    name: 'ICPSensorStatus',
    returnType: 'INTEGER',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'ModuleNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'SensorNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '84',
      category: 'Diagnose',
      name: 'ICPSensorStatus',
      formula: "ICPSensorStatus('ModuleNo*', 'SensorNo*')",
      description:
        'This function monitors the status of an ICP sensor. The first parameter specifies the module number of the Padu 8-ICP module. The second parameter specifies which sensor to monitor. The sensor number goes from 0 to 7. The function returns 0 if the sensor is ok. It returns 1 when it detects an open chain.\nParameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Analog'
    }
  },
  if: {
    name: 'if',
    returnType: 'ANY',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'Condition',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Expression1',
        type: 'ANY',
        required: true
      },
      {
        name: 'Expression2',
        type: 'ANY',
        required: true
      }
    ],
    info: {
      id: '85',
      category: 'Logical',
      name: 'if',
      formula: "if('Condition', 'Expression1', 'Expression2')",
      description:
        "If 'Condition' is true then 'Expression1' is returned.\nIf 'Condition' is false then 'Expression2' is returned.",
      returnType: 'Invariant23'
    }
  },
  InsertText: {
    name: 'InsertText',
    returnType: 'STRING',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'Text1',
        type: 'STRING',
        required: true
      },
      {
        name: 'Text2',
        type: 'STRING',
        required: true
      },
      {
        name: 'Pos',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '86',
      category: 'Text',
      name: 'InsertText',
      formula: "InsertText('Text1', 'Text2', 'Pos')",
      description:
        "Inserts 'Text2' into 'Text1' at character position 'Pos'. If 'Pos' is <= 0 then 'Text2' is prepended to 'Text1'. If 'Pos' >= length of 'Text1' then 'Text2' is appended to 'Text1'.\nIn case you want to use double quotes in constant texts then write two double quotes after each other.",
      returnType: 'Text'
    }
  },
  Int: {
    name: 'Int',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: false,
        defaultValue: 'false'
      }
    ],
    info: {
      id: '87',
      category: 'Math',
      name: 'Int',
      formula: "Int('Expression', 'Reset=0')",
      description:
        "Computes the integral (y * dt) of 'Expression'. When 'Reset' is TRUE then the integration is reset. 'Reset' is optional.",
      returnType: 'Analog'
    }
  },
  InterruptCycleTime: {
    name: 'InterruptCycleTime',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Type',
        type: 'INTEGER',
        required: true,
        defaultValue: 0,
        enum: [0, 1, 2]
      }
    ],
    info: {
      id: '88',
      category: 'Diagnose',
      name: 'InterruptCycleTime',
      formula: "InterruptCycleTime('Type*=0')",
      description:
        'This function returns the interrupt cycle time in microseconds.\nType=0: Actual value\nType=1: Minimum value\nType=2: Maximum value\nWarning: The value is updated at a slower rate than the interrupt.\nParameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Analog'
    }
  },
  KurtosisInTime: {
    name: 'KurtosisInTime',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0,
        enum: [0, 1, 2, 3]
      }
    ],
    info: {
      id: '89',
      category: 'Statistics',
      name: 'KurtosisInTime',
      formula: "KurtosisInTime('Expression', 'Interval', 'Reset=0')",
      description:
        "returns the kurtosis of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation:\n'Reset' = 0: Do calculation\n'Reset' = 1: Stop calculation, delete all buffered data and set the result to 0\n'Reset' = 2: Stop calculation, delete all buffered data and keep the result\n'Reset' = 3: Calculate now and then stop calculation",
      returnType: 'Analog'
    }
  },
  LicenseInfo: {
    name: 'LicenseInfo',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'InfoType',
        type: 'INTEGER',
        required: true,
        enum: [0, 1, 2, 3, 10, 11, 12]
      }
    ],
    info: {
      id: '90',
      category: 'Diagnose',
      name: 'LicenseInfo',
      formula: "LicenseInfo('InfoType*')",
      description:
        'This function returns information about the license container.\nThe following info types are supported:\n 0: License container available\n 1: License time limit in days\n 2: Demo time limit in days\n 3: Time limit in seconds before the acquisition will be stopped because of a license removal\n10: License container inserted counter\n11: License container removed counter\n12: License container changed counter\nParameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Analog'
    }
  },
  LimitAlarm: {
    name: 'LimitAlarm',
    returnType: 'BOOLEAN',
    minArgs: 4,
    maxArgs: 5,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Limit',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'DeadBand',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Time',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0,
        enum: [0, 1, 2]
      }
    ],
    info: {
      id: '91',
      category: 'Miscellaneous',
      name: 'LimitAlarm',
      formula: "LimitAlarm('Expression', 'Limit', 'DeadBand', 'Time', 'Reset=0')",
      description:
        "Returns true when 'Expression' is greater than 'Limit' for at least 'Time' seconds.\nReturns false again when 'Expression' is smaller than 'Limit' - 'DeadBand'.\nThe optional 'Reset' parameter can be used to stop and restart the calculation:\n'Reset' = 0: Do calculation\n'Reset' = 1: Stop calculation and set result to 0\n'Reset' = 2: Stop calculation and keep result.",
      returnType: 'Digital'
    }
  },
  Log: {
    name: 'Log',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '92',
      category: 'Math',
      name: 'Log',
      formula: "Log('Expression')",
      description: "Returns the natural logarithm (base e) of 'Expression'.",
      returnType: 'Analog'
    }
  },
  Log10: {
    name: 'Log10',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '93',
      category: 'Math',
      name: 'Log10',
      formula: "Log10('Expression')",
      description: "Returns the base-10 logarithm of 'Expression'.",
      returnType: 'Analog'
    }
  },
  LP: {
    name: 'LP',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Omega',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: false
      }
    ],
    info: {
      id: '94',
      category: 'Filters',
      name: 'LP',
      formula: "LP('Expression', 'Omega*', 'Reset')",
      description:
        "Applies a lowpass filter with a cutoff frequency of 'Omega'/(2*PI) to 'Expression'. The filter is a single-pole filter with a 20 dB/decade rolloff. If 'Reset' is TRUE, the filter is disabled, and the result is the unfiltered input 'Expression'.",
      returnType: 'Analog'
    }
  },
  MAVg: {
    name: 'MAVg',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'UpdateInterval',
        type: ['INTEGER', 'FLOAT'],
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        enum: [0, 1, 2]
      }
    ],
    info: {
      id: '95',
      category: 'Statistics',
      name: 'MAVg',
      formula: "MAVg('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "Returns the average value of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds. The 'WindowInterval' must be a multiple of 'UpdateInterval'; if not, it is automatically adjusted to the next multiple. Changes to interval values take effect only after a reset.\n\nThe optional 'Reset' parameter controls calculation behavior:\n- 0: Perform calculation\n- 1: Stop calculation, clear buffer, set result to 0\n- 2: Stop calculation, clear buffer, keep last result.",
      returnType: 'Analog'
    }
  },
  MAVgOnTrigger: {
    name: 'MAVgOnTrigger',
    returnType: 'FLOAT',
    minArgs: 3,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Trigger',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'NumberOfValues',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        enum: [0, 1, 2],
        defaultValue: 0
      }
    ],
    info: {
      id: '96',
      category: 'Statistics',
      name: 'MAVgOnTrigger',
      formula: "MAVgOnTrigger('Expression', 'Trigger', 'NumberOfValues*', 'Reset=0')",
      description:
        "Returns the average of 'Expression' sampled on every rising edge of 'Trigger'. 'NumberOfValues' defines the number of samples used for the moving average. The result updates on each rising edge of 'Trigger'.\n\nThe optional 'Reset' parameter controls calculation behavior:\n- 0: Perform calculation\n- 1: Stop calculation, clear buffer, set result to 0\n- 2: Stop calculation, clear buffer, keep last result.\n\nParameters marked with * are only evaluated once at the start of acquisition.",
      returnType: 'Analog'
    }
  },
  Max: {
    name: 'Max',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '97',
      category: 'Statistics',
      name: 'Max',
      formula: "Max('Expression', 'Reset=0')",
      description:
        "Returns the largest value of 'Expression'. The optional 'Reset' parameter controls calculation behavior:\n- 0: Continue calculation\n- 1: Reset calculation, result equals 'Expression'.",
      returnType: 'Analog'
    }
  },
  Max2: {
    name: 'Max2',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 1000,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '98',
      category: 'Statistics',
      name: 'Max2',
      formula: "Max2('Expression1', 'Expression2', ...)",
      description: 'Returns the largest value among all provided expressions.',
      returnType: 'Analog'
    }
  },
  MaxInTime: {
    name: 'MaxInTime',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '99',
      category: 'Statistics',
      name: 'MaxInTime',
      formula: "MaxInTime('Expression', 'Interval', 'Reset=0')",
      description:
        "Returns the maximum value of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter controls the calculation behavior.",
      returnType: 'Analog'
    }
  },
  Median2: {
    name: 'Median2',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 1000,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '100',
      category: 'Statistics',
      name: 'Median2',
      formula: "Median2('Expression1', 'Expression2', ...)",
      description: 'Returns the median of all arguments.',
      returnType: 'Analog'
    }
  },
  MedianInTime: {
    name: 'MedianInTime',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false
      }
    ],
    info: {
      id: '101',
      category: 'Statistics',
      name: 'MedianInTime',
      formula: "MedianInTime('Expression', 'Interval', 'Result=0')",
      description:
        "Returns the median of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation.",
      returnType: 'Analog'
    }
  },
  MFOLinkStatus: {
    name: 'MFOLinkStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'ModuleNo',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '102',
      category: 'Diagnose',
      name: 'MFOLinkStatus',
      formula: "MFOLinkStatus('ModuleNo*')",
      description:
        "This function returns the status of the ibaM-FO-2io link that the module with number 'ModuleNo' is mapped to.",
      returnType: 'Analog'
    }
  },
  MidText: {
    name: 'MidText',
    returnType: 'STRING',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      },
      {
        name: 'StartPos',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'Length',
        type: 'INTEGER',
        required: false,
        defaultValue: 1000
      }
    ],
    info: {
      id: '103',
      category: 'Text',
      name: 'MidText',
      formula: "MidText('Text', 'StartPos', 'Lenght=1000')",
      description:
        "Returns 'Length' characters from the 'Text' string beginning with the character at position 'StartPos'.",
      returnType: 'Text'
    }
  },
  Min: {
    name: 'Min',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: false,
        defaultValue: false
      }
    ],
    info: {
      id: '104',
      category: 'Statistics',
      name: 'Min',
      formula: "Min('Expression', 'Reset=0')",
      description:
        "Returns the smallest value of 'Expression'. When 'Reset' is TRUE then the calculation is reset and the result is equal to 'Expression'.",
      returnType: 'Analog'
    }
  },
  Min2: {
    name: 'Min2',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 1000,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
      // You can extend this for more expressions if needed
    ],
    info: {
      id: '105',
      category: 'Statistics',
      name: 'Min2',
      formula: "Min2('Expression1', 'Expression2', ...)",
      description: 'Returns the smallest of all arguments.',
      returnType: 'Analog'
    }
  },
  MinInTime: {
    name: 'MinInTime',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '106',
      category: 'Statistics',
      name: 'MinInTime',
      formula: "MinInTime('Expression', 'Interval', 'Reset=0')",
      description:
        "Returns the minimum value of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation.",
      returnType: 'Analog'
    }
  },
  MKurtosis: {
    name: 'MKurtosis',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '107',
      category: 'Statistics',
      name: 'MKurtosis',
      formula: "Mkurtosis('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'reset=0')",
      description:
        "Returns the kurtosis value of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds.",
      returnType: 'Analog'
    }
  },
  Mmax: {
    name: 'Mmax',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '108',
      category: 'Statistics',
      name: 'Mmax',
      formula: "Mmax('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "Returns the maximum value of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds.",
      returnType: 'Analog'
    }
  },
  Mmedian: {
    name: 'Mmedian',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '109',
      category: 'Statistics',
      name: 'Mmedian',
      formula: "Mmedian('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "Returns the median of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds.",
      returnType: 'Analog'
    }
  },
  Mmin: {
    name: 'Mmin',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '110',
      category: 'Statistics',
      name: 'Mmin',
      formula: "Mmin('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "The 'UpdateInterval' parameter is optional; if not specified, it is equal to the timebase of the function. As this default value is small, it can cause an unnecessary calculation load, so it is advised to configure 'UpdateInterval' to the needs of your application.",
      returnType: 'Analog'
    }
  },
  Mod: {
    name: 'Mod',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '111',
      category: 'Math',
      name: 'Mod',
      formula: "Mod('Expression1', 'Expression2')",
      description: "returns the modulus of 'Expression1' and 'Expression2'",
      returnType: 'Analog'
    }
  },
  ModuleSignalCount: {
    name: 'ModuleSignalCount',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 3,
    args: [
      {
        name: 'ModuleNo',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'SignalType',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      },
      {
        name: 'Direction',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '112',
      category: 'Miscellaneous',
      name: 'ModuleSignalCount',
      formula: "ModuleSignalCount('ModuleNo*', 'SignalType*=0', 'Direction*=0')",
      description:
        "Returns the number of active signals in the module with module number 'ModuleNo'. 'SignalType' and 'Direction' determine which signals are counted. 'SignalType': 0 = Analog and digital, 1 = Analog, 2 = Digital. 'Direction': 0 = Input and output, 1 = Input, 2 = Output.",
      returnType: 'Analog'
    }
  },
  Mskewness: {
    name: 'Mskewness',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '113',
      category: 'Statistics',
      name: 'Mskewness',
      formula: "Mskewness('Express', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "Returns the skewness value of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds. The 'UpdateInterval' parameter is optional; if not specified, it is equal to the timebase of the function. As this default value is small, it can cause an unnecessary calculation load, so it is advised to configure 'UpdateInterval' to the needs of your application.",
      returnType: 'Analog'
    }
  },
  MStdDev: {
    name: 'MStdDev',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'WindowInterval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UpdateInterval',
        type: 'INTEGER',
        required: false,
        defaultValue: 'timebase'
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '114',
      category: 'Statistics',
      name: 'MStdDev',
      formula: "MStdDev('Expression', 'WindowInterval', 'UpdateInterval=timebase', 'Reset=0')",
      description:
        "Returns the sample standard deviation value of 'Expression' every 'UpdateInterval' seconds, based on a moving window of 'WindowInterval' seconds. The 'UpdateInterval' parameter is optional; if not specified, it is equal to the timebase of the function. As this default value is small, it can cause an unnecessary calculation load, so it is advised to configure 'UpdateInterval' to the needs of your application.",
      returnType: 'Analog'
    }
  },
  MultiStationStatus: {
    name: 'MultiStationStatus',
    returnType: 'INTEGER',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '115',
      category: 'Diagnose',
      name: 'MultiStationStatus',
      formula: 'MultiStationStatus()',
      description:
        'The function returns the current multistation mode:\n 0: Standalone\n 1: Slave\n 2: Master\n 3: Slave without master',
      returnType: 'Analog'
    }
  },
  Not: {
    name: 'Not',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '116',
      category: 'Logical',
      name: 'Not',
      formula: "Not('Expression')",
      description: "Logical 'NOT'",
      returnType: 'Digital'
    }
  },
  OneShot: {
    name: 'OneShot',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      }
    ],
    info: {
      id: '117',
      category: 'Logical',
      name: 'OneShot',
      formula: "OneShot('Expression')",
      description: '= 1 when current sample <> previous sample\n= 0 when current sample = previous sample',
      returnType: 'Digital'
    }
  },
  /* OR: {
    name: 'OR',
    returnType: 'BOOLEAN',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '118',
      category: 'Logical',
      name: 'OR',
      formula: "OR('Expression')",
      description: "Logical 'OR'",
      returnType: 'Digital'
    }
  }, */
  PerformanceCounter: {
    name: 'PerformanceCounter',
    returnType: 'INTEGER',
    minArgs: 3,
    maxArgs: 3,
    args: [
      { name: 'Category', type: 'STRING', required: true },
      { name: 'CounterName', type: 'STRING', required: true },
      { name: 'InstanceName', type: 'STRING', required: true }
    ],
    info: {
      id: '119',
      category: 'Diagnose',
      name: 'PerformanceCounter',
      formula: 'PerformanceCounter("Category*", "CounterName*", "InstanceName*")',
      description:
        "returns the value of the performance counter or 0 if it doesn't exist\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Analog'
    }
  },
  PeriodicTrigger: {
    name: 'PeriodicTrigger',
    returnType: 'BOOLEAN',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'Interval',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'IntervalOffset',
        type: 'INTEGER',
        required: true
      },
      {
        name: 'UseSystemTime',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '120',
      category: 'Trigger',
      name: 'PeriodicTrigger',
      formula: "PeriodicTrigger('Interval*', 'IntervalOffset*', 'UseSystemTime*')",
      description:
        "The function returns TRUE for 1 sample every 'Interval' minutes. The interval starts at 'IntervalOffset' minutes modulo 'Interval'. The 'UseSystemTime' flag determines whether the system time is used or the internal high-resolution timer. E.g. if you want to trigger every 8 hours at 6:00, 14:00 and 22:00 then use PeriodicTrigger(8*60, 6*60, 0).\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Digital'
    }
  },
  Pi: {
    name: 'Pi',
    returnType: 'FLOAT',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '121',
      category: 'Trigonometric',
      name: 'Pi',
      formula: 'Pi()',
      description: 'Returns the value of Pi (3.14159...).',
      returnType: 'Analog'
    }
  },
  Ping: {
    name: 'Ping',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Address',
        type: 'STRING',
        required: true
      },
      {
        name: 'Trigger',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Timeout',
        type: 'INTEGER',
        required: false,
        defaultValue: 5
      },
      {
        name: 'Size',
        type: 'INTEGER',
        required: false,
        defaultValue: 32
      }
    ],
    info: {
      id: '122',
      category: 'Diagnose',
      name: 'Ping',
      formula: "Ping('Address', 'Trigger', 'Timeout=5', 'Size=32')",
      description:
        "This function sends a ping request to 'Address' on a rising edge of 'Trigger'. The function returns the time in milliseconds it takes until the ping reply is received. If there is no reply within 'Timeout' seconds then -1 will be returned. The result is 0 as long as there hasn't been a ping request. 'Size' determines the size of the ping request in bytes.",
      returnType: 'Analog'
    }
  },
  Pow: {
    name: 'Pow',
    returnType: argTypes => (argTypes.every(t => t === 'INTEGER') ? 'INTEGER' : 'FLOAT'),
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '123',
      category: 'Math',
      name: 'Pow',
      formula: "Pow('Expression1', 'Expression2')",
      description: "raises 'Expression1' to the power of 'Expression2'",
      returnType: 'Analog'
    }
  },
  PreProcess: {
    name: 'PreProcess',
    returnType: 'ANY',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: 'STRING',
        required: true
      },
      {
        name: 'ProfileName',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '124',
      category: 'Filters',
      name: 'PreProcess',
      formula: "PreProcess('Expression', \"'PreProcess Profile name*\")",
      description:
        "Apply the preprocess profile named 'Preprocess profile name' to 'Expression'. Preprocess profiles can be configured in the dialog ‘Configure preprocessors’. You can access this dialog by right-clicking on the Preprocess function in the function tree.",
      returnType: 'NoT Found' // Return type is not found
    }
  },
  PulseFreq: {
    name: 'PulseFreq',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Omega',
        type: 'FLOAT',
        required: false,
        defaultValue: 0
      },
      {
        name: 'EdgeType',
        type: 'INTEGER',
        required: false,
        defaultValue: 0,
        enum: [-1, 0, 1, 2]
      }
    ],
    info: {
      id: '125',
      category: 'Miscellaneous',
      name: 'PulseFreq',
      formula: "PulseFreq('Expression', 'Omega*=0', 'EdgeType*=2')",
      description: "Calculates the frequency of the pulse or pulse counter 'Expression'. A lowpass filter with cut-off angular velocity 'Omega' is applied to the result. If 'Omega' is 0 then the lowpass filter is disabled. The 'EdgeType' determines which edges are counted:\n-1 : only falling edges\n0 : both rising and falling edges\n1 : only rising edges\n2 : 'Expression' is a pulse counter\nThe calculated frequency will be zero when there is no pulse during 1000 samples.",
      returnType: 'Analog'
    }
  },
  R_TRIG: {
    name: 'R_TRIG',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '126',
      category: 'Logical',
      name: 'R_TRIG',
      formula: "R_TRIG('Expression')",
      description: "Rising edge. This function returns TRUE for 1 sample when a transition from FALSE to TRUE is detected on 'Expression'.",
      returnType: 'Digital'
    }
  },
  ReplaceNonPrintableChars: {
    name: 'ReplaceNonPrintableChars',
    returnType:'STRING',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      },
      {
        name: 'ReplaceText',
        type: 'STRING',
        required: false,
        defaultValue: ''
      }
    ],
    info: {
      id: '127',
      category: 'Text',
      name: 'ReplaceNonPrintableChars',
      formula: "ReplaceNonPrintableChars('Text', 'ReplaceText=\"\"')",
      description: "This function replaces all occurrences of non-printable characters within 'Text' with 'ReplaceText'.",
      returnType: 'Text'
    }
  },
  ReplaceText: {
    name: 'ReplaceText',
    returnType: 'STRING',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      },
      {
        name: 'SearchText',
        type: 'STRING',
        required: true
      },
      {
        name: 'ReplaceText',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '128',
      category: 'Text',
      name: 'ReplaceText',
      formula: "ReplaceText('Text', 'SearchText', 'ReplaceText')",
      description: "This function replaces all occurrences of 'SearchText' within 'Text' with 'ReplaceText'. In case you want to use double quotes in constant texts then write two double quotes after each other.",
      returnType: 'Text'
    }
  },
  RestartDataAcquisition: {
    name: 'RestartDataAcquisition',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Trigger',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '129',
      category: 'Miscellaneous',
      name: 'RestartDataAcquisition',
      formula: "RestartDataAcquisition('Trigger')",
      description: "The acquisition is restarted when a rising edge on 'Trigger' occurs. The result of the function is 1 when the acquisition is restarted.",
      returnType: 'Analog'
    }
  },
  Round: {
    name: 'Round',
    returnType: argTypes => (argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT'),
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '130',
      category: 'Math',
      name: 'Round',
      formula: "Round('Expression')",
      description: "Rounds 'Expression' to the nearest integer.",
      returnType: 'Analog'
    }
  },
  SampleAndHold: {
    name: 'SampleAndHold',
    returnType: argTypes => argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT',
    minArgs: 2,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Sample',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Initial',
        type: ['INTEGER', 'FLOAT'],
        required: false,
        defaultValue: 0
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: false,
        defaultValue: false
      }
    ],
    info: {
      id: '131',
      category: 'Miscellaneous',
      name: 'SampleAndHold',
      formula: "SampleAndHold('Expression', 'Sample', 'Initial=0', 'Reset=0')",
      description: "This is a sample and hold function. The output follows 'Expression' when 'Sample' is 1. It remains constant when 'Sample' is 0. 'Initial' specifies the initial value that is returned after the start of the acquisition when the function is not retentive. When 'Reset' is 1, the value is reset to 'Initial'. 'Initial' and 'Reset' are optional.",
      returnType: 'Invariant'
    }
  },
  SampleOnce: {
    name: 'SampleOnce',
    returnType: argTypes => argTypes[0] === 'STRING' ? 'STRING' : 'FLOAT',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT', 'STRING'],
        required: true
      },
      {
        name: 'Sample',
        type: 'BOOLEAN',
        required: true
      }
    ],
    info: {
      id: '132',
      category: 'Miscellaneous',
      name: 'SampleOnce',
      formula: "SampleOnce('Expression', 'Sample')",
      description: "This is a sample once function. Each time when 'Sample' has a rising edge, the output follows 'Expression' once, i.e. for a single sample. The result is NaN at all other timestamps in case 'Expression' is numeric. The result is an empty string at all other timestamps in case 'Expression' is of type text.",
      returnType: 'Invariant'
    }
  },
  SetReset: {
    name: 'SetReset',
    returnType: 'BOOLEAN',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Set',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'SetDominant',
        type: 'BOOLEAN',
        required: false,
        defaultValue: true
      }
    ],
    info: {
      id: '133',
      category: 'Logical',
      name: 'SetReset',
      formula: "SetReset('Set', 'Reset', 'SetDominant*=1')",
      description: "=1 after 0 to 1 transition on 'Set'\n= 0 after 0 to 1 transition on 'Reset'\nThe last parameter 'SetDominant' is optional and determines the dominance of set:\n'SetDominant' = 1 : set has precedence over reset\n'SetDominant' = 0 : reset has precedence over set\nParameters ending with * are only evaluated once at the start of the acquisition.",
      returnType: 'Digital'
    }
  },
  Sign: {
    name: 'Sign',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '134',
      category: 'Miscellaneous',
      name: 'Sign',
      formula: "Sign('Expression')",
      description: "Returns the sign of 'Expression' (+1 if greater than 0, 0 if equal to 0 and -1 if less than 0).",
      returnType: 'Analog'
    }
  },
  Sin: {
    name: 'Sin',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '135',
      category: 'Trigonometric',
      name: 'Sin',
      formula: "Sin('Expression')",
      description: "Returns the sine of 'Expression'.",
      returnType: 'Analog'
    }
  },
  SkewnessInTime: {
    name: 'SkewnessInTime',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '136',
      category: 'Statistics',
      name: 'SkewnessInTime',
      formula: "SkewnessInTime('Expression', 'Interval', 'Reset=0')",
      description: "Returns the skewness of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation.",
      returnType: 'Analog'
    }
  },
  Sqrt: {
    name: 'Sqrt',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '137',
      category: 'Math',
      name: 'Sqrt',
      formula: "Sqrt('Expression')",
      description: "Returns the square root of 'Expression'.",
      returnType: 'Analog'
    }
  },
  StdDev: {
    name: 'StdDev',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'BOOLEAN',
        required: false,
        defaultValue: false
      }
    ],
    info: {
      id: '138',
      category: 'Statistics',
      name: 'StdDev',
      formula: "StdDev('Expression', 'Reset=0')",
      description: "Returns the sample standard deviation of 'Expression'. When 'Reset' is TRUE then the calculation is reset and the result is equal to 0. 'Reset' is optional.",
      returnType: 'Analog'
    }
  },
  StdDev2: {
    name: 'StdDev2',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 1000,
    args: [
      {
        name: 'Expression1',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Expression2',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '139',
      category: 'Statistics',
      name: 'StdDev2',
      formula: "StdDev('Expression1', 'Expression2', ...)",
      description: "Returns the sample standard deviation of all arguments.",
      returnType: 'Analog'
    }
  },
  StdDevInTime: {
    name: 'StdDevInTime',
    returnType: 'FLOAT',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Interval',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '140',
      category: 'Statistics',
      name: 'StdDevInTime',
      formula: "StdDev('Expression', 'Interval', 'Reset=0')",
      description: "Returns the sample standard deviation of 'Expression' every 'Interval' seconds. The optional 'Reset' parameter can be used to stop and restart the calculation.",
      returnType: 'Analog'
    }
  },
  Switch: {
    name: 'Switch',
    returnType: 'ANY',
    minArgs: 4,
    maxArgs: 202,
    args: [
      {
        name: 'Selector',
        type: 'ANY',
        required: true
      },
      {
        name: 'Case1',
        type: 'ANY',
        required: true
      },
      {
        name: 'Value1',
        type: 'ANY',
        required: true
      },
      {
        name: 'Case2',
        type: 'ANY',
        required: true
      },
      {
        name: 'Value2',
        type: 'ANY',
        required: true
      }
      // You can extend this for more cases if needed
    ],
    info: {
      id: '141',
      category: 'Unknown',
      name: 'Switch',
      formula: "Switch('Selector', 'Case1', 'Value1', 'Case2', 'Value2', ..., 'Default')",
      description: "If 'Selector' is equal to 'Case1' then 'Value1' is returned. If 'Selector' is equal to 'Case2' then 'Value2' is returned. If 'Selector' doesn't match any of the cases then 'Default' is returned. There can be up to 100 cases.",
      returnType: 'Invariant3'
    }
  },
  T: {
    name: 'T',
    returnType: 'FLOAT',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '142',
      category: 'Miscellaneous',
      name: 'T',
      formula: "T()",
      description: "Returns time elapsed since acquisition started (in seconds).",
      returnType: 'Analog'
    }
  },
  Tan: {
    name: 'Tan',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      }
    ],
    info: {
      id: '143',
      category: 'Trigonometric',
      name: 'Tan',
      formula: "Tan('Expression')",
      description: "Returns the tangent of 'Expression'.",
      returnType: 'Analog'
    }
  },
  TextLength: {
    name: 'TextLength',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '144',
      category: 'Text',
      name: 'TextLength',
      formula: "TextLength('Text')",
      description: "Returns the number of characters in 'Text'.",
      returnType: 'Analog'
    }
  },
  TimePeriodStoreInfo: {
    name: 'TimePeriodStoreInfo',
    returnType: 'FLOAT',
    minArgs: 3,
    maxArgs: 3,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'STRING',
        required: true
      },
      {
        name: 'TimePeriodStoreName',
        type: 'STRING',
        required: true
      },
      {
        name: 'InfoType',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '145',
      category: 'Diagnose',
      name: 'TimePeriodStoreInfo',
      formula: "TimePeriodStoreInfo('DatastoreIndex*', 'TimePeriodStoreName*', 'InfoType*')",
      description: "This function returns numerical information about time period store 'TimePeriodStoreName' within the ibaHD data store with index 'DatastoreIndex'.",
      returnType: 'Analog'
    }
  },
  TimePeriodStoreTextInfo: {
    name: 'TimePeriodStoreTextInfo',
    returnType: 'STRING',
    minArgs: 3,
    maxArgs: 4,
    args: [
      {
        name: 'DatastoreIndex',
        type: 'STRING',
        required: true
      },
      {
        name: 'TimePeriodStoreName',
        type: 'STRING',
        required: true
      },
      {
        name: 'InfoType',
        type: 'STRING',
        required: true
      },
      {
        name: 'TimePeriodIndex',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '146',
      category: 'Diagnose',
      name: 'TimePeriodStoreTextInfo',
      formula: "TimePeriodStoreTextInfo('DatastoreIndex*', 'TimePeriodStoreName*', 'InfoType*', 'TimePeriodIndex*=0')",
      description: "This function returns text information about time period store 'TimePeriodStoreName' within the ibaHD data store with index 'DatastoreIndex'.",
      returnType: 'Text'
    }
  },
  TimeSinceLastSync: {
    name: 'TimeSinceLastSync',
    returnType: 'FLOAT',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '147',
      category: 'Diagnose',
      name: 'TimeSinceLastSync',
      formula: 'TimeSinceLastSync()',
      description: 'This function returns the time in seconds since the last time synchronization. If there hasn\'t been a time synchronization then the function returns -1.',
      returnType: 'Analog'
    }
  },
  TimeSyncStatus: {
    name: 'TimeSyncStatus',
    returnType: 'INTEGER',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Source',
        type: 'STRING',
        required: true
      }
    ],
    info: {
      id: '148',
      category: 'Diagnose',
      name: 'TimeSyncStatus',
      formula: 'TimeSyncStatus(\'Source*\')',
      description: 'This function returns the status of the selected timesync source. The possible return values are:\n 0: source is inactive\n 1: source is active and valid\n 2: source is active but not valid',
      returnType: 'Analog'
    }
  },
  TOF: {
    name: 'TOF',
    returnType: 'BOOLEAN',
    minArgs: 2,
    maxArgs: 2,
    args: [
      {
        name: 'IN',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'PT',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '149',
      category: 'Logical',
      name: 'TOF',
      formula: 'TOF(\'IN\', \'PT*\')',
      description: 'Timer off delay. The output is switched off after the input \'IN\' has been switched off for \'PT\' seconds.',
      returnType: 'Digital'
    }
  },
  Toggle: {
    name: 'Toggle',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Trigger',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'Initial',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '150',
      category: 'Logical',
      name: 'Toggle',
      formula: 'Toggle(\'Trigger\', \'Initial=0\')',
      description: 'Toggles the output on every rising edge of the \'Trigger\' signal. The last parameter \'Initial\' is optional and determines the value at the start of the acquisition when the function is not retentive.',
      returnType: 'Digital'
    }
  },
  TON: {
    name: 'TON',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'IN',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'PT',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '151',
      category: 'Logical',
      name: 'TON',
      formula: 'TON(\'IN\', \'PT*\')',
      description: 'Timer on delay. The output is switched on after that the input \'IN\' has been switched on for \'PT\' seconds. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Digital'
    }
  },
  TP: {
    name: 'TP',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'IN',
        type: 'BOOLEAN',
        required: true
      },
      {
        name: 'PT',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '152',
      category: 'Logical',
      name: 'TP',
      formula: 'TP(\'IN\', \'PT*\')',
      description: 'Timer pulse block. The output is switched on for \'PT\' seconds after a rising edge on input \'IN\'. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Digital'
    }
  },
  TriggerChangeRate: {
    name: 'TriggerChangeRate',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'DeltaY',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'DeltaT',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'DeadTime',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '153',
      category: 'Trigger',
      name: 'TriggerChangeRate',
      formula: 'TriggerChangeRate(\'Expression\', \'DeltaY*\', \'DeltaT*\', \'DeadTime*\')',
      description: 'Returns TRUE when \'Expression\' changes faster than \'DeltaY\' per \'DeltaT\' seconds for at least \'DeadTime\' seconds. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Digital'
    }
  },
  TriggerConstant: {
    name: 'TriggerConstant',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Level',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Epsilon',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'DeadTime',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '154',
      category: 'Trigger',
      name: 'TriggerConstant',
      formula: 'TriggerConstant(\'Expression\', \'Level*\', \'Epsilon*\', \'DeadTime*\')',
      description: 'Returns TRUE when \'Expression\' is within the range [\'Level\' - \'Epsilon\', \'Level\' + \'Epsilon\'] for at least \'DeadTime\' seconds. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Digital'
    }
  },
  TriggerEdge: {
    name: 'TriggerEdge',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'Level',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'EdgeType',
        type: 'INTEGER',
        required: true,
        enum: [-1, 0, 1]
      },
      {
        name: 'DeadTime',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '155',
      category: 'Trigger',
      name: 'TriggerEdge',
      formula: 'TriggerEdge(\'Expression\', \'Level*\', \'EdgeType*\', \'DeadTime*\')',
      description: 'Triggers when \'Expression\' passes \'Level\' and stays on the same side of \'Level\' for at least \'DeadTime\' seconds. If the expression is a digital signal, the level is set to 0.5. The transition type to monitor is determined by \'EdgeType\'. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Digital'
    }
  },
  TriggerHarmonicLevel: {
    name: 'TriggerHarmonicLevel',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: 'ANY',
        required: true
      },
      {
        name: 'LimitProfile',
        type: 'STRING',
        required: true
      },
      {
        name: 'Harmonic',
        type: 'INTEGER',
        required: true
      }
    ],
    info: {
      id: '156',
      category: 'Trigger',
      name: 'TriggerHarmonicLevel',
      formula: 'TriggerHarmonicLevel(\'Expression\', \'LimitProfile*\', \'Harmonic*\')',
      description: 'Triggers when \'Expression\' exceeds the harmonic limit defined in the PQU \'LimitProfile\'. The \'Harmonic\' parameter specifies which limit from the profile is used. Parameters ending with * are only evaluated once at the start of the acquisition.',
      returnType: 'Analog'
    }
  },
  TriggerLevel: {
    name: 'TriggerLevel',
    returnType: 'BOOLEAN',
    minArgs: 1,
    maxArgs: 4,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Level',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'LevelType',
        type: 'INTEGER',
        required: true,
        enum: [0, 1]
      },
      {
        name: 'DeadTime',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '157',
      category: 'Trigger',
      name: 'TriggerLevel',
      formula: 'TriggerLevel(\'Expression\', \'Level*\', \'LevelType*\', \'DeadTime*\')',
      description: 'Returns TRUE when \'Expression\' is above or below \'Level\' for at least \'DeadTime\' seconds. For digital signals, the \'Level\' is fixed to 0.5. The \'LevelType\' parameter determines which side of the level is monitored: 0 for below, 1 for above.',
      returnType: 'Digital'
    }
  },
  TrimText: {
    name: 'TrimText',
    returnType: 'STRING',
    minArgs: 1,
    maxArgs: 2,
    args: [
      {
        name: 'Text',
        type: 'STRING',
        required: true
      },
      {
        name: 'TrimOption',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '158',
      category: 'Text',
      name: 'TrimText',
      formula: 'TrimText(\'Text\', \'TrimOption=0\')',
      description: 'Removes white space from a text. The available options for \'TrimOption\' are: 0 for removing leading and trailing white space, 1 for removing leading white space, 2 for removing trailing white space, and 3 for removing all white space, including internal white space.',
      returnType: 'Text'
    }
  },
  True: {
    name: 'True',
    returnType: 'BOOLEAN',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '159',
      category: 'Logical',
      name: 'True',
      formula: 'True',
      description: 'Returns a logical 1.',
      returnType: 'Digital'
    }
  },
  Truncate: {
    name: 'Truncate',
    returnType: 'FLOAT',
    minArgs: 1,
    maxArgs: 1,
    args: [
      {
        name: 'Expression',
        type: 'FLOAT',
        required: true
      }
    ],
    info: {
      id: '160',
      category: 'Math',
      name: 'Truncate',
      formula: 'Truncate(\'Expression\')',
      description: 'Returns the integral part of a floating-point value.',
      returnType: 'Analog'
    }
  },
  VarDelay: {
    name: 'VarDelay',
    returnType: argTypes => argTypes[0] === 'INTEGER' ? 'INTEGER' : 'FLOAT',
    minArgs: 2,
    maxArgs: 3,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Delay',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'MaxDelay',
        type: 'FLOAT',
        required: false,
        defaultValue: 30
      }
    ],
    info: {
      id: '161',
      category: 'Miscellaneous',
      name: 'VarDelay',
      formula: 'VarDelay(\'Expression\', \'Delay\', \'MaxDelay*\')',
      description: 'Returns the value of \'Expression\' at \'Delay\' seconds before the current time. The \'Delay\' can change over time. \'MaxDelay\' determines the maximum allowed delay in seconds. By default it is 30 seconds.',
      returnType: 'Invariant'
    }
  },
  WindowAlarm: {
    name: 'WindowAlarm',
    returnType: 'BOOLEAN',
    minArgs: 6,
    maxArgs: 7,
    args: [
      {
        name: 'Expression',
        type: ['INTEGER', 'FLOAT'],
        required: true
      },
      {
        name: 'Limit1',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'DeadBand1',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Limit2',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'DeadBand2',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Time',
        type: 'FLOAT',
        required: true
      },
      {
        name: 'Reset',
        type: 'INTEGER',
        required: false,
        defaultValue: 0
      }
    ],
    info: {
      id: '162',
      category: 'Miscellaneous',
      name: 'WindowAlarm',
      formula: 'WindowAlarm(\'Expression\', \'Limit1\', \'DeadBand1\', \'Limit2\', \'DeadBand2\', \'Time\', \'Reset=0\')',
      description: `Returns true when 'Expression' is outside of range ['Limit2', 'Limit1'] for at least 'Time' seconds.\nReturns false again when 'Expression' is within range ['Limit2' + 'DeadBand2', 'Limit1' - 'DeadBand1'].\nThe optional 'Reset' parameter can be used to stop and restart the calculation:\n'Reset' = 0: Do calculation\n'Reset' = 1: Stop calculation, reset and set result to 0\n'Reset' = 2: Stop calculation, reset and keep result`,
      returnType: 'Digital'
    },
  },
  /* XOR: {
    name: 'XOR',
    returnType: 'BOOLEAN',
    minArgs: 0,
    maxArgs: 0,
    args: [],
    info: {
      id: '163',
      category: 'Logical',
      name: 'XOR',
      formula: 'XOR',
      description: 'Logical XOR',
      returnType: 'Digital'
    }
  }, */
};
