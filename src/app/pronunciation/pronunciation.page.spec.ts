import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PronunciationPage } from './pronunciation.page';

describe('Tab2Page', () => {
  let component: PronunciationPage;
  let fixture: ComponentFixture<PronunciationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PronunciationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PronunciationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
