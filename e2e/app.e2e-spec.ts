import { chokkanahalliPage } from './app.po';

describe('chokkanahalli App', () => {
  let page: chokkanahalliPage;

  beforeEach(() => {
    page = new chokkanahalliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
