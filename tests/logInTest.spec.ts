import { test, expect } from "@playwright/test";

test("login with incorrect email", async ({ page }) => {
  await page.goto("https://www.bol.com/nl/nl/");
  await page.getByRole("button", { name: "Alles accepteren" }).click();
  await page.getByRole("button", { name: "Doorgaan" }).click();
});
