/* 
Example:
<body>
    <examplePrefab></examplePrefab>
</body>

<script defer>
    prefab("examplePrefab", [
        {
            Name: "h1",
            text: "Example",
            classes: [
                "exClassA",
                "exClassB",
            ]
        },
        {
            Name: "img",
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

            Part.classList.add(...element.classes);

            prefab.appendChild(Part)
        }
    }
}

function removeDuplicates(array) {
    const dict = new Map();
    for (let element of array) {
        dict.set(element);
    }
    return dict.keys().toArray();
}
