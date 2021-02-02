import { NgModule } from '@angular/core';
import {
    AlertModule,
    ModalModule,
    PopoverModule,
    TabsModule,
    CollapseModule,
    ProgressbarModule,
    AccordionModule,
    DatepickerModule
} from 'ngx-bootstrap';

@NgModule({
    imports: [
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        DatepickerModule.forRoot(),
        CollapseModule
    ],
    exports: [
        AlertModule,
        ModalModule,
        PopoverModule,
        ProgressbarModule,
        TabsModule,
        CollapseModule,
        AccordionModule,
        DatepickerModule
    ]
})
export class NgxBootstrapModule {
}
