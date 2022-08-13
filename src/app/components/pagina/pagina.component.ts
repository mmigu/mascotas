import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Articulos } from 'src/app/models/article';
import { ArticulosService } from 'src/app/services/article.service';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  providers: [ArticulosService]
})
export class PaginaComponent implements OnInit {

  public nombre: string | undefined;
  public articles!: Articulos[] ;
  public split: any[] = [];
  //public valores: any[] = [];
  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _articleServise: ArticulosService,
   

  ) { 

  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._articleServise.getCatDescription(id).subscribe(
        response => {
          if (response){
          this.articles = [response];
          console.log("resultado" ,this.articles);

          
            let valores= this.articles.map(inv => inv.temperament);
            for (let i = 0; i < valores.length; i++) {
              console.log(valores[0]);
            }
            //valores.split(',').length
            
           // var arrString = valores.[this.split](",");
            console.log("temp", valores);
          

        }else{

        }
        },
        error => {
          console.log(error);
        }
        
        
      )
    });

  
  

    this._route.params.subscribe((params: Params) =>{
      this.nombre = params['nombre'];
      console.log(params);
     
    });
  }

  redireccion(){
    //alert("Metodo redireccion");
    this._router.navigate(['/pagina-de-prueba','Miguel']);
  }

}
