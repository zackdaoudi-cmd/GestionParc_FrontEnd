import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterModelComponent } from './ajouter-model.component';

describe('AjouterModelComponent', () => {
  let component: AjouterModelComponent;
  let fixture: ComponentFixture<AjouterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
