import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent {
  public students:any=[]
  constructor(private _studentsService:StudentsService){
    _studentsService.getstudents().subscribe(
       (data:any)=>{
        this.students=data;
       
      
      },
      (err:any)=>{
        alert("internal server error")
      }
    )

}
}
