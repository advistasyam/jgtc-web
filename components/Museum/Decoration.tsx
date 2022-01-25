import React from "react"
import { Case1 } from "@components/Museum/Case/Case1"
import { Case2 } from "./Case/Case2"
import { Case3 } from "./Case/Case3"
import { Case4 } from "./Case/Case4"
import { Case5 } from "./Case/Case5"
import { Case6 } from "./Case/Case6"
import { Case7 } from "./Case/Case7"
import { Case8 } from "./Case/Case8"
import { Case9 } from "./Case/Case9"
import { Case10 } from "./Case/Case10"
import { Case11 } from "./Case/Case11"
import { Case12 } from "./Case/Case12"
import { Case13 } from "./Case/Case13"
import { Case14 } from "./Case/Case14"
import { Case15 } from "./Case/Case15"
import { Case16 } from "./Case/Case16"
import { Case17 } from "./Case/Case17"
import { Case22 } from "./Case/Case22"
import { Case23 } from "./Case/Case23"

interface DecorationProps {
  page: number
}

const ListCase = [
  <></>,
  <Case1 key={1} />,
  <Case2 key={2} />,
  <Case3 key={3} />,
  <Case4 key={4} />,
  <Case5 key={5} />,
  <Case6 key={6} />,
  <Case7 key={7} />,
  <Case8 key={8} />,
  <Case9 key={9} />,
  <Case10 key={10} />,
  <Case11 key={11} />,
  <Case12 key={12} />,
  <Case13 key={13} />,
  <Case14 key={14} />,
  <Case15 key={15} />,
  <Case16 key={16} />,
  <Case17 key={17} />,
  <></>,
  <></>,
  <></>,
  <></>,
  <Case22 key={22} />,
  <Case23 key={23} />,
  <></>,
  <></>,
  <></>,
  <></>,
  <></>,
]

const Decoration: React.FC<DecorationProps> = ({ page }) => {
  return ListCase[page]
}

export { Decoration }
