import { type Page } from "@playwright/test";

export class homePage {
  readonly page: Page;
  acceptCookiesButton: any;
  acceptLanguageButton: any;
  loginLink: any;
  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByRole("button", {
      name: "Alles accepteren",
    });
    this.acceptLanguageButton = page.getByRole("button", { name: "Doorgaan" });
    this.loginLink = page.getByRole("link", { name: "Inloggen" });
  }

  //Open bol.com home page with cookies accepted
  async openHomePageWithCookiesAccepted() {
    await this.page.goto("https://www.bol.com/nl/nl/");

    await this.acceptCookiesButton.click();
    await this.acceptLanguageButton.click();
  }

  async goToLoginPage() {
    await this.page.getByRole("link", { name: "Inloggen" }).click();
  }

  async searchProductViaSearchbar(productName: string) {
    const searchbar = this.page.locator('[id="searchfor"]');
    const searchButton = this.page.locator('button[aria-label="Zoeken"]');

    await searchbar.fill(productName);
    await searchButton.click();
  }

  async goToShoppingCart() {
    const shoppingCartIcon = this.page.locator("wsp-basket-header-icon");

    await shoppingCartIcon.click();
  }
}
