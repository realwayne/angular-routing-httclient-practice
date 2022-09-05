import { Component } from "@angular/core";
import { JsonPlaceholderService } from "./json-placeholder.service";

@Component({
  selector: "app-home",
  template: `
    <div class="posts">
      <div *ngFor="let post of posts">
        <a [routerLink]="post.id">
          <h3>{{ post.title }}</h3></a
        >
        <p>{{ post.body }}</p>
      </div>
    </div>
  `
})
export class HomeComponent {
  posts: any = null;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.jsonPlaceholderService.getAllPost().subscribe((response) => {
      this.posts = response;
    });
  }
}
