import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Carros } from 'src/app/components/models/carros';
import { CarrosService } from 'src/app/service/carros.service';

@Component({
  selector: 'app-carros-update',
  templateUrl: './carros-update.component.html',
  styleUrls: ['./carros-update.component.css']
})
export class CarrosUpdateComponent implements OnInit {
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
      this.carros.modelo = resposta.modelo;
      this.carros.marca = resposta.marca;
      this.carros.placa = resposta.placa;
      this.carros.potencia = resposta.potencia;
    })
  }
  update(){
    this.service.update(this.carros, this.carros.id!).subscribe(() => {
      this.router.navigate([`clientes/${this.id_cliente}/carro`]);
      this.service.mensagem("Carro atualizado com sucesso");
    }, err => {
      this.router.navigate([`clientes/${this.id_cliente}/carro`])
      this.service.mensagem("Falha ao atualizar o carro, Tente novamente mais tarde!");
    })
  }

  cancelar(){
    this.router.navigate([`clientes/${this.id_cliente}/carro`])
  }
}
