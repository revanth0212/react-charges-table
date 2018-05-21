import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ChargesTable from './Charges Table'

const sampleData = {
  chargesConfig: [
    {
      primaryText: 'Charge 1',
      secondaryText: 'Charge 1',
      disabled: false,
      value: 32,
    },
    {
      primaryText: 'Charge 2',
      secondaryText: 'Charge 2',
      disabled: false,
      value: 32,
    },
    {
      primaryText: 'Charge 3',
      secondaryText: 'Charge 3',
      disabled: false,
      value: 32,
    },
    {
      primaryText: 'Total',
      secondaryText: 'Total Charge',
      disabled: true,
      value: 32,
    },
  ],
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <ChargesTable chargesConfig={sampleData.chargesConfig} />
      </MuiThemeProvider>
    )
  }
}

export default App
