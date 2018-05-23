import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ChargesTable from './Charges Table'

const BananaPie = () => <div style={{ paddingTop: '5px' }}>Banana Pie</div>

const sampleData = {
  chargesConfig: [
    {
      name: 'chocolateDonut',
      primaryText: 'Chocolate Donut',
      secondaryText: 'with some sparkels',
      disabled: false,
      value: 5,
    },
    {
      name: 'pizza',
      primaryText: 'Spinach Pizza Slice',
      secondaryText: 'Med',
      disabled: false,
      value: 10,
    },
    {
      name: 'veggieBurger',
      primaryText: 'Veggie Burger',
      secondaryText: 'Extra Spice',
      disabled: false,
      value: 38.32,
    },
    {
      name: 'bananaPie',
      primaryText: <BananaPie />,
      disabled: false,
      value: 7,
    },
  ],
}

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ChargesTable chargesConfig={sampleData.chargesConfig} currencyCode="$" />
      </MuiThemeProvider>
    )
  }
}
/* eslint-enable react/prefer-stateless-function */

export default App
