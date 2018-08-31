import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { Lecture} from "../../lecture";
import {LectureService} from "../../lecture.service";

@Component({
    selector: 'app-lectures',
    template: `<h2>My Lectures</h2>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input class="form-control" name="LectureName" #LectureName placeholder="Lecture Name" required>
                <div class="validation-error" *ngIf="LectureName.invalid && LectureName.touched">This Field is Required.</div>
            </div>
            <div class="form-group col-md-6">
                <input class="form-control" name="SpeakerName" #SpeakerName  placeholder="Speaker Name" required>
                <div class="validation-error" *ngIf="SpeakerName.invalid && SpeakerName.touched">This Field is Required.</div>
            </div>
        </div>
        <div class="form-group">
            <input class="form-control" name="Description" #Description placeholder="Description">
        </div>
        <div class="form-group">
            <input class="form-control" name="OtherRecommendations" #OtherRecommendations placeholder="Other Recommendations">
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <button type="button" (click)="add(LectureName.value, SpeakerName.value, Description.value, OtherRecommendations.value); LectureName.value=''; Description.value='';  SpeakerName.value=''; OtherRecommendations.value='' " class="btn btn-lg btn-block btn-info">
                    <i class="fa fa-floppy-o"></i> Submit</button>
            </div>
            <div class="form-group col-md-4">
                <button type="button" (click)="LectureName.value=''; Description.value=''; SpeakerName.value=''; OtherRecommendations.value=''" class="btn btn-lg btn-block btn-secondary">
                    <i class="fa fa-repeat"></i> Reset</button>
            </div>
        </div>
    
    <app-lecture-list></app-lecture-list>
    `
})
export class LecturesComponent implements OnInit {
    lectures: Lecture[];

    constructor(private lectureService: LectureService) { }

    ngOnInit() {
        this.getLectures();
    }

    getLectures(): void {
        this.lectureService.getLectures()
            .subscribe(lectures => this.lectures = lectures);
    }

    add(name: string, speaker: string, expl: string, other:string): void {
        name = name.trim();
        speaker=speaker.trim()
        expl = expl.trim();
        other=other.trim();
        if (!name) { return; }
        this.lectureService.addLecture({ name, speaker, expl, other } as Lecture)
            .subscribe(lecture => {
                this.lectures.push(lecture);
            });
    }
}