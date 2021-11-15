import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from 'src/app/components/models/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {
  clienteForm!: FormGroup;
  cliente: Clientes = {
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
    this.cliente.id= this.route.snapshot.paramMap.get("id")!
    this.findById()
    

    /* this.clienteForm = this.formBuilder.group({
      id: [this.cliente.id],
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      rg: [this.cliente.rg, Validators.required],
      sexo: [this.cliente.sexo, Validators.required],
      dtNascimento: [this.cliente.dtNascimento],
      telefoneContato: [this.cliente.telefoneContato, Validators.required],
      wpp: [this.cliente.wpp, Validators.required],
    }) */
  }
  findById(): void {
    this.service.findById(this.cliente.id!).subscribe((resposta) => {
      console.log(resposta);
        this.cliente.nome = resposta.nome,
        this.cliente.cpf = resposta.cpf,
        this.cliente.sexo = resposta.sexo,
        this.cliente.dtNascimento = resposta.dtNascimento,
        this.cliente.telefone_contato = resposta.telefone_contato,
        this.cliente.wpp = resposta.wpp
    })
  }
  update() {
    this.service.update(this.cliente).subscribe((resposta) => {
      this.router.navigate(["clientes"])
      this.service.mensagem("Cliente atualizado com sucesso!!")
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }
  cancel() {
    this.router.navigate(["clientes"]);
  }
}
