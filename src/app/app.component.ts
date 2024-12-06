import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Declara o componente como standalone
  imports: [RouterModule], // Importa o módulo de roteamento
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GameMania';
}

import { RouterModule } from '@angular/router';






