import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdateclient',
  templateUrl: './modalupdateclient.component.html',
  styleUrls: ['./modalupdateclient.component.css']
})
export class ModalupdateclientComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if  (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
