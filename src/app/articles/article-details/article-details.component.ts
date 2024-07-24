import { Component } from '@angular/core';
import { FeaturedArticlesComponent } from "../featured-articles/featured-articles.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
    selector: 'app-article-details',
    standalone: true,
    templateUrl: './article-details.component.html',
    styleUrl: './article-details.component.css',
    imports: [FeaturedArticlesComponent, CategoriesComponent]
})
export class ArticleDetailsComponent {

}
