// Class is a like template..
class RailwayForm {
    submit() {
        alert(
            this.name + " form submitted. for train Number is " + this.trainno
        );
    }
    cancel() {
        alert(
            this.name +
                " This form has been Canclled.. for train Number is " +
                this.trainno
        );
    }
    fill(givenname, trainno) {
        this.name = givenname;
        this.trainno = trainno;
    }
}

// Create a form for Harry
let harryForm = new RailwayForm();
// Fill the form with Harry's Details
harryForm.fill("harry", 123321);

// Create a form for Rohan
let rohanForm = new RailwayForm();
// Fill the form with Rohan's Details
rohanForm.fill("rohan", 321123);

harryForm.submit();
rohanForm.submit();
rohanForm.cancel();
