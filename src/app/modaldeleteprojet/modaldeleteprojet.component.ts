import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeleteprojet',
  templateUrl: './modaldeleteprojet.component.html',
  styleUrls: ['./modaldeleteprojet.component.css']
})
export class ModaldeleteprojetComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
