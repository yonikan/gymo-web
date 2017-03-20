import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./dashboard.component";
import { WidgetComponent } from "./widget/widget.component";


@NgModule({
    declarations: [
        DashboardComponent,
        WidgetComponent
    ],
    imports: [
        CommonModule
    ],
    providers: []
})
export class DashboardModule {

}
