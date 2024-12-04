import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/service/product.service';
import { CategroyService } from '../core/service/categroy.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id : number;
  list : Product[]=[];
/*
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }*/
  /*ngOnInit(){
   // this.id=this.ac.snapshot.params['id'];
  // this.ac.params.subscribe(res=>this.id=res['id']);
  this.ac.paramMap.subscribe(res=>
  {this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
  }});
    console.log("je suis le onInit");
  }*/


  //injecter le service categorie sous le nom de cs
  constructor(private cs:CategroyService,private ac:ActivatedRoute){}
  ngOnInit() {
    this.ac.params.subscribe(res => {
      const categoryId = Number(res['id']);  // Correctly get the 'id' from the route parameters
      if (!isNaN(categoryId)) {
        this.cs.getListProductsFormBackend(categoryId).subscribe((response) => {
          this.list = response;
        });
      } else {
        console.error('Invalid category ID:', res['id']);
      }
    });
  }
  


}
