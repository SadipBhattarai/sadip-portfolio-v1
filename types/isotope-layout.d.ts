declare module "isotope-layout" {
  export type IsotopeOptions = {
    itemSelector?: string;
    layoutMode?: string;
    transitionDuration?: string | number;
  };

  export type ArrangeOptions = {
    filter?: string;
  };

  export default class Isotope {
    constructor(element: Element | string, options?: IsotopeOptions);
    arrange(options?: ArrangeOptions): void;
    destroy(): void;
  }
}
