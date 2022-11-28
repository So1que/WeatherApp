import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"

const container = document.getElementById("root") as HTMLElement

const reactRoot = createRoot(container)

reactRoot.render(<App />)
