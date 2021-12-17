import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getFormData(){
    return this.http.get<any>(
      `https://ulventech-react-exam.netlify.app/api/form`  
    );
  }

  submitFormData(data){
    return this.http.post<any>(
      `https://ulventech-react-exam.netlify.app/api/form`  ,
      data
    );
  }
}
