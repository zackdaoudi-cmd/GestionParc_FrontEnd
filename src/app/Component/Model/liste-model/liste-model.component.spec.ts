import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeModelComponent } from './liste-model.component';

describe('ListeModelComponent', () => {
  let component: ListeModelComponent;
  let fixture: ComponentFixture<ListeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
