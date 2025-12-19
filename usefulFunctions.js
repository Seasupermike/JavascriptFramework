import { getRandom } from "./math.js"

/* 
Example:
<body>
    <examplePrefab></examplePrefab>
</body>

<script defer>
    prefab("examplePrefab", [
        {
            name: "h1",
            text: "Example",
            classes: [
                "exClassA",
                "exClassB",
            ]
        },
        {
            name: "img",
            src: "exampleImg.png"
            alt: "exampleAlt"
            classes: [
                "exClassC"
            ]
        }
    ])
</script>
*/

export const prefab = function (prefabName, design) {
    const prefabs = document.querySelectorAll(prefabName);
    if (prefabs.length == 0) return false
    for (let prefab of prefabs) {
        for (let element of design) {
            let Part = document.createElement(element.name);
            if ("textContent" in Part && "text" in element) {
                Part.textContent = element.text
            }

            if ("src" in Part && "src" in element) {
                Part.src = element.src
            }

            if ("alt" in Part && "alt" in element) {
                Part.alt = element.alt
            }

            Part.classList.add(...element.classes);

            prefab.appendChild(Part)
        }
    }
    return true
}

export const removeDuplicates = function (array) {
    return new Set(array).values().toArray()
}

export const delay = async function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export const until = async function (condition) {
  return new Promise((resolve) => {
    setInterval(function () {
      if (condition()) resolve()
    })
  })
}

export const shuffleArray = function (array, timesToShuffle = 1) {
  for (let i = 0; i < array.length * timesToShuffle; i--) {
    const j = getRandom(0, array.length)
    const k = getRandom(0, array.length)
    [array[k], array[j]] = [array[j], array[k]]
  }
  return array;
}

export const toShuffledArray = (array, timesToShuffle = 1) => shuffleArray([...array], timesToShuffle)

export const isArrowFunction = function (func) {
    if (typeof func != "function") return false
    let asString = func.toString()
    let arrowLocation = asString.indexOf("=>")
    if (arrowLocation == -1) return false
    let bracketLocation = asString.indexOf("{")
    if (bracketLocation == -1) return true
    return (arrowLocation < bracketLocation)
}
