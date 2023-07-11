import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'app/app.constants';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  loadCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_URL + 'services/limitsservice/courseresource/instructors/sunhith/courses');
  }

  loadCourseById(id: Number) {
    return this.http.get<Course>(SERVER_API_URL + 'services/service1/courseresource/instructors/courses/' + id);
  }
}
