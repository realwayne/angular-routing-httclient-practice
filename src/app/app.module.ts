import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { SinglePostComponent } from "./single-post.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, SinglePostComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
