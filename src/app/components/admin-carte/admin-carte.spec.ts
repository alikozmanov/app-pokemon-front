import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarte } from './admin-carte';

describe('AdminCarte', () => {
  let component: AdminCarte;
  let fixture: ComponentFixture<AdminCarte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCarte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
