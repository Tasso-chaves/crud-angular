import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cousesService: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.cousesService.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => {
        this.onError();
      }
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso!', '', { duration: 3000 });
  }
}
