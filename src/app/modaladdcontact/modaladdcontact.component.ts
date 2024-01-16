import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdcontact',
  templateUrl: './modaladdcontact.component.html',
  styleUrls: ['./modaladdcontact.component.css']
})
export class ModaladdcontactComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
