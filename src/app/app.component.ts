import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FinalPageComponent } from './final-page/final-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HomePageComponent, FinalPageComponent],
})
export class AppComponent {
  title = 'wizishop';
}
