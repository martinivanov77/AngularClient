import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService , private toasrt:ToastrService) { }

  ngOnInit(): void  {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (response:any) => {
        if(response.username != null){
          this.service.formModel.reset();
          this.toasrt.success('User created!','Registration succesful.');
        }
          });
        }
      };
    
