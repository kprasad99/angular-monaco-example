export const exampleLanguageTokens: any = {
  tokenizer: {
    root: [
      [/\[error.*/, 'custom-error'],
      [/\[notice.*/, 'custom-notice'],
      [/\[info.*/, 'custom-info'],
      [/\[[a-zA-Z 0-9:]+\]/, 'custom-date']
    ]
  }
};
