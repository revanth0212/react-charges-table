import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ChargesTable from './ChargesTable'

const BananaPie = () => <div style={{ paddingTop: '5px' }}>Banana Pie</div>

const sampleData = {
  chargesConfig: [
    {
      name: 'chocolateDonut',
      primaryText: 'Chocolate Donut',
      secondaryText: 'with some sparkels',
      disabled: false,
      value: 76.1,
    },
    {
      name: 'pizza',
      primaryText: 'Spinach Pizza Slice',
      secondaryText: 'Med',
      disabled: false,
      value: -10,
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
        <div style={{ padding: '75px 0px' }}>
          <ChargesTable
            chargesConfig={sampleData.chargesConfig}
            currencyCode="$"
            formatValue={(value) => value}
            listContainerStyle={{
              margin: 'auto',
              minWidth: '350px',
              maxWidth: '500px',
              minHeight: '100px',
            }}
            hideDivider={false}
            totalLabel="Final Total"
            hideTotal={false}
            mask="#.00"
            precision={2}
            onChargeChange={(newChargesConfig) => {
              console.group('Charge Changed')
              console.log(newChargesConfig)
              console.groupEnd('Charge Changed')
            }}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
/* eslint-enable react/prefer-stateless-function */

export default App
