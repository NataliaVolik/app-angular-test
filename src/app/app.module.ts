import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './dashboard/card/card.component';
import { FormFieldComponent } from './dashboard/form-field/form-field.component';
import { GridListComponent } from './dashboard/grid-list/grid-list.component';
import { AccordionComponent } from './dashboard/accordion/accordion.component';
import { MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { ButtonComponent } from './dashboard/form-field/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CardComponent,
    FormFieldComponent,
    GridListComponent,
    AccordionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatTabsModule,
      MatCardModule,
      MatDatepickerModule,
      MatGridListModule,
      MatExpansionModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
