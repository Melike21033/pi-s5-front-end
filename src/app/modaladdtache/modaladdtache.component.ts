import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdtache',
  templateUrl: './modaladdtache.component.html',
  styleUrls: ['./modaladdtache.component.css']
})
export class ModaladdtacheComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if  (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
