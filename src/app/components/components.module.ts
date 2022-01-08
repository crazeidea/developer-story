import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DeveloperComponent } from './developer/developer.component';
import { PurchasableItemComponent } from './purchasable-item/purchasable-item.component';
import { LanguagesComponent } from './languages/languages.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { CommonModule } from '@angular/common';
import { TechstacksComponent } from './techstacks/techstacks.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShopComponent } from './shop/shop.component';

const components = [
    HeaderComponent,
    DeveloperComponent,
    PurchasableItemComponent,
    LanguagesComponent,
    TabsComponent
]

@NgModule({
    imports: [CommonModule],
    declarations: [...components, TabButtonComponent, TechstacksComponent, EquipmentsComponent, ProjectsComponent, ShopComponent],
    exports: [...components]
})
export class ComponentsModule { }
