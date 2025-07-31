import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperationComponent } from './rxjs-operation.component';

describe('RxjsOperationComponent', () => {
  let component: RxjsOperationComponent;
  let fixture: ComponentFixture<RxjsOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
