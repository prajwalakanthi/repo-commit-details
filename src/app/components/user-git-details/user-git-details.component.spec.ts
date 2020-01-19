import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGitDetailsComponent } from './user-git-details.component';

describe('UserGitDetailsComponent', () => {
  let component: UserGitDetailsComponent;
  let fixture: ComponentFixture<UserGitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
