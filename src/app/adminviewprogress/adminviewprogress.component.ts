import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-adminviewprogress',
  templateUrl: './adminviewprogress.component.html',
  styleUrls: ['./adminviewprogress.component.css']
})
export class AdminviewprogressComponent {

  availableTechData:any;

  data:any;
  message = "";

  constructor(private service:ApiserviceService,private location: Location, private navrouter:Router){}


  ngOnInit(): void{
 


  let data = localStorage.getItem('reference');

 //let id = data?.slice(7,30);
 console.log(data);
  
    this.service.getTechAvailable(Number(data)).subscribe((res)=>{
      console.log(res,"res==>");
      this.availableTechData = res;
     
    })
  }



  logout(){
    localStorage.removeItem('logindata')
  }

  assignArtisan() {

    setTimeout(function(){
      window.location.reload();
    }, 3000);
   

    this.message = "";
      this.message = "Successfully assigned the request to a artisan, ";
      return 
      
    
  }

  printer(){
    window.print();
  }
}
