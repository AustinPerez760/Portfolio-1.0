let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dots");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    var mode = this.dataset.mode;
    console.log("option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "styles.css";
  }

  if (mode == "dark") {
    document.getElementById("theme-style").href = "dark.css";
  }

  if (mode == "abyss") {
    document.getElementById("theme-style").href = "abyss.css";
  }

  if (mode == "elysium") {
    document.getElementById("theme-style").href = "elysium.css";
  }

  localStorage.setItem("theme", mode);
}
