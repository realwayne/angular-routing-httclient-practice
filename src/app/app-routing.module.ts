import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SinglePostComponent } from "./single-post.component";

const routes: Routes = [
  {
    path: "posts",
    component: HomeComponent
  },
  {
    path: "posts/:id",
    component: SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
