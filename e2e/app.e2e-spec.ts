import { A2mPage } from './app.po';

describe('a2m App', () => {
  let page: A2mPage;

  beforeEach(() => {
    page = new A2mPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
