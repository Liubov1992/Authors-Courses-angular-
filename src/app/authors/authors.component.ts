import { Component, OnInit } from '@angular/core';
import { AuthorsService} from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {

  authors = this.ts.getAuthors();

  constructor(
    private ts:AuthorsService
  ) {}

  ngOnInit() {
  }

}
