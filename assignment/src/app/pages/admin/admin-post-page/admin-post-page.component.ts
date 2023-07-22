import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.scss'],
})
export class AdminPostPageComponent implements OnInit {
  posts: IPost[] = [];
  categories: any[] = [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchCategories();
    this.getCategoryName();
  }

  getCategoryName(): void {
    this.postService.getCategoryId().subscribe(
      (data) => {
        this.categories = data.categories; 
      },
      (error) => {
        console.log('Có lỗi xảy ra khi lấy danh sách danh mục:', error);
      }
    );
  }

  fetchCategories() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.posts;
        console.log(this.posts);   
      },
      (error) => {
        console.log('Có lỗi xảy ra khi lấy danh sách categories:', error);
      }
    );
  }

  removeItem(id: any) {
    this.postService.removePost(id).subscribe(
      () => {
        console.log('Bạn đã xóa thành công');
        this.posts = this.posts.filter((item) => item._id !== id);
      },
      (error) => {
        console.log('Có lỗi xảy ra khi xóa category:', error);
      }
    );
  }
}

