import React, { Component } from 'react'
import { last, propOr, compose, dropLast, add, reduce, map } from 'ramda'

import './styles.css'
import ChargesTableView from './ChargesTable.view'

const calculateTotal = compose(reduce(add, 0), map(propOr(0, 'value')))

const injectTotalChargeConfig = (chargesConfig = []) => {
  chargesConfig.push({
    name: 'total',
    primaryText: 'Total',
    disabled: true,
    value: calculateTotal(chargesConfig),
  })
  return chargesConfig
}

class ChargesTable extends Component {
  static defaultProps = {
    chargesConfig: [],
    currencyCode: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      chargesConfig: props.chargesConfig.length ? injectTotalChargeConfig(props.chargesConfig) : [],
    }
  }

  onChargeChange = (index) => (value = 0) => {
    const chargesConfig = [...this.state.chargesConfig]
    chargesConfig[index].value = value
    const newTotal = calculateTotal(dropLast(1, chargesConfig))
    chargesConfig[chargesConfig.length - 1].value = newTotal
    this.setState({ chargesConfig })
  }

  getCharges = () => dropLast(1, this.state.chargesConfig)

  getTotal = () => compose(propOr(0, 'value'), last)(this.state.chargesConfig)

  render() {
    const { chargesConfig } = this.state
    const { currencyCode, listContainerStyle } = this.props
    return (
      <ChargesTableView
        chargesConfig={chargesConfig}
        onChargeChange={this.onChargeChange}
        currencyCode={currencyCode}
        listContainerStyle={listContainerStyle}
      />
    )
  }
}

export default ChargesTable
