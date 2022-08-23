import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 1rem;
  background-color: var(--grey-4);
  color: var(--grey-2);

  h4 {
    color: var(--grey-2);
  }

  .heart{
    color: var(--color-primary);
  }

  strong {
    font-weight: 800;
  }
`