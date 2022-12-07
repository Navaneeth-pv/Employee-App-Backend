import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService){}
  employeeCode=""
  searchData:any=[]

  readValue=()=>{
    let data={"employeeCode":this.employeeCode}
    console.log(data)

    this.api.SearchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid employee code")
        }else{
          this.searchData=response
        }
      }
    )
  }
}
