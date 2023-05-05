import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  http = inject(HttpClient);
  api = environment.api;

  private readonly carousel$$ = new BehaviorSubject([]);
  private readonly gallery$$ = new BehaviorSubject([]);
  private readonly news$$ = new BehaviorSubject([]);
  private readonly team$$ = new BehaviorSubject([]);
  private readonly home$$ = new BehaviorSubject([]);
  private readonly contact$$ = new BehaviorSubject([]);


  load() {
    this.http.get(this.api + 'carousel').subscribe((res: any) => this.carousel$$.next(res));
    this.http.get(this.api + 'gallery').subscribe((res: any) => this.gallery$$.next(res));
    this.http.get(this.api + 'news').subscribe((res: any) => this.news$$.next(res));
    this.http.get(this.api + 'team').subscribe((res: any) => this.team$$.next(res));
    this.http.get(this.api + 'home').subscribe((res: any) => this.home$$.next(res));
    this.http.get(this.api + 'contact').subscribe((res: any) => this.contact$$.next(res));
  }

  carousel() {
    return this.carousel$$.asObservable();
  }

  gallery() {
    return this.gallery$$.asObservable();
  }

  news() {
    return this.news$$.asObservable();
  }

  team() {
    return this.team$$.asObservable();
  }

  home() {
    return this.home$$.asObservable();
  }
  
  contact() {
    return this.contact$$.asObservable();
  }
}
