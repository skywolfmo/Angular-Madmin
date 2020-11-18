import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  currentData: Data;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
  });


  constructor() { }

  ngOnInit(): void {

  }

  // setting the value of the current form
  setFormValues(data) {
    this.form.setValue({
      name: data.name,
      tel: data.tel,
    });
  }
  // Submit the data using the service with the current data
  onSubmit() {
    console.log(this.form.value);
    this.prepareData();
  }
  prepareData() {
    let p = new Promise((res, rej) => {
      this.currentData = this.form.value;

      console.log("Preparing Data");
      console.log(this.currentData);

    });
    return p;
  }
  // Put/Update the staff using the service 
  postStaff(data: Data) {
    console.log(data)
  }



}
