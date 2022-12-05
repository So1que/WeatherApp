import styled from "@emotion/styled"

export const SwitchWrapper = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 56px;
  min-height: 22px;
  align-items: center;
  vertical-align: middle;
`

export const Slider = styled.input<{ checked?: boolean }>`
  width: 1;
  height: 1;
`

export const Thumb = styled.span<{ isDisabled?: boolean; isChecked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ isChecked }) => (isChecked ? "#ed2d7a" : "#747474")};
  transition: 0.4s;
  border-radius: 11px;

  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    width: 30px;
    height: 30px;
    background-color: ${({ isChecked }) => (isChecked ? "#ffffff" : "#332755")};
    transition: 0.4s;
    border-radius: 15px;

    ${({ isChecked }) =>
      isChecked &&
      `
      transform: translateX(26px);
    `}
  }
`
