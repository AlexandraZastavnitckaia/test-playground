import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";
import { faker } from "@faker-js/faker";

test("login with incorrect email", async ({ page }) => {
  const pm = new pageManager(page);
  const password = faker.internet.password();
  const errorMessage = page.locator('[id = "msg1"]');

  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().goToLoginPage();
  await pm.onLoginPage().fillInLoginForm("test@test", password);
  await pm.onLoginPage().submitLoginForm();

  await expect(errorMessage).toHaveText("E-mailadres is niet correct");
});

test("login with unmatching email and password", async ({ page }) => {
  const pm = new pageManager(page);
  const email = faker.internet.email();
  const password = faker.internet.password();
  const errorMessage = page.locator('[id = "msg2"]');

  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().goToLoginPage();
  await pm.onLoginPage().fillInLoginForm(email, password);
  await pm.onLoginPage().submitLoginForm();

  await expect(errorMessage).toHaveText("Wachtwoord is verplicht");
});

test("login with empty password", async ({ page }) => {
  const pm = new pageManager(page);
  const email = faker.internet.email();
  const errorMessage = page.locator('[data-testid="alert-body"]');

  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await pm.onHomePage().goToLoginPage();
  await pm.onLoginPage().fillInLoginForm(email, "");
  await pm.onLoginPage().submitLoginForm();

  await expect(errorMessage).toHaveText(
    "De combinatie van e-mailadres en wachtwoord is niet geldig."
  );
});
