"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = require("../../../actions/notifications");
const Icon_1 = require("../../../controls/Icon");
const IconBar_1 = require("../../../controls/IconBar");
const TooltipControls_1 = require("../../../controls/TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const lazyRequire_1 = require("../../../util/lazyRequire");
const message_1 = require("../../../util/message");
const selectors_1 = require("../../../util/selectors");
const category_1 = require("../actions/category");
const createTreeDataObject_1 = require("../util/createTreeDataObject");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const tree = lazyRequire_1.default(() => require('react-sortable-tree'));
const nop = () => undefined;
/**
 * displays the list of categories related for the current game.
 *
 */
class CategoryList extends ComponentEx_1.ComponentEx {
    constructor(props) {
        super(props);
        // tslint:disable-next-line:no-shadowed-variable
        this.searchMethod = ({ node, path, treeIndex, searchQuery }) => {
            return (searchQuery.length > 0) &&
                (node.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);
        };
        this.updateExpandedTreeData = (categories) => {
            const { expanded, showEmpty, treeData } = this.nextState;
            this.nextState.expandedTreeData =
                this.applyExpand(treeData, showEmpty, new Set(expanded), categories);
        };
        this.toggleShowEmpty = () => {
            const { t, categories, mods, onShowError } = this.props;
            const { showEmpty } = this.state;
            try {
                const newTree = createTreeDataObject_1.default(t, categories, mods);
                this.nextState.treeData = newTree;
                this.nextState.showEmpty = !showEmpty;
                this.updateExpandedTreeData(categories);
            }
            catch (err) {
                onShowError('An error occurred hiding/showing the empty categories', err);
            }
        };
        this.expandAll = () => {
            const { categories } = this.props;
            this.nextState.expanded = Object.keys(categories);
            this.updateExpandedTreeData(categories);
        };
        this.collapseAll = () => {
            this.nextState.expanded = [];
            this.updateExpandedTreeData(this.props.categories);
        };
        this.renameCategory = (categoryId) => {
            const { categories, gameMode, onShowDialog, onRenameCategory } = this.props;
            const category = categories[categoryId];
            onShowDialog('info', 'Rename Category', {
                input: [{ id: 'newCategory', value: category.name, label: 'Category' }],
            }, [{ label: 'Cancel' }, { label: 'Rename' }])
                .then((result) => {
                if ((result.action === 'Rename') && (result.input.newCategory !== undefined)) {
                    onRenameCategory(gameMode, categoryId, result.input.newCategory);
                }
            });
        };
        this.addCategory = (parentId) => {
            const { categories, gameMode, onSetCategory, onShowDialog, onShowError } = this.props;
            const lastIndex = this.searchLastRootId(categories);
            if (Array.isArray(parentId)) {
                parentId = parentId[0];
            }
            onShowDialog('question', 'Add Child Category', {
                input: [
                    { id: 'newCategory', value: '', label: 'Category Name' },
                    {
                        id: 'newCategoryId',
                        value: lastIndex.toString(),
                        label: 'Category ID',
                    },
                ],
            }, [{ label: 'Cancel' }, { label: 'Add' }])
                .then((result) => {
                if (result.action === 'Add') {
                    const checkId = Object.keys(categories).filter((id) => id === result.input.newCategoryId);
                    if (checkId.length !== 0) {
                        onShowError('ID already used.');
                    }
                    else if (result.input.newCategoryId === '') {
                        onShowError('Category ID empty.');
                    }
                    else {
                        onSetCategory(gameMode, result.input.newCategoryId, {
                            name: result.input.newCategory,
                            parentCategory: parentId,
                            order: 0,
                        });
                        this.updateExpandedTreeData(categories);
                    }
                }
            });
        };
        this.addRootCategory = () => {
            const { categories, gameMode, onSetCategory, onShowDialog, onShowError } = this.props;
            let addCategory = true;
            const lastIndex = this.searchLastRootId(categories);
            onShowDialog('question', 'Add new Root Category', {
                input: [
                    { id: 'newCategory', value: '', label: 'Category Name' },
                    {
                        id: 'newCategoryId', value: lastIndex.toString(),
                        label: 'Category ID',
                    },
                ],
            }, [{ label: 'Cancel' }, { label: 'Add', default: true }])
                .then((result) => {
                addCategory = result.action === 'Add';
                if (addCategory) {
                    const checkId = Object.keys(categories || {}).filter((id) => id === result.input.newCategoryId);
                    if (checkId.length !== 0) {
                        onShowError('An error occurred adding the new category', 'ID already used.');
                    }
                    else if (result.input.newCategoryId === '') {
                        onShowError('An error occurred adding the new category', 'Category ID empty.');
                    }
                    else {
                        onSetCategory(gameMode, result.input.newCategoryId, {
                            name: result.input.newCategory,
                            parentCategory: undefined,
                            order: 0,
                        });
                    }
                }
            });
        };
        this.selectPrevMatch = () => {
            const { searchFocusIndex, searchFoundCount } = this.state;
            this.nextState.searchFocusIndex = (searchFoundCount + searchFocusIndex - 1) % searchFoundCount;
        };
        this.selectNextMatch = () => {
            const { searchFocusIndex, searchFoundCount } = this.state;
            this.nextState.searchFocusIndex = (searchFocusIndex + 1) % searchFoundCount;
        };
        this.startSearch = (event) => {
            this.nextState.searchString = event.target.value;
        };
        this.searchFinishCallback = (matches) => {
            const { searchFocusIndex } = this.state;
            // important: Avoid updating the state if the values haven't changed because
            //  changeing the state causes a re-render and a re-render causes the tree to search
            //  again (why?) which causes a new finish callback -> infinite loop
            if (this.state.searchFoundCount !== matches.length) {
                this.nextState.searchFoundCount = matches.length;
            }
            const newFocusIndex = matches.length > 0 ? searchFocusIndex % matches.length : 0;
            if (this.state.searchFocusIndex !== newFocusIndex) {
                this.nextState.searchFocusIndex = newFocusIndex;
            }
        };
        this.removeCategory = (id) => {
            const { categories, gameMode, onRemoveCategory } = this.props;
            Object.keys(categories)
                .filter(iterId => categories[iterId].parentCategory === id)
                .forEach(iterId => this.removeCategory(iterId));
            onRemoveCategory(gameMode, id);
        };
        this.generateNodeProps = (rowInfo) => {
            const { t } = this.props;
            const actions = [
                {
                    icon: 'edit',
                    title: t('Rename'),
                    action: this.renameCategory,
                },
                {
                    icon: 'folder-add',
                    title: t('Add Child'),
                    action: this.addCategory,
                },
                {
                    icon: 'remove',
                    title: t('Remove'),
                    action: this.removeCategory,
                },
            ];
            return {
                buttons: [
                    (React.createElement(IconBar_1.default, { group: 'category-icons', staticElements: actions, instanceId: rowInfo.node.categoryId })),
                ],
            };
        };
        this.getNodeKey = (args) => {
            return args.node.categoryId;
        };
        this.toggleVisibility = (args) => {
            if (args.expanded) {
                this.nextState.expanded.push(args.node.categoryId);
            }
            else {
                this.nextState.expanded.splice(this.nextState.expanded.indexOf(args.node.categoryId));
            }
            this.updateExpandedTreeData(this.props.categories);
        };
        this.moveNode = (args) => {
            const { gameMode, onSetCategory, onSetCategoryOrder } = this.props;
            if (args.path[args.path.length - 2] !== args.node.parentId) {
                onSetCategory(gameMode, args.node.categoryId, {
                    name: args.node.title,
                    order: args.node.order,
                    parentCategory: args.path[args.path.length - 2],
                });
            }
            else {
                const newOrder = (base) => {
                    return [].concat(...base.map(node => [node.categoryId, ...newOrder(node.children)]));
                };
                onSetCategoryOrder(gameMode, newOrder(args.treeData));
            }
        };
        this.initState({
            treeData: [],
            expandedTreeData: [],
            expanded: [],
            showEmpty: true,
            searchString: '',
            searchFocusIndex: 0,
            searchFoundCount: 0,
        });
        const { t } = props;
        this.mButtons = [
            {
                title: t('Expand All'),
                icon: 'expand-all',
                action: this.expandAll,
            }, {
                title: t('Collapse All'),
                icon: 'collapse-all',
                action: this.collapseAll,
            }, {
                title: t('Add Root Category'),
                icon: 'folder-add',
                action: this.addRootCategory,
            }, {
                title: t('Toggle empty categories'),
                icon: 'hide',
                action: this.toggleShowEmpty,
            },
        ];
    }
    componentWillMount() {
        this.refreshTree(this.props);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.categories !== newProps.categories) {
            this.refreshTree(newProps);
        }
    }
    render() {
        const { t } = this.props;
        const { expandedTreeData, searchString, searchFocusIndex, searchFoundCount } = this.state;
        const Tree = tree.SortableTreeWithoutDndContext;
        return (React.createElement("div", { className: 'categories-dialog' },
            React.createElement(IconBar_1.default, { group: 'categories-icons', staticElements: this.mButtons, className: 'menubar categories-icons' }),
            React.createElement("div", { className: 'search-category-box' },
                React.createElement("div", { style: { display: 'inline-block', position: 'relative' } },
                    React.createElement(react_bootstrap_1.FormControl, { id: 'search-category-input', type: 'text', placeholder: t('Search'), value: searchString || '', onChange: this.startSearch }),
                    React.createElement(Icon_1.default, { className: 'search-icon', name: 'search' }),
                    React.createElement("span", { className: 'search-position' }, t('{{ pos }} of {{ total }}', {
                        replace: {
                            pos: searchFoundCount > 0 ? (searchFocusIndex + 1) : 0,
                            total: searchFoundCount || 0,
                        },
                    }))),
                React.createElement(TooltipControls_1.IconButton, { id: 'btn-search-category-prev', className: 'btn-embed', icon: 'search-up', tooltip: t('Prev'), type: 'button', disabled: !searchFoundCount, onClick: this.selectPrevMatch }),
                React.createElement(TooltipControls_1.IconButton, { id: 'btn-search-category-next', className: 'btn-embed', icon: 'search-down', tooltip: t('Next'), type: 'button', disabled: !searchFoundCount, onClick: this.selectNextMatch })),
            ((expandedTreeData || []).length > 0) ? (React.createElement(Tree, { treeData: expandedTreeData, onChange: nop, onVisibilityToggle: this.toggleVisibility, onMoveNode: this.moveNode, style: { height: '95%' }, searchMethod: this.searchMethod, searchQuery: searchString, searchFocusOffset: searchFocusIndex, searchFinishCallback: this.searchFinishCallback, getNodeKey: this.getNodeKey, generateNodeProps: this.generateNodeProps })) : null));
    }
    getNonEmptyCategories(treeData, ancestry) {
        let res = [];
        treeData.forEach(category => {
            if (category.modCount > 0) {
                res.push(category.categoryId);
                res = res.concat(ancestry);
            }
            res = res.concat(this.getNonEmptyCategories(category.children, [].concat(ancestry, [category.categoryId])));
        });
        return res;
    }
    applyExpand(treeData, showEmpty, expanded, categories) {
        const filtered = new Set((showEmpty)
            ? Object.keys(categories)
            : this.getNonEmptyCategories(treeData, []));
        return treeData.map(obj => {
            if (!filtered.has(obj.categoryId)) {
                return undefined;
            }
            const copy = Object.assign({}, obj);
            copy.expanded = expanded.has(copy.categoryId);
            copy.children = this.applyExpand(copy.children, showEmpty, expanded, categories);
            return copy;
        })
            .filter(obj => obj !== undefined);
    }
    searchLastRootId(categories) {
        let maxId = 0;
        if (categories !== undefined) {
            Object.keys(categories).filter((id) => {
                if (parseInt(id, 10) > maxId) {
                    maxId = parseInt(id, 10);
                }
            });
        }
        return maxId + 1;
    }
    refreshTree(props) {
        const { t } = this.props;
        const { categories, mods, onShowError } = props;
        if (categories !== undefined) {
            if (Object.keys(categories).length !== 0) {
                this.nextState.treeData = createTreeDataObject_1.default(t, categories, mods);
                this.updateExpandedTreeData(categories);
            }
        }
    }
}
const emptyObj = {};
function mapStateToProps(state) {
    const gameMode = selectors_1.activeGameId(state);
    return {
        gameMode,
        language: state.settings.interface.language,
        categories: state.persistent.categories[gameMode] || emptyObj,
        mods: state.persistent.mods[gameMode],
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onRenameCategory: (gameId, categoryId, newCategory) => dispatch(category_1.renameCategory(gameId, categoryId, newCategory)),
        onSetCategory: (gameId, categoryId, category) => dispatch(category_1.setCategory(gameId, categoryId, category)),
        onRemoveCategory: (gameId, categoryId) => dispatch(category_1.removeCategory(gameId, categoryId)),
        onSetCategoryOrder: (gameId, categoryIds) => dispatch(category_1.setCategoryOrder(gameId, categoryIds)),
        onShowError: (message, details) => message_1.showError(dispatch, message, details),
        onShowDialog: (type, title, content, actions) => dispatch(notifications_1.showDialog(type, title, content, actions)),
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(CategoryList));
