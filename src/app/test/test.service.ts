import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http:HttpClient) { }
  addTest(testData){
    this.http.post("https://api.mlab.com/api/1/databases/testapp/collections/tests?apiKey=T6l9KCdyv6Tiln2BOaWH6JunoE9GcDOy",testData).subscribe((res)=>{console.log(res)})
  }
}
