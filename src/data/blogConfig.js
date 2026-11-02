/**
 * Blog integrations. Leave a value empty to hide that feature.
 *
 * Giscus (comments, stored in GitHub Discussions):
 *   1. Enable Discussions on the repo and install https://github.com/apps/giscus
 *   2. Open https://giscus.app, enter the repo, pick a category (use "Announcements")
 *   3. Copy repoId and categoryId from the generated snippet below.
 *
 * Brevo (newsletter, free plan):
 *   1. Brevo > Contacts > Forms > Create a subscription form.
 *   2. Share > "Embed in website" and copy the iframe src URL
 *      (looks like https://xxxx.sibforms.com/serve/MUIE...).
 *   3. Paste it as brevoFormUrl below.
 *   New subscribers appear in the Brevo list you chose for the form.
 */
module.exports = {
  giscus: {
    repo: "aakashjsr/welkincode",
    repoId: "R_kgDOI0nn4w",
    category: "Announcements",
    categoryId: "DIC_kwDOI0nn484DKMte",
  },
  brevoFormUrl: "",
};
