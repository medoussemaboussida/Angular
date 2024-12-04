import { ActivatedRoute } from '@angular/router';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { CategroyService } from '../core/service/categroy.service';

@Component({
  selector: 'app-products-qpcategory',
  templateUrl: './products-qpcategory.component.html',
  styleUrls: ['./products-qpcategory.component.css']
})
export class ProductsQPCategoryComponent implements OnInit {
  id : number;
  list : Product[]=[];
  categoryId: number;
 /* constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }
  ngOnInit(){
   // this.id=this.ac.snapshot.queryParams['id'];
  // this.ac.queryParams.subscribe(res=>this.id=res['id']);
  this.ac.queryParamMap.subscribe(res=>
  {this.id=Number(res.get('id'));
  for(let p of this.listProducts){
     if (p.categoryId == this.id){
      this.list.push(p);
     }
  }});
    console.log("je suis le onInit");


}*/
constructor(private cs: CategroyService, private ac: ActivatedRoute) {}

ngOnInit() {
  // Accéder aux query parameters avec 'queryParams'
  this.ac.queryParams.subscribe(params => {
    this.categoryId = Number(params['id']); // Récupère le paramètre 'id' de l'URL
    if (!isNaN(this.categoryId)) {
      // Appel à une méthode du service pour récupérer les produits selon l'ID
      this.cs.getListProductsFormBackend(this.categoryId).subscribe((response) => {
        this.list = response; // Assigne la réponse à la liste
      });
    } else {
      console.error('ID invalide dans les query parameters');
    }
  });
}

}
