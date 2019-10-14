import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteThiefComponent } from './update-delete-thief.component';

describe('UpdateDeleteThiefComponent', () => {
  let component: UpdateDeleteThiefComponent;
  let fixture: ComponentFixture<UpdateDeleteThiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDeleteThiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteThiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
