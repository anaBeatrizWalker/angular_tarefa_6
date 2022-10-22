import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  @Input() numero: string;
  constructor() {}

  ngOnInit() {}

  tabuada() {
    let div: HTMLElement = document.getElementById('container');
    for (let i = 0; i < 11; i++) {
      let resultado =
        Number(this.numero) +
        ' x ' +
        i +
        ' = ' +
        Number(this.numero) * i +
        '<br />';
      div.innerHTML += resultado;
    }
  }
}
