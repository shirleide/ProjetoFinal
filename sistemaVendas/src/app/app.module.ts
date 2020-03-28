import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ClienteService } from './cliente/servico/cliente.service';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';
import { VendasService } from './vendas/servico/vendas.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ClienteComponent,
    ClientemanterComponent,
    ProdutoComponent,
    ProdutomanterComponent,
    VendasComponent,
    VendasmanterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClienteService,
    VendasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
