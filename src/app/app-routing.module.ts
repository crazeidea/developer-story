import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './main/main.page';
import { StartComponent } from './start/start.component';

const routes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'main',
        component: MainPage
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
