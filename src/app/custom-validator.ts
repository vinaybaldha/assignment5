import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValodator {
  static invalidProjectName(
    conrol: FormControl
  ): { [s: string]: boolean } | null {
    if (conrol.value === 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ invalideProjectName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
