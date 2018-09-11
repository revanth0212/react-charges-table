// @flow

import React, { Component } from 'react'
import { last, propOr, compose, dropLast, add, reduce, map } from 'ramda'

import './styles.css'
import ChargesTableView from './ChargesTable.view'

import type { ChargesTablePropTypes, ChargeConfigType } from './ChargesTable.types'

type ChargesTableStateTypes = {
  chargesConfig: Array<ChargeConfigType>,
}

const Total = ({ label }) => <div style={{ paddingTop: '7px' }}>{label}</div>

const calculateTotal = compose(reduce(add, 0), map(propOr(0, 'value')))

const injectTotalChargeConfig = (chargesConfig = [], totalLabel) => {
  chargesConfig.push({
    name: 'total',
    primaryText: <Total label={totalLabel} />,
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
    totalLabel: 'Total',
    hideTotal: false,
    onChargeChange: () => [],
  }

  constructor(props: ChargesTablePropTypes) {
    super(props)
    this.state = {
      chargesConfig: props.chargesConfig.length ? injectTotalChargeConfig(props.chargesConfig, props.totalLabel) : [],
    }
  }

  componentWillReceiveProps(newProps: ChargesTablePropTypes) {
    this.setState({
      chargesConfig: newProps.chargesConfig.length
        ? injectTotalChargeConfig(newProps.chargesConfig, newProps.totalLabel)
        : [],
    })
  }

  onChargeChange = (index: number) => (oldValue: number = 0) => {
    const { formatValue } = this.props
    const value = formatValue(oldValue)
    const chargesConfig = [...this.state.chargesConfig]
    chargesConfig[index].value = value
    const newTotal = compose(formatValue, calculateTotal, dropLast(1))(chargesConfig)
    chargesConfig[chargesConfig.length - 1].value = newTotal
    this.setState({ chargesConfig })
    this.props.onChargeChange(chargesConfig)
  }

  getCharges = () => dropLast(1, this.state.chargesConfig)

  getTotal = () => compose(propOr(0, 'value'), last)(this.state.chargesConfig)

  render() {
    const { currencyCode, listContainerStyle, hideDivider, dividerStyle, hideTotal } = this.props
    const chargesConfig = hideTotal ? dropLast(1, this.state.chargesConfig) : this.state.chargesConfig
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
