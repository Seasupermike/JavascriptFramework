 const Key = (function () {
  function createKey() {
    const onPressFuncs = new Set();
    const onHeldFuncs = new Set();
    const onReleaseFuncs = new Set();

    return {
      pressed: false,

      onDown(func) {
        if (typeof func != "function") throw TypeError(`onDown expected a function, received a ${typeof func}`);
        onPressFuncs.add(func);
      },

      onUp(func) {
        if (typeof func != "function") throw TypeError(`onUp expected a function, received a ${typeof func}`);

        onReleaseFuncs.add(func);
      },

      down(k) {
        this.pressed = true;
        for (const func of onPressFuncs) {
          func(k);
        }
      },

      release(k) {
        this.pressed = false;
        for (const func of onReleaseFuncs) {
          func(k);
        }
      },
    };
  }
  let keypresses = {};
  for (let i = 32; i <= 126; i++) {
    keypresses[String.fromCharCode(i)] = createKey();
  }
  let bonus = ["any", "shift", "control", "alt", "tab", "enter", "backspace", "escape", "space"]
  for (let i = 0; i < bonus.length; i++) {
      keypresses[bonus[i]] = createKey()
  }
  
  function onDown(event) {
    if (keypresses[event.key] == undefined) {
      console.log(event.key)
    }
    let k = (event.key == " ") ? "space" : event.key.toLowerCase()
    keypresses[k].down();
    keypresses.any.down(k)
  }

  function onUp(event) {
    let k = (event.key == " ") ? "space" : event.key.toLowerCase()
    keypresses[k].release();
    keypresses.any.release(k)

  }

  keypresses.start = (function () {
      window.addEventListener("keydown", (event) => onDown(event));
      window.addEventListener("keyup", (event) => onUp(event));
  });
  keypresses.start();
  keypresses.start = undefined;
  
  
  return keypresses;
})();

      
