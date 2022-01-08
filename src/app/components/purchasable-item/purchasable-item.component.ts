import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-purchasable-item',
    templateUrl: './purchasable-item.component.html',
    styleUrls: ['./purchasable-item.component.scss']
})
export class PurchasableItemComponent implements OnInit {

    @Input() name = 'html';
    @Input() level: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

}
