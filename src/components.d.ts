/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppButton {
        "appearance": string;
        "text": string;
    }
    interface AppDescription {
    }
    interface AppHeader {
    }
    interface AppImage {
    }
    interface AppModal {
        "appearance": string;
        "buttons": string[] | string;
        "closeIcon": string;
        "header": string;
        "isopen": boolean;
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {
    }
    var HTMLAppButtonElement: {
        prototype: HTMLAppButtonElement;
        new (): HTMLAppButtonElement;
    };
    interface HTMLAppDescriptionElement extends Components.AppDescription, HTMLStencilElement {
    }
    var HTMLAppDescriptionElement: {
        prototype: HTMLAppDescriptionElement;
        new (): HTMLAppDescriptionElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppImageElement extends Components.AppImage, HTMLStencilElement {
    }
    var HTMLAppImageElement: {
        prototype: HTMLAppImageElement;
        new (): HTMLAppImageElement;
    };
    interface HTMLAppModalElement extends Components.AppModal, HTMLStencilElement {
    }
    var HTMLAppModalElement: {
        prototype: HTMLAppModalElement;
        new (): HTMLAppModalElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-button": HTMLAppButtonElement;
        "app-description": HTMLAppDescriptionElement;
        "app-header": HTMLAppHeaderElement;
        "app-image": HTMLAppImageElement;
        "app-modal": HTMLAppModalElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface AppDescription {
        "onModal"?: (event: CustomEvent<boolean>) => void;
    }
    interface AppHeader {
    }
    interface AppImage {
    }
    interface AppModal {
        "appearance"?: string;
        "buttons"?: string[] | string;
        "closeIcon"?: string;
        "header"?: string;
        "isopen"?: boolean;
        "onModal"?: (event: CustomEvent<boolean | null>) => void;
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-button": AppButton;
        "app-description": AppDescription;
        "app-header": AppHeader;
        "app-image": AppImage;
        "app-modal": AppModal;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-button": LocalJSX.AppButton & JSXBase.HTMLAttributes<HTMLAppButtonElement>;
            "app-description": LocalJSX.AppDescription & JSXBase.HTMLAttributes<HTMLAppDescriptionElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-image": LocalJSX.AppImage & JSXBase.HTMLAttributes<HTMLAppImageElement>;
            "app-modal": LocalJSX.AppModal & JSXBase.HTMLAttributes<HTMLAppModalElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
