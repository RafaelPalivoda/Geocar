import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/components/models/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {
  clienteForm!: FormGroup;
  cliente: Clientes ={
    id: '',
    nome: '',
    cpf: '',
    sexo: '',
    dtNascimento: '',
    telefone_contato: '',
    wpp: ''
  }
  constructor(private formBuilder: FormBuilder,
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!
    this.findById()
    /* this.clienteForm = this.formBuilder.group({
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      rg: [this.cliente.rg, Validators.required],
      sexo: [this.cliente.sexo, Validators.required],
      dtNascimento: [this.cliente.dtNascimento],
      telefoneContato: [this.cliente.telefoneContato, Validators.required],
      wpp: [this.cliente.wpp, Validators.required],
    }) */
  }
  findById(): void{
    this.service.findById(this.cliente.id!).subscribe((resposta) => {
      this.cliente.nome = resposta.nome
      this.cliente.cpf = resposta.cpf
      this.cliente.sexo = resposta.sexo
      this.cliente.dtNascimento = resposta.dtNascimento
      this.cliente.telefone_contato = resposta.telefone_contato
      this.cliente.wpp = resposta.wpp
    })
  }
  cancel(){
    this.router.navigate(["clientes"]);
  }
  delete(): void{
    this.service.delete(this.cliente.id!).subscribe((resposta) => {
      this.router.navigate(["clientes"]);
      this.service.mensagem("Cliente Deletado com sucesso!")
    }, err =>{
      this.service.mensagem(err.error.error)
    }
    )
  }
}
