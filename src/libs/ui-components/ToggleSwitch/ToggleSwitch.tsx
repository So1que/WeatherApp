import React, { ChangeEvent } from "react"
import * as Styled from "./styled"

type ToggleSwitchProps = {
  isDisabled?: boolean
  isChecked: boolean
  onChange: (value: boolean) => void
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isDisabled, isChecked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.checked)
    }
  }

  return (
    <Styled.SwitchWrapper>
      <Styled.Slider type="checkbox" checked={isChecked} disabled={isDisabled} onChange={handleChange} />
      <Styled.Thumb isChecked={isChecked} isDisabled={isDisabled} />
    </Styled.SwitchWrapper>
  )
}
