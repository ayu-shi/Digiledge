import { Component, OnInit } from '@angular/core';
import Thief from '../Thief';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-thief',
  templateUrl: './get-thief.component.html',
  styleUrls: ['./get-thief.component.css']
})
export class GetThiefComponent implements OnInit {

  Thiefs: Thief[];

  constructor(private bs: BusinessService, private router:Router) { }

  ngOnInit() {
    this.bs
      .getthief()
      .subscribe((data: Thief[]) => {
       this.Thiefs = data;
    });
  }


}
