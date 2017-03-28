import { JobsPage } from './app.po';

describe('jobs App', () => {
  let page: JobsPage;

  beforeEach(() => {
    page = new JobsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
