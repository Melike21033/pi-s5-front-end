// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { TacheComponent } from './tache/tache.component';
import { ItemComponent } from './item/item.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { ProjetComponent } from './projets/projet.component';
import { ItemTacheComponent } from './item-tache/item-tache.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'tache', component: TacheComponent },
  { path: 'item', component: ItemComponent },
  { path: 'client', component: ClientComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'item-tache', component: ItemTacheComponent },
  { path: 'client-contact', component: ClientContactComponent },
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
