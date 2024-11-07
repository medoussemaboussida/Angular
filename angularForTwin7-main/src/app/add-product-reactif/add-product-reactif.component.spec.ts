import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactifComponent } from './add-product-reactif.component';

describe('AddProductReactifComponent', () => {
  let component: AddProductReactifComponent;
  let fixture: ComponentFixture<AddProductReactifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductReactifComponent]
    });
    fixture = TestBed.createComponent(AddProductReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
