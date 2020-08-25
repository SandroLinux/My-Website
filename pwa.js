if ("serviceWorker" in navigator){
  navigator.serivceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error =>{
    console.log("SW Registeration Failed!");
    console.log(error);
  });
}
