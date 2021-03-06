// @flow

import React from 'react'
import { isNil, compose } from 'ramda'
import TextField from 'material-ui/TextField'
import Formatter from 'string-mask'

import type { CurrencyFieldPropTypes } from './ChargesTable.types'

const defaultChargeInputStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(21, 13, 187, 0.7)',
  color: 'rgba(255, 255, 255, 1)',
}

const defaultRootTextFieldStyle = { paddingLeft: '10px', width: '125px', margin: '-5px' }

const convertValueToNumber = (value: any): number => Number(value) || 0

const removeNonNumericChars = (value: string): string => value.replace(/[^0-9-+]/g, '')

const formatUsingMask = (mask: string, rawNumber: string): string => {
  const number = rawNumber.startsWith('-') || rawNumber.startsWith('+') ? rawNumber.slice(1) : rawNumber
  const formattedValue = new Formatter(mask, { reverse: true }).apply(number)
  return (Number(rawNumber) || 0) < 0 ? `-  ${formattedValue}` : formattedValue
}

const formatValue = (mask: string) => (number: string): string =>
  (isNil(mask) ? number.toString() : formatUsingMask(mask, number))

const formatValueWithPrecision = (precision: number) => (value: any): string => value.toFixed(precision)

const insertDecimal = (precision: number) => (value: string): string =>
  `${value.slice(0, value.length - precision)}.${value.slice(value.length - precision)}`

const CurrencyField = ({
  name,
  value = 0,
  onChargeChange,
  disabled = false,
  currencyCode,
  rootTextFieldStyle = defaultRootTextFieldStyle,
  chargeInputStyle = defaultChargeInputStyle,
  mask: rawMask,
  precision,
}: CurrencyFieldPropTypes) => {
  const mask = `${currencyCode} ${rawMask}`
  return (
    <span style={{ display: 'inline', float: 'right' }}>
      <TextField
        name={`${name}-charge`}
        value={compose(formatValue(mask), removeNonNumericChars, formatValueWithPrecision(precision))(value)}
        disabled={disabled}
        onChange={(event, newValue: string) => {
          compose(onChargeChange, convertValueToNumber, insertDecimal(precision), removeNonNumericChars)(newValue)
        }}
        style={rootTextFieldStyle}
        inputStyle={chargeInputStyle}
        underlineShow={false}
      />
    </span>
  )
}

export default CurrencyField
