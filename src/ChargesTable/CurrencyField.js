// @flow

import React from 'react'
import TextField from 'material-ui/TextField'

import type { CurrencyFieldPropTypes } from './ChargesTable.types'

const defaultChargeInputStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(21, 13, 187, 0.7)',
  color: 'rgba(255, 255, 255, 1)',
}

const defaultRootTextFieldStyle = { paddingLeft: '10px', width: '125px', margin: '-5px' }

const CurrencyField = ({
  name,
  value = 0,
  onChargeChange,
  disabled = false,
  currencyCode,
  rootTextFieldStyle = defaultRootTextFieldStyle,
  chargeInputStyle = defaultChargeInputStyle,
}: CurrencyFieldPropTypes) => (
  <span style={{ display: 'inline', float: 'right' }}>
    {currencyCode}
    <TextField
      name={`${name}-charge`}
      value={value}
      disabled={disabled}
      onChange={(event, newValue) => onChargeChange(newValue)}
      style={rootTextFieldStyle}
      inputStyle={chargeInputStyle}
      underlineShow={false}
      type="number"
    />
  </span>
)

export default CurrencyField
