import { Component, OnInit } from '@angular/core';
import { PauthService } from '../../auth/pauth.service'
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.sass']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  image: string = null;
  content: string;

  buttonText: string = "Create Post";

  task: AngularFireUploadTask;
  

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  

  constructor(private auth: PauthService, private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createPost(){
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserID,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data)
    this.title = '';
    this.content = '';
    this.buttonText = "Post Created!";
    setTimeout(() => (this.buttonText = "Create Post"), 3000);

  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image'){
      return alert('only image files')
    } else {
      const ref = this.storage.ref(path);
      this.task = this.storage.upload(path, file);
      this.uploadPercent = this.task.percentageChanges();
      console.log('Image Uploaded');
      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL() 
          this.downloadURL.subscribe(url => (this.image = url));
        })  
        
      )
      .subscribe();


       
      
      
       
    }

  }

}
