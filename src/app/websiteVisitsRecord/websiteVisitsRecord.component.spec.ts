import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { WebsiteVisitsRecordComponent } from './websiteVisitsRecord.component';
import { WebsiteVisitsRecordDataSource } from './websiteVisitsRecord.datasource';
import { WebsiteVisitsRecordStaticDataSource } from './websiteVisitsRecord.static.datasource';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticatedTestingModule } from '../authenticated/authenticated.testing.module';
import { WebsiteVisitsRecord } from './websiteVisitsRecord.model';
import { Observable } from 'rxjs/Observable';

describe('WebsiteVisitsRecordComponent', () => {
  const mockDataSource = {
    getRecords: function() {
      return Observable.create(observer => {
        observer.next(new Array<WebsiteVisitsRecord>(
          new WebsiteVisitsRecord('a', new Date(2016, 0, 6), 'www.website-a', 14065457),
          new WebsiteVisitsRecord('b', new Date(2016, 0, 6), 'www.website-b', 19831166),
          new WebsiteVisitsRecord('c', new Date(2016, 0, 6), 'www.website-c', 104346720),
          new WebsiteVisitsRecord('d', new Date(2016, 0, 6), 'www.website-d', 21536612),
          new WebsiteVisitsRecord('e', new Date(2016, 0, 6), 'www.website-e', 13246531),
          new WebsiteVisitsRecord('f', new Date(2016, 0, 6), 'www.website-f', 29422150),
          new WebsiteVisitsRecord('g', new Date(2016, 0, 27), 'www.website-b', 23154653),
          new WebsiteVisitsRecord('h', new Date(2016, 0, 27), 'www.website-c', 123831275)
        ));
        observer.complete();
      });
    },
    getValidDates: function() {
      return Observable.create(observer => {
        observer.next(['2016-01-27', '2016-01-06']);
        observer.complete();
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteVisitsRecordComponent],
      imports: [AuthenticatedTestingModule, BrowserModule, FormsModule, RouterTestingModule],
      providers: [{ provide: WebsiteVisitsRecordDataSource, useValue: mockDataSource }]
    });
  });

  it('is defined', () => {
    const fixture = TestBed.createComponent(WebsiteVisitsRecordComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  it('records are loaded', async(() => {
    const fixture = TestBed.createComponent(WebsiteVisitsRecordComponent);
    const component = fixture.componentInstance;
    expect(component.records.length).toBe(8);
  }));

  it('valid dates are loaded', async(() => {
    const fixture = TestBed.createComponent(WebsiteVisitsRecordComponent);
    const component = fixture.componentInstance;
    expect(component.validDates.length).toBe(2);
  }));
});
