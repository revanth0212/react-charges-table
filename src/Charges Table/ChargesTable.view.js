import React from 'react'
import List from 'material-ui/List'
import ChargeRow from './ChargeRow'

const ChargesTableView = ({ chargesConfig }) => (
  <List>{chargesConfig.map((chargeConfig) => <ChargeRow {...chargeConfig} />)}</List>
)

export default ChargesTableView
