import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/template/home/home.component';
import { CarrosCreateComponent } from './components/views/carros/carros-create/carros-create.component';
import { CarrosDeleteComponent } from './components/views/carros/carros-delete/carros-delete.component';
import { CarrosReadComponent } from './components/views/carros/carros-read/carros-read.component';
import { CarrosUpdateComponent } from './components/views/carros/carros-update/carros-update.component';
import { ClientesCreateComponent } from './components/views/clientes/clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from './components/views/clientes/clientes-delete/clientes-delete.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './components/views/clientes/clientes-update/clientes-update.component';
import { OrdemCreateComponent } from './components/views/ordem-servico/ordem-create/ordem-create.component';
import { OrdemDeleteComponent } from './components/views/ordem-servico/ordem-delete/ordem-delete.component';
import { OrdemReadComponent } from './components/views/ordem-servico/ordem-read/ordem-read.component';
import { OrdemUpdateComponent } from './components/views/ordem-servico/ordem-update/ordem-update.component';
import { ServicosCreateComponent } from './components/views/servicos/servicos-create/servicos-create.component';
import { ServicosDeleteComponent } from './components/views/servicos/servicos-delete/servicos-delete.component';
import { ServicosReadComponent } from './components/views/servicos/servicos-read/servicos-read.component';
import { ServicosUpdateComponent } from './components/views/servicos/servicos-update/servicos-update.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  //Clientes
  {path: 'clientes', component: ClientesReadComponent},
  {path: 'clientes/create', component: ClientesCreateComponent},
  {path: 'clientes/update/:id', component: ClientesUpdateComponent},
  {path: 'clientes/delete/:id', component: ClientesDeleteComponent},
  //Carros
  {path: 'clientes/:id_cliente/carro', component: CarrosReadComponent},
  {path: 'clientes/:id_cliente/carro/create', component: CarrosCreateComponent},
  {path: 'clientes/:id_cliente/carro/delete/:id', component: CarrosDeleteComponent},
  {path: 'clientes/:id_cliente/carro/update/:id', component: CarrosUpdateComponent},
  //Serviços
  {path: 'servicos', component: ServicosReadComponent},
  {path: 'servicos/create', component: ServicosCreateComponent},
  {path: 'servicos/update/:id', component: ServicosUpdateComponent},
  {path: 'servicos/delete/:id', component: ServicosDeleteComponent},
  //Ordem de serviço
  {path: 'ordem', component: OrdemReadComponent},
  {path: 'ordem/create', component: OrdemCreateComponent},
  {path: 'ordem/update/:id', component: OrdemUpdateComponent},
  {path: 'ordem/delete/:id', component: OrdemDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
