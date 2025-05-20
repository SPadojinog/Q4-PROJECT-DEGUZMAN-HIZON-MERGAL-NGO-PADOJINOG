function rateMembers() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ngo = document.getElementById("ngo").value;
    const mergal = document.getElementById("mergal").value;
    const padojinog = document.getElementById("padojinog").value;
    const deguzman = document.getElementById("deguzman").value;
    const hizon = document.getElementById("hizon").value;

    if (!name || !email || !ngo || !mergal || !padojinog || !deguzman || !hizon) {
      alert("Please fill in all the fields before submitting.");
      return;
    }

    const scores = [ngo, mergal, padojinog, deguzman, hizon].map(Number);
    for (let score of scores) {
      if (isNaN(score) || score < 1 || score > 10) {
        alert("Please enter ratings from 1 to 10 only.");
        return;
      }
    }

    let output = "";
    output += "NGO: " + ngo + " - " + getRating(Number(ngo)) + "<br>";
    output += "MERGAL: " + mergal + " - " + getRating(Number(mergal)) + "<br>";
    output += "PADOJINOG: " + padojinog + " - " + getRating(Number(padojinog)) + "<br>";
    output += "DE GUZMAN: " + deguzman + " - " + getRating(Number(deguzman)) + "<br>";
    output += "HIZON: " + hizon + " - " + getRating(Number(hizon)) + "<br>";

    document.getElementById("output").innerHTML = output;

    alert("Thank you, " + name + ", for submitting your ratings!");
  }

  function getRating(score) {
    switch (true) {
      case (score >= 9 && score <= 10):
        return "Excellent";
      case (score >= 7 && score <= 8):
        return "Good";
      case (score >= 5 && score <= 6):
        return "Satisfactory";
      case (score >= 3 && score <= 4):
        return "Needs Improvement";
      case (score >= 1 && score <= 2):
        return "Poor";
      default:
        return "Invalid";
  }
}
