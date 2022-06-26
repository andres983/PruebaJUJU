import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SerieRoutingModule } from '../../serie-routing.module';
import { CharacterService } from '../../services/character.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {

  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        SerieRoutingModule,
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [
        CharactersComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },


      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
