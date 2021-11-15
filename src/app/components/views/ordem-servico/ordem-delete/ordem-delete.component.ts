import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ordem } from 'src/app/components/models/ordem';
import { OrdemService } from 'src/app/service/ordem.service';

@Component({
  selector: 'app-ordem-delete',
  templateUrl: './ordem-delete.component.html',
  styleUrls: ['./ordem-delete.component.css']
})
export class OrdemDeleteComponent implements OnInit {
  ordem: Ordem = {
    id: '',
    descricao: '',
    dtAbertura: '',
    carro: '',
    cliente: '',
    servico: ''
  }
  constructor(private service: OrdemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ordem.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }
  findById(): void {
    this.service.findById(this.ordem.id!).subscribe((resposta) =>{
      console.log(resposta);
      this.ordem.id = resposta.id;
      this.ordem.descricao = resposta.descricao;
      this.ordem.dtAbertura = resposta.dtAbertura;
      this.ordem.carro = resposta.carro;
      this.ordem.cliente = resposta.cliente;
      this.ordem.servico = resposta.servico;
    })
  }
  delete() {
    this.service.delete(this.ordem.id!).subscribe((resposta) => {
      this.router.navigate(["ordem"])
      this.service.mensagem("Ordem de serviço deletada com sucesso!!")
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }
  cancel() {
    this.router.navigate(["ordem"]);
  }
}
