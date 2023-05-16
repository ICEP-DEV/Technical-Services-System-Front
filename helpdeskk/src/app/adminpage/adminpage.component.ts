
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  temData:any

  ngOnInit(): void{
    this.service.getAllData().subscribe((res)=>{
      console.log(res.result,"res==>");
      this.readData = res.result
    })
  }

  logout(){
    localStorage.removeItem('logindata')
  }
  

}
