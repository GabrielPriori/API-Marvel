import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHistoriasComponent } from './marvel-historias.component';

describe('MarvelStoriesComponent', () => {
  let component: MarvelHistoriasComponent;
  let fixture: ComponentFixture<MarvelHistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelHistoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
