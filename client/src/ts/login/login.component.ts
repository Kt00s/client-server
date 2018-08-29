import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: `<form (submit)="loginUser($event)">
  <div class="container">
  <div>
    <input type="text" autocomplete="off" placeholder="Username" id="username">
  </div>
  <div>
    <input type="password" autocomplete="off" placeholder="Password" id="password">
  </div>
  <div>
    <button type="submit" id="submit">Submit</button>
  </div>
</div>
</form>`
})
export class LoginComponent implements OnInit {

   //constructor(private Auth: AuthService,
    //            private router: Router) { }

    ngOnInit() {
    }

    /*loginUser(event) {
        event.preventDefault()
        const target = event.target
        const username = target.querySelector('#username').value
        const password = target.querySelector('#password').value

        this.Auth.getUserDetails(username, password).subscribe(data => {
            if(data.success) {
                this.router.navigate(['admin'])
                this.Auth.setLoggedIn(true)
            } else {
                window.alert(data.message)
            }
        })
        console.log(username, password)
    }*/

}