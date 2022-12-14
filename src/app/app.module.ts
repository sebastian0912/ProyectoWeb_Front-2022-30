import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePortalEmpleadoComponent } from './page/home-portal-empleado/home-portal-empleado.component';
import { RegistreseComponent } from './page/registrese/registrese.component';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from "ngx-pagination";
import { FooterComponent } from './page/footer/footer.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { SoyLoginTrabajadorHomeComponent } from './page/soy-login-trabajador-home/soy-login-trabajador-home.component';
import { IndexComponent } from './page/index/index.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { ConocenosComponent } from './page/conocenos/conocenos.component';
import { SoyEmpresaInteresadaHomeComponent } from './page/soy-empresa-interesada-home/soy-empresa-interesada-home.component';
import { SoyEmpresaInteresadaInfoComponent } from './page/soy-empresa-interesada-info/soy-empresa-interesada-info.component';
import { CotizadorComponent } from './page/cotizador/cotizador.component';
import { NavbarVerticalComponent } from './page/navbar-vertical/navbar-vertical.component';
import { DocumentosPortalEmpleadoComponent } from './page/documentos-portal-empleado/documentos-portal-empleado.component';
import { DocumentosDesprendComponent } from './page/documentos-desprend/documentos-desprend.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DocumentosLiquidComponent } from './page/documentos-liquid/documentos-liquid.component';
import { DocumentosCertificacionesComponent } from './page/documentos-certificaciones/documentos-certificaciones.component';
import { FormacionPortalEmpleadoComponent } from './page/formacion-portal-empleado/formacion-portal-empleado.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DatosPersonalesComponent } from './page/datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePortalEmpleadoComponent,
    RegistreseComponent,
    FooterComponent,
    NavbarComponent,
    SoyLoginTrabajadorHomeComponent,
    IndexComponent,
    ContactoComponent,
    ConocenosComponent,
    SoyEmpresaInteresadaHomeComponent,
    SoyEmpresaInteresadaInfoComponent,
    CotizadorComponent,
    NavbarVerticalComponent,
    DocumentosPortalEmpleadoComponent,
    DocumentosDesprendComponent,
    ProfileComponent,
    DocumentosLiquidComponent,
    DocumentosCertificacionesComponent,
    FormacionPortalEmpleadoComponent,
    PerfilComponent,
    DatosPersonalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
