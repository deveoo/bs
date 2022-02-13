import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedItemComponent } from './shared-item.component';

describe('SharedItemComponent', () => {
  let component: SharedItemComponent;
  let fixture: ComponentFixture<SharedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
