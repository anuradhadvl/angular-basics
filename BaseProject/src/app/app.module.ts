import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AccessService } from './access.service';


import { AppComponent } from './app.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { WorkshopThumbnailComponent } from './workshop-thumbnail/workshop-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddWorkshopComponent } from './add-workshop/add-workshop.component';

const appRoutes: Routes = [
  {path:'create-workshop', component:AddWorkshopComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkshopListComponent,
    WorkshopThumbnailComponent,
    NavbarComponent,
    FooterComponent,
    AddWorkshopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    //AccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
