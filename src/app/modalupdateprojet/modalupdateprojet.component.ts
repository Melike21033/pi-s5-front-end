import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdateprojet',
  templateUrl: './modalupdateprojet.component.html',
  styleUrls: ['./modalupdateprojet.component.css']
})
export class ModalupdateprojetComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if  (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
