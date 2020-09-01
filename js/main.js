const servicesItem = document.querySelectorAll('.menu-services__list li');
let serviceTitle = document.querySelector('.menu-item__title');
let serviceText = document.querySelector('.menu-item__text');
let serviceLi = document.querySelectorAll('.menu-item__description li');
const popupButton = document.querySelector('.btn_app');
const popup = document.querySelector('.popup-application');
const popupName = document.querySelector('.popup-application__name');
const popupPhone = document.querySelector('.popup-application__phone');
const briefButton = document.querySelector('.btn_brief');
const briefButton2 = document.querySelector('.services-mobile__btn');
const briefButton3 = document.querySelector('.menu-item__btn');
const popupBrief = document.querySelector('.popup-brief');
const selectorMobile = document.querySelector('.services-mobile__title');
const optionsMobile = document.querySelectorAll('.services-mobile__title option');
let serviceTextMobile = document.querySelector('.services-mobile__text');
let serviceLiMobile = document.querySelectorAll('.services-mobile__description li');
const closeBtn = document.querySelector('.close');
const closeBtn2 = document.querySelector('.close2');

//! SERVICE PICKER
for (let index = 0; index < servicesItem.length; index++) {
	servicesItem[index].addEventListener('click', () => {
		if (!servicesItem[index].classList.contains('active')) {
			servicesItem[index].classList.add('active');
			for (let j = 0; j < servicesItem.length; j++) {
				if (index == j) {
					continue;
				}
				else {
					servicesItem[j].classList.remove('active');
				}
			}

			for (let k = 0; k < servicesItem.length; k++) {
				if (servicesItem[k].classList.contains('active')) {
					servicesItem[k].children[0].style.display = 'inline-block';
					serviceTitle.innerHTML = servicesItem[k].dataset.title;
					serviceText.innerHTML = servicesItem[k].dataset.text;
					serviceLi[0].innerHTML = servicesItem[k].dataset.li1;
					serviceLi[1].innerHTML = servicesItem[k].dataset.li2;
					serviceLi[2].innerHTML = servicesItem[k].dataset.li3;
				}
				else {
					servicesItem[k].children[0].style.display = 'none';
				}
			}
		}
	});
}
//! SERVICE PICKER END

//! SERVICE PICKER FOR MOBILE
selectorMobile.addEventListener('input', (e) => {
	serviceTextMobile.innerHTML = optionsMobile[parseInt(e.target.value)].dataset.text;
	serviceLiMobile[0].innerHTML = optionsMobile[parseInt(e.target.value)].dataset.li1;
	serviceLiMobile[1].innerHTML = optionsMobile[parseInt(e.target.value)].dataset.li2;
	serviceLiMobile[2].innerHTML = optionsMobile[parseInt(e.target.value)].dataset.li3;

})

//! FIRST POPUP
popupButton.onclick = function () {
	popup.style.display = 'block';
}

//! FIRST POPUP END

//! SECOND POPUP
briefButton.onclick = function () {
	popupBrief.style.display = 'block';
}
briefButton2.onclick = function () {
	popupBrief.style.display = 'block';
}
briefButton3.onclick = function () {
	popupBrief.style.display = 'block';
}


window.onclick = function (e) {
	if (e.target.classList.value == 'popup-brief__wrapper') {
		popupBrief.style.display = 'none';
	}
	if (e.target.classList.value == 'popup-application__wrapper') {
		popup.style.display = 'none';
		popupName.value = '';
		popupPhone.value = '';
	}
}

closeBtn.onclick = function () {
	popup.style.display = 'none';
}
closeBtn2.onclick = function () {
	popupBrief.style.display = 'none';
}


//! SECOND POPUP END

//! SLICK SLIDER SETTINGS

$('.inner-header__slider').slick({
	autoplay: true,
	autoplaySpeed: 1000,
	dots: false,
	vertical: true,
	verticalSwiping: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	centerMode: false,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				infinite: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				vertical: false,
				verticalSwiping: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
});

//! SLICK SLIDER SETTINGS END

//! SEND TO MAIL

$(document).ready(function () {

	//E-mail Ajax Send
	$(".popup-application__content").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


//! list rotating 
$('.demo').atrotating({
	animation: 'fade', // fade, scale, spin, flipY, flipX или no
	method: 'group',
	animationSpeed: 300,
	delay: 100
});