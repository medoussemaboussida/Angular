import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategroyService {

  constructor() { }

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

  getListCategoriesFormBackend()
  {
    
  }
}
