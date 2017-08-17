import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthService } from '../auth/auth.service';

describe('AuthenticatedComponent', () => {
  const mockAuthService = {
    authenticated: true,
    logout: function () {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticatedComponent],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    });
  });

  it('is defined', () => {
    const fixture = TestBed.createComponent(AuthenticatedComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('showing on authenticated', async(() => {
    const fixture = TestBed.createComponent(AuthenticatedComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button').classList).toContain('btn');
  }));

  it('hidden on not authenticated', async(() => {
    mockAuthService.authenticated = false;

    const fixture = TestBed.createComponent(AuthenticatedComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button')).toBeNull();
  }));
});
