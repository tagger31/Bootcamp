/*
	Q2A Market (c) Jatin Soni
	http://www.q2amarket.com/

	File:           js/snow-core.js
	Version:        Snow 1.4
	Description:    JavaScript helpers for SnowFlat theme

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.
*/
$(document).ready(function () {

	/**
	 * Account menu box toggle script
	 */
	$('#qam-account-toggle').click(function (e) {
		e.stopPropagation();
		$(this).toggleClass('account-active');
		$('.qam-account-items').slideToggle(100);
	});

	$(document).click(function () {
		$('#qam-account-toggle.account-active').removeClass('account-active');
		$('.qam-account-items:visible').slideUp(100);
	});

	$('.qam-account-items').click(function (event) {
		event.stopPropagation();
	});

	/**
	 * Main navigation toggle script
	 */
	$('.qam-menu-toggle').click(function () {
		$('.qa-nav-main').slideToggle(100);
	});

	/*
	 * Sidepannel Toggle Click Function
	 */
	$('#qam-sidepanel-toggle').click(function () {
		$('#qam-sidepanel-mobile').toggleClass('open');
		$(this).toggleClass('active');
		$(this).find('i').toggleClass('icon-right-open-big');
	});

	/**
	 * Toggle search box for small screen
	 */
	$('#qam-search-mobile').click(function () {
		$(this).toggleClass('active');
		$('#the-top-search').slideToggle('fast');
	});

	/*
	 * add wrapper to the message sent note 'td'
	 */
	$('.qa-part-form-message .qa-form-tall-ok').wrapInner('<div class="qam-pm-message"></div>');

	// fix the visible issue for main nav, top search-box
	$(window).resize(function () {
		if (window.matchMedia('(min-width: 980px)').matches) {
			$(".qam-search.the-top .qa-search").hide();
			$(".qa-nav-main").show('fast', function() { $(this).css('display','inline-block'); });
		} else {
			$(".qam-search.the-top .qa-search").show();
			$(".qa-nav-main").hide();
			$('.qam-menu-toggle').removeClass('current');
		}
	});

// wlasne funkcje
if ($(window).width() < 960) {
	$('.qam-account-items-wrapper>div').appendTo( $('.qa-nav-main-clear') );
	if(document.getElementsByClassName('qa-nav-main-admin')[0]){
		document.getElementsByClassName('qa-nav-sub-list')[0].style.paddingLeft = '34.5%';
	}else{
		document.getElementsByClassName('qa-nav-sub-list')[0].style.paddingLeft = '40%';
	}
 };
 $('.qa-nav-main-list').append('<li class="qa-nav-main-item dropdown"><span id="toggle-language"><img id="toggle-icon-language" src="" alt="language"></span><ul id="language-content" class="dropdown-content"> <form action="" method="GET"><label for="interface" id="interface-label"></label><select name="interface language" id="interface-language"><option value="pol">POL</option><option value="eng">ENG</option></select><label for="content" id="content-label"></label><select name="content language" id="content-language"><option value="pol">POL</option><option value="eng">ENG</option></select><label for="services" id="services-label"></label><select name="services" id="services" disabled><option value="shop">IdoSell Shop</option><option value="booking">IdoSell Booking</option></select><input id="language-input" type="submit" value=""></form></ul></li>');
 
 $("#toggle-language").click(function(){
    $("#language-content").slideToggle(100);
  });

var User = {
	"interfaceLanguage" : {
		"current" : "eng",
		"available" : ["pol", "eng"]
	},
	"contentLanguage" : {
		"current" : "eng",
		"available" : ["pol", "eng"]
	},
	"service" : {
		"current" : {
			"id" : "shop",
			"name" : "IdoSell Shop"
		},
		"available" : [
			{
				"id" : "shop",
				"name" : "IdoSell Shop"
			},
			{
				"id" : "booking",
				"name" : "IdoSell Booking"
			}
		]
	},
	"endpointUrl" : "/change-language"
}

var interface = User.interfaceLanguage.current;
var content = User.contentLanguage.current;
var service = User.service.current;
var endpoint = User.endpointUrl;
var interfaceLanguage = document.getElementById("interface-language");
var contentLanguage = document.getElementById("content-language");
var serviceId = document.getElementById("services");
var languageIcon = document.getElementById("toggle-icon-language");
document.getElementsByTagName('form')[0].setAttribute('action', endpoint);

// toggle actual language
if(interface === "pol"){
	interfaceLanguage.value = "pol";
	document.getElementById('interface-label').innerHTML = "Język interfejsu:";
	document.getElementById('content-label').innerHTML = "Język kontentu:";
	document.getElementById('services-label').innerHTML = "Serwisy:";
	languageIcon.setAttribute('src' , '../qa-theme/SnowFlat/images/poland-flag-icon.png');
	document.getElementById('language-input').setAttribute('value', 'Potwierdź');
} else if(interface === "eng"){
	interfaceLanguage.value = "eng";
	document.getElementById('interface-label').innerHTML = "Interface language:";
	document.getElementById('content-label').innerHTML = "content language:";
	document.getElementById('services-label').innerHTML = "Services:";
	languageIcon.setAttribute('src' , '../qa-theme/SnowFlat/images/united-kingdom-flag-icon.png');
	document.getElementById('language-input').setAttribute('value', 'Submit');
}	

if(content === "pol"){
	contentLanguage.value = "pol";
} else if(content === "eng"){
	contentLanguage.value = "eng";
}

if(service === "shop"){
	serviceId.value = "shop";
} else if(service === "booking"){
	serviceId.value = "booking";
}
});