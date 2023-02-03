import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningAngular';
  topics = ["Angular", "React", "Vue"]
  userModel = new User(
    "",
    "",
    "",
    "default",
    "",
    true
    )

    constructor(private _enrollmentService: EnrollmentService){}
     
    topicError = true
    submitted= false
    errorMsg = '';

    validateTopics(value:any){
      if(value == "default"){
       return this.topicError = true
      }else{
       return this.topicError = false
      }
    }

    onSubmit(){
      // console.log(this.userModel)
      this.submitted= true
      this._enrollmentService.enroll(this.userModel).subscribe(
        data => console.log("success", data),
        error => this.errorMsg = error.statusText
      )
    }


}
