import { AuthorsPage } from './app.po';

describe('authors App', function() {
  let page: AuthorsPage;

  beforeEach(() => {
    page = new AuthorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
