'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _CurrencyField = require('./CurrencyField');

var _CurrencyField2 = _interopRequireDefault(_CurrencyField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRowStyle = { minHeight: '40px', padding: '15px' };

var ChargeRow = function ChargeRow(_ref) {
  var name = _ref.name,
      primaryText = _ref.primaryText,
      _ref$secondaryText = _ref.secondaryText,
      secondaryText = _ref$secondaryText === undefined ? ' ' : _ref$secondaryText,
      disabled = _ref.disabled,
      value = _ref.value,
      onChargeChange = _ref.onChargeChange,
      currencyCode = _ref.currencyCode,
      _ref$chargeRowStyle = _ref.chargeRowStyle,
      chargeRowStyle = _ref$chargeRowStyle === undefined ? defaultRowStyle : _ref$chargeRowStyle,
      chargeInputStyle = _ref.chargeInputStyle,
      mask = _ref.mask,
      precision = _ref.precision;
  return _react2.default.createElement(_ListItem2.default, {
    key: name,
    primaryText: primaryText,
    secondaryText: secondaryText,
    disabled: true,
    style: chargeRowStyle,
    rightIcon: _react2.default.createElement(_CurrencyField2.default, {
      name: name,
      value: value,
      disabled: disabled,
      onChargeChange: onChargeChange,
      currencyCode: currencyCode,
      chargeInputStyle: chargeInputStyle,
      mask: mask,
      precision: precision
    })
  });
};

exports.default = ChargeRow;