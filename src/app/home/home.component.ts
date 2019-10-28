import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  composant: string;
  composants: Array<string>;

  constructor() { }

  ngOnInit() {
    this.composants = new Array<string>();
  }
  onAddComposant() {
    if (this.composant.length !== 0) {
      this.composants.push(this.composant);
      console.log(this.composants);
    }
  }

}
