import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdatecontact',
  templateUrl: './modalupdatecontact.component.html',
  styleUrls: ['./modalupdatecontact.component.css']
})
export class ModalupdatecontactComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if  (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
