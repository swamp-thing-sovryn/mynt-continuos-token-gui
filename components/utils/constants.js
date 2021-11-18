export const COLORS = {
  PRIMARY: 'black',
  ACCENT: 'rgb(254, 192, 4)',
  COLLATERAL: 'black',
  BONDED: '#5C5C5C',
  BACKGROUND: '#181C1F',
  FONT: '#E8E8E8',
  FONT_ACCENT: '#E8E8E8',
  FONT_BUTTON_ACCENT: 'black',
}

export function getTokenName(symbol) {
  if (symbol === 'COLLATERAL') {
    return 'SOV'
  }
  if (symbol === 'BONDED') {
    return 'MYNT'
  }
}
