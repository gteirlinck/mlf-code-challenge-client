import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MlfAppHttpService, REST_URL } from './mlfAppHttp.service';

@NgModule({
  declarations: [MlfAppHttpService],
  imports: [ HttpModule ],
  exports: [],
  providers: [{ provide: REST_URL, useValue: `http://localhost:3000` }],
})
export class MlfAppHttpModule { }
