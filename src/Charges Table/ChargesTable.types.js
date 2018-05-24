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
  formatCharge?: (oldValue: number) => number,
}

export type ChargesTableViewPropTypes = {
  chargesConfig: Array<ChargeConfigType>,
  onChargeChange: (id: number) => (value: number) => void,
  currencyCode: string | Node,
  listContainerStyle?: Object,
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
