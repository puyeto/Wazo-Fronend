import * as tslib_1 from "tslib";
import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, Optional, Type, } from '@angular/core';
import { SimpleModalHolderComponent } from './simple-modal-holder.component';
export class SimpleModalServiceConfig {
    constructor() {
        this.container = null;
    }
}
let SimpleModalService = class SimpleModalService {
    /**
     * @param {ComponentFactoryResolver} resolver
     * @param {ApplicationRef} applicationRef
     * @param {Injector} injector
     * @param {SimpleModalServiceConfig} config
     */
    constructor(resolver, applicationRef, injector, config) {
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
    addModal(component, data, options) {
        if (!this.modalHolderComponent) {
            this.modalHolderComponent = this.createSimpleModalHolder();
        }
        return this.modalHolderComponent.addModal(component, data, options);
    }
    /**
     * Hides and removes modal from DOM, resolves promise when fully removed
     * @param {SimpleModalComponent} component
     * @return {Promise<{}>}
  
     */
    removeModal(component) {
        if (!this.modalHolderComponent) {
            return Promise.resolve({});
        }
        return this.modalHolderComponent.removeModal(component);
    }
    /**
     * Closes all modals, resolves promise when they're fully removed
     * @return {Promise<{}>}
     */
    removeAll() {
        if (!this.modalHolderComponent) {
            return Promise.resolve({});
        }
        return this.modalHolderComponent.removeAllModals();
    }
    /**
     * Accessor for contain - will auto generate from string
     * if needed or default to the root element if nothing was set
     */
    set container(c) {
        this._container = c;
    }
    get container() {
        if (typeof this._container === 'string') {
            this._container = document.getElementById(this._container);
        }
        if (!this._container && this.applicationRef['components'].length) {
            const componentRootViewContainer = this.applicationRef['components'][0];
            this.container = componentRootViewContainer.hostView
                .rootNodes[0];
        }
        // fallback
        if (!this._container || typeof this._container === 'string') {
            this._container = document.getElementsByTagName('body')[0];
        }
        return this._container;
    }
    /**
     * Creates and add to DOM modal holder component
     * @return {SimpleModalHolderComponent}
     */
    createSimpleModalHolder() {
        const componentFactory = this.resolver.resolveComponentFactory(SimpleModalHolderComponent);
        const componentRef = componentFactory.create(this.injector);
        const componentRootNode = componentRef.hostView
            .rootNodes[0];
        this.applicationRef.attachView(componentRef.hostView);
        componentRef.onDestroy(() => {
            this.applicationRef.detachView(componentRef.hostView);
        });
        this.container.appendChild(componentRootNode);
        return componentRef.instance;
    }
};
SimpleModalService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector },
    { type: SimpleModalServiceConfig, decorators: [{ type: Optional }] }
];
SimpleModalService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(3, Optional())
], SimpleModalService);
export { SimpleModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2ltcGxlLW1vZGFsLyIsInNvdXJjZXMiOlsic2ltcGxlLW1vZGFsL3NpbXBsZS1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHdCQUF3QixFQUN4QixlQUFlLEVBQ2YsVUFBVSxFQUNWLFFBQVEsRUFDUixRQUFRLEVBQ1IsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSTdFLE1BQU0sT0FBTyx3QkFBd0I7SUFBckM7UUFDRSxjQUFTLEdBQXlCLElBQUksQ0FBQztJQUN6QyxDQUFDO0NBQUE7QUFHRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWE3Qjs7Ozs7T0FLRztJQUNILFlBQ1UsUUFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsUUFBa0IsRUFDZCxNQUFnQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUcxQixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQWdCLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsUUFBUSxDQUNOLFNBQTRDLEVBQzVDLElBQVEsRUFDUixPQUFxQztRQUVyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUM1RDtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBUSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVcsQ0FBQyxTQUF5QztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDOUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7T0FHRztJQUVILElBQVksU0FBUyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVksU0FBUztRQUNuQixJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2hFLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFJLDBCQUEwQixDQUFDLFFBQWlDO2lCQUMzRSxTQUFTLENBQUMsQ0FBQyxDQUFnQixDQUFDO1NBQ2hDO1FBRUQsV0FBVztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLHVCQUF1QjtRQUM3QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUUzRixNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELE1BQU0saUJBQWlCLEdBQUksWUFBWSxDQUFDLFFBQWlDO2FBQ3RFLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFFL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUMsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBOztZQXJHcUIsd0JBQXdCO1lBQ2xCLGNBQWM7WUFDcEIsUUFBUTtZQUNOLHdCQUF3Qix1QkFBM0MsUUFBUTs7QUF2QkEsa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTtJQXdCUixtQkFBQSxRQUFRLEVBQUUsQ0FBQTtHQXZCRixrQkFBa0IsQ0F5SDlCO1NBekhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFwcGxpY2F0aW9uUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIE9wdGlvbmFsLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2ltcGxlTW9kYWxIb2xkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZS1tb2RhbC1ob2xkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZU1vZGFsT3B0aW9uc092ZXJyaWRlcyB9IGZyb20gJy4vc2ltcGxlLW1vZGFsLW9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgU2ltcGxlTW9kYWxTZXJ2aWNlQ29uZmlnIHtcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IHN0cmluZyA9IG51bGw7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaW1wbGVNb2RhbFNlcnZpY2Uge1xuICAvKipcbiAgICogUGxhY2Vob2xkZXIgb2YgbW9kYWxzXG4gICAqIEB0eXBlIHtTaW1wbGVNb2RhbEhvbGRlckNvbXBvbmVudH1cbiAgICovXG4gIHByaXZhdGUgbW9kYWxIb2xkZXJDb21wb25lbnQ6IFNpbXBsZU1vZGFsSG9sZGVyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBIVE1MIGNvbnRhaW5lciBmb3IgbW9kYWxzXG4gICAqIHR5cGUge0hUTUxFbGVtZW50IHwgc3RyaW5nfVxuICAgKi9cbiAgcHJpdmF0ZSBfY29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gcmVzb2x2ZXJcbiAgICogQHBhcmFtIHtBcHBsaWNhdGlvblJlZn0gYXBwbGljYXRpb25SZWZcbiAgICogQHBhcmFtIHtJbmplY3Rvcn0gaW5qZWN0b3JcbiAgICogQHBhcmFtIHtTaW1wbGVNb2RhbFNlcnZpY2VDb25maWd9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZzogU2ltcGxlTW9kYWxTZXJ2aWNlQ29uZmlnXG4gICkge1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciBhcyBhbnk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbW9kYWxcbiAgICogQHBhcmFtIHtUeXBlPFNpbXBsZU1vZGFsQ29tcG9uZW50PFQsIFQxPj59IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1Q/fSBkYXRhXG4gICAqIEBwYXJhbSB7U2ltcGxlTW9kYWxPcHRpb25zT3ZlcnJpZGVzP30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPFQxPn1cbiAgICovXG4gIGFkZE1vZGFsPFQsIFQxPihcbiAgICBjb21wb25lbnQ6IFR5cGU8U2ltcGxlTW9kYWxDb21wb25lbnQ8VCwgVDE+PixcbiAgICBkYXRhPzogVCxcbiAgICBvcHRpb25zPzogU2ltcGxlTW9kYWxPcHRpb25zT3ZlcnJpZGVzXG4gICk6IE9ic2VydmFibGU8VDE+IHtcbiAgICBpZiAoIXRoaXMubW9kYWxIb2xkZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubW9kYWxIb2xkZXJDb21wb25lbnQgPSB0aGlzLmNyZWF0ZVNpbXBsZU1vZGFsSG9sZGVyKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGFsSG9sZGVyQ29tcG9uZW50LmFkZE1vZGFsPFQsIFQxPihjb21wb25lbnQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGFuZCByZW1vdmVzIG1vZGFsIGZyb20gRE9NLCByZXNvbHZlcyBwcm9taXNlIHdoZW4gZnVsbHkgcmVtb3ZlZFxuICAgKiBAcGFyYW0ge1NpbXBsZU1vZGFsQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTx7fT59XG5cbiAgICovXG4gIHJlbW92ZU1vZGFsKGNvbXBvbmVudDogU2ltcGxlTW9kYWxDb21wb25lbnQ8YW55LCBhbnk+KTogUHJvbWlzZTx7fT4ge1xuICAgIGlmICghdGhpcy5tb2RhbEhvbGRlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGFsSG9sZGVyQ29tcG9uZW50LnJlbW92ZU1vZGFsKGNvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFsbCBtb2RhbHMsIHJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGV5J3JlIGZ1bGx5IHJlbW92ZWRcbiAgICogQHJldHVybiB7UHJvbWlzZTx7fT59XG4gICAqL1xuICByZW1vdmVBbGwoKTogUHJvbWlzZTx7fT4ge1xuICAgIGlmICghdGhpcy5tb2RhbEhvbGRlckNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGFsSG9sZGVyQ29tcG9uZW50LnJlbW92ZUFsbE1vZGFscygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjY2Vzc29yIGZvciBjb250YWluIC0gd2lsbCBhdXRvIGdlbmVyYXRlIGZyb20gc3RyaW5nXG4gICAqIGlmIG5lZWRlZCBvciBkZWZhdWx0IHRvIHRoZSByb290IGVsZW1lbnQgaWYgbm90aGluZyB3YXMgc2V0XG4gICAqL1xuXG4gIHByaXZhdGUgc2V0IGNvbnRhaW5lcihjKSB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gYztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9jb250YWluZXIpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fY29udGFpbmVyICYmIHRoaXMuYXBwbGljYXRpb25SZWZbJ2NvbXBvbmVudHMnXS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJvb3RWaWV3Q29udGFpbmVyID0gdGhpcy5hcHBsaWNhdGlvblJlZlsnY29tcG9uZW50cyddWzBdO1xuICAgICAgdGhpcy5jb250YWluZXIgPSAoY29tcG9uZW50Um9vdFZpZXdDb250YWluZXIuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2tcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lciB8fCB0eXBlb2YgdGhpcy5fY29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGFkZCB0byBET00gbW9kYWwgaG9sZGVyIGNvbXBvbmVudFxuICAgKiBAcmV0dXJuIHtTaW1wbGVNb2RhbEhvbGRlckNvbXBvbmVudH1cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlU2ltcGxlTW9kYWxIb2xkZXIoKTogU2ltcGxlTW9kYWxIb2xkZXJDb21wb25lbnQge1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFNpbXBsZU1vZGFsSG9sZGVyQ29tcG9uZW50KTtcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJvb3ROb2RlID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICB0aGlzLmFwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcblxuICAgIGNvbXBvbmVudFJlZi5vbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgdGhpcy5hcHBsaWNhdGlvblJlZi5kZXRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25lbnRSb290Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG59XG4iXX0=