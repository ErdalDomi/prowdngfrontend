import { NgprowdPage } from './app.po';

describe('ngprowd App', () => {
  let page: NgprowdPage;

  beforeEach(() => {
    page = new NgprowdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
