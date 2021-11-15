import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from '../components/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: String = environment.baseUrl;
  
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  findAll():Observable<Clientes[]>{
    const url = `${this.baseUrl}/cliente`
    return this.http.get<Clientes[]>(url)
  }

  findById(id: String): Observable<Clientes>{
    const url = `${this.baseUrl}/cliente/${id}`;
    return this.http.get<Clientes>(url)
  }
  create(cliente: Clientes): Observable<Clientes>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = `${this.baseUrl}/cliente`
    return this.http.post<Clientes>(url, cliente);
  }
  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/cliente/${id}`;
    return this.http.delete<void>(url);
  }

  update(cliente: Clientes):Observable<void>{
    const url = `${this.baseUrl}/cliente/${cliente.id}`;
    return this.http.patch<void>(url, cliente);
  }

  mensagem(str: String): void{
    this._snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
