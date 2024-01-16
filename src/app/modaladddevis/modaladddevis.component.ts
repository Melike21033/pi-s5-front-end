import { Component } from '@angular/core';

@Component({
  selector: 'app-modaladddevis',
  templateUrl: './modaladddevis.component.html',
  styleUrls: ['./modaladddevis.component.css']
})
export class ModaladddevisComponent {
  closeModal() {
    const modalBackground = document.getElementById('modalBackground');
    if (modalBackground) {
      modalBackground.style.display = 'none';
    }
  }
}
