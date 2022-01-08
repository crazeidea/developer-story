import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasableItemComponent } from './purchasable-item.component';

describe('PurchasableItemComponent', () => {
  let component: PurchasableItemComponent;
  let fixture: ComponentFixture<PurchasableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
