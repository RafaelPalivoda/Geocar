import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/components/models/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'dtNascimento', 'telefone_contato', 'wpp', 'carro', 'acoes'];
  clientes: Clientes[] = [];
  
  constructor(private service: ClientesService,
    private router: Router) { }
    

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe((resposta => {
      console.log(resposta);
      this.clientes = resposta;
    }))
  }
  navegarParaCarros(){
    this.router.navigate(["carros/create"])
  }
}
