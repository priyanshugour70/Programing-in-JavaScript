let runagain = true;

      do {
        let age = prompt("Enter Your Age : ");

        age = Number.parseInt(age);

        const candrive = (a) => {
          return a >= 18 ? true : false;
        };

        if (age < 1) {
          console.error("Age is in Negative...");
          break;
        }

        if (candrive(age)) {
          alert("You can drive..");
        } else {
          alert("You can not drive..");
        }

        // runagain = confirm("Do you again Input..");

        let cnfrm = confirm("Do you again Input..");

        if (cnfrm) {
          runagain = true;
        } else {
          runagain = false;
        }
      } while (runagain);

      let google = confirm("Do you Want to go Google ...");

      if (google) {
        location.href = "https://google.com";
      }

    let colr = prompt("Enter Color too Show in Background : ");

    document.body.style.background = colr ;