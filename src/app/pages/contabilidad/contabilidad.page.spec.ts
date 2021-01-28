import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContabilidadPage } from './contabilidad.page';

describe('ContabilidadPage', () => {
  let component: ContabilidadPage;
  let fixture: ComponentFixture<ContabilidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabilidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContabilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
