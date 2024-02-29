import { Page } from "@playwright/test";
import { loginPage } from "./loginPage";
import { homePage } from "./homePage";
import { searchResultsPage } from "./searchResultsPage";

export class pageManager {
  private readonly page: Page;
  private readonly homePage: homePage;
  private readonly loginPage: loginPage;
  private readonly searchResultsPage: searchResultsPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new homePage(this.page);
    this.loginPage = new loginPage(this.page);
    this.searchResultsPage = new searchResultsPage(this.page);
  }

  onHomePage() {
    return this.homePage;
  }

  onLoginPage() {
    return this.loginPage;
  }

  onSearchResultsPage() {
    return this.searchResultsPage;
  }
}
