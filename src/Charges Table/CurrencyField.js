import React from 'react'
import TextField from 'material-ui/TextField'

const CurrencyField = ({ name, value, onChargeChange, disabled, currencyCode }) => (
  <span style={{ display: 'inline', float: 'right' }}>
    {currencyCode}
    <TextField
      name={`${name}-charge`}
      value={value}
      disabled={disabled}
      onChange={(event, newValue) => onChargeChange(newValue)}
      style={{ paddingLeft: '10px', width: '125px', marginTop: '-10px' }}
      inputStyle={{
        textAlign: 'center',
        backgroundColor: 'rgba(21, 13, 187, 0.7)',
        color: 'rgba(255, 255, 255, 1)',
      }}
      underlineShow={false}
      type="number"
    />
  </span>
)

export default CurrencyField
