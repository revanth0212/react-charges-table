// @flow

import React from 'react'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'

import ChargeRow from './ChargeRow'

import type { ChargesTableViewPropTypes } from './ChargesTable.types'

const ChargesTableView = ({ chargesConfig, onChargeChange, currencyCode }: ChargesTableViewPropTypes) => (
  <List style={{ minWidth: '350px', maxWidth: '500px', minHeight: '100px' }}>
    {chargesConfig.map((chargeConfig, index) => (
      <div key={chargeConfig.name}>
        <ChargeRow
          key={chargeConfig.name}
          {...chargeConfig}
          onChargeChange={onChargeChange(index)}
          currencyCode={currencyCode}
        />
        <Divider />
      </div>
    ))}
  </List>
)

export default ChargesTableView
