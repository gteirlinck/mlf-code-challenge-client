import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { REST_URL, MlfAppHttpService } from './mlfAppHttp.service';

@NgModule({
  declarations: [],
  imports: [HttpModule],
  exports: [],
  providers: [{ provide: REST_URL, useValue: `http://localhost:3000/api` }],
})
export class MlfAppHttpModule { }
