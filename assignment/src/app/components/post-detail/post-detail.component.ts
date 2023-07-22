import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { IPost } from 'src/app/interfaces/Post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: IPost = {};
  id: string = '';
  posts: IPost[] = [];
  constructor(
    private route: ActivatedRoute,
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
    this.route.paramMap.subscribe(
      (param) => (this.id = String(param.get('id')))
    );
    this.postService.getPost(this.id).subscribe(
      (data) => {
        this.post = data.post;
      },
      (error) => console.log(error)
    );
  }

  // ngDoCheck(): void {
  //   if (!this.hasChecked) {
  //     // Kiểm tra xem đã in giá trị hay chưa
  //     console.log(this.categoryId);
  //     this.categoryService
  //       .getCategory(this.categoryId)
  //       .subscribe((data) => (this.categoryId = data.category));
  //     console.log(this.category);
  //     this.hasChecked = true; // Đặt biến cờ thành true sau khi in giá trị
  //   }
  // }
}
