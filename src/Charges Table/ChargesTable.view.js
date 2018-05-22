import React from 'react'
import List from 'material-ui/List'
import ChargeRow from './ChargeRow'

const ChargesTableView = ({ chargesConfig, onChargeChange }) => (
  <List>
    {chargesConfig.map((chargeConfig, index) => (
      <ChargeRow key={chargeConfig.name} {...chargeConfig} onChargeChange={onChargeChange(index)} />
    ))}
  </List>
)

export default ChargesTableView
