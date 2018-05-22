import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import TextField from 'material-ui/TextField'

const ChargeRow = ({ name, primaryText, secondaryText, disabled, value, onChargeChange }) => (
  <ListItem
    key={name}
    primaryText={primaryText}
    secondaryText={secondaryText}
    disabled
    rightIcon={
      <TextField
        name={`${name}-charge`}
        value={value}
        disabled={disabled}
        onChange={(event, newValue) => onChargeChange(newValue)}
      />
    }
  />
)

export default ChargeRow
