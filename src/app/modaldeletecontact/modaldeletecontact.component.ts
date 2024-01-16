import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeletecontact',
  templateUrl: './modaldeletecontact.component.html',
  styleUrls: ['./modaldeletecontact.component.css']
})
export class ModaldeletecontactComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
