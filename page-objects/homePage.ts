import { expect, type Page } from "@playwright/test";

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
    await expect(async () => {
      await this.acceptCookiesButton.click();
      await expect(await this.acceptCookiesButton).toBeHidden();
    }).toPass();
    await this.acceptLanguageButton.click();
  }

  async goToLoginPage() {
    await this.page.getByRole("link", { name: "Inloggen" }).click();
    await this.page.waitForLoadState();
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
    await this.page.waitForLoadState();
  }

  async navigateToCategory(
    categoryName: string,
    subCategoryName: string,
    finalCategoryName: string
  ) {
    const categoriesMenu = await this.page.getByRole("button", {
      name: "Categorieën",
    });
    await categoriesMenu.hover();

    const categorylink = await this.page.locator(".wsp-category-nav-ab__link", {
      hasText: categoryName,
    });

    await categorylink.click();

    const subCategoryLink = await this.page
      .locator(".wsp-sub-nav-group__title", {
        hasText: subCategoryName,
      })
      .first();

    await subCategoryLink.click();

    const finalCategoryLink = await this.page
      .locator(".wsp-sub-nav-group__link", {
        hasText: finalCategoryName,
      })
      .first();

    await finalCategoryLink.click();
  }
}
