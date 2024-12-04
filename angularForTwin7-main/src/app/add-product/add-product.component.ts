import { CategroyService } from '../core/service/categroy.service';
import { Product } from './../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  p:Product = new Product();
  //service 
  constructor(private cs:CategroyService){}
  add(myForm){
   console.log(this.p);
   console.log(myForm);
   //service
   this.cs.addProduct(this.p).subscribe(()=>{alert("ajout avec success")}); 
   this.p=new Product;
  }
}
