let key = {
  keyIsPressed: false;
}

document.addEventListener("keydown", function (key) {
    console.log(`${key.code}`)
});

document.addEventListener("keyup", function (key) {
    console.log(`${key.code}`)
});
