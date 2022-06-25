import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUtilComponent } from './card-util.component';

describe('CardUtilComponent', () => {
  let component: CardUtilComponent;
  let fixture: ComponentFixture<CardUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
