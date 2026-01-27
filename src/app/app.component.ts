import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ ajoute RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
