import { Component, OnInit } from '@angular/core';
import Thief from '../Thief';
import { BusinessService } from '../business.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-delete-thief',
  templateUrl: './update-delete-thief.component.html',
  styleUrls: ['./update-delete-thief.component.css']
})
export class UpdateDeleteThiefComponent implements OnInit {

  Thiefs: Thief[];

  constructor(private bs: BusinessService, private router:Router) { }

  deletethief(id) {
    this.bs.deletethief(id).subscribe(res => {
      alert('Thief Deleted');
      this.router.navigateByUrl('/thief/create');
    });
  }

  ngOnInit() {
    this.bs
      .getthief()
      .subscribe((data: Thief[]) => {
       this.Thiefs = data;
    });
  }

}
