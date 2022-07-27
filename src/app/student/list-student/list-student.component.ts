import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  listStudent: Student[] = [];
  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
   this.showAll()
  }
 showAll(){
      this.studentService.findAll().subscribe((data) => {
        console.log(data);
        this.listStudent = data;
      },error =>{
        console.log(error);
      });
 }
  delete(id:any){
    if (confirm('ban muon xoa ?')) {
      this.studentService.delete(id).subscribe(() => {
        alert("Ok");
        this.showAll()
      }, e => {
        console.log(e);
      });
    }
  }
  }


