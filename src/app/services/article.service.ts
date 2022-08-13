import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { Articulos } from "../models/article";
import { Global } from "./global";


@Injectable()
export class ArticulosService {

public url: String;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
      //  var prueba =  this._http.get(this.url+'breeds?limit=10&page=0');
    }

    pruebas(){
        return "Aqui quedan los gatos";
    }

    getArticle():Observable<any> {
        
       // console.log(this.url+'breeds?limit=10&page=0');
        return this._http.get(this.url+'breeds?limit=30&page=0');
    }

    getCatDescription(id: string):Observable<any> {
        
        console.log(this.url+'breeds/'+id);
         return this._http.get(this.url+'breeds/'+id);
     }
}

