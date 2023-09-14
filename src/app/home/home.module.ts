import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home.component';
import { HistoryComponent } from './components/history/history.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BodyComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
