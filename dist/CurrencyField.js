'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _stringMask = require('string-mask');

var _stringMask2 = _interopRequireDefault(_stringMask);

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

var removeNonNumericChars = function removeNonNumericChars(value) {
  return value.replace(/\D/g, '');
};

var formatUsingMask = function formatUsingMask(mask, number) {
  return new _stringMask2.default(mask, { reverse: true }).apply(number);
};

var formatValue = function formatValue(mask) {
  return function (number) {
    return (0, _ramda.isNil)(mask) ? number.toString() : formatUsingMask(mask, number);
  };
};

var formatValueWithPrecision = function formatValueWithPrecision(precision) {
  return function (value) {
    return value.toFixed(precision);
  };
};

var insertDecimal = function insertDecimal(precision) {
  return function (value) {
    return value.slice(0, value.length - precision) + '.' + value.slice(value.length - precision);
  };
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
      chargeInputStyle = _ref$chargeInputStyle === undefined ? defaultChargeInputStyle : _ref$chargeInputStyle,
      rawMask = _ref.mask,
      precision = _ref.precision;

  var mask = currencyCode + ' ' + rawMask;
  return _react2.default.createElement(
    'span',
    { style: { display: 'inline', float: 'right' } },
    _react2.default.createElement(_TextField2.default, {
      name: name + '-charge',
      value: (0, _ramda.compose)(formatValue(mask), removeNonNumericChars, formatValueWithPrecision(precision))(value),
      disabled: disabled,
      onChange: function onChange(event, newValue) {
        (0, _ramda.compose)(onChargeChange, convertValueToNumber, insertDecimal(precision), removeNonNumericChars)(newValue);
      },
      style: rootTextFieldStyle,
      inputStyle: chargeInputStyle,
      underlineShow: false
    })
  );
};

exports.default = CurrencyField;