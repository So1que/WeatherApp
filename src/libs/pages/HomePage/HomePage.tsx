import React from "react"
import { ToggleSwitchWithLabel } from "../../ui-components"
import { Date } from "./components/Date"
import { HeaderContainer, PageContainer } from "./styled"

export const HomePage: React.FC = () => (
  <PageContainer>
    <HeaderContainer>
      <Date isToday />
      <ToggleSwitchWithLabel label={{ left_text: "Light", right_text: "Dark" }} />
    </HeaderContainer>
  </PageContainer>
)
