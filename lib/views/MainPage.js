"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentEx_1 = require("../util/ComponentEx");
const MainPageBody_1 = require("./MainPageBody");
const MainPageHeader_1 = require("./MainPageHeader");
const MainPageOverlay_1 = require("./MainPageOverlay");
const React = require("react");
class MainPage extends ComponentEx_1.ComponentEx {
    render() {
        const { children, className, domRef, id } = this.props;
        return (React.createElement("div", { id: id, ref: domRef, className: (className || '') + ' main-page-inner' }, children));
    }
}
MainPage.Body = MainPageBody_1.default;
MainPage.Header = MainPageHeader_1.default;
MainPage.Overlay = MainPageOverlay_1.default;
exports.default = MainPage;
