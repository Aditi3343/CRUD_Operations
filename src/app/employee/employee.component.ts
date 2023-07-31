import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  emps;
  name;
  gender;
  doj;
  oldEmps;
  appState='default';
  text: string;
  constructor(private empService: EmpService){}
  ngOnInit(): void {
    this.emps=this.empService.getEmps();
  }
  addEmps(){
    let newEmps={
      name: this.name,
      gender: this.gender,
      doj: this.doj
    };
    this.emps.push(newEmps);
    this.empService.addEmps(newEmps);
    this.resetFields();
  }

  deleteEmps(empText){
    for(let i=0; i<this.emps.length; i++){
      if(this.emps[i].text==empText){
        this.emps.splice(i, 1);
      }
    }
    this.empService.deleteEmps(empText);
  }
  editEmps(emps){
    this.appState='edit';
    this.oldEmps=emps.text;
    this.name=emps.name;
    this.gender=emps.gender;
    this.doj=emps.doj;
  }
  updateEmps(){
    for(let i=0; i<this.emps.length; i++)
    {
      if(this.emps[i].name == this.oldEmps){
        this.emps[i].name= this.name;
        this.emps[i].gender=this.gender;
        this.emps[i].doj=this.doj;
      }
    }
    this.empService.updateEmps(this.oldEmps, this.name, this.gender, this.doj);
    this.resetFields();
  }

  resetFields(){
    this.name='';
    this.gender='';
    this.doj='';
    this.appState='default';
  }
  updateList(){}
}
