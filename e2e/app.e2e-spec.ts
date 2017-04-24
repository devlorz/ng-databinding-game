import { NgDatabindingGamePage } from './app.po';

describe('ng-databinding-game App', () => {
  let page: NgDatabindingGamePage;

  beforeEach(() => {
    page = new NgDatabindingGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
