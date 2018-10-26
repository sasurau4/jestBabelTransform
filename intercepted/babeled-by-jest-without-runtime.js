'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = createIconSet;
exports.DEFAULT_ICON_COLOR = exports.DEFAULT_ICON_SIZE = exports.NativeIconAPI = void 0;
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol === 'function' ? Symbol.iterator : '@@iterator') in
      Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

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
    _inherits(Icon, _PureComponent);
    function Icon() {
      var _getPrototypeOf2;
      var _this;
      _classCallCheck(this, Icon);
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }
      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(
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
    _createClass(Icon, [
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
            props = _objectWithoutProperties(_this$props, [
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

          var styleDefaults = {
            fontSize: size,
            color: color,
          };

          var styleOverrides = {
            fontFamily: fontReference,
            fontWeight: 'normal',
            fontStyle: 'normal',
          };

          props.style = [styleDefaults, style, styleOverrides, fontStyle || {}];
          props.ref = this.handleRef;

          return _react.default.createElement(
            _reactNative.Text,
            _extends({}, props, {
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
        _toConsumableArray(file.split('.'))
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
