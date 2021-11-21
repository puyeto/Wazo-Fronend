import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Optional, Type, } from '@angular/core';
import { SimpleModalHolderComponent } from './simple-modal-holder.component';
var SimpleModalServiceConfig = /** @class */ (function () {
    function SimpleModalServiceConfig() {
        this.container = null;
    }
    return SimpleModalServiceConfig;
}());
export { SimpleModalServiceConfig };
var SimpleModalService = /** @class */ (function () {
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {SimpleModalServiceConfig} config
     */
    function SimpleModalService(resolver, applicationRef, injector, config) {
        this.resolver = resolver;
        this.applicationRef = applicationRef;
        this.injector = injector;
        if (config) {
            this.container = config.container;
        }
    }
    /**
     * Adds modal
     * @param {Type<SimpleModalComponent<T, T1>>} component
     * @param {T?} data
     * @param {SimpleModalOptionsOverrides?} options
     * @return {Observable<T1>}
     */
    SimpleModalService.prototype.addModal = function (component, data, options) {
        if (!this.modalHolderComponent) {
            this.modalHolderComponent = this.createSimpleModalHolder();
        }
        return this.modalHolderComponent.addModal(component, data, options);
    };
    /**
     * Hides and removes modal from DOM, resolves promise when fully removed
     * @param {SimpleModalComponent} component
     * @return {Promise<{}>}
  
     */
    SimpleModalService.prototype.removeModal = function (component) {
        if (!this.modalHolderComponent) {
            return Promise.resolve({});
        }
        return this.modalHolderComponent.removeModal(component);
    };
    /**
     * Closes all modals, resolves promise when they're fully removed
     * @return {Promise<{}>}
     */
    SimpleModalService.prototype.removeAll = function () {
        if (!this.modalHolderComponent) {
            return Promise.resolve({});
        }
        return this.modalHolderComponent.removeAllModals();
    };
    Object.defineProperty(SimpleModalService.prototype, "container", {
        get: function () {
            if (typeof this._container === 'string') {
                this._container = document.getElementById(this._container);
            }
            if (!this._container && this.applicationRef['components'].length) {
                var componentRootViewContainer = this.applicationRef['components'][0];
                this.container = componentRootViewContainer.hostView
                    .rootNodes[0];
            }
            // fallback
            if (!this._container || typeof this._container === 'string') {
                this._container = document.getElementsByTagName('body')[0];
            }
            return this._container;
        },
        /**
         * Accessor for contain - will auto generate from string
         * if needed or default to the root element if nothing was set
         */
        set: function (c) {
            this._container = c;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates and add to DOM modal holder component
     * @return {SimpleModalHolderComponent}
     */
    SimpleModalService.prototype.createSimpleModalHolder = function () {
        var _this = this;
        var componentFactory = this.resolver.resolveComponentFactory(SimpleModalHolderComponent);
        var componentRef = componentFactory.create(this.injector);
        var componentRootNode = componentRef.hostView
            .rootNodes[0];
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.onDestroy(function () {
            _this.applicationRef.detachView(componentRef.hostView);
        });
        this.container.appendChild(componentRootNode);
        return componentRef.instance;
    };
    SimpleModalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector },
        { type: SimpleModalServiceConfig, decorators: [{ type: Optional }] }
    ]; };
    SimpleModalService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(3, Optional())
    ], SimpleModalService);
    return SimpleModalService;
}());
export { SimpleModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2ltcGxlLW1vZGFsLyIsInNvdXJjZXMiOlsic2ltcGxlLW1vZGFsL3NpbXBsZS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFO0lBQUE7UUFDRSxjQUFTLEdBQXlCLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQzs7QUFHRDtJQWFFOzs7OztPQUtHO0lBQ0gsNEJBQ1UsUUFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsUUFBa0IsRUFDZCxNQUFnQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUcxQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQWdCLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQVEsR0FBUixVQUNFLFNBQTRDLEVBQzVDLElBQVEsRUFDUixPQUFxQztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUM1RDtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBUSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdDQUFXLEdBQVgsVUFBWSxTQUF5QztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQU9ELHNCQUFZLHlDQUFTO2FBSXJCO1lBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVEO1lBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hFLElBQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBSSwwQkFBMEIsQ0FBQyxRQUFpQztxQkFDM0UsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQzthQUNoQztZQUVELFdBQVc7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1RDtZQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDO1FBMUJEOzs7V0FHRzthQUVILFVBQXNCLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFxQkQ7OztPQUdHO0lBQ0ssb0RBQXVCLEdBQS9CO1FBQUEsaUJBZ0JDO1FBZkMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFM0YsSUFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFNLGlCQUFpQixHQUFJLFlBQVksQ0FBQyxRQUFpQzthQUN0RSxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1FBRS9CLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RCxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUMsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7O2dCQXBHbUIsd0JBQXdCO2dCQUNsQixjQUFjO2dCQUNwQixRQUFRO2dCQUNOLHdCQUF3Qix1QkFBM0MsUUFBUTs7SUF2QkEsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtRQXdCUixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQXZCRixrQkFBa0IsQ0F5SDlCO0lBQUQseUJBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXpIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBPcHRpb25hbCxcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNpbXBsZU1vZGFsSG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGUtbW9kYWwtaG9sZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVNb2RhbE9wdGlvbnNPdmVycmlkZXMgfSBmcm9tICcuL3NpbXBsZS1tb2RhbC1vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIFNpbXBsZU1vZGFsU2VydmljZUNvbmZpZyB7XG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBzdHJpbmcgPSBudWxsO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlTW9kYWxTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFBsYWNlaG9sZGVyIG9mIG1vZGFsc1xuICAgKiBAdHlwZSB7U2ltcGxlTW9kYWxIb2xkZXJDb21wb25lbnR9XG4gICAqL1xuICBwcml2YXRlIG1vZGFsSG9sZGVyQ29tcG9uZW50OiBTaW1wbGVNb2RhbEhvbGRlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogSFRNTCBjb250YWluZXIgZm9yIG1vZGFsc1xuICAgKiB0eXBlIHtIVE1MRWxlbWVudCB8IHN0cmluZ31cbiAgICovXG4gIHByaXZhdGUgX2NvbnRhaW5lcjtcblxuICAvKipcbiAgICogQHBhcmFtIHtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJ9IHJlc29sdmVyXG4gICAqIEBwYXJhbSB7QXBwbGljYXRpb25SZWZ9IGFwcGxpY2F0aW9uUmVmXG4gICAqIEBwYXJhbSB7SW5qZWN0b3J9IGluamVjdG9yXG4gICAqIEBwYXJhbSB7U2ltcGxlTW9kYWxTZXJ2aWNlQ29uZmlnfSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGFwcGxpY2F0aW9uUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBAT3B0aW9uYWwoKSBjb25maWc6IFNpbXBsZU1vZGFsU2VydmljZUNvbmZpZ1xuICApIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgYXMgYW55O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG1vZGFsXG4gICAqIEBwYXJhbSB7VHlwZTxTaW1wbGVNb2RhbENvbXBvbmVudDxULCBUMT4+fSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtUP30gZGF0YVxuICAgKiBAcGFyYW0ge1NpbXBsZU1vZGFsT3B0aW9uc092ZXJyaWRlcz99IG9wdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxUMT59XG4gICAqL1xuICBhZGRNb2RhbDxULCBUMT4oXG4gICAgY29tcG9uZW50OiBUeXBlPFNpbXBsZU1vZGFsQ29tcG9uZW50PFQsIFQxPj4sXG4gICAgZGF0YT86IFQsXG4gICAgb3B0aW9ucz86IFNpbXBsZU1vZGFsT3B0aW9uc092ZXJyaWRlc1xuICApOiBPYnNlcnZhYmxlPFQxPiB7XG4gICAgaWYgKCF0aGlzLm1vZGFsSG9sZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm1vZGFsSG9sZGVyQ29tcG9uZW50ID0gdGhpcy5jcmVhdGVTaW1wbGVNb2RhbEhvbGRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb2RhbEhvbGRlckNvbXBvbmVudC5hZGRNb2RhbDxULCBUMT4oY29tcG9uZW50LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhbmQgcmVtb3ZlcyBtb2RhbCBmcm9tIERPTSwgcmVzb2x2ZXMgcHJvbWlzZSB3aGVuIGZ1bGx5IHJlbW92ZWRcbiAgICogQHBhcmFtIHtTaW1wbGVNb2RhbENvbXBvbmVudH0gY29tcG9uZW50XG4gICAqIEByZXR1cm4ge1Byb21pc2U8e30+fVxuXG4gICAqL1xuICByZW1vdmVNb2RhbChjb21wb25lbnQ6IFNpbXBsZU1vZGFsQ29tcG9uZW50PGFueSwgYW55Pik6IFByb21pc2U8e30+IHtcbiAgICBpZiAoIXRoaXMubW9kYWxIb2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb2RhbEhvbGRlckNvbXBvbmVudC5yZW1vdmVNb2RhbChjb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbGwgbW9kYWxzLCByZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhleSdyZSBmdWxseSByZW1vdmVkXG4gICAqIEByZXR1cm4ge1Byb21pc2U8e30+fVxuICAgKi9cbiAgcmVtb3ZlQWxsKCk6IFByb21pc2U8e30+IHtcbiAgICBpZiAoIXRoaXMubW9kYWxIb2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb2RhbEhvbGRlckNvbXBvbmVudC5yZW1vdmVBbGxNb2RhbHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY2Nlc3NvciBmb3IgY29udGFpbiAtIHdpbGwgYXV0byBnZW5lcmF0ZSBmcm9tIHN0cmluZ1xuICAgKiBpZiBuZWVkZWQgb3IgZGVmYXVsdCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIG5vdGhpbmcgd2FzIHNldFxuICAgKi9cblxuICBwcml2YXRlIHNldCBjb250YWluZXIoYykge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGM7XG4gIH1cblxuICBwcml2YXRlIGdldCBjb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fY29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lciAmJiB0aGlzLmFwcGxpY2F0aW9uUmVmWydjb21wb25lbnRzJ10ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRSb290Vmlld0NvbnRhaW5lciA9IHRoaXMuYXBwbGljYXRpb25SZWZbJ2NvbXBvbmVudHMnXVswXTtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gKGNvbXBvbmVudFJvb3RWaWV3Q29udGFpbmVyLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIgfHwgdHlwZW9mIHRoaXMuX2NvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhZGQgdG8gRE9NIG1vZGFsIGhvbGRlciBjb21wb25lbnRcbiAgICogQHJldHVybiB7U2ltcGxlTW9kYWxIb2xkZXJDb21wb25lbnR9XG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVNpbXBsZU1vZGFsSG9sZGVyKCk6IFNpbXBsZU1vZGFsSG9sZGVyQ29tcG9uZW50IHtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShTaW1wbGVNb2RhbEhvbGRlckNvbXBvbmVudCk7XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnRSb290Tm9kZSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgdGhpcy5hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cbiAgICBjb21wb25lbnRSZWYub25EZXN0cm95KCgpID0+IHtcbiAgICAgIHRoaXMuYXBwbGljYXRpb25SZWYuZGV0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Um9vdE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxufVxuIl19