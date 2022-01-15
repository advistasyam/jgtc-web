import React from "react"
import { Case1 } from "@components/Museum/Case/Case1"
import { Case2 } from "./Case/Case2"
import { Case3 } from "./Case/Case3"

interface DecorationProps {
  page: number
}

const ListCase = [
  <></>,
  <Case1 key={1} />,
  <Case2 key={2} />,
  <Case3 key={3} />,
]

const Decoration: React.FC<DecorationProps> = ({ page }) => {
  return ListCase[page]
}

export { Decoration }
