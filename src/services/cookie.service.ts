export const infoFormCookie = () => {
  return document.cookie.split('; ').find((row) => row.startsWith('info_form'));
};
export const infoFormCookieValue = () => {
  return infoFormCookie() ? infoFormCookie()!!.split('=')[1].split(',') : [];
};
