import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/components/models/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
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
    private router: Router) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      sexo: [this.cliente.sexo, Validators.required],
      dtNascimento: [this.cliente.dtNascimento],
      telefone_contato: [this.cliente.telefone_contato, Validators.required],
      wpp: [this.cliente.wpp, Validators.required],
    })
  }
  create(): void {
    this.service.create(this.clienteForm.value).subscribe((resposta) => {
      this.router.navigate(['clientes']);
      this.service.mensagem("Cliente criado com sucesso!")
    })
  }
  cancel(){
    this.router.navigate(["clientes"]);
  }
}
