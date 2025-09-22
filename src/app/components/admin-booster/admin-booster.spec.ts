import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooster } from './admin-booster';

describe('AdminBooster', () => {
  let component: AdminBooster;
  let fixture: ComponentFixture<AdminBooster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBooster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBooster);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
