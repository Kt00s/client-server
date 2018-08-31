import {Component, OnInit} from '@angular/core';
import {LectureService} from "../lecture.service";
import {Lecture} from "../lecture";
import {UserService} from "../user.service";


@Component({
    selector: 'purchase-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/lectures">Lectures</a>
        </nav>
        <router-outlet></router-outlet>
        <app-messages></app-messages>`,
    providers: [LectureService, UserService]

})
export class AppComponent implements OnInit{
    title = 'Title';
    lectures: Lecture[]=[];
    error:any;
    constructor(private httpService: LectureService){}
    ngOnInit(){
        this.httpService.getLectures().subscribe(
            data=>this.lectures=data,
            error => {this.error = error.message; console.log(error);}
        );
    }

}