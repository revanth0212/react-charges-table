// @flow

import React from 'react'
import ListItem from 'material-ui/List/ListItem'

import CurrencyField from './CurrencyField'

import type { ChargeRowPropTypes } from './ChargesTable.types'

const defaultRowStyle = { minHeight: '40px', padding: '15px' }

const ChargeRow = ({
  name,
  primaryText,
  secondaryText = ' ',
  disabled,
  value,
  onChargeChange,
  currencyCode,
  chargeRowStyle = defaultRowStyle,
  chargeInputStyle,
  mask,
  precision,
}: ChargeRowPropTypes) => (
  <ListItem
    key={name}
    primaryText={primaryText}
    secondaryText={secondaryText}
    disabled
    style={chargeRowStyle}
    rightIcon={
      <CurrencyField
        name={name}
        value={value}
        disabled={disabled}
        onChargeChange={onChargeChange}
        currencyCode={currencyCode}
        chargeInputStyle={chargeInputStyle}
        mask={mask}
        precision={precision}
      />
    }
  />
)

export default ChargeRow
