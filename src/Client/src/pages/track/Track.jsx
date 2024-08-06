import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Body from "./Body";
import { useStateProvider } from "../../utils/StateProvider";


export default function Track() {
  const [{ token }, dispatch] = useStateProvider();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
  const bodyRef = useRef();

  const bodyScrolled = () => {
    setNavBackground(bodyRef.current.scrollTop >= 30);
    setHeaderBackground(bodyRef.current.scrollTop >= 268);
  };


  return (
    <Container>
      <div className="spotify__body">
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <div className="body__contents">
            <Body  />
          </div>
        </div>
      </div>
     
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 70, 60);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
      }
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
`;
