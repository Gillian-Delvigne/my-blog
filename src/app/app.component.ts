import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-blog';
  myDate = new Date;
  date = (this.myDate.toLocaleDateString('fr-FR'));

  posts = [{
    title: "Un premier post",
    content: "J'adore apprendre Angular",
    loveIts: "1",
    created_at: this.date },
  { title: "Un deuxième post",
    content: "Lorem ipsum doloris amet...",
    loveIts: "1",
    created_at: this.date },
  { title: "Encore un post",
    content: "blablabla",
    loveIts: "2",
    created_at: this.date }];






}
