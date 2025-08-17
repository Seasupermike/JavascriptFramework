const key = {
    keyIsPressed: false,
    press: function (downKey) {
        if (downKey.toString().replace("Key", "") in this) {
            this[downKey.toString().replace("Key", "")].pressed = true
        } else {
            this[downKey.toString().replace("Key", "")] = { pressed: true }
        }
    },
    depress: function (upkey) {
        this[upkey.toString().replace("Key", "")].pressed = false
    }
}

document.addEventListener("keydown", key.press);
document.addEventListener("keyup", key.depress);
