import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SemiPerminantService {

  constructor(private http: HttpClient) { }
  List_Cites(Country_Id) {
    return this.http.get(environment.BaseUrl + 'SemiPerminant/get_cities/'+Country_Id);
  }
  List_Areas(City_Id) {
    return this.http.get(environment.BaseUrl + 'SemiPerminant/get_areas/'+City_Id);
  }
}
