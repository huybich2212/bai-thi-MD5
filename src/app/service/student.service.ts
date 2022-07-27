import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.API);
  }

  save(student: Student): Observable<any> {
    return this.http.post(this.API,student)
  }
  getById(id: any): Observable<Student> {
    return this.http.get<Student>(this.API + id);
  }

  edit(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.API}/${id}`, student);
  }
  delete(id: any): Observable<Student> {
    return this.http.delete<Student>(this.API + `/${id}`);
  }
}
