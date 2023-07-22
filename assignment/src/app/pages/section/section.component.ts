import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  category: ICategory = {};
  posts: IPost[] = [];
  id = '';
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = String(param.get('id'));
      this.categoryService.getCategory(this.id).subscribe((data) => {
        this.posts = data.category.posts;
        this.category = data.category;
        console.log(this.category);
      });
    });
  }
}
