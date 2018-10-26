var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = createIconSet;
exports.DEFAULT_ICON_COLOR = exports.DEFAULT_ICON_SIZE = exports.NativeIconAPI = void 0;
var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/toConsumableArray')
);
var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);
var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime/helpers/classCallCheck')
);
var _createClass2 = _interopRequireDefault(
  require('@babel/runtime/helpers/createClass')
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require('@babel/runtime/helpers/possibleConstructorReturn')
);
var _getPrototypeOf3 = _interopRequireDefault(
  require('@babel/runtime/helpers/getPrototypeOf')
);
var _inherits2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inherits')
);
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _reactNative = require('./react-native');
var _ensureNativeModuleAvailable = _interopRequireDefault(
  require('./ensure-native-module-available')
);
var _iconButton = _interopRequireDefault(require('./icon-button'));
var _tabBarItemIos = _interopRequireDefault(require('./tab-bar-item-ios'));
var _toolbarAndroid = _interopRequireDefault(require('./toolbar-android'));
var _jsxFileName =
  '/home/ihara/hobby/react/jestBabelTransform/node_modules/react-native-vector-icons/lib/create-icon-set.js';
var NativeIconAPI =
  _reactNative.NativeModules.RNVectorIconsManager ||
  _reactNative.NativeModules.RNVectorIconsModule;
exports.NativeIconAPI = NativeIconAPI;
var DEFAULT_ICON_SIZE = 12;
exports.DEFAULT_ICON_SIZE = DEFAULT_ICON_SIZE;
var DEFAULT_ICON_COLOR = 'black';
exports.DEFAULT_ICON_COLOR = DEFAULT_ICON_COLOR;
function createIconSet(glyphMap, fontFamily, fontFile, fontStyle) {
  var fontBasename = fontFile
    ? fontFile.replace(/\.(otf|ttf)$/, '')
    : fontFamily;
  var fontReference = _reactNative.Platform.select({
    windows: 'Assets/' + fontFile + '#' + fontFamily,
    android: fontBasename,
    web: fontBasename,
    default: fontFamily,
  });
  var IconNamePropType = _propTypes.default.oneOf(Object.keys(glyphMap));
  var Icon = (function(_PureComponent) {
    (0, _inherits2.default)(Icon, _PureComponent);
    function Icon() {
      var _getPrototypeOf2;
      var _this;
      (0, _classCallCheck2.default)(this, Icon);
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Icon)).call.apply(
          _getPrototypeOf2,
          [this].concat(args)
        )
      );
      _this.root = null;
      _this.handleRef = function(ref) {
        _this.root = ref;
      };
      return _this;
    }
    (0, _createClass2.default)(Icon, [
      {
        key: 'setNativeProps',
        value: function setNativeProps(nativeProps) {
          if (this.root) {
            this.root.setNativeProps(nativeProps);
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            name = _this$props.name,
            size = _this$props.size,
            color = _this$props.color,
            style = _this$props.style,
            children = _this$props.children,
            props = (0, _objectWithoutProperties2.default)(_this$props, [
              'name',
              'size',
              'color',
              'style',
              'children',
            ]);
          var glyph = name ? glyphMap[name] || '?' : '';
          if (typeof glyph === 'number') {
            glyph = String.fromCharCode(glyph);
          }
          var styleDefaults = { fontSize: size, color: color };
          var styleOverrides = {
            fontFamily: fontReference,
            fontWeight: 'normal',
            fontStyle: 'normal',
          };
          props.style = [styleDefaults, style, styleOverrides, fontStyle || {}];
          props.ref = this.handleRef;
          return _react.default.createElement(
            _reactNative.Text,
            (0, _extends2.default)({}, props, {
              __source: { fileName: _jsxFileName, lineNumber: 92 },
            }),
            glyph,
            children
          );
        },
      },
    ]);
    return Icon;
  })(_react.PureComponent);
  Icon.propTypes = {
    allowFontScaling: _propTypes.default.bool,
    name: IconNamePropType,
    size: _propTypes.default.number,
    color: _propTypes.default.oneOfType([
      _propTypes.default.string,
      _propTypes.default.number,
    ]),
    children: _propTypes.default.node,
    style: _propTypes.default.any,
  };
  Icon.defaultProps = { size: DEFAULT_ICON_SIZE, allowFontScaling: false };
  var imageSourceCache = {};
  function getImageSource(name) {
    var size =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : DEFAULT_ICON_SIZE;
    var color =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : DEFAULT_ICON_COLOR;
    (0, _ensureNativeModuleAvailable.default)();
    var glyph = glyphMap[name] || '?';
    if (typeof glyph === 'number') {
      glyph = String.fromCharCode(glyph);
    }
    var processedColor = (0, _reactNative.processColor)(color);
    var cacheKey = glyph + ':' + size + ':' + processedColor;
    var scale = _reactNative.PixelRatio.get();
    return new Promise(function(resolve, reject) {
      var cached = imageSourceCache[cacheKey];
      if (typeof cached !== 'undefined') {
        if (!cached || cached instanceof Error) {
          reject(cached);
        } else {
          resolve({ uri: cached, scale: scale });
        }
      } else {
        NativeIconAPI.getImageForFont(
          fontReference,
          glyph,
          size,
          processedColor,
          function(err, image) {
            var error = typeof err === 'string' ? new Error(err) : err;
            imageSourceCache[cacheKey] = image || error || false;
            if (!error && image) {
              resolve({ uri: image, scale: scale });
            } else {
              reject(error);
            }
          }
        );
      }
    });
  }
  function loadFont() {
    var file =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : fontFile;
    if (_reactNative.Platform.OS === 'ios') {
      (0, _ensureNativeModuleAvailable.default)();
      if (!file) {
        return Promise.reject(
          new Error('Unable to load font, because no file was specified. ')
        );
      }
      return NativeIconAPI.loadFontWithFileName.apply(
        NativeIconAPI,
        (0, _toConsumableArray2.default)(file.split('.'))
      );
    }
    return Promise.resolve();
  }
  function hasIcon(name) {
    return Object.prototype.hasOwnProperty.call(glyphMap, name);
  }
  function getRawGlyphMap() {
    return glyphMap;
  }
  function getFontFamily() {
    return fontReference;
  }
  Icon.Button = (0, _iconButton.default)(Icon);
  Icon.TabBarItem = (0, _tabBarItemIos.default)(
    IconNamePropType,
    getImageSource
  );
  Icon.TabBarItemIOS = Icon.TabBarItem;
  Icon.ToolbarAndroid = (0, _toolbarAndroid.default)(
    IconNamePropType,
    getImageSource
  );
  Icon.getImageSource = getImageSource;
  Icon.loadFont = loadFont;
  Icon.hasIcon = hasIcon;
  Icon.getRawGlyphMap = getRawGlyphMap;
  Icon.getFontFamily = getFontFamily;
  return Icon;
}
