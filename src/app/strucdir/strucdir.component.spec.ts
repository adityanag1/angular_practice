import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucdirComponent } from './strucdir.component';

describe('StrucdirComponent', () => {
  let component: StrucdirComponent;
  let fixture: ComponentFixture<StrucdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrucdirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrucdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
