import { Injectable } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public formModel:any;

  constructor(private fb:FormBuilder) {

     this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Passwords: this.fb.group({
        Password: ['',Validators.required],
        ConfirmPassword: ['', Validators.required]
      })
    });
  }
}

 