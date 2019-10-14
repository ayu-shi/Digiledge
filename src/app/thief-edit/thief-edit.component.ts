import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-thief-edit',
  templateUrl: './thief-edit.component.html',
  styleUrls: ['./thief-edit.component.css']
})
export class ThiefEditComponent implements OnInit {

  business: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      Name : ['', Validators.required ],
      City : ['', Validators.required ],
      Crime : ['', Validators.required ],
      });
    }

    updatethief(Name, City, Crime) {
      this.route.params.subscribe(params => {
         this.bs.updatethief(Name, City, Crime, params['id']);
         this.router.navigate(['thief']);
   });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editthief(params['id']).subscribe(res => {
          this.business = res;
          console.log(this.business);
      });
    });
  }

}
