import { Injectable } from '@angular/core';
import { ApiUrlConfigService }        from './api-url-config.service';
import { AuthorizationService }       from './authorization.service'; 

import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { RegisterResponse } from '../interfaces/register-response';

import { Observable}                  from 'rxjs/Rx';
import { AtributsComboResponse } from '../interfaces/atributs-combo-response';

@Injectable()
export class RegisterService {

  constructor(private http                 : HttpClient,
              private ApiUrlConfigService  : ApiUrlConfigService,
              private AuthorizationService : AuthorizationService) { }


getRegistres(): Observable<RegisterResponse[]>
{
  return this.http.get( this.ApiUrlConfigService._getRegistresURL, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}    

  getRegistresPage(page: number, per_page: number): Observable<RegisterResponse[]>
  {
    return this.http.get( this.ApiUrlConfigService._getRegistresPageURL + "?page=" + page + "&per_page=" + per_page, 
                          this.AuthorizationService.header_token()
                        )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));
  }

  getRegistresCount(): Observable<number>
  {
    return this.http.get( this.ApiUrlConfigService._getRegistresCountURL, 
                          this.AuthorizationService.header_token()
                        )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));  
  }
  
  deleteRegistre(id: number): Observable<RegisterResponse>{

    return this.http.delete( this.ApiUrlConfigService._deleteRegistreURL + id,
                             this.AuthorizationService.header_token() 
                          )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));
  }

  getRegistre(id:number): Observable<RegisterResponse>
  {
    return this.http.get( this.ApiUrlConfigService._getRegistreURL + id, 
                          this.AuthorizationService.header_token()
                        )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));  
  }

  postRegistre(clau:string, dades: string, producte: string): Observable<RegisterResponse> {

    return this.http.post(  this.ApiUrlConfigService._postRegistreURL,
                            { "clau": clau, "dades" : dades, "producte" : producte },
                            this.AuthorizationService.header_token() 
                          )
                    .map(respuesta => respuesta)
                    .catch((error: any) => Observable.throw(error));
  } 

  //////////////////////////////////////////////////////////////////////////////////////

  putRegistre(id: number, title: string, content: string): Observable<RegisterResponse>{

      return this.http.put(  this.ApiUrlConfigService._putRegistreURL + id,
                             { "title": title, "content" : content },
                             this.AuthorizationService.header_token() 
                          )
                      .map(respuesta => respuesta)
                      .catch((error: any) => Observable.throw(error));
  }

  getProductes(): Observable<string[]>
{
  return this.http.get( this.ApiUrlConfigService._getProductesURL, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}

getCombos(tipusProducte: String): Observable<AtributsComboResponse>
{
  return this.http.get( this.ApiUrlConfigService._getCombosProd + tipusProducte, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}


getComboColorCarn(tipusProducte: String): Observable<String[]>
{
  return this.http.get( this.ApiUrlConfigService._getCombosProdColorCarn + tipusProducte, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}
getComboVarietat(tipusProducte: String): Observable<String[]>
{
  return this.http.get( this.ApiUrlConfigService._getCombosProdVarietat + tipusProducte, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}
getComboCalibre(tipusProducte: String): Observable<String[]>
{
  return this.http.get( this.ApiUrlConfigService._getCombosProdCalibre + tipusProducte, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}
getComboQualitat(tipusProducte: String): Observable<String[]>
{
  return this.http.get( this.ApiUrlConfigService._getCombosProdQualitat + tipusProducte, 
                        this.AuthorizationService.header_token()
                      )
                  .map(respuesta => respuesta)
                  .catch((error: any) => Observable.throw(error));  
}
}
