import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderComponent, MainareaComponent, FooterComponent, HomeComponent],
  exports:[HeaderComponent, MainareaComponent, FooterComponent]
})
export class CoreModule { }
