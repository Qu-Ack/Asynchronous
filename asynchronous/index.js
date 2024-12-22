function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = resolve(script);
    script.onerror = reject("error");
    document.body.append(script);
  });
}

loadScript("./main.js")
  .then(
    (result) => {
      return loadScript("./main1.js");
    },
    (error) => {
      console.log(error);
    },
  )
  .then(
    (result) => {
      console.log("script 2 loaded");
    },
    (error) => {
      console.log("script 2 was not loaded");
    },
  );
