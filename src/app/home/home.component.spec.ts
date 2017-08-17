import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthService } from '../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  const mockAuthService = {
    authenticated: true,
    logout: function () {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    });
  });

  it('is defined', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('showing "Enter" on authenticated', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('a').textContent).toBe('Enter');
  }));

  it('hiding "Enter" on not authenticated', async(() => {
    mockAuthService.authenticated = false;

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('a')).toBeNull();
  }));

  it('showing "Login" on not authenticated', async(() => {
    mockAuthService.authenticated = false;

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button.btn-primary').textContent).toBe('Login');
  }));

  it('hiding "Login" on authenticated', async(() => {
    mockAuthService.authenticated = true;

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.querySelector('button.btn-primary')).toBeNull();
  }));
});
