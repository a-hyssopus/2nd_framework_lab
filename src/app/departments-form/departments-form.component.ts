import {Component} from '@angular/core';
// @ts-ignore
import {faculties} from "../shared/faculties.js"
// @ts-ignore
import {months} from "../shared/months.js"

@Component({
  selector: 'app-departments-form',
  templateUrl: './departments-form.component.html',
  styleUrls: ['./departments-form.component.css']
})

export class DepartmentsFormComponent {
  name: string = '';
  surname: string = '';
  result: string = '';
  date: string = '';

  faculties: { name: string, description: Array<string> }[] = faculties;
  months: Array<string> = months;

  selectedFaculty: string = '';

  toCapitalize(): string {
    return `${this.name} ${this.surname}`.toUpperCase();
  }

  getDateOfBirth(): string {
    const month = this.date.substr(5, 2)
    const date = this.date.substr(-2, 2)
    const year = this.date.substr(0, 4)
    return `Your date of birth is: ${date} of ${months[+month - 1]}, ${year}`
  }

  getResult() {
    if (this.date && this.selectedFaculty && this.name && this.surname) {
    this.result = `${this.toCapitalize()}
                   ${this.getDateOfBirth()},
                   ${this.selectedFaculty}`;
    } else {
      this.result = 'Please, introduce your data'
    }
  }
}


