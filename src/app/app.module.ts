import { NgModule } from '@angular/core'; // ✅ ajout obligatoire
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [] // mets ton composant racine ici, ex: [AppComponent]
})
export class AppModule {}
