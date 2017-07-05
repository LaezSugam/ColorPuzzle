import { ColorPuzzlePage } from './app.po';

describe('color-puzzle App', () => {
  let page: ColorPuzzlePage;

  beforeEach(() => {
    page = new ColorPuzzlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
