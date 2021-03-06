// @flow

import React from 'react'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import renderIf from 'render-if'

import ChargeRow from './ChargeRow'

import type { ChargesTableViewPropTypes } from './ChargesTable.types'

const defaultlistContainerStyle = { minWidth: '350px', maxWidth: '500px', minHeight: '100px' }

const ChargesTableView = ({
  chargesConfig,
  onChargeChange,
  currencyCode,
  listContainerStyle = defaultlistContainerStyle,
  hideDivider = false,
  dividerStyle = {},
  mask,
  precision,
}: ChargesTableViewPropTypes) => (
  <List style={listContainerStyle}>
    {chargesConfig.map((chargeConfig, index) => (
      <div key={chargeConfig.name}>
        <ChargeRow
          key={chargeConfig.name}
          {...chargeConfig}
          onChargeChange={onChargeChange(index)}
          currencyCode={currencyCode}
          mask={mask}
          precision={precision}
        />
        {renderIf(!hideDivider && index !== chargesConfig.length - 1)(<Divider style={dividerStyle} />)}
      </div>
    ))}
  </List>
)

export default ChargesTableView
