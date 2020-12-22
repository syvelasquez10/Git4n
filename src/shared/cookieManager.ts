export const infoFormCookie = document.cookie
.split('; ')
.find(row => row.startsWith('info_form'));
export const infoForm = infoFormCookie ? infoFormCookie
.split('=')[1].split(',') : [];