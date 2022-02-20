export const telHyphen = (text) => {
  return text.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const onEmailCheck = (email) => {
  const regEmail = /([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!regEmail.test(email)) {
    alert('이메일 형식이 아닙니다.');
    return true;
  }
};
