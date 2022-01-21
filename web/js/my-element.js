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
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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
        _this.name = 'World';
        /**
         * The number of times the button has been clicked.
         */
        _this.count = 0;
        return _this;
    }
    MyElement.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <h1>Hello, ", "!</h1>\n      <button @click=", " part=\"button\">\n        Click Count: ", "\n      </button>\n      <slot></slot>\n    "], ["\n      <h1>Hello, ", "!</h1>\n      <button @click=", " part=\"button\">\n        Click Count: ", "\n      </button>\n      <slot></slot>\n    "])), this.name, this._onClick, this.count);
    };
    MyElement.prototype._onClick = function () {
        this.count++;
    };
    MyElement.prototype.foo = function () {
        return 'foo';
    };
    MyElement.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: block;\n      border: solid 1px gray;\n      padding: 16px;\n      max-width: 800px;\n    }\n  "], ["\n    :host {\n      display: block;\n      border: solid 1px gray;\n      padding: 16px;\n      max-width: 800px;\n    }\n  "
        /**
         * The name to say "Hello" to.
         */
    ])));
    __decorate([
        property()
    ], MyElement.prototype, "name");
    __decorate([
        property({ type: Number })
    ], MyElement.prototype, "count");
    MyElement = __decorate([
        customElement('my-element')
    ], MyElement);
    return MyElement;
}(LitElement));
export { MyElement };
var templateObject_1, templateObject_2;
