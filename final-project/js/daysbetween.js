function daysbetween(){
      let lastvisit = parseInt(localStorage.getItem("lastvisit"));
      const FACTOR = 60000 * 1440;
      console.log(lastvisit);
      console.log(Date.now());
      let daysbetween = Date.now() - lastvisit;
      console.log(daysbetween);
      let numberOfDays = Math.round(daysbetween / FACTOR);

      console.log(numberOfDays);



      if (numberOfDays < 1) {
        document.getElementById('lastvisit').innerText = `This is your first day visiting this page. Welcome!`;
      } else {

        document.getElementById('lastvisit').textContent = numberOfDays;
      }
      localStorage.setItem("lastvisit", Date.now());
      console.log(lastvisit)
    }
    daysbetween();