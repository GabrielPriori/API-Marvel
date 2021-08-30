import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelQuadrinhosComponent } from './marvel-quadrinhos.component';

describe('MarvelComicsComponent', () => {
  let component: MarvelQuadrinhosComponent;
  let fixture: ComponentFixture<MarvelQuadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelQuadrinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelQuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
