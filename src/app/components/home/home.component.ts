
import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/models/article';
import { ArticulosService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticulosService]
})
export class HomeComponent implements OnInit {

  

 
  public articles: Articulos [] = [];
  public page!: number;

  constructor(
    private _articleService: ArticulosService
  ) { 
    
  }

  ngOnInit(): void {
    //console.log(this._articleService.pruebas());
    this._articleService.getArticle().subscribe(
      response => {
        if (response){
          this.articles = response;
        }else{

        }
      },
      error => {
        console.log(error);
      }

    );
  }

}


