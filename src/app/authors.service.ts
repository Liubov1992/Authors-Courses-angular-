import { Injectable } from '@angular/core';
import {Author} from './author'

@Injectable()
export class AuthorsService {

  authors: Author[] = [
    {name: 'Sergey', surname: 'Kozyrev', age: 26},
    {name: 'Nick', surname: 'Escuela', age:29},
    {name: 'Lilly', surname: 'Sunday', age:19},
    {name: 'David', surname: 'Snow', age:45},
    {name: 'Hordii', surname: 'Semenov', age:27}
     ];

  getAuthors(): Author[]{
    return this.authors;
  }

}
