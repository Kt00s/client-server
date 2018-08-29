import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {Lecture} from "./lecture";
import { MessageService } from './message.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    private usersUrl = 'api/users';

    /*getUser (userName: string, userPaassword:string): Observable<Lecture> {
        const url = `${this.lecturesUrl}/${id}`;
        return this.http.get<Lecture>(url).pipe(
            tap(_ => this.log(`fetched lecture id=${id}`)),
            catchError(this.handleError<Lecture>(`getLecture id=${id}`))
        );
    }*/
}