import { Component, OnInit } from '@angular/core';

import { Lecture } from "../../lecture";
import {LectureService} from "../../lecture.service";

@Component({
    selector: 'app-lecture-list',
    template: `<table class="table table-sm table-hover">
  <tr *ngFor="let lecture of lectures">
    <td>{{lecture.name}} - {{lecture.speaker}}</td>
    <td>
        <a routerLink="/detail/{{lecture.id}}">
            <i class="fa fa-pencil-square-o"></i>
        </a>
        <a class="btn text-danger" (click)="delete(lecture)">
        <i class="fa fa-trash-o"></i>
      </a>
    </td>
  </tr>
</table>`
})
export class LectureListComponent implements OnInit {

    lectures: Lecture[];

    constructor(private lectureService: LectureService) { }

    ngOnInit() {
        this.getLectures();
    }

    getLectures(): void {
        this.lectureService.getLectures()
            .subscribe(lectures => this.lectures = lectures);
    }


    delete(lecture: Lecture): void {
        this.lectures = this.lectures.filter(l => l !== lecture);
        this.lectureService.deleteLecture(lecture).subscribe();
    }

}