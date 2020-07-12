export const formatDate = date => {
  let dateType = new Date(date);
  let formattedDate = `${dateType.getMonth() + 1}/${dateType.getDay()}/${dateType.getFullYear()}`;
  return formattedDate;
};

export const formatPhone = phone => {
  let cleaned = ('' + phone).replace(/\D/g, '')
  let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}