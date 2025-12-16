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

function prefab(prefabName, design) {
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

function removeDuplicates(array) {
    return new Set(array).values().toArray()
}

async function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

async function until(condition) {
  return new Promise((resolve) => {
    setInterval(function () {
      if (condition()) resolve()
    })
  })
}

function shuffleArray(array) {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function isArrowFuntion(func) {
    if (typeof func != "function") return false
  
    let asString = func.toString()
  
    let arrowLocation = asString.indexOf("=>");

    if (arrowLocation == -1) return false
  
    let bracketLocation = asString.indexOf("{")
  
    if (bracketLocation == -1) return true
  
    return (arrowLocation < bracketLocation)
}
