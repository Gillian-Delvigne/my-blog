import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string; 
  @Input() postDate: string; 
  @Input() postContent: string; 

  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.postTitle;
}

  getDate() {
    return this.postDate;
}

  getContent() {
    return this.postContent;
}

}
