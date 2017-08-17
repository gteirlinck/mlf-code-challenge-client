import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterModule],
      providers: [ChildrenOutletContexts]
    }).compileComponents();
  }));

  it('is defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  }));
});
