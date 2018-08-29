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
      <div>
    <label>name:
      <input [(ngModel)]="lecture.name" placeholder="name"/>
    </label>
      <label>speaker:
          <input [(ngModel)]="lecture.speaker" placeholder="speaker"/>
      </label>
      </div>
      <label>description:
          <input [(ngModel)]="lecture.expl" placeholder="expl"/>
      </label>

      <label>other info:
          <input [(ngModel)]="lecture.other" placeholder="other"/>
      </label>
  </div>
  <button (click)="goBack()">go back</button>
</div>`
})
export class LectureDetailComponentForUser implements OnInit {
    @Input() lecture: Lecture;

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