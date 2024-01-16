import { Component } from '@angular/core';

@Component({
  selector: 'app-modaldeleteclient',
  templateUrl: './modaldeleteclient.component.html',
  styleUrls: ['./modaldeleteclient.component.css']
})
export class ModaldeleteclientComponent {
  closeModalDelete() {
    const modalBackgrounddelete = document.getElementById('modalBackgrounddelete');
    if  (modalBackgrounddelete) {
      modalBackgrounddelete.style.display = 'none';
    }
  }
}
