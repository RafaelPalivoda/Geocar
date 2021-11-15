import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Carros } from 'src/app/components/models/carros';
import { Clientes } from 'src/app/components/models/clientes';
import { Ordem } from 'src/app/components/models/ordem';
import { Servico } from 'src/app/components/models/servico';
import { OrdemService } from 'src/app/service/ordem.service';
/* import { CarrosService } from 'src/app/service/carros.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { ServicoService } from 'src/app/service/servico.service'; */

@Component({
  selector: 'app-ordem-create',
  templateUrl: './ordem-create.component.html',
  styleUrls: ['./ordem-create.component.css']
})
export class OrdemCreateComponent implements OnInit {
  ordemForm!: FormGroup
  /* id_cliente = "";
  cliente: Clientes[] = [];
  carro: Carros[] = [];
  servico: Servico[] = []; */
  ordem: Ordem = {
    id: '',
    descricao: '',
    dtAbertura: '',
    carro: '',
    cliente: '',
    servico: ''
  }
  constructor(private formBuilder: FormBuilder,
    /* private clienteService: ClientesService,
    private carroService: CarrosService,
    private servicoService: ServicoService, */
    private service: OrdemService,
    private router: Router) { }

  ngOnInit(): void {
    this.ordemForm = this.formBuilder.group({
      id: [this.ordem.id],
      servico: [this.ordem.servico],
      carro: [this.ordem.carro],
      cliente: [this.ordem.cliente],
      dtAbertura: [this.ordem.dtAbertura]
    })
    /* this.findAllClientes();

    this.findAllServicos(); */
  }
  create(): void {
    this.service.create(this.ordemForm.value).subscribe((resposta) => {
      this.router.navigate(['ordem']);
      this.service.mensagem("Ordem de serviço criado com sucesso!")
    })
  }
  cancel(){
    this.router.navigate(["ordem"]);
  }
  /* findAllClientes(){
    this.clienteService.findAll().subscribe((resposta => {
      console.log(resposta);
      this.cliente = resposta;
    }))
  }
  findAllCarros(){
    this.carroService.findAllByCliente(this.ordemForm.get('cliente')?.value).subscribe((resposta) => {
      console.log(resposta);
      this.carro = resposta;
    })
  }
  findAllServicos(){
    this.servicoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.servico = resposta;
    })
  } */
}
