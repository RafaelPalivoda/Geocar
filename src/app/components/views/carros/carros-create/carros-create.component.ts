import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carros } from 'src/app/components/models/carros';
import { CarrosService } from 'src/app/service/carros.service';

@Component({
  selector: 'app-carros-create',
  templateUrl: './carros-create.component.html',
  styleUrls: ['./carros-create.component.css']
})
export class CarrosCreateComponent implements OnInit {
  id_cliente: String = '';

  carrosForm!: FormGroup;
  carros: Carros ={
    id: '',
    modelo: '',
    marca: '',
    placa: '',
    potencia: ''
  }

  constructor(private formBuilder: FormBuilder,
    private service: CarrosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get('id_cliente')!

    this.carrosForm = this.formBuilder.group({
      id: [this.carros.id ,Validators.required],
      modelo: [this.carros.modelo ,Validators.required],
      marca: [this.carros.marca ,Validators.required],
      placa: [this.carros.placa ,Validators.required],
      potencia: [this.carros.potencia ,Validators.required]
    })
  }
  create(): void {
    this.service.create(this.carrosForm.value, this.id_cliente).subscribe((resposta) => {
      this.router.navigate([`clientes/${this.id_cliente}/carro`])
      this.service.mensagem("Carro cadastrado com sucesso!!")
    });
  }
  cancelar(){
    this.router.navigate([`clientes/${this.id_cliente}/carro`])
  }
}