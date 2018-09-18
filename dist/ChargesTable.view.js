'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _renderIf = require('render-if');

var _renderIf2 = _interopRequireDefault(_renderIf);

var _ChargeRow = require('./ChargeRow');

var _ChargeRow2 = _interopRequireDefault(_ChargeRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultlistContainerStyle = { minWidth: '350px', maxWidth: '500px', minHeight: '100px' };

var ChargesTableView = function ChargesTableView(_ref) {
  var chargesConfig = _ref.chargesConfig,
      onChargeChange = _ref.onChargeChange,
      currencyCode = _ref.currencyCode,
      _ref$listContainerSty = _ref.listContainerStyle,
      listContainerStyle = _ref$listContainerSty === undefined ? defaultlistContainerStyle : _ref$listContainerSty,
      _ref$hideDivider = _ref.hideDivider,
      hideDivider = _ref$hideDivider === undefined ? false : _ref$hideDivider,
      _ref$dividerStyle = _ref.dividerStyle,
      dividerStyle = _ref$dividerStyle === undefined ? {} : _ref$dividerStyle,
      mask = _ref.mask,
      precision = _ref.precision;
  return _react2.default.createElement(
    _List2.default,
    { style: listContainerStyle },
    chargesConfig.map(function (chargeConfig, index) {
      return _react2.default.createElement(
        'div',
        { key: chargeConfig.name },
        _react2.default.createElement(_ChargeRow2.default, _extends({
          key: chargeConfig.name
        }, chargeConfig, {
          onChargeChange: onChargeChange(index),
          currencyCode: currencyCode,
          mask: mask,
          precision: precision
        })),
        (0, _renderIf2.default)(!hideDivider && index !== chargesConfig.length - 1)(_react2.default.createElement(_Divider2.default, { style: dividerStyle }))
      );
    })
  );
};

exports.default = ChargesTableView;