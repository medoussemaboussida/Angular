import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from './../models/product';
import { Category } from '../models/category';

@Component({
  selector: 'app-add-product-reactif',
  templateUrl: './add-product-reactif.component.html',
  styleUrls: ['./add-product-reactif.component.css']
})
export class AddProductReactifComponent {
myForm: FormGroup;
p:Product = new Product();

ngOnInit(){

  this.myForm= new FormGroup(
    {
    name: new FormControl("",[Validators.required,Validators.minLength(5),this.nameValidator]),
    description : new FormControl("",[Validators.required]),
    price : new FormControl("",[Validators.required,this.priceValidator]),
    categoryId : new FormControl("",[Validators.required]),
    image: new FormControl('', [Validators.required]),
    promotion: new FormControl('', [ Validators.required,this.promotionValidator ])
  }
)
}
save()
{
this.p.name=this.myForm.value.name;
console.log(this.p);
  console.log(this.myForm.value);
}
// Custom validator for name
nameValidator(control: FormControl) {
  const regex = /^[a-zA-Z]*$/; // Only letters
  return regex.test(control.value) ? null : { invalidName: true };
}
 // Custom validator for price
 priceValidator(control: FormControl) {
  const regex = /^\d+(\.\d+)?$/; // Only digits and optional decimal
  return regex.test(control.value) ? null : { invalidPrice: true };
}
// Custom validator for promotion
promotionValidator(control: FormControl) {
  const regex = /^(0|[1-9][0-9]?)$/; // Accepts numbers 0-99
  return regex.test(control.value) ? null : { invalidPromotion: true };
}

get name(){
  return this.myForm.get('name');
}
get description(){
  return this.myForm.get('description');
}
get price(){
  return this.myForm.get('price');
}
}
