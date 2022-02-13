import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NotificationComponent } from './notification.component';
import { SharedItemComponent } from '../../components/shared-item/shared-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NotificationComponent
      }
    ])
  ],
  declarations: [NotificationComponent,SharedItemComponent]
})
export class NotificationModule { }
