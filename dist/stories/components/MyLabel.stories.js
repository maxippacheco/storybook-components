"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundcolor = exports.CustomFontcolor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
// Title - Component
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        // cambiar la ui => controles
        color: { control: 'select' },
        fontColor: { control: 'color' }
        // color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] }
    }
};
// StoryBook Render
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// CREAR UNA COPIA DE ESTE TEMPLATE ROMPIENDO LA DIFERENCIA CON ESTE OBJETO => BIND()
// estariamos mutando el objeto sino
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCaps: false, // TRUE: Capitalizar toda la palabra
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontcolor = Template.bind({});
exports.CustomFontcolor.args = {
    fontColor: '#5517ac',
    size: 'h1'
};
exports.CustomBackgroundcolor = Template.bind({});
exports.CustomBackgroundcolor.args = {
    fontColor: 'white',
    size: 'h1',
    backgroundColor: 'black'
};
