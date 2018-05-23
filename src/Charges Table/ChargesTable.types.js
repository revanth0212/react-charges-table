export type ChargeConfigType = {
  name: string,
  primaryText: string | Node,
  secondaryText?: string | Node,
  disabled?: boolean,
  value: number,
}

export type ChargesTablePropTypes = {
  chargesConfig: Array<ChargeConfigType>,
  currencyCode?: string,
}

export type ChargesTableViewPropTypes = {
  chargesConfig: Array<ChargeConfigType>,
  onChargeChange: (id: number) => (value: number) => void,
  currencyCode: string,
}

export type ChargeRowPropTypes = {
  ...ChargeConfigType,
  onChargeChange: (value: number) => void,
  currencyCode: string,
}

export type CurrencyFieldPropTypes = {
  name: string,
  value: number,
  onChargeChange: (value: number) => void,
  disabled?: boolean,
  currencyCode: string,
}
