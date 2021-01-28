import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TallerPage } from './taller.page';

describe('TallerPage', () => {
  let component: TallerPage;
  let fixture: ComponentFixture<TallerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TallerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
