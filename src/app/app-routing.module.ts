import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinHomeComponent } from './coin-home/coin-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo :'coin-home', pathMatch:'full'},
  {path:'coin-list', component: CoinListComponent},
  {path:'coin-home', component: CoinHomeComponent},
  {path:'coin-detail/:id', component: CoinDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
