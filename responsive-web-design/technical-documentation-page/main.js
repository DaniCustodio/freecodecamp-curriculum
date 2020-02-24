const slideNavbar = () => {
	const navbar = document.querySelector(".index-links")
	const burger = document.querySelector(".burger")

	burger.addEventListener("click", () => {
		burger.classList.toggle("toggle")
		navbar.classList.toggle("navbar-active")
	})
}

slideNavbar()
