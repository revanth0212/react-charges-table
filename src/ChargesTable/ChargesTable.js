// @flow

import React, { Component } from 'react'
import { last, propOr, compose, dropLast, add, reduce, map } from 'ramda'

import './styles.css'
import ChargesTableView from './ChargesTable.view'

import type { ChargesTablePropTypes, ChargeConfigType } from './ChargesTable.types'

type ChargesTableStateTypes = {
  chargesConfig: Array<ChargeConfigType>,
}

const Total = () => <div style={{ paddingTop: '7px' }}>Total</div>

const calculateTotal = compose(reduce(add, 0), map(propOr(0, 'value')))

const injectTotalChargeConfig = (chargesConfig = []) => {
  chargesConfig.push({
    name: 'total',
    primaryText: <Total />,
    disabled: true,
    value: calculateTotal(chargesConfig),
  })
  return chargesConfig
}

class ChargesTable extends Component<ChargesTablePropTypes, ChargesTableStateTypes> {
  static defaultProps = {
    chargesConfig: [],
    currencyCode: '',
    formatValue: (value: number): number => value,
  }

  constructor(props: ChargesTablePropTypes) {
    super(props)
    this.state = {
      chargesConfig: props.chargesConfig.length ? injectTotalChargeConfig(props.chargesConfig) : [],
    }
  }

  onChargeChange = (index: number) => (oldValue: number = 0) => {
    const { formatValue } = this.props
    const value = formatValue(oldValue)
    const chargesConfig = [...this.state.chargesConfig]
    chargesConfig[index].value = value
    const newTotal = compose(formatValue, calculateTotal, dropLast(1))(chargesConfig)
    chargesConfig[chargesConfig.length - 1].value = newTotal
    this.setState({ chargesConfig })
  }

  getCharges = () => dropLast(1, this.state.chargesConfig)

  getTotal = () => compose(propOr(0, 'value'), last)(this.state.chargesConfig)

  render() {
    const { chargesConfig } = this.state
    const { currencyCode, listContainerStyle, hideDivider, dividerStyle } = this.props
    return (
      <ChargesTableView
        chargesConfig={chargesConfig}
        onChargeChange={this.onChargeChange}
        currencyCode={currencyCode}
        listContainerStyle={listContainerStyle}
        hideDivider={hideDivider}
        dividerStyle={dividerStyle}
      />
    )
  }
}

export default ChargesTable
