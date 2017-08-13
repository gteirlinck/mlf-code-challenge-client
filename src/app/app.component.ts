import { Component } from '@angular/core';
import { WebsiteVisitsRecord } from './model/websiteVisitsRecord.model';
import { WebsiteVisitsRecordRepository } from './model/websiteVisitsRecord.repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private recordsRepository: WebsiteVisitsRecordRepository) {}

  public get records(): WebsiteVisitsRecord[] {
    console.log(this.recordsRepository);
    const recs = this.recordsRepository.getRecords();

    console.log(recs);

    return recs;
  }

}
