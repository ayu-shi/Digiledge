import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-add-thief',
  templateUrl: './add-thief.component.html',
  styleUrls: ['./add-thief.component.css']
})
export class AddThiefComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      Name : ['', Validators.required ],
      City : ['', Validators.required ],
      Crime : ['', Validators.required ],
    });
  }

  addthief(Name, City, Crime) {
    this.bs.addthief(Name, City, Crime);
    this.angForm.reset();
  }

  ngOnInit() {
  }

}
