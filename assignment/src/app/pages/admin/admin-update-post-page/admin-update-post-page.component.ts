import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-update-post-page',
  templateUrl: './admin-update-post-page.component.html',
  styleUrls: ['./admin-update-post-page.component.scss'],
})
export class AdminUpdatePostPageComponent {
  posts: IPost = {
    title: '',
    content: '',
    author: '',
    categoryId: {
      name: '',
    },
  };
  categories: any[] = [];
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.postService.getPost(id).subscribe(
        (data) => {
          this.posts = data.post;
        },
        (error) => console.log(error.message)
      );
    });
  }
  ngOnInit() {
    this.getCategoryName();
  }
  getCategoryName(): void {
    this.postService.getCategoryId().subscribe(
      (data) => {
        this.categories = data.categories;
        console.log(this.categories);
      },
      (error) => {
        console.log('Có lỗi xảy ra khi lấy danh sách danh mục:', error);
      }
    );
  }
  onHandleSubmit() {
    const accessToken = this.authService.getAccessToken();
    this.postService
      .updatePost(this.posts, this.posts._id, accessToken)
      .subscribe(
        (data) => {
          console.log(data.posts);
          this.router.navigate(['/admin/posts']);
        },
        (error) => {
          console.log('Có lỗi xảy ra khi cập nhật bài viết:', error);
        }
      );
  }
}
