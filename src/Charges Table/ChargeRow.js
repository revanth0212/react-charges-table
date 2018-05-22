import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import CurrencyField from './CurrencyField'

const ChargeRow = ({ name, primaryText, secondaryText, disabled, value, onChargeChange, currencyCode }) => (
  <ListItem
    key={name}
    primaryText={primaryText}
    secondaryText={secondaryText}
    disabled
    style={{ minWidth: '350px', maxWidth: '500px' }}
    rightIcon={
      <CurrencyField
        name={name}
        value={value}
        disabled={disabled}
        onChargeChange={onChargeChange}
        currencyCode={currencyCode}
      />
    }
  />
)

export default ChargeRow
