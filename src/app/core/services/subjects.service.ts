import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  public visibleSidebar$ = new BehaviorSubject<boolean>(false);
  public resolucionPantallaApp$ = new BehaviorSubject<number>(0);

  // TODO: Resize
  public setResolucionPantalla(resolucionPantallaApp: number) {
    this.resolucionPantallaApp$.next(resolucionPantallaApp);
  }

  public getResolucionPantalla(): Observable<number> {
    return this.resolucionPantallaApp$.asObservable();
  }

}
