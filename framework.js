function prefab(prefabName, design) {
    const prefabs = document.querySelectorAll(prefabName);
    for (let prefab of prefabs) {
        for (let element of design) {
            let Part = document.createElement(element.Name);
            if ("textContent" in Part && "text" in element) {
                Part.textContent = element.text
            }

            if ("src" in Part && "src" in element) {
                Part.src = element.src
            }

            if ("alt" in Part && "alt" in element) {
                Part.alt = element.alt
            }

            if ("classes" in element) {
                for (let Class of element.classes) {
                    Part.classList.add(Class);
                }
            }

            if ("id" in element) {
                Part.id = element.id
            }

            prefab.appendChild(Part)
        }
    }
}
