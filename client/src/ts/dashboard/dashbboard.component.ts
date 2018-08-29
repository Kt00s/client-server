import { Component, OnInit } from '@angular/core';
import {Lecture} from "../../lecture";
import {LectureService} from "../../lecture.service";

@Component({
    selector: 'app-dashboard',
    template: `<h3>Lectures</h3>
    <app-lecture-list-for-user></app-lecture-list-for-user>
<!--<div class="grid grid-pad">
  <a *ngFor="let lecture of lectures" class="col-1-4"
      routerLink="/detail/{{lecture.id}}">
    <div class="module lecture">
      <h4>{{lecture.name}}</h4>
    </div>
  </a>
</div>-->
    `
})
export class DashboardComponent implements OnInit {
    lectures: Lecture[] = [];

    constructor(private heroService: LectureService) { }

    ngOnInit() {
        this.getLectures();
    }

    getLectures(): void {
        this.heroService.getLectures()
            .subscribe(lectures => this.lectures = lectures.slice(1, 5));
    }
}
