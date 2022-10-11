import { css } from "styled-components";

export const mixinBtn = css`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray_02};
  border-radius: 5px;
  font-size: 0.8rem;
`;
