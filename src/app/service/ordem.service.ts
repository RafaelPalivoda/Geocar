import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carros } from '../components/models/carros';
import { Clientes } from '../components/models/clientes';
import { Ordem } from '../components/models/ordem';
import { Servico } from '../components/models/servico';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  findAll():Observable<Ordem[]>{
    const url = `${this.baseUrl}/ordem`
    return this.http.get<Ordem[]>(url)
  }

  findById(id: String): Observable<Ordem>{
    const url = `${this.baseUrl}/ordem/${id}`;
    return this.http.get<Ordem>(url)
  }
  create(ordem: Ordem): Observable<Ordem>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = `${this.baseUrl}/ordem`
    return this.http.post<Ordem>(url, ordem);
  }
  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/ordem/${id}`;
    return this.http.delete<void>(url);
  }

  update(ordem: Ordem):Observable<void>{
    const url = `${this.baseUrl}/ordem/${ordem.id}`;
    return this.http.patch<void>(url, ordem);
  }

  mensagem(str: String): void{
    this._snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
