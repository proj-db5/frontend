import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";

export interface ModalProps {
  /** 모달 오픈 여부 */
  isOpen: boolean;
  /** 모달 오픈 setState */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  /** 버튼 클릭 handler */
  onClickBtn?: React.MouseEventHandler<HTMLDialogElement>;
}
const Modal = ({
  isOpen,
  setIsOpen,
  time,
  setTime,
  onClickBtn,
}: ModalProps) => {
  const handleKeyDown = (e: any) => {
    e.key === "Escape" && setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <>
          <Background
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />
          <ModalWrap isOpen={isOpen}>
            <select
              className="select"
              onBlur={(e) => setTime(Number(e.target.value))}
            >
              <option value="30">30분</option>
              <option value="60">60분</option>
              <option value="120">120분</option>
              <option value="120">120분</option>
            </select>
            <button className="btn" type="button" onClick={onClickBtn}>
              랑데뷰 전송
            </button>
          </ModalWrap>
        </>
      )}
    </>
  );
};

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

interface ModalWrapProps {
  isOpen: boolean;
}
const ModalWrap = styled.dialog<ModalWrapProps>`
  all: unset;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

  width: 312px;
  height: 167px;
  padding: 17px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  .select {
    cursor: pointer;
    width: 100%;
    height: 40px;
    display: flex;
    padding: 0 20px;
    border: 2px solid var(--gray_2);
    border-radius: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: var(--black_1);
    &:focus {
      border-color: var(--gray_2);
    }
  }

  .btn {
    all: unset;
    cursor: pointer;
    width: 125px;
    height: 44px;
    background: var(--skyblue_3);
    border-radius: 6px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    line-height: 26px;
    color: var(--white);
  }
`;
