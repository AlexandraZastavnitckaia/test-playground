import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";

test("Search a product via the searchbar", async ({ page }) => {
  const pm = new pageManager(page);

  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().searchProductViaSearchbar("harry potter lego");

  const pageTitle = await page.title();
  expect(pageTitle).toContain("harry potter lego");
});

test("Navigate to the shopping cart", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();

  await pm.onHomePage().goToShoppingCart();

  const shoppingCartPageTitle = await page.title();
  expect(shoppingCartPageTitle).toContain("Winkelwagentje");
});

test("Add product to the basket", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().searchProductViaSearchbar("nintendo switch");

  const firstProductOnSearchResults = await page
    .locator(".product-list>li")
    .first();
  const productName = await firstProductOnSearchResults
    .locator('[role="heading"]')
    .innerText();
  const addToBasketButton = await firstProductOnSearchResults.locator(
    '[aria-label="In winkelwagen"]'
  );
  await addToBasketButton.click();
  await expect(await page.title()).toContain("Winkelwagentje");
  await expect(await page.locator(".product-details__title")).toContainText(
    productName
  );
});

test("Find dutch Ebooks using filter", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().navigateToCategory("Boeken", "Boeken", "Alle boeken");
  const dutchBooksFilter = page.locator(".ui-input-checkbox", {
    hasText: "Nederlands",
  });
  const ebooksFilter = page.locator(".ui-input-checkbox", {
    hasText: "Ebook",
  });
  await dutchBooksFilter.click();
  await ebooksFilter.click();

  await pm
    .onSearchResultsPage()
    .checkSearchResultsHeaderToBe("Nederlandse Ebooks");
});

test("Navigate to Babykamermeubels category", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();

  await pm
    .onHomePage()
    .navigateToCategory(
      "Zwanger, Baby & Peuter",
      "Babykamer & Slapen",
      "Babykamermeubels"
    );
  await pm
    .onSearchResultsPage()
    .checkSearchResultsHeaderToBe("Babykamermeubels");
});
