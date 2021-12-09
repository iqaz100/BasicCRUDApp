import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayOffersComponent } from './display-offers/display-offers.component';
import { DspOffersComponent } from './dsp-offers/dsp-offers.component';

const routes: Routes = [
  {path: 'offers', component: DspOffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

