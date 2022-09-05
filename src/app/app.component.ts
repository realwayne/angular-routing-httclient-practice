import { Component, OnInit } from "@angular/core";
import { JsonPlaceholderService } from "./json-placeholder.service";

interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  posts: any = null;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.jsonPlaceholderService.getAllPost().subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
    console.log("hellow");
  }
}
