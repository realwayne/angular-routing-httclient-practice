import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { JsonPlaceholderService } from "./json-placeholder.service";

@Component({
  selector: "app-single-post",
  template: ` SINGE POST {{ post | json }}`
})
export class SinglePostComponent {
  post: any = null;

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.jsonPlaceholderService
        .getSinglePost(params.id)
        .subscribe((response) => {
          this.post = response;
        });
    });
  }
}
