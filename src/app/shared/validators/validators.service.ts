import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  nameLastNameFormat = '([a-zA-Z]+) ([a-zA-Z]+)';

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noStrider(control: FormControl): Validators | null {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'strider') {
      return { strider: true };
    }
    return null;
  }

  equalPassword(value1: string, value2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password: string = formGroup.get('password')?.value;
      const password2: string = formGroup.get('password2')?.value;

      if (password !== password2) {
        formGroup.get('password2')?.setErrors({
          noMatches: true,
        });
        return { passwords: 'No match' };
      }

      formGroup.get('password2')?.setErrors(null);

      return null;
    };
  }
}
