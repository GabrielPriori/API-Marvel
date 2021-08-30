import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelEventosComponent } from './marvel-eventos.component';

describe('MarvelEventsComponent', () => {
  let component: MarvelEventosComponent;
  let fixture: ComponentFixture<MarvelEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
