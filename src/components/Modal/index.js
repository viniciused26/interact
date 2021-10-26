import React, { useRef, useEffect, useCallback } from "react";
import * as S from "./styles";
import { useSpring, animated } from "react-spring";

import Button from "../../components/Button";
import closebtn from "../../assets/closeButton.png";

function Modal(props) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  return (
    <div>
      {props.showModal ? (
        <S.Background>
          <animated.div style={animation}>
            <S.ModalWrapper
              showModal={props.showModal}
              background={
                props.modalOptions.background
                  ? props.modalOptions.background
                  : "#0F3460"
              }
            >
              <S.Top>
                <span>{props.modalOptions.textTitle}</span>

                <button onClick={() => props.setShowModal((prev) => !prev)}>
                  <img src={closebtn} alt="Fechar Sala" />
                </button>
              </S.Top>

              <S.Middle height={props.modalOptions.height}>
                <span>{props.modalOptions.text}</span>
              </S.Middle>
              {props.modalOptions.isTimer ? (
                <S.Bottom>
                  <Button
                    title="Livre"
                    color="#379392"
                    width="230px"
                    height="60px"
                    margin="20px"
                    onClick={props.modalOptions.closeModel}
                  />
                  <Button
                    title="15 Segundos"
                    color="#379392"
                    width="230px"
                    height="60px"
                    margin="20px"
                    onClick={props.modalOptions.closeModel}
                  />
                  <Button
                    title="30 Segundos"
                    color="#379392"
                    width="230px"
                    height="60px"
                    margin="20px"
                    onClick={props.modalOptions.closeModel}
                  />
                </S.Bottom>
              ) : props.modalOptions.firstBtnColor ? (
                <S.Bottom>
                  <Button
                    color={props.modalOptions.firstBtnColor}
                    title={props.modalOptions.firstBtnText}
                    onClick={props.modalOptions.firstBtnFunc}
                  />
                  <Button
                    color={props.modalOptions.secndBtnColor}
                    title={props.modalOptions.secndBtnText}
                    onClick={props.modalOptions.secndBtnFunc}
                  />
                </S.Bottom>
              ) : null}
            </S.ModalWrapper>
          </animated.div>
        </S.Background>
      ) : null}
    </div>
  );
}

export default Modal;
