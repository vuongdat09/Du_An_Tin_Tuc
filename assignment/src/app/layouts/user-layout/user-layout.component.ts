import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => (this.categories = data.categories),
      (error) => console.log(error.message)
    );
  }
}
