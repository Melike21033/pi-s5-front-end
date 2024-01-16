import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladdclient',
  templateUrl: './modaladdclient.component.html',
  styleUrls: ['./modaladdclient.component.css']
})
export class ModaladdclientComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
