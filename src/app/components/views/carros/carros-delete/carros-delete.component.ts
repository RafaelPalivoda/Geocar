import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from 'src/app/components/models/carros';
import { CarrosService } from 'src/app/service/carros.service';

@Component({
  selector: 'app-carros-delete',
  templateUrl: './carros-delete.component.html',
  styleUrls: ['./carros-delete.component.css']
})
export class CarrosDeleteComponent implements OnInit {

  id_cliente: String = '';

  carros: Carros = {
    id: '',
    modelo: '',
    marca: '',
    placa: '',
    potencia: ''
  }
  constructor(private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private service: CarrosService) { }

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get('id_cliente')!
    this.carros.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.carros.id!).subscribe(resposta => {
      this.carros = resposta;
    })
  }
  delete(): void{
    this.service.delete(this.carros.id!).subscribe(() => {
      this.router.navigate([`clientes/${this.id_cliente}/carro`]);
      this.service.mensagem("Carro deletado com sucesso");
    }, err => {
      this.router.navigate([`clientes/${this.id_cliente}/carro`])
      this.service.mensagem("Falha ao deletar o carro, Tente novamente mais tarde!");
    })
  }
  cancelar(){
    this.router.navigate([`clientes/${this.id_cliente}/carro`])
  }
}
