import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdateclient-contact',
  templateUrl: './modalupdateclient-contact.component.html',
  styleUrls: ['./modalupdateclient-contact.component.css']
})
export class ModalupdateclientContactComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if  (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
