const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
import * as webpack from 'webpack';
import * as path from 'path';

export default (config: webpack.Configuration) => {
  config?.plugins?.push(
    new MonacoWebpackPlugin({
      // a ton of languages are lazily loaded by default, but we dont use any of them
      languages: ['json', 'yaml'],
      // we can disable features that we end up not needing/using
      features: [
        'accessibilityHelp',
        'anchorSelect',
        'bracketMatching',
        // 'browser',
        'caretOperations',
        'clipboard',
        // 'codeAction',
        // 'codelens',
        // 'colorPicker',
        'comment',
        'contextmenu',
        'copyPaste',
        'cursorUndo',
        // 'dnd',
        // 'documentSymbols',
        // 'dropIntoEditor',
        'find',
        'folding',
        // 'fontZoom',
        'format',
        'gotoError',
        'gotoLine',
        // 'gotoSymbol',
        'hover',
        // 'iPadShowKeyboard',
        // 'inPlaceReplace',
        'indentation',
        // 'inlayHints',
        'inlineCompletions',
        // 'inspectTokens',
        'lineSelection',
        'linesOperations',
        // 'linkedEditing',
        // 'links',
        // 'multicursor',
        // 'parameterHints',
        // 'quickCommand',
        // 'quickHelp',
        // 'quickOutline',
        // 'readOnlyMessage',
        // 'referenceSearch',
        // 'rename',
        'smartSelect',
        // 'snippet',
        'stickyScroll',
        'suggest',
        // 'toggleHighContrast',
        'toggleTabFocusMode',
        'tokenization',
        'unicodeHighlighter',
        // 'unusualLineTerminators',
        // 'viewportSemanticTokens',
        'wordHighlighter',
        'wordOperations',
        'wordPartOperations'
      ],
      customLanguages: [
        {
          label: 'yaml',
          entry: 'monaco-yaml',
          worker: {
            id: 'monaco-yaml/yamlWorker',
            entry: 'monaco-yaml/yaml.worker'
          }
        }
      ]
    })
  );

  // Ensure output publicPath is set correctly for assets
  if (config.output) {
    config.output.publicPath = '';
  }

  // Remove the existing css loader rule for monaco
  const cssRuleIdx = config?.module?.rules?.findIndex((rule: any) => rule.test?.toString().includes(':css'));
  if (cssRuleIdx !== -1) {
    config?.module?.rules?.splice(cssRuleIdx!, 1);
  }

  config?.module?.rules?.push(
    {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: true,
            import: true
          }
        }
      ]
    },
    // Handle Monaco Editor font files (codicons) - must process ttf files from node_modules
    {
      test: /\.ttf$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/fonts/[name][ext]',
        publicPath: '/'
      }
    }
  );
  return config;
};
