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
/* eslint-disable */
const react_1 = __importStar(require("react"));
const react_dnd_1 = require("react-dnd");
const DraggableItem = ({ disabled, index, item, draggedItems, findItemIndex, isSelected, itemRenderer: ItemRendererComponent, onClick, containerId, isLocked, onChangeIndex, onDragStart, selectedItems, take, apply, }) => {
    const itemRef = (0, react_1.useRef)(null);
    const [startedDrag, setStartedDrag] = react_1.default.useState(false);
    const sortByIndex = (list) => list.sort((a, b) => findItemIndex(a) - findItemIndex(b));
    const isDraggedItem = react_1.default.useCallback(() => findItemIndex(item) !== -1, [draggedItems]);
    const classes = isSelected ? ["selected"] : [];
    const sortedSelected = react_1.default.useMemo(() => sortByIndex(selectedItems), [selectedItems]);
    const [{ isDraggingItem, draggedStyle }, drag, dragPreview] = (0, react_dnd_1.useDrag)({
        type: containerId,
        item: {
            index,
            items: isSelected ? sortedSelected : [item],
            containerId,
            take: (list) => sortedSelected.map((item) => take(item, list)),
        },
        end: () => {
            apply();
        },
        canDrag: () => !isLocked && !disabled,
        collect: (monitor) => {
            if (isDraggedItem() && !startedDrag) {
                onDragStart(sortedSelected);
                setStartedDrag(true);
            }
            if (isDraggedItem() && !classes.includes("dragging")) {
                classes.push("dragging");
            }
            return {
                isDraggingItem: monitor.isDragging(),
                draggedStyle: {
                    border: monitor.isDragging() && !isSelected && draggedItems.length === 0
                        ? "2px solid #A1A1AA"
                        : undefined,
                },
            };
        },
    }, [startedDrag, sortedSelected, isSelected]);
    const [, drop] = (0, react_dnd_1.useDrop)({
        accept: containerId,
        hover: (draggedItem, monitor) => {
            var _a;
            const { index: dragIndex, items, containerId: sourceContainerId, } = draggedItem;
            const hoverIndex = index;
            if (dragIndex === hoverIndex ||
                isLocked ||
                disabled ||
                monitor.isOver({ shallow: true })) {
                return;
            }
            const hoverBoundingRect = (_a = itemRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (!hoverBoundingRect)
                return;
            const clientOffset = monitor.getClientOffset();
            if (!clientOffset)
                return;
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const hoverActualY = clientOffset.y - hoverBoundingRect.top;
            // if dragging down, continue only when hover is smaller than middle Y
            if (index < hoverIndex && hoverActualY < hoverMiddleY)
                return;
            // if dragging up, continue only when hover is bigger than middle Y
            if (index > hoverIndex && hoverActualY > hoverMiddleY)
                return;
            onChangeIndex(dragIndex, hoverIndex, sourceContainerId !== containerId, (list) => items.map((item) => take(item, list)));
            draggedItem.index = hoverIndex;
            if (sourceContainerId !== containerId) {
                draggedItem.containerId = containerId;
                draggedItem.take = (list) => take(items, list);
            }
        },
        drop(item, monitor) {
            setStartedDrag(false);
            return undefined;
        },
    });
    const setRef = (0, react_1.useCallback)((ref) => {
        itemRef.current = ref;
        drag(drop(ref));
    }, [drag, drop]);
    return (react_1.default.createElement("div", { key: item.id, ref: dragPreview },
        react_1.default.createElement("div", { style: draggedStyle, ref: setRef, onClick: onClick },
            react_1.default.createElement(ItemRendererComponent, { className: classes.join(" "), item: item }))));
};
exports.default = DraggableItem;
