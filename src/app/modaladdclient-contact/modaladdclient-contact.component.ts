import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdclient-contact',
  templateUrl: './modaladdclient-contact.component.html',
  styleUrls: ['./modaladdclient-contact.component.css']
})
export class ModaladdclientContactComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
