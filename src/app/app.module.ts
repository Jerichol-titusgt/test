import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PanelModule, TabViewModule, CodeHighlighterModule, SliderModule, DialogModule, MultiSelectModule, ContextMenuModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { startcase   } from './dashboard/startcase.pipe';
import {PaginatorModule} from 'primeng/paginator';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    startcase
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    AppRoutingModule,
    MenuModule, TableModule
    , DropdownModule, TabViewModule,
    CodeHighlighterModule, SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    TabViewModule,
    CodeHighlighterModule,
    PaginatorModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
