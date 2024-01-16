import { Component } from '@angular/core';

@Component({
  selector: 'app-modalupdatetache',
  templateUrl: './modalupdatetache.component.html',
  styleUrls: ['./modalupdatetache.component.css']
})
export class ModalupdatetacheComponent {
  closeModalUpdate() {
    const modalBackgroundupdate = document.getElementById('modalBackgroundupdate');
    if  (modalBackgroundupdate) {
      modalBackgroundupdate.style.display = 'none';
    }
  }
}
