import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

 

@NgModule({
  declarations: [
    
  ],
  imports: [
    MatButtonModule,MatCardModule,MatDatepickerModule,MatFormFieldModule,MatIconModule,MatInputModule
    
  ],
  providers: [],
  bootstrap: [ ]
})
export class MaterialModule { }