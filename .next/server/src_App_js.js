exports.id = "src_App_js";
exports.ids = ["src_App_js"];
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.js */ "./src/Home.js");
/* harmony import */ var _Speakers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers.js */ "./src/Speakers.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\App.js";



const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 35
  }, undefined);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 39
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

const configValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: true
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: pageToShow(pageName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\Header.js";


const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\Home.js";




function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speakers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerData.js":
/*!****************************!*\
  !*** ./src/SpeakerData.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const speakerData = [{
  id: 1530,
  firstName: 'Tammy',
  lastName: 'Baker',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at USA Tech, Cantaloupe Systems, E-Color, and Untangle Inc.'
}, {
  id: 5996,
  firstName: 'Craig',
  lastName: 'Berntson',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Craig has a passion for community and helping other developers improve their skills. He writes the column "Software Gardening" in DotNet Curry Magazine and is the co-author of "Continuous Integration in .NET" available from Manning.'
}, {
  id: 10803,
  firstName: 'Eugene',
  lastName: 'Chuvyrov',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.'
}, {
  id: 1124,
  firstName: 'Douglas',
  lastName: 'Crockford',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.'
}, {
  id: 41808,
  firstName: 'Paul',
  lastName: 'Everitt',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding.'
}, {
  id: 1269,
  firstName: 'Arun',
  lastName: 'Gupta',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. He has built and led developer communities for 12+ years at Sun, Oracle, Red Hat and Couchbase.'
}, {
  id: 1725,
  firstName: 'Brad',
  lastName: 'Irby',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Brad is an accomplished .NET software architect specializing in Domain Driven Design and Event Driven Architectures.'
}, {
  id: 18805,
  firstName: 'Mickey W.',
  lastName: 'Mantle',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Mickey has been developing software systems and products for over 40 years, as a systems programmer, Tech Lead, Manager, VP Engineering, CTO, COO, and now CEO/CTO of his own company.'
}, {
  id: 8367,
  firstName: 'Gayle Laakmann',
  lastName: 'McDowell',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three best selling books.'
}, {
  id: 187,
  firstName: 'Dave',
  lastName: 'Nielsen',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'As Head of Ecosystem Programs, Dave uses emerging technologies and open source projects like Microservices, Serverless & Kubernetes to bring the magic of Redis to the broader community.'
}, {
  id: 823,
  firstName: 'Kevin',
  lastName: 'Nilson',
  sat: false,
  sun: true,
  favorite: true,
  bio: "Team Lead of the Chromecast Technical Solutions Engineer team, a Java Champion and three time JavaOne Rock Star Presenter. Kevin has spoken at conferences such as JavaOne, Devoxx, JAX, O'Reilly Fluent, Silicon Valley Code Camp, JAX and HTML5DevConf."
}, {
  id: 8590,
  firstName: 'Chris',
  lastName: 'Richardson',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Chris Richardson is a developer and architect. He is a Java Champion, a JavaOne rock star and the author of POJOs in Action, which describes how to build enterprise Java applications with frameworks such as Spring and Hibernate.'
}, {
  id: 10808,
  firstName: 'Antony',
  lastName: 'Ross',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Antony Ross is a consultant specializing in data science and machine learning applied to sports performance. He has worked closely with USC and UCLA and is presently involved with the Recurse Center in New York researching deep learning and voice recognition.'
}];
/* harmony default export */ __webpack_exports__["default"] = (speakerData);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\SpeakerDetail.js";


const SpeakerDetail = ({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: `${firstName}  ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "data-sessionid": id,
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, !favorite);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\Speakers.js";








const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); //const [speakerList, setSpeakerList] = useState([]);

  const {
    0: speakerList,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_7__.default, []);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_4__.default.filter(({
        sat,
        sun
      }) => {
        return speakingSaturday && sat || speakingSunday && sun;
      });
      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []); // [speakingSunday, speakingSaturday]);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const speakerListFiltered = isLoading ? [] : speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  });

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    dispatch({
      type: favoriteValue === true ? 'favorite' : 'unfavorite',
      sessionId
    }); // setSpeakerList(
    //   speakerList.map((item) => {
    //     if (item.id === sessionId) {
    //       item.favorite = favoriteValue;
    //       return item;
    //     }
    //     return item;
    //   })
    // );
  };

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar  margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(({
            id,
            firstName,
            lastName,
            bio,
            favorite
          }) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
              id: id,
              favorite: favorite,
              onHeartFavoriteHandler: heartFavoriteHandler,
              firstName: firstName,
              lastName: lastName,
              bio: bio
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((item, index) => {
      if (item.id === action.sessionId) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return action.data;
      }

    case 'favorite':
      {
        return updateFavorite(true);
      }

    case 'unfavorite':
      {
        return updateFavorite(false);
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakersReducer);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvaWdub3JlZHxHOlxcV29ya1dvcmtcXHJlYWN0LXR1dG9cXHJlYWN0LWhvb2tzLWFkdmFuY2VkXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiY29uZmlnVmFsdWUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsInNob3dTaWduTWVVcCIsIkFwcCIsIkhlYWRlciIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNZW51IiwiU2lnbk1lVXAiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaW5jbHVkZXMiLCJhbGVydCIsInNwZWFrZXJEYXRhIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNhdCIsInN1biIsImZhdm9yaXRlIiwiYmlvIiwiU3BlYWtlckRldGFpbCIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJTcGVha2VycyIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJ0eXBlIiwiZGF0YSIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNoYW5nZVN1bmRheSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJhdHRyaWJ1dGVzIiwibWFwIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVGYXZvcml0ZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxnQkFBR0MsMERBQUEsRUFBdEI7O0FBRVAsTUFBTUMsVUFBVSxHQUFJQyxRQUFELElBQWM7QUFDL0IsTUFBSUEsUUFBUSxLQUFLLE1BQWpCLEVBQXlCLG9CQUFPLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUN6QixNQUFJQSxRQUFRLEtBQUssVUFBakIsRUFBNkIsb0JBQU8sOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQzdCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUpEOztBQU1BLE1BQU1DLFdBQVcsR0FBRztBQUNsQkMseUJBQXVCLEVBQUUsSUFEUDtBQUVsQkMsY0FBWSxFQUFFO0FBRkksQ0FBcEI7O0FBS0EsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWtCO0FBQzVCLHNCQUNFLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRUMsV0FBL0I7QUFBQSwyQkFDRTtBQUFBLGdCQUFNRixVQUFVLENBQUNDLFFBQUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUUEsK0RBQWVJLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRU8sTUFBTUMs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O0FBQUE7QUFBQTtBQUFBLG1CQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1REQsQ0FySUQ7O0FBdUlBLCtEQUFlUyxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JQSxNQUFNUSxlQUFlLEdBQUcsQ0FBQ3VCLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUN6QyxXQUFTQyxjQUFULENBQXdCUixhQUF4QixFQUF1QztBQUNyQyxXQUFPTSxLQUFLLENBQUNELEdBQU4sQ0FBVSxDQUFDSSxJQUFELEVBQU83RSxLQUFQLEtBQWlCO0FBQ2hDLFVBQUk2RSxJQUFJLENBQUMzQyxFQUFMLEtBQVl5QyxNQUFNLENBQUNMLFNBQXZCLEVBQWtDO0FBQ2hDLCtDQUFZTyxJQUFaO0FBQWtCdEMsa0JBQVEsRUFBRTZCO0FBQTVCO0FBQ0Q7O0FBQ0QsYUFBT1MsSUFBUDtBQUNELEtBTE0sQ0FBUDtBQU1EOztBQUNELFVBQVFGLE1BQU0sQ0FBQ2pCLElBQWY7QUFDRSxTQUFLLGdCQUFMO0FBQXVCO0FBQ3JCLGVBQU9pQixNQUFNLENBQUNoQixJQUFkO0FBQ0Q7O0FBQ0QsU0FBSyxVQUFMO0FBQWlCO0FBQ2YsZUFBT2lCLGNBQWMsQ0FBQyxJQUFELENBQXJCO0FBQ0Q7O0FBQ0QsU0FBSyxZQUFMO0FBQW1CO0FBQ2pCLGVBQU9BLGNBQWMsQ0FBQyxLQUFELENBQXJCO0FBQ0Q7O0FBQ0Q7QUFDRSxhQUFPRixLQUFQO0FBWEo7QUFhRCxDQXRCRDs7QUF1QkEsK0RBQWV2QixlQUFmLEU7Ozs7Ozs7Ozs7QUN2QkEsZSIsImZpbGUiOiJzcmNfQXBwX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4vU3BlYWtlcnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBwYWdlVG9TaG93ID0gKHBhZ2VOYW1lKSA9PiB7XHJcbiAgaWYgKHBhZ2VOYW1lID09PSAnSG9tZScpIHJldHVybiA8SG9tZT48L0hvbWU+O1xyXG4gIGlmIChwYWdlTmFtZSA9PT0gJ1NwZWFrZXJzJykgcmV0dXJuIDxTcGVha2Vycz48L1NwZWFrZXJzPjtcclxuICByZXR1cm4gPGRpdj5Ob3QgRm91bmQhPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlnVmFsdWUgPSB7XHJcbiAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXM6IHRydWUsXHJcbiAgc2hvd1NpZ25NZVVwOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29uZmlnVmFsdWV9PlxyXG4gICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cclxuICAgIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25NZVVwIGZyb20gJy4vU2lnbk1lVXAnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBzaWdudXBDYWxsYmFjayA9IChlbWFpbCkgPT4ge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgc2lnbiB1cCBjYWxsZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uaGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+U2FuIEpvc2UsIENhbGlmb3JuaWE8L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTIgdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgICAgPFNpZ25NZVVwIHNpZ251cENhbGxiYWNrPXtzaWdudXBDYWxsYmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE1lbnUgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1hcmdpbnRvcGJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8aDI+SG9tZTwvaDI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtYXJnaW50b3Bib3R0b20yMFwiPlxyXG4gICAgICAgICAgICAgIENvZGUgQ2FtcCBpcyBhIGNvbW11bml0eSBldmVudCB3aGVyZSBkZXZlbG9wZXJzIGxlYXJuIGZyb20gZmVsbG93XHJcbiAgICAgICAgICAgICAgZGV2ZWxvcGVycy4gV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljcyB0aGF0IGluY2x1ZGVcclxuICAgICAgICAgICAgICBzb2Z0d2FyZSBicmFuZGluZywgbGVnYWwgaXNzdWVzIGFyb3VuZCBzb2Z0d2FyZSBhcyB3ZWxsIGFzIG90aGVyXHJcbiAgICAgICAgICAgICAgdG9waWNzIGRldmVsb3BlcnMgYXJlIGludGVyZXN0ZWQgaW4gaGVhcmluZyBhYm91dC5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfTtcblxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGltZ1xuICAgICAgc3JjPXtcbiAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgPyAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PScgLy8gMXgxZ2lmXG4gICAgICAgICAgOiBpblZpZXdcbiAgICAgICAgICA/IHNlY29uZGFyeUltZ1xuICAgICAgICAgIDogcHJpbWFyeUltZ1xuICAgICAgfVxuICAgICAgYWx0PVwiXCJcbiAgICAgIHJlZj17aW1hZ2VSZWZ9XG4gICAgICB3aWR0aD1cIjIwMFwiXG4gICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gYmctZGFyayBuYXZiYXItZGFya1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcGVha2Vyc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlNwZWFrZXJzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBTaWduTWVVcCA9ICh7IHNpZ251cENhbGxiYWNrIH0pID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoJ0AnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2lnbnVwQ2FsbGJhY2soZW1haWwpO1xuICAgICAgICAgICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICAgICAgICAgIGFsZXJ0KCdzaWdudXAgY29uZmlybWVkJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBVcGRhdGVzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduTWVVcDtcbiIsImNvbnN0IHNwZWFrZXJEYXRhID0gW1xuICB7XG4gICAgaWQ6IDE1MzAsXG4gICAgZmlyc3ROYW1lOiAnVGFtbXknLFxuICAgIGxhc3ROYW1lOiAnQmFrZXInLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IFVTQSBUZWNoLCBDYW50YWxvdXBlIFN5c3RlbXMsIEUtQ29sb3IsIGFuZCBVbnRhbmdsZSBJbmMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1OTk2LFxuICAgIGZpcnN0TmFtZTogJ0NyYWlnJyxcbiAgICBsYXN0TmFtZTogJ0Jlcm50c29uJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQ3JhaWcgaGFzIGEgcGFzc2lvbiBmb3IgY29tbXVuaXR5IGFuZCBoZWxwaW5nIG90aGVyIGRldmVsb3BlcnMgaW1wcm92ZSB0aGVpciBza2lsbHMuIEhlIHdyaXRlcyB0aGUgY29sdW1uIFwiU29mdHdhcmUgR2FyZGVuaW5nXCIgaW4gRG90TmV0IEN1cnJ5IE1hZ2F6aW5lIGFuZCBpcyB0aGUgY28tYXV0aG9yIG9mIFwiQ29udGludW91cyBJbnRlZ3JhdGlvbiBpbiAuTkVUXCIgYXZhaWxhYmxlIGZyb20gTWFubmluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwODAzLFxuICAgIGZpcnN0TmFtZTogJ0V1Z2VuZScsXG4gICAgbGFzdE5hbWU6ICdDaHV2eXJvdicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdFdWdlbmUgQ2h1dnlyb3YgaXMgIGEgU2VuaW9yIENsb3VkIEFyY2hpdGVjdCBhdCBNaWNyb3NvZnQuIEhlIHdvcmtzIGRpcmVjdGx5IHdpdGggYm90aCBzdGFydHVwcyBhbmQgZW50ZXJwcmlzZXMgdG8gZW5hYmxlIHRoZWlyIHNvbHV0aW9ucyBpbiBNaWNyb3NvZnQgY2xvdWQsIGFuZCB0byBtYWtlIEF6dXJlIGJldHRlciBhcyBhIHJlc3VsdCBvZiB0aGlzIHdvcmsgd2l0aCBwYXJ0bmVycy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDExMjQsXG4gICAgZmlyc3ROYW1lOiAnRG91Z2xhcycsXG4gICAgbGFzdE5hbWU6ICdDcm9ja2ZvcmQnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdEb3VnbGFzIENyb2NrZm9yZCBkaXNjb3ZlcmVkIHRoZSBKU09OIERhdGEgSW50ZXJjaGFuZ2UgRm9ybWF0LiBIZSBpcyBhbHNvIHRoZSBhdXRob3Igb2YgX0phdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXy4gSGUgaGFzIGJlZW4gY2FsbGVkIGEgZ3VydSwgYnV0IGhlIGlzIGFjdHVhbGx5IG1vcmUgb2YgYSBtYWhhdG1hLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNDE4MDgsXG4gICAgZmlyc3ROYW1lOiAnUGF1bCcsXG4gICAgbGFzdE5hbWU6ICdFdmVyaXR0JyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnUGF1bCBpcyB0aGUgUHlDaGFybSBhbmQgV2ViU3Rvcm0gRGV2ZWxvcGVyIEFkdm9jYXRlIGF0IEpldEJyYWlucy4gQmVmb3JlIHRoYXQsIFBhdWwgd2FzIGEgcGFydG5lciBhdCBBZ2VuZGFsZXNzIENvbnN1bHRpbmcgYW5kIGNvLWZvdW5kZXIgb2YgWm9wZSBDb3Jwb3JhdGlvbiwgdGFraW5nIHRoZSBmaXJzdCBvcGVuIHNvdXJjZSBhcHBsaWNhdGlvbiBzZXJ2ZXIgdGhyb3VnaCAkMTRNIG9mIGZ1bmRpbmcuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxMjY5LFxuICAgIGZpcnN0TmFtZTogJ0FydW4nLFxuICAgIGxhc3ROYW1lOiAnR3VwdGEnLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdBcnVuIEd1cHRhIGlzIGEgUHJpbmNpcGFsIE9wZW4gU291cmNlIFRlY2hub2xvZ2lzdCBhdCBBbWF6b24gV2ViIFNlcnZpY2VzLiBIZSBoYXMgYnVpbHQgYW5kIGxlZCBkZXZlbG9wZXIgY29tbXVuaXRpZXMgZm9yIDEyKyB5ZWFycyBhdCBTdW4sIE9yYWNsZSwgUmVkIEhhdCBhbmQgQ291Y2hiYXNlLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTcyNSxcbiAgICBmaXJzdE5hbWU6ICdCcmFkJyxcbiAgICBsYXN0TmFtZTogJ0lyYnknLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQnJhZCBpcyBhbiBhY2NvbXBsaXNoZWQgLk5FVCBzb2Z0d2FyZSBhcmNoaXRlY3Qgc3BlY2lhbGl6aW5nIGluIERvbWFpbiBEcml2ZW4gRGVzaWduIGFuZCBFdmVudCBEcml2ZW4gQXJjaGl0ZWN0dXJlcy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDE4ODA1LFxuICAgIGZpcnN0TmFtZTogJ01pY2tleSBXLicsXG4gICAgbGFzdE5hbWU6ICdNYW50bGUnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdNaWNrZXkgaGFzIGJlZW4gZGV2ZWxvcGluZyBzb2Z0d2FyZSBzeXN0ZW1zIGFuZCBwcm9kdWN0cyBmb3Igb3ZlciA0MCB5ZWFycywgYXMgYSBzeXN0ZW1zIHByb2dyYW1tZXIsIFRlY2ggTGVhZCwgTWFuYWdlciwgVlAgRW5naW5lZXJpbmcsIENUTywgQ09PLCBhbmQgbm93IENFTy9DVE8gb2YgaGlzIG93biBjb21wYW55LicsXG4gIH0sXG4gIHtcbiAgICBpZDogODM2NyxcbiAgICBmaXJzdE5hbWU6ICdHYXlsZSBMYWFrbWFubicsXG4gICAgbGFzdE5hbWU6ICdNY0Rvd2VsbCcsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdHYXlsZSBMYWFrbWFubiBNY0Rvd2VsbCBpcyB0aGUgZm91bmRlciBhbmQgQ0VPIG9mIENhcmVlckN1cC5jb20gYW5kIHRoZSBhdXRob3Igb2YgdGhyZWUgYmVzdCBzZWxsaW5nIGJvb2tzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTg3LFxuICAgIGZpcnN0TmFtZTogJ0RhdmUnLFxuICAgIGxhc3ROYW1lOiAnTmllbHNlbicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0FzIEhlYWQgb2YgRWNvc3lzdGVtIFByb2dyYW1zLCBEYXZlIHVzZXMgZW1lcmdpbmcgdGVjaG5vbG9naWVzIGFuZCBvcGVuIHNvdXJjZSBwcm9qZWN0cyBsaWtlIE1pY3Jvc2VydmljZXMsIFNlcnZlcmxlc3MgJiBLdWJlcm5ldGVzIHRvIGJyaW5nIHRoZSBtYWdpYyBvZiBSZWRpcyB0byB0aGUgYnJvYWRlciBjb21tdW5pdHkuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA4MjMsXG4gICAgZmlyc3ROYW1lOiAnS2V2aW4nLFxuICAgIGxhc3ROYW1lOiAnTmlsc29uJyxcbiAgICBzYXQ6IGZhbHNlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICBcIlRlYW0gTGVhZCBvZiB0aGUgQ2hyb21lY2FzdCBUZWNobmljYWwgU29sdXRpb25zIEVuZ2luZWVyIHRlYW0sIGEgSmF2YSBDaGFtcGlvbiBhbmQgdGhyZWUgdGltZSBKYXZhT25lIFJvY2sgU3RhciBQcmVzZW50ZXIuIEtldmluIGhhcyBzcG9rZW4gYXQgY29uZmVyZW5jZXMgc3VjaCBhcyBKYXZhT25lLCBEZXZveHgsIEpBWCwgTydSZWlsbHkgRmx1ZW50LCBTaWxpY29uIFZhbGxleSBDb2RlIENhbXAsIEpBWCBhbmQgSFRNTDVEZXZDb25mLlwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDg1OTAsXG4gICAgZmlyc3ROYW1lOiAnQ2hyaXMnLFxuICAgIGxhc3ROYW1lOiAnUmljaGFyZHNvbicsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdDaHJpcyBSaWNoYXJkc29uIGlzIGEgZGV2ZWxvcGVyIGFuZCBhcmNoaXRlY3QuIEhlIGlzIGEgSmF2YSBDaGFtcGlvbiwgYSBKYXZhT25lIHJvY2sgc3RhciBhbmQgdGhlIGF1dGhvciBvZiBQT0pPcyBpbiBBY3Rpb24sIHdoaWNoIGRlc2NyaWJlcyBob3cgdG8gYnVpbGQgZW50ZXJwcmlzZSBKYXZhIGFwcGxpY2F0aW9ucyB3aXRoIGZyYW1ld29ya3Mgc3VjaCBhcyBTcHJpbmcgYW5kIEhpYmVybmF0ZS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwODA4LFxuICAgIGZpcnN0TmFtZTogJ0FudG9ueScsXG4gICAgbGFzdE5hbWU6ICdSb3NzJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICBiaW86XG4gICAgICAnQW50b255IFJvc3MgaXMgYSBjb25zdWx0YW50IHNwZWNpYWxpemluZyBpbiBkYXRhIHNjaWVuY2UgYW5kIG1hY2hpbmUgbGVhcm5pbmcgYXBwbGllZCB0byBzcG9ydHMgcGVyZm9ybWFuY2UuIEhlIGhhcyB3b3JrZWQgY2xvc2VseSB3aXRoIFVTQyBhbmQgVUNMQSBhbmQgaXMgcHJlc2VudGx5IGludm9sdmVkIHdpdGggdGhlIFJlY3Vyc2UgQ2VudGVyIGluIE5ldyBZb3JrIHJlc2VhcmNoaW5nIGRlZXAgbGVhcm5pbmcgYW5kIHZvaWNlIHJlY29nbml0aW9uLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyRGF0YTtcbiIsImltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4vSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5cbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSAoe1xuICBpZCxcbiAgZmlyc3ROYW1lLFxuICBsYXN0TmFtZSxcbiAgZmF2b3JpdGUsXG4gIGJpbyxcbiAgb25IZWFydEZhdm9yaXRlSGFuZGxlcixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICAke2xhc3ROYW1lfWB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLXNlc3Npb25pZD17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Zhdm9yaXRlID8gJ2hlYXJ0cmVkYnV0dG9uJyA6ICdoZWFydGRhcmtidXR0b24nfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCAhZmF2b3JpdGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL3NyYy9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4uL3NyYy9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHNwZWFrZXJzUmVkdWNlciBmcm9tICcuL3NwZWFrZXJzUmVkdWNlcic7XG5cbmNvbnN0IFNwZWFrZXJzID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIC8vY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKTtcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKTtcbiAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxuICAgICAgICBkYXRhOiBzcGVha2VyTGlzdFNlcnZlckZpbHRlcixcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTsgLy8gW3NwZWFraW5nU3VuZGF5LCBzcGVha2luZ1NhdHVyZGF5XSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/ICdmYXZvcml0ZScgOiAndW5mYXZvcml0ZScsXG4gICAgICBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICAvLyBzZXRTcGVha2VyTGlzdChcbiAgICAvLyAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XG4gICAgLy8gICAgICAgaXRlbS5mYXZvcml0ZSA9IGZhdm9yaXRlVmFsdWU7XG4gICAgLy8gICAgICAgcmV0dXJuIGl0ZW07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGl0ZW07XG4gICAgLy8gICB9KVxuICAgIC8vICk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciAgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSkge1xuICAgIHJldHVybiBzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnNlc3Npb25JZCkge1xuICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gIH1cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0Jzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xuICAgIH1cbiAgICBjYXNlICdmYXZvcml0ZSc6IHtcbiAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZSh0cnVlKTtcbiAgICB9XG4gICAgY2FzZSAndW5mYXZvcml0ZSc6IHtcbiAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZShmYWxzZSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9