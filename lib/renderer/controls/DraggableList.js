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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const React = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_dnd_1 = require("react-dnd");
const ComponentEx_1 = require("../../util/ComponentEx");
const DraggableListItem_1 = __importDefault(require("./DraggableListItem"));
/**
 * A list component that allows the user to manually re-order the items
 * in it.
 * It also allows items to be dragged into another list.
 *
 * Important: items has to either be a string, a number, an object with an "id" field or you have
 *   to specify idFunc through props
 */
class DraggableList extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        this.handleItemClick = (index) => (event) => {
            const { ordered, selectedItems, lastSelectedIndex } = this.state;
            const item = ordered[index];
            if (this.itemLocked(item) || this.props.disabled) {
                this.nextState.draggedItems = [];
                this.nextState.selectedItems = [];
                this.nextState.lastSelectedIndex = null;
                return;
            }
            let newSelectedItems = selectedItems.slice();
            this.nextState.draggedItems = [];
            if (event.ctrlKey) {
                // Handle Ctrl for multi-selection
                if (selectedItems.includes(item)) {
                    newSelectedItems = selectedItems.filter(i => i !== item); // Deselect
                }
                else {
                    newSelectedItems.push(item); // Select
                }
            }
            else if (event.shiftKey && lastSelectedIndex !== null) {
                // Handle Shift for range selection
                const range = [lastSelectedIndex, index].sort((a, b) => a - b);
                const rangeItems = ordered.slice(range[0], range[1] + 1);
                newSelectedItems = [...new Set([...selectedItems, ...rangeItems])];
            }
            else {
                // Regular click selects single item and deselects others
                newSelectedItems = [item];
            }
            this.nextState.selectedItems = newSelectedItems;
            this.nextState.lastSelectedIndex = index; // Update last selected index for shift selection
        };
        this.changeIndex = (oldIndex, newIndex, changeContainer, take) => {
            const { selectedItems, ordered } = this.state;
            const copy = ordered.slice();
            // If multiple items are selected, handle reordering for all of them
            let itemsToMove = selectedItems.includes(copy[oldIndex])
                ? selectedItems
                : [take(changeContainer ? undefined : copy)]; // Fall back to single item
            // Remove selected items from their old position
            itemsToMove.forEach(item => {
                const index = copy.indexOf(item);
                if (index !== -1) {
                    copy.splice(index, 1);
                }
            });
            // Insert items in new position
            itemsToMove.forEach(itm => {
                const item = Array.isArray(itm) ? itm[0] : itm;
                copy.splice(newIndex, 0, item);
                newIndex++;
            });
            this.nextState.ordered = copy;
        };
        this.findItemIndex = (item) => {
            return this.nextState.ordered.findIndex(iter => this.itemId(iter) === this.itemId(item));
        };
        this.take = (item, list) => {
            const { ordered } = this.nextState;
            let res = item;
            const index = this.findItemIndex(item);
            if (index !== -1) {
                if (list !== undefined) {
                    res = list.splice(index, 1)[0];
                }
                else {
                    const copy = ordered.slice();
                    res = copy.splice(index, 1)[0];
                    this.nextState.ordered = copy;
                }
            }
            return res;
        };
        this.apply = () => {
            const orderSet = new Set();
            this.props.apply(this.state.ordered.slice().reduce((acc, item) => {
                if (!orderSet.has(this.itemId(item))) {
                    orderSet.add(this.itemId(item));
                    acc.push(item);
                }
                return acc;
            }, []));
            this.nextState.selectedItems = [];
            this.nextState.draggedItems = [];
            this.nextState.lastSelectedIndex = null;
        };
        this.handleDragStart = (items) => {
            this.nextState.draggedItems = items.sort((a, b) => this.findItemIndex(a) - this.findItemIndex(b));
        };
        this.initState({
            ordered: props.items.slice(0),
            selectedItems: [],
            lastSelectedIndex: null,
            draggedItems: [],
        });
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        if (this.props.items !== newProps.items) {
            this.nextState.ordered = newProps.items.slice(0);
        }
    }
    render() {
        const { connectDropTarget, id, itemRenderer, style, className } = this.props;
        const { ordered, selectedItems, draggedItems } = this.state;
        const isSelected = (item) => selectedItems.some(it => this.itemId(item) === this.itemId(it));
        return connectDropTarget(React.createElement("div", { style: style, className: className },
            React.createElement(react_bootstrap_1.ListGroup, null, ordered.map((item, idx) => (React.createElement(DraggableListItem_1.default, { disabled: this.props.disabled, containerId: id, key: this.itemId(item), item: item, index: idx, findItemIndex: this.findItemIndex, isLocked: this.itemLocked(item), itemRenderer: itemRenderer, take: this.take, onChangeIndex: this.changeIndex, apply: this.apply, onClick: this.handleItemClick(idx), selectedItems: selectedItems, isSelected: isSelected(item), draggedItems: draggedItems, onDragStart: this.handleDragStart }))))));
    }
    itemLocked(item) {
        var _a, _b, _c;
        const itm = Array.isArray(item) ? item[0] : item;
        return (_c = (_b = (_a = this.props).isLocked) === null || _b === void 0 ? void 0 : _b.call(_a, itm)) !== null && _c !== void 0 ? _c : false;
    }
    itemId(item) {
        const itm = Array.isArray(item) ? item[0] : item;
        if (this.props.idFunc !== undefined) {
            return this.props.idFunc(itm);
        }
        else if (itm.id !== undefined) {
            return itm.id;
        }
        else {
            return itm;
        }
    }
}
const containerTarget = {
    hover(props, monitor, component) {
        const { containerId, index, item, take } = monitor.getItem();
        if (containerId !== props.id) {
            component.changeIndex(index, 0, true, take);
            monitor.getItem().index = 0;
            monitor.getItem().containerId = props.id;
            monitor.getItem().take = (list) => component.take(item, list);
        }
    },
};
function containerCollect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    };
}
const classCache = {};
function DraggableListWrapper(props) {
    if (classCache[props.itemTypeId] === undefined) {
        classCache[props.itemTypeId] =
            (0, react_dnd_1.DropTarget)(props.itemTypeId, containerTarget, containerCollect)(DraggableList);
    }
    const Clss = classCache[props.itemTypeId];
    return (React.createElement(Clss, Object.assign({}, props)));
}
exports.default = DraggableListWrapper;
