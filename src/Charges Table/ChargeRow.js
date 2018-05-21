import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import TextField from 'material-ui/TextField'

const ChargeRow = ({ primaryText, secondaryText, disabled, value }) => (
  <ListItem
    primaryText={primaryText}
    secondaryText={secondaryText}
    disabled
    rightIcon={<TextField defaultValue={value} disabled={disabled} />}
  />
)

export default ChargeRow
