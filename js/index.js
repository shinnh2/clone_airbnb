// dom
const $header = document.querySelector(".header");
const $mainTab = document.querySelector(".main_tab_area");
//스크롤 이벤트
window.addEventListener("scroll", function () {
	const scrollPosition = this.window.scrollY;
	if (scrollPosition > 80) {
		$header.classList.add("fixed");
		$mainTab.classList.add("fixed");
	} else {
		$header.classList.remove("fixed");
		$mainTab.classList.remove("fixed");
	}
});
