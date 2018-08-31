import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {User} from "./user";
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class UserService {

    private usersUrl = 'api/users';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    getUser (userName: string, password:string): Observable<User> {
        //const url = `${this.usersUrl}/userName?=${userName}`;
        return this.http.get<User>(this.usersUrl, {params:{ 'userName': userName, 'password': password }}).pipe(
            tap(_ => this.log(`fetched userName=${userName}`)),
            catchError(this.handleError<User>(`getUser userName=${userName}`))
        );
    }

    /*getUserClaims(){
        return  this.http.get(this.usersUrl+'/api/GetUserClaims');
    }

    getAllRoles() {
        let reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        return this.http.get(this.usersUrl + '/api/GetAllRoles', { headers: reqHeader });
    }

    roleMatch(allowedRoles:): boolean {
        var isMatch = false;
        var userRoles: string[] = JSON.parse(localStorage.getItem('userRoles'));
        allowedRoles.forEach(element => {
            if (userRoles.indexOf(element) > -1) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;

    }*/

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

    /** Log a LectureService message with the MessageService */
    private log(message: string) {
        this.messageService.add(`LectureService: ${message}`);
    }
}