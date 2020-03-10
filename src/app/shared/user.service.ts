import { Injectable } from '@angular/core';
import { FormBuilder, FormsModule, Validators, FormGroup } from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

public formModel:any;
private readonly BaseURI = 'http://localhost:52291/api/account';

  constructor(private fb:FormBuilder, private http:HttpClient) {


     this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Passwords: this.fb.group({
        Password: ['',[Validators.required,Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required],
      },{validator: this.comparePasswords})
    });
  }

  comparePasswords(fb: FormGroup) {
    let confirmPasswordControl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPasswordControl.errors == null || 'passwordMismatch' in confirmPasswordControl.errors) {
      if (fb.get('Password').value != confirmPasswordControl.value)
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      else
      confirmPasswordControl.setErrors(null);
    }
  }

  register(){

    var body = {
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Passwords.Password,
      ConfirmPassword: this.formModel.value.Passwords.ConfirmPassword
      
    };
    
    return this.http.post(this.BaseURI + '/register', body)

  }
}

 