import { Page } from "@playwright/test";

export class searchResultsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
