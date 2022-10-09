import CryptoJS from "crypto-js";

export const makeCryptoFunction = (password: string) => {
  const cryptoedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  // sha256으로 비밀번호 만들고, hex 형식으로 string 만듬
  return cryptoedPassword;
};
