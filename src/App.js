import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ChargesTable from './Charges Table'

const sampleData = {
  chargesConfig: [
    {
      name: 'charge1',
      primaryText: 'Charge 1',
      secondaryText: 'Charge 1',
      disabled: false,
      value: 32,
    },
    {
      name: 'charge2',
      primaryText: 'Charge 2',
      secondaryText: 'Charge 2',
      disabled: false,
      value: 32,
    },
    {
      name: 'charge3',
      primaryText: 'Charge 3',
      secondaryText: 'Charge 3',
      disabled: false,
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
