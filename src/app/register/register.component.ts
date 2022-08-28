import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private fb : FormBuilder, public userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email :['', [Validators.required, Validators.email]],
      username:['',[Validators.required,Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(6)]],
     })
  }
  submit(){
    if(this.registerForm.valid){
      this.userService.createUser(this.registerForm.value).then(
        (res:any)=>{
          console.log(res);
          
        }
        ).
        catch((err)=>{
        console.log(err);

        })
      console.log(this.registerForm.value);
      this.router.navigate(['/login'])
    }
  }
}
