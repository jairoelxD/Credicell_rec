import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarprodComponent } from './explorarprod.component';

describe('ExplorarprodComponent', () => {
  let component: ExplorarprodComponent;
  let fixture: ComponentFixture<ExplorarprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarprodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
