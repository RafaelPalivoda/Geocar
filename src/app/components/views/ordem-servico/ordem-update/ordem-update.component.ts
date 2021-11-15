import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordem } from 'src/app/components/models/ordem';
import { OrdemService } from 'src/app/service/ordem.service';

@Component({
  selector: 'app-ordem-update',
  templateUrl: './ordem-update.component.html',
  styleUrls: ['./ordem-update.component.css']
})
export class OrdemUpdateComponent implements OnInit {
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
  update() {
    this.service.update(this.ordem).subscribe((resposta) => {
      this.router.navigate(["ordem"])
      this.service.mensagem("Ordem de serviço atualizada com sucesso!!")
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }
  cancel() {
    this.router.navigate(["ordem"]);
  }
}