import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Servico } from 'src/app/components/models/servico';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-servicos-create',
  templateUrl: './servicos-create.component.html',
  styleUrls: ['./servicos-create.component.css']
})
export class ServicosCreateComponent implements OnInit {
  servicoForm!: FormGroup;
  servico: Servico = {
    id: '',
    nome: '',
    descricao: '',
    valor: ''
  }
  constructor(private formBuilder: FormBuilder,
    private service: ServicoService,
    private router: Router) { }

  ngOnInit(): void {
    this.servicoForm = this.formBuilder.group({
      nome: [this.servico.nome],
      descricao: [this.servico.descricao],
      valor: [this.servico.valor]
    })
  }
  create(): void {
    this.service.create(this.servicoForm.value).subscribe((resposta) => {
      this.router.navigate(['servicos']);
      this.service.mensagem("Serviço criado com sucesso!")
    })
  }
  cancel(){
    this.router.navigate(["servicos"]);
  }
}
