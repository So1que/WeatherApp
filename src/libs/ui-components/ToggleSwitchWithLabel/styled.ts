import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 233px;
  min-height: 33px;
  max-width: 233px;
  max-height: 33px;
`

export const Text = styled.span`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 3px;
  max-width: 80px;

  &:nth-of-type(1) {
    padding-right: 30px;
  }

  &:nth-of-type(2) {
    padding-left: 30px;
  }
`

export const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  background-color: #747474;
  border-radius: 11px;
`
