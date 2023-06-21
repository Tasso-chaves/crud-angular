import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [
    {_id: "1", name: "Angular", category: "Front-end"},
    {_id: "1", name: "Java", category: "Back-end"},
    {_id: "1", name: "Css", category: "Front-end"},
    {_id: "1", name: "React Js", category: "Front-end"},
    {_id: "1", name: "PHP", category: "Back-end"},
  ];
  displayedColumns: string[] = ['name', 'category'];
  dataSource = this.courses;

  constructor(){}

  ngOnInit(): void {

  }


}
