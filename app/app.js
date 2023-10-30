import { echo } from "./echo.js"
// import dayjs from "dayjs"
import has from "lodash-es/has.js"

echo("Vite 原始碼 Mock :)")
console.log(has)
// console.log(dayjs)

// update timer
const timer = document.querySelector("#timer")
if (timer) {
  timer.textContent = Date.now()
}
