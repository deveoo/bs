import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeFeaturedProductsModalComponent } from './home-featured-products-modal.component';

describe('HomeFeaturedProductsModalComponent', () => {
  let component: HomeFeaturedProductsModalComponent;
  let fixture: ComponentFixture<HomeFeaturedProductsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturedProductsModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFeaturedProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
