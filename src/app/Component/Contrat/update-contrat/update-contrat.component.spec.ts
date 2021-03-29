import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContratComponent } from './update-contrat.component';

describe('UpdateContratComponent', () => {
  let component: UpdateContratComponent;
  let fixture: ComponentFixture<UpdateContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
