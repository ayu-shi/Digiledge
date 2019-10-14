import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThiefComponent } from './get-thief.component';

describe('GetThiefComponent', () => {
  let component: GetThiefComponent;
  let fixture: ComponentFixture<GetThiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetThiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetThiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
