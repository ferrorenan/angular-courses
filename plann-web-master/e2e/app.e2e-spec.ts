import { PlannWebPage } from './app.po';

describe('plann-web App', () => {
  let page: PlannWebPage;

  beforeEach(() => {
    page = new PlannWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
