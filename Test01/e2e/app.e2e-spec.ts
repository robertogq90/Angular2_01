import { Test01Page } from './app.po';

describe('test01 App', () => {
  let page: Test01Page;

  beforeEach(() => {
    page = new Test01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
