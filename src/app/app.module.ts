import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule} from '@angular/material/radio';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/template/home/home.component';
import { ClientesReadComponent } from './components/views/clientes/clientes-read/clientes-read.component';
import { ClientesCreateComponent } from './components/views/clientes/clientes-create/clientes-create.component';
import { ClientesUpdateComponent } from './components/views/clientes/clientes-update/clientes-update.component';
import { ClientesDeleteComponent } from './components/views/clientes/clientes-delete/clientes-delete.component';
import { CarrosReadComponent } from './components/views/carros/carros-read/carros-read.component';
import { CarrosCreateComponent } from './components/views/carros/carros-create/carros-create.component';
import { CarrosUpdateComponent } from './components/views/carros/carros-update/carros-update.component';
import { CarrosDeleteComponent } from './components/views/carros/carros-delete/carros-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdemReadComponent } from './components/views/ordem-servico/ordem-read/ordem-read.component';
import { OrdemCreateComponent } from './components/views/ordem-servico/ordem-create/ordem-create.component';
import { OrdemUpdateComponent } from './components/views/ordem-servico/ordem-update/ordem-update.component';
import { OrdemDeleteComponent } from './components/views/ordem-servico/ordem-delete/ordem-delete.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ServicosReadComponent } from './components/views/servicos/servicos-read/servicos-read.component';
import { ServicosCreateComponent } from './components/views/servicos/servicos-create/servicos-create.component';
import { ServicosDeleteComponent } from './components/views/servicos/servicos-delete/servicos-delete.component';
import { ServicosUpdateComponent } from './components/views/servicos/servicos-update/servicos-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesReadComponent,
    ClientesCreateComponent,
    ClientesUpdateComponent,
    ClientesDeleteComponent,
    CarrosReadComponent,
    CarrosCreateComponent,
    CarrosUpdateComponent,
    CarrosDeleteComponent,
    OrdemReadComponent,
    OrdemCreateComponent,
    OrdemUpdateComponent,
    OrdemDeleteComponent,
    FooterComponent,
    ServicosReadComponent,
    ServicosCreateComponent,
    ServicosDeleteComponent,
    ServicosUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    CurrencyMaskModule,
    MatExpansionModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false}),
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
