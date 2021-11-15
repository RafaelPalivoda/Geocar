import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/components/models/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servicos-read',
  templateUrl: './servicos-read.component.html',
  styleUrls: ['./servicos-read.component.css']
})
export class ServicosReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'valor', 'acoes'];
  servicos: Servico[] = []
  constructor(private service: ServicoService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.service.findAll().subscribe((resposta => {
      console.log(resposta);
      this.servicos = resposta;
    }))
  }
}
