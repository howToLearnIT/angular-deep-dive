import { DOCUMENT, ElementRef, inject, InjectionToken } from "@angular/core";

export const SCROLL_REF = new InjectionToken('Scroll ref', {
    factory: () => new ElementRef(inject(DOCUMENT).documentElement)
});