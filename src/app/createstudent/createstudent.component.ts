import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {

public studentsform:FormGroup= new FormGroup({
  name: new FormControl("", [Validators.required,Validators.minLength(3)]),
  class:new FormControl("",[Validators.required]),
  fathername:new FormControl("",[Validators.required]),
  email: new FormControl(),
  address: new FormGroup({
    addressLine:new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl()
  }),

 marks: new FormArray([])
});
get marksformArray(){
  return this.studentsform.get('marks')as FormArray;

}
marks(){
  this.marksformArray.push(
    new FormGroup({
    class: new FormControl("",[Validators.required]),
     year: new FormControl(),
     percentage:new FormControl()
    })
  )
}
deletemarks(i:number){
  this.marksformArray.removeAt(i)
}
  





constructor(private _studentsService:StudentsService){
  _studentsService.getstudents().subscribe(
     (data:any)=>{
      this.studentsform=data;
     
    
    },
    (err:any)=>{
      alert("internal server error")
    }
  
  )
  
}

submit(){
  this._studentsService.getpost(this.studentsform.value).subscribe(
    (data:any)=>{
     alert("created successfully")
    },
    (err:any)=>{
     alert("creation failed")
    }
  )
}

}
