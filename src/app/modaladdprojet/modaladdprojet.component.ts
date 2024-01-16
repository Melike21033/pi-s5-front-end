import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdprojet',
  templateUrl: './modaladdprojet.component.html',
  styleUrls: ['./modaladdprojet.component.css']
})
export class ModaladdprojetComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
