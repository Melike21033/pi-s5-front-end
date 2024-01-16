// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { TacheComponent } from './tache/tache.component';
import { ItemComponent } from './item/item.component';
import { DevisComponent } from './devis/devis.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projets/projet.component';
import { ModaladdtacheComponent } from './modaladdtache/modaladdtache.component';
import { ModalupdatetacheComponent } from './modalupdatetache/modalupdatetache.component';
import { ModaladditemComponent } from './modaladditem/modaladditem.component';
import { ModalupdateitemComponent } from './modalupdateitem/modalupdateitem.component';
import { ModaladddevisComponent } from './modaladddevis/modaladddevis.component';
import { ModalupdatedevisComponent } from './modalupdatedevis/modalupdatedevis.component';
import { ModalupdateclientComponent } from './modalupdateclient/modalupdateclient.component';
import { ModaladdclientComponent } from './modaladdclient/modaladdclient.component';
import { ModaladdcontactComponent } from './modaladdcontact/modaladdcontact.component';
import { ModalupdatecontactComponent } from './modalupdatecontact/modalupdatecontact.component';
import { ModalupdateprojetComponent } from './modalupdateprojet/modalupdateprojet.component';
import { ModaladdprojetComponent } from './modaladdprojet/modaladdprojet.component';
import { ItemTacheComponent } from './item-tache/item-tache.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ModalupdateitemTacheComponent } from './modalupdateitem-tache/modalupdateitem-tache.component';
import { ModaladditemTacheComponent } from './modaladditem-tache/modaladditem-tache.component';
import { ModalupdateclientContactComponent } from './modalupdateclient-contact/modalupdateclient-contact.component';
import { ModaladdclientContactComponent } from './modaladdclient-contact/modaladdclient-contact.component';
import { ModaldeletetacheComponent } from './modaldeletetache/modaldeletetache.component';
import { ModaldeleteitemComponent } from './modaldeleteitem/modaldeleteitem.component';
import { ModaldeletedevisComponent } from './modaldeletedevis/modaldeletedevis.component';
import { ModaldeleteclientComponent } from './modaldeleteclient/modaldeleteclient.component';
import { ModaldeletecontactComponent } from './modaldeletecontact/modaldeletecontact.component';
import { ModaldeleteprojetComponent } from './modaldeleteprojet/modaldeleteprojet.component';
import { ModaldeleteitemTacheComponent } from './modaldeleteitem-tache/modaldeleteitem-tache.component';
import { ModaldeleteclientContactComponent } from './modaldeleteclient-contact/modaldeleteclient-contact.component';

@NgModule({
  declarations: [AppComponent, Page1Component, TacheComponent, ItemComponent, DevisComponent, ClientComponent, ContactComponent, ProjetComponent, ModaladdtacheComponent, ModalupdatetacheComponent, ModaladditemComponent, ModalupdateitemComponent, ModaladddevisComponent, ModalupdatedevisComponent, ModalupdateclientComponent, ModaladdclientComponent, ModaladdcontactComponent, ModalupdatecontactComponent, ModalupdateprojetComponent, ModaladdprojetComponent, ItemTacheComponent, ClientContactComponent, ModalupdateitemTacheComponent, ModaladditemTacheComponent, ModalupdateclientContactComponent, ModaladdclientContactComponent, ModaldeletetacheComponent, ModaldeleteitemComponent, ModaldeletedevisComponent, ModaldeleteclientComponent, ModaldeletecontactComponent, ModaldeleteprojetComponent, ModaldeleteitemTacheComponent, ModaldeleteclientContactComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
