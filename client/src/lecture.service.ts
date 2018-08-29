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
export class LectureService {


    private lecturesUrl = 'api/lectures';  // URL to web api

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET lectures from the server */
    getLectures (): Observable<Lecture[]> {
        return this.http.get<Lecture[]>(this.lecturesUrl)
            .pipe(
                tap(lectures => this.log('fetched lectures')),
                catchError(this.handleError('getLectures', []))
            );
    }

   /* getLecturesBy (): Observable<Lecture[]> {
        return this.http.get<Lecture[]>(this.lecturesUrl)
            .pipe(
                tap(lectures => this.log('fetched lectures')),
                catchError(this.handleError('getLectures', []))
            );
    }

    /** GET hero by id. Return `undefined` when id not found */
    getLectureNo404<Data>(id: number): Observable<Lecture> {
        const url = `${this.lecturesUrl}/?id=${id}`;
        return this.http.get<Lecture[]>(url)
            .pipe(
                map(lectures => lectures[0]), // returns a {0|1} element array
                tap(l => {
                    const outcome = l ? `fetched` : `did not find`;
                    this.log(`${outcome} lecture id=${id}`);
                }),
                catchError(this.handleError<Lecture>(`getLecture id=${id}`))
            );
    }

    /** GET hero by id. Will 404 if id not found */
    getLecture (id: number): Observable<Lecture> {
        const url = `${this.lecturesUrl}/${id}`;
        return this.http.get<Lecture>(url).pipe(
            tap(_ => this.log(`fetched lecture id=${id}`)),
            catchError(this.handleError<Lecture>(`getLecture id=${id}`))
        );
    }

    getLectureByConfId (confId: number): Observable<Lecture[]> {
        const url = `${this.lecturesUrl}/?confId=${confId}`;
        return this.http.get<Lecture[]>(url).pipe(
            tap(_ => this.log(`found lectures matching "${confId}"`)),
            catchError(this.handleError<Lecture[]>('searchLectures', []))
        );
    }

    /* GET lectures whose name contains search term */
    searchLectures(term: string): Observable<Lecture[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Lecture[]>(`${this.lecturesUrl}/?name=${term}`).pipe(
            tap(_ => this.log(`found lectures matching "${term}"`)),
            catchError(this.handleError<Lecture[]>('searchLectures', []))
        );
    }

    //////// Save methods //////////

    /** POST: add a new lecture to the server */
    addLecture (lecture: Lecture): Observable<Lecture> {
        return this.http.post<Lecture>(this.lecturesUrl, lecture, httpOptions).pipe(
            tap((lecture: Lecture) => this.log(`added lecture w/ id=${lecture.id}`)),
            catchError(this.handleError<Lecture>('addLecture'))
        );
    }

    /** DELETE: delete the lecture from the server */
    deleteLecture (lecture: Lecture | number): Observable<Lecture> {
        const id = typeof lecture === 'number' ? lecture : lecture.id;
        const url = `${this.lecturesUrl}/${id}`;

        return this.http.delete<Lecture>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted lecture id=${id}`)),
            catchError(this.handleError<Lecture>('deleteLecture'))
        );
    }

    /** PUT: update the hero on the server */
    updateLecture (hero: Lecture): Observable<any> {
        return this.http.put(this.lecturesUrl, hero, httpOptions).pipe(
            tap(_ => this.log(`updated lecture id=${hero.id}`)),
            catchError(this.handleError<any>('updateLecture'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`LectureService: ${message}`);
    }
}
