import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard/dashbboard.component";
import {LecturesComponent} from "./lectures/lectures.component";
import {LectureDetailComponent} from "./lecture-detail/lecture-detail.component";
import {MessagesComponent} from "./messages/messages.component";
import {LectureService} from "../lecture.service";
import {UserService} from "../user.service";
import {LectureListComponent} from "./lecture-list/lecture-list.component";
import {LectureDetailComponentForUser} from "./lecture-detail-for-user.component/lecture-detail-for-user.component";
import {LectureListComponentForUser} from "./lecture-list-for-user.component/lecture-list-for-user.component";

import {InMemoryDataService} from "../in-memory-data.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {APP_BASE_HREF} from "@angular/common";


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    ) ],
    declarations: [ AppComponent, DashboardComponent, LecturesComponent, LectureDetailComponent, MessagesComponent, LectureListComponent, LectureDetailComponentForUser, LectureListComponentForUser],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, LectureService, UserService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }