import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Gestion-resultats',
  templateUrl: './Gestion-resultats.component.html',
  styleUrls: ['./Gestion-resultats.component.scss']
})
export class GestionResultatsComponent implements OnInit {
  files: any = [];
  constructor() { }

  ngOnInit() {
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }
}
