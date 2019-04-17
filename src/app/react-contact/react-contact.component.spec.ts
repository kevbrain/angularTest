import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactContactComponent } from './react-contact.component';

describe('ReactContactComponent', () => {
  let component: ReactContactComponent;
  let fixture: ComponentFixture<ReactContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
