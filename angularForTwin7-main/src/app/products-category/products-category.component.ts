import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/service/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id : number;
  list : Product[]=[];
  listProducts : Product[]=[];
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
  constructor(private cs:ProductService){}
  ngOnInit()
  {
    //this.categories=this.cs.getListCategories();
    this.cs.getListProductsFormBackend().subscribe((res)=>this.listProducts=res);
  }


}
