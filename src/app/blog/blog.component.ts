import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { Post } from '../Classes/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.GetBlogPosts()
    .subscribe((data: any) => {
    this.posts = data;
  });

  }

}
