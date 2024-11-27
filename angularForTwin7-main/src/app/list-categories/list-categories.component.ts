import { CardComponent } from '../card/card.component';
import { CategroyService } from '../core/service/categroy.service';
import { shortList } from '../models/shortlist';
import { Category } from './../models/category';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements AfterViewInit,OnInit{
  nom : string = "TWIN";
  titre : string = "";
  categories : Category[] = [];

  //injecter le service categorie sous le nom de cs
  constructor(private cs:CategroyService){}
  ngOnInit()
  {
    //this.categories=this.cs.getListCategories();
    this.cs.getListCategoriesFormBackend().subscribe((res)=>this.categories=res);
  }

  @ViewChildren(CardComponent) children: QueryList<CardComponent>;
  ngAfterViewInit()
  {
    this.children.forEach(child=>{
      console.log("Child :",child);
      child.title;
    });
  
  }

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
