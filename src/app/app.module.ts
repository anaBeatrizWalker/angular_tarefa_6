import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './components/home/home.component';
import { TabuadaComponent } from './components/tabuada/tabuada.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'tabuada', component: TabuadaComponent },
      { path: 'timer', component: TimerComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TabuadaComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
