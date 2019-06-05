import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './post.service';
import { PostHomepageComponent } from './post-homepage/post-homepage.component';

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'homeblog/:id', component: PostDetailComponent},
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'createpost', component: PostDashboardComponent },
]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
    PostHomepageComponent
  ],
  providers: [PostService]
})
export class PostsModule {}
