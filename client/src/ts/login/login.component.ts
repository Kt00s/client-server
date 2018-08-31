import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../user";
import {UserService} from "../../user.service";

@Component({
    selector: 'app-login',
    template: `<div *ngIf="isLoginError" class="red-text center error-message">
    <i class="material-icons">error</i> Incorrect username or password
</div>
<form #loginForm="ngForm" class="col s12 white" (ngSubmit)="OnSubmit(UserName.value,Password.value)">
   <div class="row">
     <div class="input-field col s12">
       <i class="material-icons prefix">account_circle</i>
       <input type="text" #UserName ngModel name="UserName" placeholder="Username" required>
     </div>
   </div>
   <div class="row">
      <div class="input-field col s12">
        <i class="material-icons prefix">vpn_key</i>
        <input type="password" #Password ngModel name="Password" placeholder="Password" required>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
          <button [disabled]="!loginForm.valid" class="btn-large btn-submit" type="submit">Login</button>
        </div>
      </div>
</form>`
})
export class LoginComponent implements OnInit {
    user:User;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private userService: UserService
    ) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
        sessionStorage.setItem('confId', '');
    }

    OnSubmit(userName: string,password: string){
        let url = 'api/users';
        this.http.post<Observable<boolean>>(url, { userName, password }).subscribe(isValid => {
            if (isValid) {
                this.getUser(userName, password);
                sessionStorage.setItem('token', btoa(userName + ':' + password));
                sessionStorage.setItem('confId', this.user.confId.toString());
                if(this.user.userRole=='admin')
                this.router.navigate(['/dashboard']);
                else
                    this.router.navigate(['/dashboard']);
            } else {
                alert("Authentication failed.")
            }
        });
    }
    getUser(userName: string,password: string): void {
        this.userService.getUser(userName, password)
            .subscribe(user => this.user = user);
    }
}