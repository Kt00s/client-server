import { Component, OnInit } from '@angular/core';

import { Lecture } from "../../lecture";
import {LectureService} from "../../lecture.service";

@Component({
    selector: 'app-lecture-list-for-user',
    template: `<table class="table table-sm table-hover">
  <tr *ngFor="let lecture of lectures">
    <td>{{lecture.name}} - {{lecture.speaker}}</td>
    <td>
        <a routerLink="/detail-for-user/{{lecture.id}}">
            <i class="fa fa-pencil-square-o"></i>
        </a>
    </td>
  </tr>
</table>`
})
export class LectureListComponentForUser implements OnInit {

    lectures: Lecture[];

    constructor(private lectureService: LectureService) { }

    ngOnInit() {
        this.getLectures();
    }

    getLectures(): void {
        this.lectureService.getLectures()
            .subscribe(lectures => this.lectures = lectures);
    }

}