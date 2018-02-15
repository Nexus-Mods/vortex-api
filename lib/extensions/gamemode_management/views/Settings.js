"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TooltipControls_1 = require("../../../controls/TooltipControls");
const ComponentEx_1 = require("../../../util/ComponentEx");
const util_1 = require("../../../util/util");
const settings_1 = require("../actions/settings");
const React = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const log_1 = require("../../../util/log");
/**
 * entry of the game search path list
 *
 * @class SearchPathEntry
 * @extends {ComponentEx<IPathProps, {}>}
 */
class SearchPathEntry extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.removePath = () => {
            const { searchPath, onRemovePath } = this.props;
            onRemovePath(searchPath);
        };
    }
    render() {
        const { searchPath, t } = this.props;
        return (React.createElement(react_bootstrap_1.ListGroupItem, null,
            React.createElement("span", null, searchPath),
            React.createElement(TooltipControls_1.IconButton, { className: 'btn-embed', id: 'remove', tooltip: t('Remove'), onClick: this.removePath, icon: 'remove' })));
    }
}
/**
 * settings dialog for game modes
 * Contains the list of paths to search when looking for installed games
 *
 * @class Settings
 * @extends {(ComponentEx<IActionProps & IConnectedProps, {}>)}
 */
class Settings extends ComponentEx_1.ComponentEx {
    constructor() {
        super(...arguments);
        this.addSearchPath = () => {
            this.context.api.selectDir({})
                .then((dirName) => {
                if (!util_1.isNullOrWhitespace(dirName)) {
                    this.props.onAddPath(dirName);
                }
            })
                .catch((err) => {
                log_1.log('info', 'search path selection cancelled', { err });
            });
        };
        this.resetSearchPaths = () => {
            this.props.onResetSearchPaths();
        };
        this.renderPath = (searchPath) => {
            const { t, onRemovePath } = this.props;
            return (React.createElement(SearchPathEntry, { key: searchPath, searchPath: searchPath, t: t, onRemovePath: onRemovePath }));
        };
    }
    render() {
        const { searchPaths, t } = this.props;
        return (React.createElement("form", null,
            React.createElement(react_bootstrap_1.FormGroup, { id: 'search-paths' },
                React.createElement(react_bootstrap_1.ControlLabel, null, t('Search Paths')),
                React.createElement(react_bootstrap_1.ListGroup, { className: 'list-game-search' }, [].concat(searchPaths).sort().map(this.renderPath)),
                React.createElement(react_bootstrap_1.Button, { onClick: this.addSearchPath }, t('Add Search Directory')),
                React.createElement(react_bootstrap_1.Button, { onClick: this.resetSearchPaths }, t('Reset')),
                React.createElement(react_bootstrap_1.HelpBlock, null, t('Directories to search when looking for games.')))));
    }
}
function mapStateToProps(state) {
    return {
        // search paths should be initialized immediately on first start but this can't hurt
        searchPaths: state.settings.gameMode.searchPaths || [],
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onAddPath: (path) => {
            dispatch(settings_1.addSearchPath(path));
        },
        onRemovePath: (path) => {
            dispatch(settings_1.removeSearchPath(path));
        },
    };
}
exports.default = ComponentEx_1.translate(['common'], { wait: false })(ComponentEx_1.connect(mapStateToProps, mapDispatchToProps)(Settings));
