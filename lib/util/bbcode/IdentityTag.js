"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bbcode_to_react_1 = require("bbcode-to-react");
class IdentityTag extends bbcode_to_react_1.Tag {
    toHTML() {
        return [this.getContent()];
    }
    toReact() {
        return this.getComponents();
    }
}
exports.default = IdentityTag;
