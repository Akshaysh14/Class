import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './mock-courses';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private messagesService: MessagesService) { }

  getCourses(): Observable<Course[]> {
    this.messagesService.add('CourseService: fetched course');
    return of(COURSES);
  }

}
