import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss'],
})
export class SectionLayoutComponent {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data) => (this.categories = data.categories),
      (error) => console.log(error.message)
    );
  }
}
