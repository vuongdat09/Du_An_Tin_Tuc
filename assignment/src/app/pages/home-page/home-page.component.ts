import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { IPost } from 'src/app/interfaces/Post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  posts: IPost[] = [];
  categories: ICategory[] = [];
  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
      },
      (error) => console.log(error.message)
    );
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data.categories;
        console.log(this.categories);
      },
      (error) => console.log(error.message)
    );
  }
}
