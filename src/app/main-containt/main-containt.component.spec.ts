import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContaintComponent } from './main-containt.component';

describe('MainContaintComponent', () => {
  let component: MainContaintComponent;
  let fixture: ComponentFixture<MainContaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContaintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
