import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {
  apiUrlCat : String ="http://localhost:3000/categories";
  
  constructor(private http:HttpClient) {

   }

  getListCategories() : Category[]
  {
    //retour sync
    return  [
      {"id":1,"title":"Grand électroménager",
        "image":"assets/images/categorie_electromenager.jpg", "description":"description1",
        "available":true,      btnText: 'Voir plus'
      },
        {"id":2,"title":"Petit électroménager",
        "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description2",
        "available":true,      btnText: 'Voir plus'},
        {"id":3,"title":"Produits informatiques",
        "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description3",
        "available":true,      btnText: 'Voir plus'},
        {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
        "description":"description4", "available":true,      btnText: 'Voir plus'},
        {"id":5,"title":"TV, images et son",
        "image":"assets/images/categorie_tv_image_son.jpg", "description":"description5",
        "available":true,      btnText: 'Voir plus'},
        {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
        "description":"description6","available":false,      btnText: 'Voir plus'},
    ];

  }

  getListCategoriesFormBackend(): Observable<Category[]>
  {
   return this.http.get<Category[]>("http://localhost:3000/categories");
  }

  getCategoryById(id:number): Observable<Category>
  {
    return this.http.get<Category>(this.apiUrlCat+"/"+id);

  }
  apiUrlProd : any ="http://localhost:3000/products";

  getListProduit(): Product[]
  {
    return [
      {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
      {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
      {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
      {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
      {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
      {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
    ];
  }

  getListProductsFormBackend(id:number): Observable<Product[]>
  {
   return this.http.get<Product[]>(this.apiUrlProd+"?categoryId="+id);
  }

  addProduct(product:Product): Observable<Product>
  {
   return this.http.post<Product>(this.apiUrlProd,product);
  }
}
