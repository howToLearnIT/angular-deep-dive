import { Component, OnInit, output } from "@angular/core";
import { interval, timeout, timer } from "rxjs";

@Component({
    selector: 'expandable-panel',
    template: `
        Панель
    `,
})
export class ExpandablePanel implements OnInit {
    panelSelected = output<number>();
    closed = output<boolean>({alias: 'closeEvent'});

    ngOnInit(): void {
        interval(2000).subscribe((count) => {
            this.panelSelected.emit(count);
        });

        timer(5000).subscribe(()=> {
            this.closed.emit(true)
        })
    }
}