import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'jhi-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courselist: Course[] = [];
  courseFound: String;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadAllCourses();
  }

  loadAllCourses() {
    this.courseService.loadCourses().subscribe((res: Course[]) => {
      this.courselist = res;
    });
  }

  searchcourse(id: Number) {
    this.courseService.loadCourseById(id).subscribe(
      (res: Course) => {
        this.courseFound = 'Course found';
      },
      (error: HttpErrorResponse) => {
        if (error.status === 500) {
          this.courseFound = 'Course not found';
        }
      }
    );
  }
}
