import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidationService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const query = control.value;
    console.log(query);
    return this.http
      .get<any[]>(`http://localhost:3000/usuarios?q=${query}`)
      .pipe(
        delay(3000),
        map((response) => {
          return response.length === 0
            ? null
            : { emailTomado: 'no available ' };
        })
      );
  }
}
