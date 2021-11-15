import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Servico } from 'src/app/components/models/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servicos-update',
  templateUrl: './servicos-update.component.html',
  styleUrls: ['./servicos-update.component.css']
})
export class ServicosUpdateComponent implements OnInit {
  servicos: Servico = {
    id: '',
    nome: '',
    descricao: '',
    valor: ''
  }
  constructor(private service: ServicoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicos.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  findById(): void{
    this.service.findById(this.servicos.id!).subscribe((resposta) => {
      this.servicos.nome = resposta.nome
      this.servicos.descricao = resposta.descricao
      this.servicos.valor = resposta.valor
    })
  }
  cancel(){
    this.router.navigate(["servicos"]);
  }
  update() {
    this.service.update(this.servicos).subscribe((resposta) => {
      this.router.navigate(["servicos"])
      this.service.mensagem("Servico atualizado com sucesso!!")
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }
}
