import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName:'',
    Password:''
  }
  
  constructor(private service: UserService, private router : Router, private toastr:ToastrService) { }

  
  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (response:any)=>{
        this.router.navigateByUrl('home');
      },
      error =>{
        if(error.status == 400)
        this.toastr.error("Incorrect username or password!", 'Authentication Failed')
      }
    )
  }
}
