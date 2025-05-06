import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // constructor(private router: Router) { } // Pour plus tard

  selectLanguage(language: string): void {
    console.log('Langage sélectionné :', language);
    // Plus tard : this.router.navigate(['/game', language]);
  }
}