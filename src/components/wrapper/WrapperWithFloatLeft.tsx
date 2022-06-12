import styled from "styled-components";

export const WrapperModule = styled.section`
  @keyframes float-left {
    from {
      width: 0;
    }
    to {
      width: 30%;
    }
  }

  .underlineNav:hover::after {
    content: "";
    bottom: 1rem;
    background-color: orange;
    position: absolute;
    height: 0.25rem;
    width: 40%;
    left: 0%;
    animation: float-left 0.3s 1 forwards;
  }
`;
