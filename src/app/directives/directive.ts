import { ChangeDetectionStrategy } from "@angular/compiler";
import { Directive, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[myDirective]',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDirective implements OnChanges, OnInit, OnDestroy {
    myDirective = input<string>();
    value = input<number>();

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Пришли новые параметры ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('Инициализация ngOnInit ', this.myDirective(), this.value())
    }

    ngDoCheck() {
        console.log('Проверка изменений ngDoCheck')
    }

    ngOnDestroy(): void {
        console.log('Уничтожаемся ngOnDestroy');
    }
}