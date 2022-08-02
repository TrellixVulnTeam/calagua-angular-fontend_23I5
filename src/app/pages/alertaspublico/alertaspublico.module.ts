import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbAlertModule,
  NbProgressBarModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import { AlertaspublicoComponent } from './alertaspublico.component';
import { ExtraComponentsModule } from '../extra-components/extra-components.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlertaspublicoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    NbAlertModule,
    ExtraComponentsModule,
    RouterModule,
    NbProgressBarModule
  ]
})
export class AlertaspublicoModule { }
