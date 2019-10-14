import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiefEditComponent } from './thief-edit.component';

describe('ThiefEditComponent', () => {
  let component: ThiefEditComponent;
  let fixture: ComponentFixture<ThiefEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiefEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
