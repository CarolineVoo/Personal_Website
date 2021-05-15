import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { TimelineComponent } from './about-me/timeline/timeline.component';
import { TimelineBoxComponent } from './about-me/timeline/timeline-box/timeline-box.component';
import { HobbyComponent } from './hobby/hobby.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    TimelineComponent,
    TimelineBoxComponent,
    HobbyComponent,
    AboutMeComponent,
    TechSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
