export const infoFormCookie = () => {
   return document.cookie.split('; ')
    .find(row => row.startsWith('info_form'))
};
export const infoFormValue = () => { return infoFormCookie() ? infoFormCookie()!!
.split('=')[1].split(',') : []};