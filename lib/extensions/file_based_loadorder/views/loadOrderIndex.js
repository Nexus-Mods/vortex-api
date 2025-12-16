"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadOrderIndexInput = LoadOrderIndexInput;
const react_1 = __importStar(require("react"));
function LoadOrderIndexInput(props) {
    const { item, loadOrder, currentPosition, lockedEntriesCount, onApplyIndex } = props;
    // Valid ranges.
    const startIndex = lockedEntriesCount + 1;
    const maxIndex = loadOrder.length;
    const [inputValue, setInputValue] = (0, react_1.useState)(currentPosition.toString());
    const handleInputChange = react_1.default.useCallback((event) => {
        // Meant to be used as validation only.
        try {
            const newIndex = parseInt(event.target.value, 10);
            setInputValue(newIndex.toString());
        }
        catch (err) {
            setInputValue(currentPosition.toString());
        }
    }, [currentPosition, maxIndex, startIndex]);
    const handleKeyPress = react_1.default.useCallback((event) => {
        if (event.key === "Enter") {
            // Apply new index
            let newIndex = parseInt(inputValue, 10);
            newIndex = Math.max(startIndex, Math.min(maxIndex, newIndex));
            onApplyIndex(newIndex);
            setInputValue(newIndex.toString());
        }
        if (event.key === "Escape") {
            // reset
            setInputValue(currentPosition.toString());
        }
    }, [currentPosition, maxIndex, startIndex, inputValue]);
    const handleBlur = react_1.default.useCallback(() => {
        // User moved away from the input, reset the index.
        setInputValue(currentPosition.toString());
    }, [currentPosition]);
    react_1.default.useEffect(() => {
        setInputValue(currentPosition.toString());
    }, [currentPosition]);
    return props.isLocked(item) ? (react_1.default.createElement("p", { className: props.className }, inputValue)) : (react_1.default.createElement("div", { className: props.className },
        react_1.default.createElement("input", { type: "number", value: inputValue, onChange: handleInputChange, onKeyDown: handleKeyPress, onBlur: handleBlur, min: startIndex, max: maxIndex })));
}
