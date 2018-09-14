'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultChargeInputStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(21, 13, 187, 0.7)',
  color: 'rgba(255, 255, 255, 1)'
};

var defaultRootTextFieldStyle = { paddingLeft: '10px', width: '125px', margin: '-5px' };

var convertValueToNumber = function convertValueToNumber(value) {
  return Number(value) || 0;
};

var CurrencyField = function CurrencyField(_ref) {
  var name = _ref.name,
      _ref$value = _ref.value,
      value = _ref$value === undefined ? 0 : _ref$value,
      onChargeChange = _ref.onChargeChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === undefined ? false : _ref$disabled,
      currencyCode = _ref.currencyCode,
      _ref$rootTextFieldSty = _ref.rootTextFieldStyle,
      rootTextFieldStyle = _ref$rootTextFieldSty === undefined ? defaultRootTextFieldStyle : _ref$rootTextFieldSty,
      _ref$chargeInputStyle = _ref.chargeInputStyle,
      chargeInputStyle = _ref$chargeInputStyle === undefined ? defaultChargeInputStyle : _ref$chargeInputStyle;
  return _react2.default.createElement(
    'span',
    { style: { display: 'inline', float: 'right' } },
    currencyCode,
    _react2.default.createElement(_TextField2.default, {
      name: name + '-charge',
      value: value,
      disabled: disabled,
      onChange: function onChange(event, newValue) {
        return onChargeChange(convertValueToNumber(newValue));
      },
      style: rootTextFieldStyle,
      inputStyle: chargeInputStyle,
      underlineShow: false
    })
  );
};

exports.default = CurrencyField;