import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  param: string;
  myForm: FormGroup;
  @ViewChild('f') form: any;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => this.param = params['pub']);
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      matricule: new FormControl()
    });
  }
  onSubmit() {
    console.log(this.form.values);
  }

}
