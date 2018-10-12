/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchSelectComponent = (function (_super) {
    tslib_1.__extends(SearchSelectComponent, _super);
    function SearchSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'select';
        return _this;
    }
    Object.defineProperty(SearchSelectComponent.prototype, "label", {
        /**
         * Provide defaults for undefined properties
         */
        get: /**
         * Provide defaults for undefined properties
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.multiple || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.placeholder || 'Select item';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "dropDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.dropDirection || 'down';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "allowNull", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.allowNull || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.disabled || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "maxHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.maxHeight || '250px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.pageSize || 20;
        },
        enumerable: true,
        configurable: true
    });
    SearchSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-select',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n\n<ux-select [(value)]=\"value\" \n           [options]=\"options\" \n           [multiple]=\"multiple\" \n           [placeholder]=\"placeholder\" \n           [dropDirection]=\"dropDirection\"\n           [pageSize]=\"pageSize\"\n           [allowNull]=\"allowNull\"\n           [disabled]=\"disabled\"\n           [maxHeight]=\"maxHeight\"\n           [key]=\"config.key\"\n           [display]=\"config.display\"\n           [loadingTemplate]=\"config.loadingTemplate\"\n           [optionTemplate]=\"config.optionTemplate\"\n           [noOptionsTemplate]=\"config.noOptionsTemplate\">\n</ux-select>"
                },] },
    ];
    /** @nocollapse */
    SearchSelectComponent.ctorParameters = function () { return []; };
    return SearchSelectComponent;
}(BaseSearchComponent));
export { SearchSelectComponent };
function SearchSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchSelectComponent.ctorParameters;
    /** @type {?} */
    SearchSelectComponent.prototype.type;
}
/**
 * @record
 */
export function SearchSelectConfig() { }
function SearchSelectConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.options;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.multiple;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.dropDirection;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.allowNull;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.disabled;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.maxHeight;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.pageSize;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQTZCLE1BQU0sMEJBQTBCLENBQUM7O0lBdUIvQyxpREFBbUI7OztxQkFFN0MsUUFBUTs7O0lBS3ZCLHNCQUFJLHdDQUFLO1FBSFQ7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQUksMENBQU87Ozs7UUFBWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDbEM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7Ozs7UUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7U0FDdEM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxhQUFhLENBQUM7U0FDakQ7OztPQUFBO0lBRUQsc0JBQUksZ0RBQWE7Ozs7UUFBakI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDO1NBQzVDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTOzs7O1FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1NBQ3ZDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1NBQ3RDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTOzs7O1FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1NBQ3pDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1NBQ25DOzs7T0FBQTs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsK3BCQWdCQztpQkFDWjs7OztnQ0F2QkQ7RUF3QjJDLG1CQUFtQjtTQUFqRCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VTZWFyY2hDb21wb25lbnQsIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcgfSBmcm9tICcuLi9iYXNlLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V4LXNlYXJjaC1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiAqbmdJZj1cImxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuXG48dXgtc2VsZWN0IFsodmFsdWUpXT1cInZhbHVlXCIgXG4gICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBcbiAgICAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgXG4gICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFxuICAgICAgICAgICBbZHJvcERpcmVjdGlvbl09XCJkcm9wRGlyZWN0aW9uXCJcbiAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcbiAgICAgICAgICAgW2FsbG93TnVsbF09XCJhbGxvd051bGxcIlxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICBbbWF4SGVpZ2h0XT1cIm1heEhlaWdodFwiXG4gICAgICAgICAgIFtrZXldPVwiY29uZmlnLmtleVwiXG4gICAgICAgICAgIFtkaXNwbGF5XT1cImNvbmZpZy5kaXNwbGF5XCJcbiAgICAgICAgICAgW2xvYWRpbmdUZW1wbGF0ZV09XCJjb25maWcubG9hZGluZ1RlbXBsYXRlXCJcbiAgICAgICAgICAgW29wdGlvblRlbXBsYXRlXT1cImNvbmZpZy5vcHRpb25UZW1wbGF0ZVwiXG4gICAgICAgICAgIFtub09wdGlvbnNUZW1wbGF0ZV09XCJjb25maWcubm9PcHRpb25zVGVtcGxhdGVcIj5cbjwvdXgtc2VsZWN0PmBcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVNlYXJjaENvbXBvbmVudCB7XG5cbiAgdHlwZTogc3RyaW5nID0gJ3NlbGVjdCc7XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgZGVmYXVsdHMgZm9yIHVuZGVmaW5lZCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcubGFiZWw7XG4gIH1cblxuICBnZXQgb3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcub3B0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIGdldCBtdWx0aXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcubXVsdGlwbGUgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2Vob2xkZXIgfHwgJ1NlbGVjdCBpdGVtJztcbiAgfVxuXG4gIGdldCBkcm9wRGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRyb3BEaXJlY3Rpb24gfHwgJ2Rvd24nO1xuICB9XG5cbiAgZ2V0IGFsbG93TnVsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYWxsb3dOdWxsIHx8IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kaXNhYmxlZCB8fCBmYWxzZTtcbiAgfVxuXG4gIGdldCBtYXhIZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcubWF4SGVpZ2h0IHx8ICcyNTBweCc7XG4gIH1cblxuICBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnZVNpemUgfHwgMjA7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZWxlY3RDb25maWcgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIHtcbiAgb3B0aW9ucz86IGFueVtdIHwgSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb247XG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgZHJvcERpcmVjdGlvbj86ICd1cCcgfCAnZG93bic7XG4gIGFsbG93TnVsbD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nO1xuICBwYWdlU2l6ZT86IG51bWJlcjtcbn0iXX0=