import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';


@Injectable()
export class AccessProviders {
    // Url de backend api json
    server: string= 'https://juanshotlc.000webhostapp.com/dist/api/'
    
    constructor(
        public http: HttpClient
    ){ }

    postData(body, file){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8'
        });
        let options = {
           headers: headers
        }

        return this.http.post(this.server + file, JSON.stringify(body), options)
        .timeout(59000) //59 segunddos de timeout
        .map(res => res);

    }
}