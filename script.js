var currentTheme;


if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "dark")
}

function checkTheme() {

  currentTheme = localStorage.getItem("theme");
	
	if (currentTheme == "dark") {
		document.body.classList.toggle("dark");
    document.body.classList.add("dark");
	}
	else if (currentTheme == "light") {
		document.body.classList.toggle("light");
    document.body.classList.add("light");
	}
  else {
    document.body.classList.toggle("dark");
    document.body.classList.add("dark");
  }

	console.log(currentTheme);
}

function theme() {

  currentTheme = localStorage.getItem("theme");


	if (currentTheme == "dark" || currentTheme != "light") {
		localStorage.setItem("theme", "light");
    document.body.classList.add("light");
		document.body.classList.remove("dark");

    currentTheme = "light";

		console.log(currentTheme); 

	}

	else if (currentTheme == "light") {
		localStorage.setItem("theme", "dark");
		document.body.classList.add("dark");
		document.body.classList.remove("light");

    currentTheme = "dark";

		console.log(currentTheme); 

	}

	document.querySelector(".theme").classList.toggle("rotated");
}