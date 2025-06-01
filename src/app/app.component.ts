import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;
  private router;

  constructor(){
    this.router = inject(Router)
    this.title = 'module-2';
  }
  
  onTable(){
    this.router.navigate(['/table']);
  }

  onForm(){
    this.router.navigate(['/form']); 
  }

}
