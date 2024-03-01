import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker";

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

  const pageTitle = await page.title();
  expect(pageTitle).toContain("Winkelwagentje");
});

test("Add product to the basket", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().searchProductViaSearchbar("playmobil");

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
