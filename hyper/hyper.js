const backgroundColor = '#002b36';
const foregroundColor = '#c4e2f2';
const cursorColor = 'rgba(173, 216, 119, 0.5)';
const cursorShape = 'BEAM';

const colors = {
  // black: '#000000',
  black: '#4b4b4b',

  // brightBlack: '#808080',
  brightBlack: '#4b4b4b',

  // red: '#ff0000',
  red: '#dc322f',
  // red: '#f69648',

  // brightRed: '#ff0000',
  brightRed: '#cb4b16',
  brightRed: '#dc412f',

  // green: '#33ff00',
  green: '#859900',

  // brightGreen: '#33ff00',
  brightGreen: '#586e75',

  // yellow: '#ffff00',
  yellow: '#b58900',

  // brightYellow: '#ffff00',
  brightYellow: '#b58900',

  // blue: '#0066ff',
  blue: '#268bd2',

  // brightBlue: '#0066ff',
  brightBlue: '#839496',

  // magenta: '#cc00ff',
  magenta: '#d33682',
  magenta: '#7d72c8',

  // brightMagenta: '#cc00ff',
  brightMagenta: '#6c71c4',

  // cyan: '#00ffff',
  cyan: '#00ffff',

  // brightCyan: '#00ffff',
  brightCyan: '#00ffff',

  // white: '#d0d0d0',
  white: '#d0d0d0',

  // brightWhite: '#ffffff',
  brightWhite: '#ffffff',
};

const css = `
  * {
    -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
    text-rendering: optimizeLegibility !important;
    font-weight: 500;
  }
`;

module.exports = {
  config: {
    fontSize: 18,
    fontFamily: '"Input Mono", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    backgroundColor,
    foregroundColor,

    colors,
    css,

    cursorColor,
    cursorShape,
  }
};
