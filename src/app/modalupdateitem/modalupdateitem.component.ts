import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdateitem',
  templateUrl: './modalupdateitem.component.html',
  styleUrls: ['./modalupdateitem.component.css']
})
export class ModalupdateitemComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
