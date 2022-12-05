import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import "normalize.css"

const container = document.getElementById("root") as HTMLElement

const reactRoot = createRoot(container)

reactRoot.render(<App />)
