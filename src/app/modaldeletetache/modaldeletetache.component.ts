import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeletetache',
  templateUrl: './modaldeletetache.component.html',
  styleUrls: ['./modaldeletetache.component.css']
})
export class ModaldeletetacheComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
