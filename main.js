  function rateMembers() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in your name and email.");
      return;
    }

    var members = ["ngo", "mergal", "padojinog", "deguzman", "hizon"];
    var allValid = true; 

    for (var i = 0; i < members.length; i++) {
      var id = members[i];
      var input = document.getElementById(id);
      var value = parseInt(input.value);
      var output = document.getElementById(id + "-output");

      if (isNaN(value) || value < 1 || value > 10) {
        output.innerHTML = "<span class='text-danger'>Please enter a value from 1 to 10.</span>";
        allValid = false;
      } 
      else {
        output.innerHTML = "<strong>" + getRating(value) + "</strong>";
      }
    }

    if (allValid) {
      alert("Thank you " + name + " for submitting your ratings!");
    }
  }

  function getRating(score) {
    if (score >= 9) {
      return "Excellent";
    } else if (score >= 7) {
      return "Good";
    } else if (score >= 5) {
      return "Satisfactory";
    } else if (score >= 3) {
      return "Needs Improvement";
    } else {
      return "Poor";
    }
  }