import { Component, OnInit } from '@angular/core';
import { Carros } from 'src/app/components/models/carros';
import { Clientes } from 'src/app/components/models/clientes';
import { Ordem } from 'src/app/components/models/ordem';
import { Servico } from 'src/app/components/models/servico';
import { CarrosService } from 'src/app/service/carros.service';
import { ClientesService } from 'src/app/service/clientes.service';
import { OrdemService } from 'src/app/service/ordem.service';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-ordem-read',
  templateUrl: './ordem-read.component.html',
  styleUrls: ['./ordem-read.component.css']
})
export class OrdemReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cliente', 'carro', 'servico', 'dtAbertura', 'acoes'];
  ordem: Ordem[] = [];
  cliente: Clientes = {
    id: '',
    nome: '',
    cpf: '',
    sexo: '',
    dtNascimento: '',
    telefone_contato: '',
    wpp: ''
  }
  carro: Carros = {
    id: '',
    modelo: '',
    marca: '',
    placa: '',
    potencia: ''
  }
  servico: Servico = {
    id: '',
    nome: '',
    descricao: '',
    valor: ''
  }
  constructor(private service: OrdemService,
    private clienteService: ClientesService,
    private carroService: CarrosService,
    private servicoServico: ServicoService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.service.findAll().subscribe((resposta => {
      console.log(resposta);
      this.ordem = resposta;
      
    }))
  }
  

}
