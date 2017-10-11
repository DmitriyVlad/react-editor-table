export default function intlActions(apiHelper) {

  function getLocaleMarkdown(locale, id) {

    const baseUrl = '/assets/content/';
    const url = `${baseUrl}${id}.${locale}.md`;
    const type = 'text/x-markdown';

    return apiHelper.fetchData(url, type);
  }

  function getLocaleData(locale) {

    const baseUrl = '/assets/locales/';
    const url = `${baseUrl}${locale}.json`;

    return apiHelper.fetchData(url);
  }

  return {
    getLocaleMarkdown,
    getLocaleData
  };
}
