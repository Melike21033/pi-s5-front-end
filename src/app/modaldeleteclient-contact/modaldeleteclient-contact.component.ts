import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeleteclient-contact',
  templateUrl: './modaldeleteclient-contact.component.html',
  styleUrls: ['./modaldeleteclient-contact.component.css']
})
export class ModaldeleteclientContactComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
