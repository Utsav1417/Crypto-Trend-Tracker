import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinHomeComponent } from './coin-home.component';

describe('CoinHomeComponent', () => {
  let component: CoinHomeComponent;
  let fixture: ComponentFixture<CoinHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
