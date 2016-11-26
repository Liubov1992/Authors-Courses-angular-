import { Injectable } from '@angular/core';
import { Course } from './course'

@Injectable()
export class CoursesService {
   courses: Course[] = [
     {name:'HTML', lessons: 6, location:'A'},
     {name:'CSS', lessons: 8 , location:'B'},
     {name:'JS', lessons: 10, location:'C'},
     {name:'jQuery', lessons: 8 , location:'D'},
     {name:'Angular', lessons: 10, location:'F'}
  ];

  getCourses(): Course[]{
    return this.courses
  };

}
