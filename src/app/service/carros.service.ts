import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carros } from '../components/models/carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }

  findById(id: String): Observable<Carros>{
    const url = `${this.baseUrl}/carro/${id}`
    return this.http.get<Carros>(url)
  }

  findAllByCliente(id_cliente: String):Observable<Carros[]>{
    const url = `${this.baseUrl}/carro?cliente=${id_cliente}`
    return this.http.get<Carros[]>(url)
  }
  
  create(carro: Carros, id_cliente: String): Observable<Carros>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = `${this.baseUrl}/carro?cliente=${id_cliente}`
    return this.http.post<Carros>(url, carro);
  }

  update(carros: Carros, id_cliente: String): Observable<Carros>{
    const url = `${this.baseUrl}/carro/${id_cliente}`
    return this.http.patch<Carros>(url, carros)
  }

  delete(id: String): Observable<void> {
    const url =  `${this.baseUrl}/carro/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void{
    this._snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}