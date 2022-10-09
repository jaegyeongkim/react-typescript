import React from "react";
import { useRecoilState } from "recoil";

import { isModalOpenState } from "store/common";
import { clientLanguageState, ClientLanguageType } from "store/persist";

const Home = () => {
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);
  const [language, setLanguage] = useRecoilState(clientLanguageState); // en

  const handleClickModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ClientLanguageType;
    setLanguage(value);
  };

  return (
    <div>
      <div>Home</div>
      <button type="button" onClick={handleClickModal}>
        Modal
      </button>
      <div>{isOpen ? "Modal open" : "Modal close"}</div>
      <div>
        <select name="language" value={language} onChange={handleChangeLang}>
          <option value="en">En</option>
          <option value="ko">Ko</option>
        </select>
      </div>
      <div>{language}</div>
    </div>
  );
};

export default Home;
