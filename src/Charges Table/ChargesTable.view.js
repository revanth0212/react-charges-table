// @flow

import React from 'react'
import List from 'material-ui/List'

import ChargeRow from './ChargeRow'

import type { ChargesTableViewPropTypes } from './ChargesTable.types'

const ChargesTableView = ({ chargesConfig, onChargeChange, currencyCode }: ChargesTableViewPropTypes) => (
  <List>
    {chargesConfig.map((chargeConfig, index) => (
      <ChargeRow
        key={chargeConfig.name}
        {...chargeConfig}
        onChargeChange={onChargeChange(index)}
        currencyCode={currencyCode}
      />
    ))}
  </List>
)

export default ChargesTableView
