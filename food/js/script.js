/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");








document.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_6__["showModal"])('.modal', modalTimerId), 30000);
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabcontainer');
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.offer__slider');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])('form', modalTimerId);
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('.modal', '[data-modal]', modalTimerId);
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  const result = document.querySelector('.calculating__result span'),
        heightInput = document.querySelector('#height'),
        weightInput = document.querySelector('#weight'),
        ageInput = document.querySelector('#age');
  let sex = getFromLocal('sex', 'female'),
      height = getFromLocal('height', 162),
      weight = getFromLocal('weight', 60),
      age = getFromLocal('age', 25),
      activity = getFromLocal('activity', 1.375);

  function getFromLocal(key, value) {
    if (localStorage.getItem(key)) {
      return localStorage.getItem(key);
    }

    localStorage.setItem(key, value);
    return localStorage.getItem(key);
  }

  function initLocal(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(item => {
      item.classList.remove(activeClass);

      if (item.getAttribute('id') === localStorage.getItem('sex')) {
        item.classList.add(activeClass);
      }

      if (item.getAttribute('data-activity') === localStorage.getItem('activity')) {
        item.classList.add(activeClass);
      }
    });
  }

  initLocal('#gender div', 'calculating__choose-item_active');
  initLocal('.calculating__choose_big div', 'calculating__choose-item_active');
  heightInput.value = height;
  weightInput.value = weight;
  ageInput.value = age;

  function calcTotal() {
    if (!sex || !height || !weight || !age || !activity) {
      result.textContent = '0';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round((655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) * activity);
    } else {
      result.textContent = Math.round((66.5 + 13.75 * weight + 5.003 * height - 6.775 * age) * activity);
    }
  }

  calcTotal();

  function getStaticInfo(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.getAttribute('data-activity')) {
          activity = +e.target.getAttribute('data-activity');
          localStorage.setItem('activity', activity);
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', sex);
        }

        calcTotal();
        elements.forEach(item => {
          item.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
      });
    });
  }

  function getDynamicInfo(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', e => {
      if (e.target.value.match(/\D/g)) {
        e.target.style.border = '1px solid red';
      } else {
        e.target.style.border = 'none';
      }

      switch (e.target.getAttribute('id')) {
        case 'height':
          height = +e.target.value;
          localStorage.setItem('height', height);
          break;

        case 'weight':
          weight = +e.target.value;
          localStorage.setItem('weight', weight);
          break;

        case 'age':
          age = +e.target.value;
          localStorage.setItem('age', age);
          break;
      }

      calcTotal();
    });
  }

  getStaticInfo('#gender div', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');
  getDynamicInfo('#height');
  getDynamicInfo('#weight');
  getDynamicInfo('#age');
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function cards() {
  // Card template class
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.transfer = 60;
      this.changeToRub();
      this.parent = document.querySelector(parentSelector);

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
    }

    changeToRub() {
      this.price *= this.transfer;
    }

    render() {
      const card = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        card.classList.add(this.classes);
      } else {
        this.classes.forEach(className => card.classList.add(className));
      }

      card.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
        `;
      this.parent.append(card);
    }

  }

  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu').then(data => {
    data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function form(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'icons/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(form => {
    bindPostData(form);
  });

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.alt = 'Загрузка';
      statusMessage.style = `
            display: block;
            margin: 0 auto;
        `;
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', json).then(data => {
        console.log(data);
        showThanksModal(message.success);
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
        statusMessage.remove();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])('.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.remove('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: showModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
const showModal = (modalSelector, id) => {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  if (id) {
    clearInterval(id);
  }
};

const closeModal = modalSelector => {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  document.body.style.overflow = '';
};

function modal(modalSelector, modalTriggerSelector, modalTimerId) {
  const modalTriggers = document.querySelectorAll(modalTriggerSelector);
  const modal = document.querySelector(modalSelector);
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => showModal(modalSelector, modalTimerId));
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') === '') {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });

  const showModalByScroll = () => {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      showModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);
}


/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(sliderSelector) {
  const slider = document.querySelector(sliderSelector),
        sliderWrapper = slider.querySelector('.offer__slider-wrapper'),
        sliderField = sliderWrapper.querySelector('.offer__slider-inner'),
        slides = sliderWrapper.querySelectorAll('.offer__slide'),
        prevSlide = slider.querySelector('.offer__slider-prev'),
        nextSlide = slider.querySelector('.offer__slider-next'),
        total = slider.querySelector('#total'),
        current = slider.querySelector('#current'),
        width = window.getComputedStyle(sliderWrapper).width,
        indicators = document.createElement('ol'),
        dots = [];
  let slideIndex = 1,
      offset = 0;
  sliderField.style.display = 'flex';
  sliderField.style.width = 100 * slides.length + '%';
  sliderField.style.transition = '0.5s all';
  sliderWrapper.style.overflow = 'hidden';
  indicators.classList.add('carousel-indicators');
  slider.append(indicators);
  slides.forEach((slide, i) => {
    slide.style.width = width;
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.setAttribute('data-slide-to', i + 1);
    indicators.append(dot);
    dots.push(dot);
  });
  dots[slideIndex - 1].style.opacity = 1;

  if (slides.length > 9) {
    total.textContent = slides.length;
  } else {
    total.textContent = `0${slides.length}`;
  }

  function swipe(step) {
    slideIndex += step;

    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    updateCurrent(slideIndex);
  }

  function updateCurrent(cur) {
    if (cur > 9) {
      current.textContent = cur;
    } else {
      current.textContent = `0${cur}`;
    }

    dots.forEach(dot => {
      dot.style.opacity = 0.5;
    });
    dots[cur - 1].style.opacity = 1;
  }

  function getNum(string) {
    return +string.replace(/\D/g, '');
  }

  prevSlide.addEventListener('click', () => {
    if (offset === 0) {
      offset = getNum(width) * (slides.length - 1);
    } else {
      offset -= getNum(width);
    }

    sliderField.style.transform = `translateX(-${offset}px)`;
    swipe(-1);
  });
  nextSlide.addEventListener('click', () => {
    if (offset === getNum(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += getNum(width);
    }

    sliderField.style.transform = `translateX(-${offset}px)`;
    swipe(+1);
  });
  indicators.addEventListener('click', e => {
    if (e.target.getAttribute('data-slide-to')) {
      const slideTo = +e.target.getAttribute('data-slide-to');
      offset = getNum(width) * (slideTo - 1);
      sliderField.style.transform = `translateX(-${offset}px)`;
      slideIndex = slideTo;
      updateCurrent(slideIndex);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabSelector) {
  const tabContainer = document.querySelector(tabSelector);
  const tabContent = tabContainer.querySelectorAll('.tabcontent');
  const tabParent = tabContainer.querySelector('.tabheader__items');
  const tabs = tabParent.querySelectorAll('.tabheader__item');

  const hideTabContent = () => {
    tabContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  };

  const showTabContent = function () {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  };

  hideTabContent();
  showTabContent();
  tabParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer() {
  const currentMonth = new Date().getMonth();
  const deadline = document.querySelector('#deadline');
  const monthStorage = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  deadline.innerHTML = `20 ${monthStorage[currentMonth]} в 00:00`;

  const addZero = num => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const endtime = `2022-${addZero(currentMonth + 1)}-20`;

  function calcDeadline(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor(t / (1000 * 60 * 60) % 24);
      minutes = Math.floor(t / (1000 * 60) % 60);
      seconds = Math.floor(t / 1000 % 60);
    }

    return {
      'total': t,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds');
    const clockInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = calcDeadline(endtime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(clockInterval);
      }
    }
  }

  setClock('.timer', endtime);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: getResource, postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

const postData = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: body
  });
  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map