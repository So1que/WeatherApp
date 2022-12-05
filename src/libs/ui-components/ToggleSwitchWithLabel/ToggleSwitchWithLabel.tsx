import React, { useState } from "react"
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch"
import * as Styled from "./styled"

type ToggleSwitchWithLabelProps = {
  label?: {
    left_text?: string
    right_text?: string
  }
  isDisabled?: boolean
}

export const ToggleSwitchWithLabel: React.FC<ToggleSwitchWithLabelProps> = ({ label, isDisabled }) => {
  const [isChecked, setIsChecked] = useState(false)

  const onChangeHandler = (value: boolean): void => {
    setIsChecked(value)
  }

  return (
    <Styled.Container>
      {label?.left_text && <Styled.Text>{label.left_text}</Styled.Text>}
      <ToggleSwitch isDisabled={isDisabled} onChange={onChangeHandler} isChecked={isChecked} />
      {label?.right_text && <Styled.Text>{label.right_text}</Styled.Text>}
    </Styled.Container>
  )
}
