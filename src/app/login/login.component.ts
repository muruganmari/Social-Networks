import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private fb : FormBuilder,private userService : UserService,
              private snackBar : MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit(){
    if(this.loginForm.valid){
      this.userService.getUsers(this.loginForm.value.email).then(
        (res:any)=>{
          //console.log(res);
          if(res.length == 0){
            console.log("account doed not exist");
            this.snackBar.open('Account does not exist', 'ok')
          }
          else{
            if(res[0].password == this.loginForm.value.password){
              this.userService.users = res[0]
              this.snackBar.open('Login Successfully', 'ok')
              this.router.navigate(['/post'])
              console.log("login sucessfully");
            }
            else{
              this.snackBar.open('Incorrect password', 'ok')
              console.log("incorrect password");
              
            }
          }
        }
      ).catch(
        (err)=>{
          console.log(err);
          

        }
      )
      
      
    }
  }
}
