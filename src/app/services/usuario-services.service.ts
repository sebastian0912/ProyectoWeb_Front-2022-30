import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment, URL_Usuario } from 'src/environments/environment';
import { Usuario } from 'src/app/model/usuario';
@Injectable({
  providedIn: 'root'
})

export class UsuarioServicesService {
  public http_server_base: any = "http://localhost:8080";

  constructor(private _httpclient: HttpClient) {
  }

  save(usuario: Usuario) {
    console.log(usuario);
    return this._httpclient.post<Response>(this.http_server_base + URL_Usuario.urlGetSave, usuario)
      .pipe(catchError(this.controlExcepcion)); 
      ;
  }

  controlExcepcion(_error: HttpErrorResponse) {
    return throwError(() => new Error(_error.message));
  }
}