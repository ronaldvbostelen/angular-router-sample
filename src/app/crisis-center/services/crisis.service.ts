import { Injectable } from '@angular/core';
import {MessageService} from '../../services/message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Crisis} from '../../heroes/models/crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  private crisesUrl = 'http://localhost:5000/api/crises';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private messageService: MessageService,
              private http: HttpClient) { }


  getCrises(): Observable<Crisis[]>{
    return this.http.get<Crisis[]>(this.crisesUrl)
      .pipe(
        tap(_ => this.log('fetched Crises')),
        catchError(this.handleError<Crisis[]>('getCrises', []))
      );
  }

  getCrisis(id: number): Observable<Crisis>{
    return this.http.get<Crisis>(`${this.crisesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched Crisis id=${id}`)),
        catchError(this.handleError<Crisis>(`getCrisis id=${id}`))
      );
  }

  addCrisis(crisis: Crisis): Observable<Crisis>{
    return this.http.post(this.crisesUrl, crisis, this.httpOptions)
      .pipe(
        tap(_ => this.log(`added Crisis name=${crisis.name}`)),
        catchError(this.handleError<Crisis>('addCrisis'))
      );
  }

  updateCrisis(crisis: Crisis): Observable<any>{
    return this.http.put(`${this.crisesUrl}/${crisis.id}`, crisis, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated Crisis id=${crisis.id}`)),
        catchError(this.handleError<any>('updateCrisis'))
      );
  }

  deleteCrisis(id: number): Observable<any>{
    return this.http.delete(`${this.crisesUrl}/${id}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted Crisis id=${id}`)),
        catchError(this.handleError<any>('deleteCrisis'))
      );
  }

  searchCrisis(term: string): Observable<Crisis[]>{
    if (!term.trim()){
      return of([]);
    }

    return this.http.get<Crisis[]>(
      `${this.crisesUrl}/search?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found Crises matching "${term}"`) :
          this.log(`no Crises matching "${term}"`)),
        catchError(this.handleError<Crisis[]>('serachCrises', []))
      );
  }

  private log(message: string): void{
    this.messageService.add(`CrisisService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T): any{
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
