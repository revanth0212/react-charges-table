# react-charges-table

It is a Material UI based React Component that helps in maintaining Charges Tables.

Checkout the demo [here](https://revanth0212.github.io/react-charges-table/).

# Installation

npm install react-charges-table

# Usage

    import  ChargesTable  from  'react-charges-table'
    
    <ChargesTable
	   ref={(node) => {
		  this.chargesTable = node
	   }}
	   chargesConfig={sampleData.chargesConfig}
	   currencyCode="$"
	   listContainerStyle={{ minWidth: '350px', maxWidth: '500px', minHeight: '100px' }}
    />

Make sure your app is wrapped inside `<MuiThemeProvider>` which you can import like this: `import  MuiThemeProvider  from  'material-ui/styles/MuiThemeProvider'`.

# Props

| Prop | Prop Type | Default Value | isRequired | Description |
|--|--|--|--|--|
|`chargesConfig`|`Array<ChargesConfig>`|[]|true|Charges Config.|
|`currencyCode`|`string Node`|''|false|List of items that will be shown in the selected list.|
|`listContainerStyle`|`Object`|{}|false|Will override default list container styling.|

# Functions

|Function Name|Function Type|Description|
|--|--|--|
|`getCharges`|`() => Array<ChargesConfig>`|Returns the current list of charges.|
|`getTotal`|`() => number`|Returns the total.|

You can find the type of `ChargesConfig` from the next section.

You have to call these functions using the ChargesTable's `ref`.

# ChargesConfig

    type  ChargeConfigType = {
	    name: string,
	    primaryText: string | Node,
	    secondaryText?: string | Node,
	    disabled?: boolean,
	    value: number,
	    chargeRowStyle?: Object,
	    rootTextFieldStyle?: Object,
	    chargeInputStyle?: Object,
    }

| Key | Default Value | isRequired | Description |
|--|--|--|--|
| name | '' | true | Unique value that will be used to identify the charge in the list. |
| disabled | false | false | If set, will disable editing the charge. |
| primaryText | '' | true | Text or Node that will be rendered as the charge's description. |
| secondaryText | '' | false | Secondary Text or Node that will be rendered as the charge's description. |
| value | 0 | true | Value of the charge. |
| chargeRowStyle | {} | false | Override the default style of the charge row in the charges list. |
| rootTextFieldStyle | {} | false | Override the inline-styles of the root text element. |
| chargeInputStyle | {} | false | Override the inline-styles of the TextField's input element. |
