var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { StatusBar, Style } from "@capacitor/status-bar";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The name to say "Hello" to.
         */
        _this.name = "World";
        /**
         * The number of times the button has been clicked.
         */
        _this.count = 0;
        return _this;
    }
    MyElement.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <main>\n        <header><span class=\"title\"> Hello, ", "! </span></header>\n        <section>\n          <button @click=", " part=\"button\">\n            Click Count: ", "\n          </button>\n          <slot></slot>\n        </section>\n      </main>\n    "], ["\n      <main>\n        <header><span class=\"title\"> Hello, ", "! </span></header>\n        <section>\n          <button @click=", " part=\"button\">\n            Click Count: ", "\n          </button>\n          <slot></slot>\n        </section>\n      </main>\n    "])), this.name, this._onClick, this.count);
    };
    MyElement.prototype._onClick = function () {
        this.count++;
    };
    MyElement.prototype.foo = function () {
        return "foo";
    };
    MyElement.prototype.firstUpdated = function () {
        var _this = this;
        StatusBar.setOverlaysWebView({ overlay: true });
        var setStatusBarStyleDark = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, StatusBar.setStyle({ style: Style.Dark })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        setStatusBarStyleDark();
    };
    MyElement.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    main {\n      --bg-color: #f0f0f0;\n      --fg-color: #000;\n      --app-bar-color: navy;\n      --app-bar-on-color: white;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      /* Settings for the notch */\n      background-color: var(--app-bar-color);\n      padding-top: var(--inset-top);\n      height: calc(100% - var(--inset-top));\n    }\n    header {\n      background-color: var(--app-bar-color);\n      color: var(--app-bar-on-color);\n      padding: 1rem;\n      padding-left: var(--inset-left);\n      padding-right: var(--inset-right);\n    }\n    .title {\n      padding-left: 1rem;\n    }\n    section {\n      padding: 1rem;\n      background-color: var(--bg-color);\n      color: var(--fg-color);\n      flex: 1;\n      /* Settings for the notch */\n      padding-bottom: var(--inset-bottom);\n      padding-left: var(--inset-left);\n      padding-right: var(--inset-right);\n    }\n    @media (prefers-color-scheme: dark) {\n      section {\n        color: var(--bg-color);\n        background-color: var(--fg-color);\n      }\n    }\n  "], ["\n    main {\n      --bg-color: #f0f0f0;\n      --fg-color: #000;\n      --app-bar-color: navy;\n      --app-bar-on-color: white;\n      display: flex;\n      flex-direction: column;\n      width: 100%;\n      /* Settings for the notch */\n      background-color: var(--app-bar-color);\n      padding-top: var(--inset-top);\n      height: calc(100% - var(--inset-top));\n    }\n    header {\n      background-color: var(--app-bar-color);\n      color: var(--app-bar-on-color);\n      padding: 1rem;\n      padding-left: var(--inset-left);\n      padding-right: var(--inset-right);\n    }\n    .title {\n      padding-left: 1rem;\n    }\n    section {\n      padding: 1rem;\n      background-color: var(--bg-color);\n      color: var(--fg-color);\n      flex: 1;\n      /* Settings for the notch */\n      padding-bottom: var(--inset-bottom);\n      padding-left: var(--inset-left);\n      padding-right: var(--inset-right);\n    }\n    @media (prefers-color-scheme: dark) {\n      section {\n        color: var(--bg-color);\n        background-color: var(--fg-color);\n      }\n    }\n  "])));
    __decorate([
        property()
    ], MyElement.prototype, "name");
    __decorate([
        property({ type: Number })
    ], MyElement.prototype, "count");
    MyElement = __decorate([
        customElement("my-element")
    ], MyElement);
    return MyElement;
}(LitElement));
export { MyElement };
var templateObject_1, templateObject_2;
