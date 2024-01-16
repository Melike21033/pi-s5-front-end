import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeleteitem',
  templateUrl: './modaldeleteitem.component.html',
  styleUrls: ['./modaldeleteitem.component.css']
})
export class ModaldeleteitemComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
