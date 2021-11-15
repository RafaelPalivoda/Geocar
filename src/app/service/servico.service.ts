import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from '../components/models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar) { }


  findAll():Observable<Servico[]>{
    const url = `${this.baseUrl}/servicos`
    return this.http.get<Servico[]>(url)
  }

  findById(id: String): Observable<Servico>{
    const url = `${this.baseUrl}/servicos/${id}`
    return this.http.get<Servico>(url)
  }
  create(servicos: Servico): Observable<Servico>{
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const url = `${this.baseUrl}/servicos`
    return this.http.post<Servico>(url, servicos);
  }

  update(servicos: Servico): Observable<Servico>{
    const url = `${this.baseUrl}/servicos/${servicos.id}`
    return this.http.patch<Servico>(url, servicos)
  }

  delete(id: String): Observable<void> {
    const url =  `${this.baseUrl}/servicos/${id}`
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
