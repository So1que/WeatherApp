import React from "react"
import { Wrapper } from "./styled"

export const Date: React.FC<{ isToday?: boolean }> = ({ isToday }) => isToday && <Wrapper>TODAY</Wrapper>
