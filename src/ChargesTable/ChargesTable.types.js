export type ChargeConfigType = {
  name: string,
  primaryText: string | Node,
  secondaryText?: string | Node,
  disabled?: boolean,
  value: number,
  chargeRowStyle?: Object,
  rootTextFieldStyle?: Object,
  chargeInputStyle?: Object,
}

export type ChargesTablePropTypes = {
  chargesConfig: Array<ChargeConfigType>,
  currencyCode?: string | Node,
  listContainerStyle?: Object,
  formatValue?: (oldValue: number) => number,
  hideDivider?: boolean,
  dividerStyle?: Object,
  totalLabel?: string,
  hideTotal?: boolean,
}

export type ChargesTableViewPropTypes = {
  chargesConfig: Array<ChargeConfigType>,
  onChargeChange: (id: number) => (value: number) => void,
  currencyCode: string | Node,
  listContainerStyle?: Object,
  hideDivider?: boolean,
  dividerStyle?: Object,
}

export type ChargeRowPropTypes = {
  ...ChargeConfigType,
  onChargeChange: (value: number) => void,
  currencyCode: string | Node,
}

export type CurrencyFieldPropTypes = {
  name: string,
  value: number,
  onChargeChange: (value: number) => void,
  disabled?: boolean,
  currencyCode: string,
  rootTextFieldStyle?: Object,
  chargeInputStyle?: Object,
}
