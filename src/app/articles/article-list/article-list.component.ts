import { Component } from '@angular/core';
import { FeaturedArticlesComponent } from "../featured-articles/featured-articles.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
    selector: 'app-article-list',
    standalone: true,
    templateUrl: './article-list.component.html',
    styleUrl: './article-list.component.css',
    imports: [FeaturedArticlesComponent, CategoriesComponent]
})
export class ArticleListComponent {

}
