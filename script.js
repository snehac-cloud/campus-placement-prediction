function predict() {
  let gpa = document.getElementById("gpa").value;
  let skills = document.getElementById("skills").value;
  let projects = document.getElementById("projects").value;

  let score = (gpa * 0.5) + (skills * 0.3) + (projects * 0.2);

  let result = score > 7 ? "High Placement Chance ✅" : "Low Placement Chance ⚠️";

  document.getElementById("result").innerText = result;
}
