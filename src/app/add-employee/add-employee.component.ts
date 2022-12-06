import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeCode=""
  designation=""
  companyName=""
  mobNo=""
  userName=""
  password=""


  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"employeeCode":this.employeeCode,"designation":this.designation,"companyName":this.companyName,"mobNo":this.mobNo,"userName":this.userName,"password":this.password}

    console.log(data)

    this.api.addCorse(data).subscribe(
      (response:any)=>{
        console.log(response)
  
        if (response.status=="success") {
          alert("Course Added Successfully")

          this.employeeCode=""
          this.designation=""
          this.companyName=""
          this.mobNo=""
          this.userName=""
          this.password=""

          
        } else {
          alert("Something went Wrong")
          
        }
      }
    )
  }



}
