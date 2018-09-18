// @flow

import React, { Component } from 'react'
import { last, propOr, compose, dropLast, add, reduce, map, propEq, find } from 'ramda'

import './styles.css'
import ChargesTableView from './ChargesTable.view'

import type { ChargesTablePropTypes, ChargeConfigType } from './ChargesTable.types'

type ChargesTableStateTypes = {
  chargesConfig: Array<ChargeConfigType>,
}

const calculateTotal = compose(reduce(add, 0), map(propOr(0, 'value')))

const checkAndInjectTotal = (chargesConfig = [], totalLabel, totalFieldName) =>
  (find(propEq('name', totalFieldName))(chargesConfig)
    ? [...chargesConfig]
    : [
      ...chargesConfig,
      {
        name: totalFieldName,
        primaryText: totalLabel,
        disabled: true,
        value: calculateTotal(chargesConfig),
      },
    ])

class ChargesTable extends Component<ChargesTablePropTypes, ChargesTableStateTypes> {
  static defaultProps = {
    chargesConfig: [],
    currencyCode: '',
    formatValue: (value: number): number => value,
    totalLabel: 'Total',
    totalFieldName: 'total',
    hideTotal: false,
    onChargeChange: () => [],
    mask: '#',
    precision: 0,
  }

  constructor(props: ChargesTablePropTypes) {
    super(props)
    this.state = {
      chargesConfig: props.chargesConfig.length
        ? checkAndInjectTotal(props.chargesConfig, props.totalLabel, props.totalFieldName)
        : [],
    }
  }

  componentWillReceiveProps(newProps: ChargesTablePropTypes) {
    this.setState({
      chargesConfig: newProps.chargesConfig.length
        ? checkAndInjectTotal(newProps.chargesConfig, newProps.totalLabel, newProps.totalFieldName)
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
    const { currencyCode, listContainerStyle, hideDivider, dividerStyle, hideTotal, mask, precision } = this.props
    const chargesConfig = hideTotal ? dropLast(1, this.state.chargesConfig) : this.state.chargesConfig
    return (
      <ChargesTableView
        chargesConfig={chargesConfig}
        onChargeChange={this.onChargeChange}
        currencyCode={currencyCode}
        listContainerStyle={listContainerStyle}
        hideDivider={hideDivider}
        dividerStyle={dividerStyle}
        mask={mask}
        precision={precision}
      />
    )
  }
}

export default ChargesTable
