import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Lecture} from "../../lecture";
import {LectureService} from "../../lecture.service";

@Component({
    selector: 'app-lecture-detail-for-user',
    template: `<div *ngIf="lecture">
  <h2>{{lecture.name | uppercase}} Details</h2>
  <div><span>id: </span>{{lecture.id}}</div>
  <div>
      <ul>
   <li>name: {{lecture.name}}</li>
      <li>speaker: {{lecture.speaker}}</li>
      <li>description: {{lecture.expl}}</li>

      <li>other info: {{lecture.other}}</li>
      </ul>
    </div>
  <button (click)="goBack()">go back</button>
</div>`
})
export class LectureDetailComponentForUser implements OnInit {
    lecture: Lecture;

    constructor(
        private route: ActivatedRoute,
        private lectureService: LectureService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getLecture();
    }

    getLecture(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.lectureService.getLecture(id)
            .subscribe(lecture => this.lecture = lecture);
    }

    goBack(): void {
        this.location.back();
    }
}