import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcomputadorPage } from './addcomputador.page';

describe('AddcomputadorPage', () => {
  let component: AddcomputadorPage;
  let fixture: ComponentFixture<AddcomputadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomputadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcomputadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
