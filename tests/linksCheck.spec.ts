import { test, expect } from "@playwright/test";
import { pageManager } from "../page-objects/pageManager";

// From the requirements "On the homepage, all footer links have an 'href' attribute filled with the correct link" it is not clear
// what do we want to verify: link 'href' attribute presence or the correctness of links content. In real life I would clarify the
// requirements but withing this task I've created two tests to cover both scenarious.

test("All footer links have an 'href' attribute", async ({ page }) => {
  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();
  await page.waitForLoadState();

  const linkList = await page.locator("footer a").all();

  for (const link of linkList) {
    await expect(link).toHaveAttribute("href");
  }
});

test("Check matching hrefs' content", async ({ page }) => {
  const links = [
    ["Volg je bestelling", "/nl/nl/rnwy/account/bestellingen/overzicht"],
    ["betaal facturen", "/nl/nl/rnwy/account/facturen"],
    ["retourneer een artikel", "/nl/nl/account/retourneren/overzicht"],
    ["Onze klantenservice", "/nl/nl/m/klantenservice"],
    ["Klantenservice", "/nl/nl/m/klantenservice"],
    ["Contact opnemen", "/nl/nl/m/klantenservice"],
    ["Bestellen & Leveren", "/nl/nl/m/bestellen"],
    ["Betalen", "/nl/nl/m/betalen"],
    ["Retourneren", "/nl/nl/m/retourneren"],
    ["Garantie & Reparatie", "/nl/nl/m/garantie/subject/62650041"],
    ["Over bol", "/nl/nl/m/over-bol-com"],
    ["De voordelen van bol", "/nl/nl/sf/winkelen-zonder-zorgen"],
    ["Nieuws", "//pers.bol.com"],
    ["Werken bij bol", "//banen.bol.com/"],
    ["Bol & duurzaamheid", "//duurzaamheid.bol.com"],
    ["De bol app", "/nl/nl/m/mobiele-app"],
    [
      "Bedrijfsgegevens",
      "/nl/nl/klantenservice/a/5715110588841984/bedrijfsgegevens",
    ],
    ["Bollebozen", "/nl/nl/m/bollebozen"],
    ["Zakendoen met bol", "/nl/nl/m/zakendoen-met-bolcom"],
    ["Zakelijk verkopen", "/nl/nl/m/zakelijk-verkopen"],
    ["Zakelijk bestellen", "/nl/nl/m/zakelijk-bestellen"],
    ["Zakelijke cadeaukaarten", "/nl/nl/m/zakelijke-cadeaukaarten"],
    ["Adverteren", "//adverteren.bol.com"],
    ["Affiliate Marketing", "//affiliate.bol.com/nl/"],
    // ["", "//www.facebook.com/bolpuntcom"],
    // ["", "//www.pinterest.com/bol"],
    // ["", "//www.instagram.com/bol"],
    // ["", "//www.youtube.com/user/bolcom"],
    // ["", "//www.linkedin.com/company/11699"],
    // ["", "//www.tiktok.com/@bol"],
    ["Meld je aan", "/nl/nl/rnwy/account/newsletters"],
    // [
    //   "Certificaat Thuiswinkel Waarborg",
    //   "//www.thuiswinkel.org/leden/bol.com/certificaat",
    // ],
    ["Thuiswinkel-leden", "/nl/nl/sf/thuiswinkel-waarborg"],
    ["Algemene voorwaarden", "/nl/nl/tc/"],
    ["Privacy", "/nl/nl/tc/privacybeleid"],
    ["Cookies", "/nl/nl/tc/cookiebeleid"],
    ["©", "/nl/nl/m/copyright"],
    ["Bekijk de voorwaarden", "/nl/nl/sf/winkelen-zonder-zorgen"],
    [
      "verzendkosten",
      "/nl/nl/klantenservice/a/5711226101301248/bezorgopties-en-kosten",
    ],
    [
      "servicekosten",
      "/nl/nl/klantenservice/a/5711226101301248/bezorgopties-en-kosten",
    ],
  ];

  const pm = new pageManager(page);
  await pm.onHomePage().openHomePageWithCookiesAccepted();

  const footer = await page.locator("footer");

  for (const link of links) {
    await expect(
      footer.getByText(link[0], {
        exact: true,
      })
    ).toHaveAttribute("href", link[1]);
  }
});
