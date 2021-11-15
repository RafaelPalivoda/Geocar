import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from 'src/app/components/models/carros';
import { CarrosService } from 'src/app/service/carros.service';

@Component({
  selector: 'app-carros-read',
  templateUrl: './carros-read.component.html',
  styleUrls: ['./carros-read.component.css']
})
export class CarrosReadComponent implements OnInit {
  id_cliente: String = '';

  displayedColumns: string[] = ['id', 'modelo', 'marca', 'placa', 'acoes'];
  
  carro: Carros[] = [];

  constructor(private service: CarrosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get('id_cliente')!
    this.findAll()
  }
  findAll(){
    this.service.findAllByCliente(this.id_cliente).subscribe((resposta => {
      this.carro = resposta;
      console.log(resposta);
    }))
  }
}
