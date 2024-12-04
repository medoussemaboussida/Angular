import { Component, OnInit } from '@angular/core';
import { CategroyService } from '../core/service/categroy.service';
import { Category } from '../models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  constructor(private cs:CategroyService,private ac:ActivatedRoute)
  {}
  category:Category =new Category();
  ngOnInit()
  {
    
    this.ac.params.subscribe(res=>{this.cs.getCategoryById(Number(res['id']))
      .subscribe(res=>this.category=res);
    });
  }
}
