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

export const STEP_RAISE_APPROVAL = 'STEP_RAISE_APPROVAL';
export const STEP_RESET_APPROVAL = 'STEP_RESET_APPROVAL';
export const STEP_CREATE_ORDER = 'STEP_CREATE_ORDER';
export const STEP_WAIT_BATCH = 'STEP_WAIT_BATCH';
export const STEP_CLAIM_BATCH = 'STEP_CLAIM_BATCH';