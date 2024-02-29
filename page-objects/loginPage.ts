import { Page } from "@playwright/test";

export class loginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async fillInLoginForm(email: string, password: string) {
    const emailField = this.page.getByRole("textbox", { name: "E-mailadres" });
    const passwordField = this.page.getByRole("textbox", {
      name: "Wachtwoord",
    });
    await emailField.fill(email);
    await passwordField.fill(password);
  }

  async submitLoginForm() {
    await this.page.getByRole("button", { name: "Inloggen" }).click();
  }
}
