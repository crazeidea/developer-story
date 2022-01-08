import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './main.page';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [MainPage],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class MainModule { }
