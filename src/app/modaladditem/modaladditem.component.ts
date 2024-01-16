import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladditem',
  templateUrl: './modaladditem.component.html',
  styleUrls: ['./modaladditem.component.css']
})
export class ModaladditemComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
