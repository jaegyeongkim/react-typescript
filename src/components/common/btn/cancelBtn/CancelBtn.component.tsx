import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./CancelBtn.styled";

const CancelBtn = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate(-1);
  };
  return (
    <S.Root type="button" onClick={handleClickGoBack}>
      {children}
    </S.Root>
  );
};

export default CancelBtn;
