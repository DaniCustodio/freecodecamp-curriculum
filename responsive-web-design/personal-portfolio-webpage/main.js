const slideNavbar = () => {
	const burger = document.querySelector(".burger")
	const navbar = document.querySelector(".navbar-links")

	burger.addEventListener("click", () => {
		burger.classList.toggle("toggle")
		navbar.classList.toggle("fix-nav-active")
	})
}

const app = () => {
	slideNavbar()
}

app()
