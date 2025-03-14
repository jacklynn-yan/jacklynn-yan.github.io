var today = new Date();
// var today = new Date("2025-04-02");
console.log(today);
if (today.getMonth() == 3 && today.getDate() == 1) {
  document.getElementById('joke').style.display = "inline"
}