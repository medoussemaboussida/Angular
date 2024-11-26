import { shortList } from '../models/shortList';
import { Category } from './../models/category';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  nom : string = "TWIN";
  titre : string = "";
  categories : Category[] = [
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
  clickMe(ch:string){
    console.log("test event binding " + ch);
  }

  clickImage(description:string){
    alert (description);
  }
  f(msg:any)
  {console.log("btn clicked " +msg.code + " "+msg.id)}

  //recepteur
//on va cliquer dans fils et notifier le parent pour ajouter le type categorie au shortlist
shortList: shortList[]=[];
addToShortList(x:Category) 
{
  let exist : boolean =false;
  let elt:shortList={'id':1,'idElement':x.id,'idUser':1,'typeElement':'Category'}
  for(let a of this.shortList)
  {
    if(a.idUser==1 && a.idElement== x.id && a.typeElement=='Category')
    {
      exist=true;
      alert("exist");
    }
 
  }
  if(!exist)
    {
       this.shortList.push(elt);
    }
  console.log(this.shortList);
}  

}
