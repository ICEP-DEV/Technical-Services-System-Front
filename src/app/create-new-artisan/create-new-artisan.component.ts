import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

export class createNewArtisan {

  tech_id: number | undefined;
  name: string = '';
  surname: string = '';
  phone: string = '';
  email: string = '';
  gender: string = '';
  availability: string = '';


}


@Component({
  selector: 'app-create-new-artisan',
  templateUrl: './create-new-artisan.component.html',
  styleUrls: ['./create-new-artisan.component.css']

})

export class CreateNewArtisanComponent implements OnInit {

  errormsg: any;
  successmsg: any;
  //  user: any= new this.user
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiserviceService,
    private actrouter: ActivatedRoute,
    private router: Router

  ) { }
  tech_form={
    tech_id:'',
    name:'',
    surname: '',
    phone:'',
    email: '',
    gender: '',
    division: 'Plumbing',
    campus: ''

  }
  divisions: any

  ngOnInit(): void {
    // this.userForm = new FormGroup({
    //   id: new FormControl('',[Validators.required]),
    //   name: new FormControl('',[Validators.required]),
    //   surname: new FormControl('',[Validators.required]),
    //   phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   gender:new FormControl('',[Validators.required]),
    //   division: new FormControl('',[Validators.required])
     
   
      
    //  })
    this.apiservice.allDivisions().subscribe((respo)=>{
      console.log(respo);
      this.divisions=respo
 
     },(error: any)=>{
       console.log(error);
     })
  }
  
  get fc(){
    return this.userForm.controls;
  }
 ////check if fileds are empty
  areValuesEmpty(obj:any) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] === '') {
        return true; // If any property is empty, return true
      }
    }
    return false; // If all properties are non-empty, return false
  }
////SET valies to be empty aftr
resetValuesToEmpty(obj:any) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = ''; // Set the property value to an empty string
    }
  }
}
  submit_artisan() {
    
    console.log(this.tech_form)
    
    const valuesEmpty = this.areValuesEmpty(this.tech_form);

    if (valuesEmpty) {

      console.log('Some values in tech_form are empty.');
      alert("All fields must be entered");
        return;
    } else {
      console.log('All values in tech_form are non-empty.');
      this.apiservice.createNewArtisan(this.tech_form).subscribe((res)=>{
        console.log(res, 'data submitted');
        this.resetValuesToEmpty(this.tech_form);
        // this.successmsg = res.message;
      })
    }
      


  
  }

  logout() {
    localStorage.removeItem('logindata')
  }


}


