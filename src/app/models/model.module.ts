import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource, REST_URL } from './rest.datasource';
import { Repository } from './repository.model';

@NgModule({
    imports: [HttpClientModule],
    providers: [Repository, RestDataSource,
        {
            provide: REST_URL, useValue: `http://${location.hostname}:3500`
        }]
})
export class ModelModule { }