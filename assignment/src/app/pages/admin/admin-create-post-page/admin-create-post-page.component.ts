import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-create-post-page',
  templateUrl: './admin-create-post-page.component.html',
  styleUrls: ['./admin-create-post-page.component.scss'],
})
export class AdminCreatePostPageComponent {
  posts: IPost = {
    title: '',
    content: '',
    author: '',
    image:'',
    categoryId:{
      id:'',
      name:''
    },
  };
  categories: any[] = [];
  constructor(
    private postService: PostService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getCategoryName()
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
  addProduct() {
    const accessToken = this.authService.getAccessToken();
    this.postService.createPost(this.posts).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/admin/posts']);
      },
      (error) => {
        console.log('Có lỗi xảy ra khi thêm sản phẩm:', error);
      }
    );
  }
}
