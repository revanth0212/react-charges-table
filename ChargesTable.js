'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

require('./styles.css');

var _ChargesTable = require('./ChargesTable.view');

var _ChargesTable2 = _interopRequireDefault(_ChargesTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Total = function Total() {
  return _react2.default.createElement(
    'div',
    { style: { paddingTop: '7px' } },
    'Total'
  );
};

var calculateTotal = (0, _ramda.compose)((0, _ramda.reduce)(_ramda.add, 0), (0, _ramda.map)((0, _ramda.propOr)(0, 'value')));

var injectTotalChargeConfig = function injectTotalChargeConfig() {
  var chargesConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  chargesConfig.push({
    name: 'total',
    primaryText: _react2.default.createElement(Total, null),
    disabled: true,
    value: calculateTotal(chargesConfig)
  });
  return chargesConfig;
};

var ChargesTable = function (_Component) {
  _inherits(ChargesTable, _Component);

  function ChargesTable(props) {
    _classCallCheck(this, ChargesTable);

    var _this = _possibleConstructorReturn(this, (ChargesTable.__proto__ || Object.getPrototypeOf(ChargesTable)).call(this, props));

    _this.onChargeChange = function (index) {
      return function () {
        var oldValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var formatValue = _this.props.formatValue;

        var value = formatValue(oldValue);
        var chargesConfig = [].concat(_toConsumableArray(_this.state.chargesConfig));
        chargesConfig[index].value = value;
        var newTotal = (0, _ramda.compose)(formatValue, calculateTotal, (0, _ramda.dropLast)(1))(chargesConfig);
        chargesConfig[chargesConfig.length - 1].value = newTotal;
        _this.setState({ chargesConfig: chargesConfig });
      };
    };

    _this.getCharges = function () {
      return (0, _ramda.dropLast)(1, _this.state.chargesConfig);
    };

    _this.getTotal = function () {
      return (0, _ramda.compose)((0, _ramda.propOr)(0, 'value'), _ramda.last)(_this.state.chargesConfig);
    };

    _this.state = {
      chargesConfig: props.chargesConfig.length ? injectTotalChargeConfig(props.chargesConfig) : []
    };
    return _this;
  }

  _createClass(ChargesTable, [{
    key: 'render',
    value: function render() {
      var chargesConfig = this.state.chargesConfig;
      var _props = this.props,
          currencyCode = _props.currencyCode,
          listContainerStyle = _props.listContainerStyle,
          hideDivider = _props.hideDivider,
          dividerStyle = _props.dividerStyle;

      return _react2.default.createElement(_ChargesTable2.default, {
        chargesConfig: chargesConfig,
        onChargeChange: this.onChargeChange,
        currencyCode: currencyCode,
        listContainerStyle: listContainerStyle,
        hideDivider: hideDivider,
        dividerStyle: dividerStyle
      });
    }
  }]);

  return ChargesTable;
}(_react.Component);

ChargesTable.defaultProps = {
  chargesConfig: [],
  currencyCode: '',
  formatValue: function formatValue(value) {
    return value;
  }
};
exports.default = ChargesTable;