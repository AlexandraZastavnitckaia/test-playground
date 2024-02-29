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
