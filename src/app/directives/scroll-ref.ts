import { Directive, ElementRef } from '@angular/core';
import { SCROLL_REF } from '../tokens/scroll-ref';

@Directive({
    selector: '[scrollRef]',
    providers: [
        {
            provide: SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class ScrollRef {}