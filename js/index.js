// dom
const $header = document.querySelector(".header");
const $mainTab = document.querySelector(".main_tab_area"); //메인 상단 탭
const $btnTranslate = document.querySelectorAll(".btn_translate"); //언어변경 버튼
const $btnUserMenu = document.querySelector(".btn_user"); //유저메뉴 버튼
const $userMenu = document.querySelector(".user_menu_wrap"); //유저메뉴
const $userMenuDim = document.querySelector(".user_menu_dim"); //유저메뉴 외부영역
const $btnFilter = document.querySelector(".btn_filter"); //필터 버튼
const $btnLoginSignUp = document.querySelectorAll(".btn_loginSignUp"); //로그인 회원가입 버튼
const $popupWrap = document.querySelectorAll(".popup_wrap"); //팝업 전체
const $popup = document.querySelectorAll(".popup"); //팝업창
const $popupWrapTranslate = document.querySelector(".popup_wrap.translate"); //팝업: 언어변경
const $popupTranslate = document.querySelector(".popup.translate"); //팝업창: 언어변경
const $popupWrapFilter = document.querySelector(".popup_wrap.filter"); //팝업: 필터
const $popupFilter = document.querySelector(".popup.filter"); //팝업창: 필터
const $popupWrapLoginSignUp = document.querySelector(".popup_wrap.loginSignUp"); //팝업: 로그인 회원가입
const $popupLoginSignUp = document.querySelector(".popup.loginSignUp"); //팝업창: 로그인 회원가입
const $popupBtnClose = document.querySelectorAll(".popup .btn_close"); //팝업: 닫기 버튼

//스크롤 이벤트
window.addEventListener("scroll", () => {
	const scrollPosition = this.window.scrollY;
	if (scrollPosition > 80) {
		$header.classList.add("fixed");
		$mainTab.classList.add("fixed");
	} else {
		$header.classList.remove("fixed");
		$mainTab.classList.remove("fixed");
	}
});

//팝업 이벤트
//함수: 팝업 활성화
const popupAddActive = (popupWrapElement, popupElement) => {
	popupWrapElement.classList.add("active");
	popupElement.classList.add("active");
};
//함수: 팝업 비활성화
const popupRemoveActive = () => {
	$popup.forEach((element) => {
		element.classList.remove("active");
	});
	$popupWrap.forEach((element) => {
		element.classList.remove("active");
	});
};
//클릭이벤트: 언어변경 팝업
$btnTranslate.forEach((element) => {
	element.addEventListener("click", () => {
		popupAddActive($popupWrapTranslate, $popupTranslate);
	});
});
//클릭이벤트: 필터 변경 팝업
$btnFilter.addEventListener("click", () => {
	popupAddActive($popupWrapFilter, $popupFilter);
});
//클릭이벤트: 팝업 닫기
$popupBtnClose.forEach((element) => {
	element.addEventListener("click", () => {
		popupRemoveActive();
	});
});
//클릭이벤트: 유저 버튼
$btnUserMenu.addEventListener("click", () => {
	$userMenuDim.classList.add("active");
	$userMenu.classList.add("active");
});
$userMenuDim.addEventListener("click", () => {
	$userMenuDim.classList.remove("active");
	$userMenu.classList.remove("active");
});
//클릭이벤트: 팝업 로그인 회원가입
$btnLoginSignUp.forEach((element) => {
	element.addEventListener("click", () => {
		$userMenuDim.classList.remove("active");
		$userMenu.classList.remove("active");
		popupAddActive($popupWrapLoginSignUp, $popupLoginSignUp);
	});
});
