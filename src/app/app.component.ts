import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'lfgfe';

  resp$ = new Observable<string>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.resp$ = this.http.get("http://localhost:3000", { responseType: 'text' });
  }
}
