import { Page, expect } from "@playwright/test";

export class searchResultsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async checkSearchResultsHeaderToBe(headerName: string) {
    await expect(
      await this.page.locator('[class = "h1 bol_header"]')
    ).toHaveText(headerName);
  }
}
