import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaderComponent } from './kader.component';

describe('KaderComponent', () => {
  let component: KaderComponent;
  let fixture: ComponentFixture<KaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
