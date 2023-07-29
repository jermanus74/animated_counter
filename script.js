const openCounter = () => {
    const number = document.querySelector("#counter");
    let counter = 0;
    setInterval(() => {
      if (counter == 70) {
        clearInterval();
      }
      else{
        counter++;
        number.innerText = counter + "%";
      }
     
    }, 40);
  };
  openCounter();