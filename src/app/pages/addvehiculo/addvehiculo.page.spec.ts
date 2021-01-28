import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddvehiculoPage } from './addvehiculo.page';

describe('AddvehiculoPage', () => {
  let component: AddvehiculoPage;
  let fixture: ComponentFixture<AddvehiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvehiculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
