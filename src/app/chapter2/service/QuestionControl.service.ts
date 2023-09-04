import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { QuestionBase } from '../models/QuestionBase';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: QuestionBase<string>[]) {

    const group: any = {};

    questions.forEach(question => {

      group[question.key] = question.required ?
          new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });


    return new FormGroup(group);

  }
}
