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

var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\Speakers.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // CODE ONLY LEFT HERE COMMENTED OUT FOR TEACH PURPOSES.
  // BEST PRACTICE WOULD BE TO REMOVE COMMENTED CODE OUT AS IT
  //   WOULD BE IN SOURCE CONTROL AND NOT NECESSARY.
  //const [speakerList, setSpeakerList] = useState([]);

  function speakersReducer(state, action) {
    switch (action.type) {
      case 'setSpeakerList':
        {
          return action.data;
        }

      default:
        return state;
    }
  }

  const {
    0: speakerList,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(speakersReducer, []);
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
      }); //setSpeakerList(speakerListServerFilter);

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
    alert('PLURALSIGHT COURSE NOTE: setSpeakerList IS BROKEN ON PURPOSE.  THIS IS FIXED IN NEXT CLIP'); // PLURALSIGHT COURSE NOTE: setSpeakerList IS BROKEN ON PURPOSE.  THIS IS FIXED IN NEXT CLIP

    setSpeakerList(speakerList.map(item => {
      if (item.id === sessionId) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    }));
  };

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
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
                lineNumber: 112,
                columnNumber: 19
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
                lineNumber: 123,
                columnNumber: 19
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
              lineNumber: 140,
              columnNumber: 19
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2lnbm9yZWR8RzpcXFdvcmtXb3JrXFxyZWFjdC10dXRvXFxyZWFjdC1ob29rcy1hZHZhbmNlZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbmZpZ0NvbnRleHQiLCJSZWFjdCIsInBhZ2VUb1Nob3ciLCJwYWdlTmFtZSIsImNvbmZpZ1ZhbHVlIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJzaG93U2lnbk1lVXAiLCJBcHAiLCJIZWFkZXIiLCJzaWdudXBDYWxsYmFjayIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsImluZGV4IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTWVudSIsIlNpZ25NZVVwIiwic2V0RW1haWwiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiYWxlcnQiLCJzcGVha2VyRGF0YSIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJzYXQiLCJzdW4iLCJmYXZvcml0ZSIsImJpbyIsIlNwZWFrZXJEZXRhaWwiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ0aGVuIiwic3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIiLCJTcGVha2VyRGF0YSIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImhhbmRsZUNoYW5nZVN1bmRheSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJhdHRyaWJ1dGVzIiwic2V0U3BlYWtlckxpc3QiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsZ0JBQUdDLDBEQUFBLEVBQXRCOztBQUVQLE1BQU1DLFVBQVUsR0FBSUMsUUFBRCxJQUFjO0FBQy9CLE1BQUlBLFFBQVEsS0FBSyxNQUFqQixFQUF5QixvQkFBTyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDekIsTUFBSUEsUUFBUSxLQUFLLFVBQWpCLEVBQTZCLG9CQUFPLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUM3QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FKRDs7QUFNQSxNQUFNQyxXQUFXLEdBQUc7QUFDbEJDLHlCQUF1QixFQUFFLElBRFA7QUFFbEJDLGNBQVksRUFBRTtBQUZJLENBQXBCOztBQUtBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUVKO0FBQUYsQ0FBRCxLQUFrQjtBQUM1QixzQkFDRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVDLFdBQS9CO0FBQUEsMkJBQ0U7QUFBQSxnQkFBTUYsVUFBVSxDQUFDQyxRQUFEO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFBLCtEQUFlSSxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVPLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQzFCLFFBQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUFXO0FBQ2hDLFdBQU9DLE9BQU8sQ0FBQ0MsR0FB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TCxFQUZOO0FBR0Usc0JBQVEsRUFBRUssUUFIWjtBQUlFLG9DQUFzQixFQUFFOEIsb0JBSjFCO0FBS0UsdUJBQVMsRUFBRWxDLFNBTGI7QUFNRSxzQkFBUSxFQUFFQyxRQU5aO0FBT0UsaUJBQUcsRUFBRUk7QUFQUCxlQUNPTixFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFXRCxXQWJGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXVERCxDQXBKRDs7QUFzSkEsK0RBQWVTLFFBQWYsRTs7Ozs7Ozs7OztBQzlKQSxlIiwiZmlsZSI6InNyY19BcHBfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUuanMnO1xyXG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IHBhZ2VUb1Nob3cgPSAocGFnZU5hbWUpID0+IHtcclxuICBpZiAocGFnZU5hbWUgPT09ICdIb21lJykgcmV0dXJuIDxIb21lPjwvSG9tZT47XHJcbiAgaWYgKHBhZ2VOYW1lID09PSAnU3BlYWtlcnMnKSByZXR1cm4gPFNwZWFrZXJzPjwvU3BlYWtlcnM+O1xyXG4gIHJldHVybiA8ZGl2Pk5vdCBGb3VuZCE8L2Rpdj47XHJcbn07XHJcblxyXG5jb25zdCBjb25maWdWYWx1ZSA9IHtcclxuICBzaG93U3BlYWtlclNwZWFraW5nRGF5czogdHJ1ZSxcclxuICBzaG93U2lnbk1lVXA6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoeyBwYWdlTmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XHJcbiAgICAgIDxkaXY+e3BhZ2VUb1Nob3cocGFnZU5hbWUpfTwvZGl2PlxyXG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbk1lVXAgZnJvbSAnLi9TaWduTWVVcCc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBzaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+T2N0b2JlciAxOS0yMCAyMDE5PC9oNj5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj5TYW4gSm9zZSwgQ2FsaWZvcm5pYTwvaDY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tOCB0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9TVkNDbG9nby5wbmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMj5TaWxpY29uIFZhbGxleSBDb2RlIENhbXA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICA8U2lnbk1lVXAgc2lnbnVwQ2FsbGJhY2s9e3NpZ251cENhbGxiYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XHJcblxyXG5mdW5jdGlvbiBpbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxoMj5Ib21lPC9oMj5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTIwXCI+XHJcbiAgICAgICAgICAgICAgQ29kZSBDYW1wIGlzIGEgY29tbXVuaXR5IGV2ZW50IHdoZXJlIGRldmVsb3BlcnMgbGVhcm4gZnJvbSBmZWxsb3dcclxuICAgICAgICAgICAgICBkZXZlbG9wZXJzLiBXZSBhbHNvIGhhdmUgZGV2ZWxvcGVyIHJlbGF0ZWQgdG9waWNzIHRoYXQgaW5jbHVkZVxyXG4gICAgICAgICAgICAgIHNvZnR3YXJlIGJyYW5kaW5nLCBsZWdhbCBpc3N1ZXMgYXJvdW5kIHNvZnR3YXJlIGFzIHdlbGwgYXMgb3RoZXJcclxuICAgICAgICAgICAgICB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBpbiBoZWFyaW5nIGFib3V0LlxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEltYWdlVG9nZ2xlT25TY3JvbGwgPSAoeyBwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWcgfSkgPT4ge1xuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9O1xuXG4gIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9e1xuICAgICAgICBpc0xvYWRpbmdcbiAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcbiAgICAgICAgICA6IGluVmlld1xuICAgICAgICAgID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXG4gICAgICB9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U3BlYWtlcnM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IFNpZ25NZVVwID0gKHsgc2lnbnVwQ2FsbGJhY2sgfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQuc2hvd1NpZ25NZVVwID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcygnQCcpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XG4gICAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ3NpZ251cCBjb25maXJtZWQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IFVwZGF0ZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwO1xuIiwiY29uc3Qgc3BlYWtlckRhdGEgPSBbXG4gIHtcbiAgICBpZDogMTUzMCxcbiAgICBmaXJzdE5hbWU6ICdUYW1teScsXG4gICAgbGFzdE5hbWU6ICdCYWtlcicsXG4gICAgc2F0OiBmYWxzZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ1RhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgVVNBIFRlY2gsIENhbnRhbG91cGUgU3lzdGVtcywgRS1Db2xvciwgYW5kIFVudGFuZ2xlIEluYy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDU5OTYsXG4gICAgZmlyc3ROYW1lOiAnQ3JhaWcnLFxuICAgIGxhc3ROYW1lOiAnQmVybnRzb24nLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdDcmFpZyBoYXMgYSBwYXNzaW9uIGZvciBjb21tdW5pdHkgYW5kIGhlbHBpbmcgb3RoZXIgZGV2ZWxvcGVycyBpbXByb3ZlIHRoZWlyIHNraWxscy4gSGUgd3JpdGVzIHRoZSBjb2x1bW4gXCJTb2Z0d2FyZSBHYXJkZW5pbmdcIiBpbiBEb3ROZXQgQ3VycnkgTWFnYXppbmUgYW5kIGlzIHRoZSBjby1hdXRob3Igb2YgXCJDb250aW51b3VzIEludGVncmF0aW9uIGluIC5ORVRcIiBhdmFpbGFibGUgZnJvbSBNYW5uaW5nLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTA4MDMsXG4gICAgZmlyc3ROYW1lOiAnRXVnZW5lJyxcbiAgICBsYXN0TmFtZTogJ0NodXZ5cm92JyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0V1Z2VuZSBDaHV2eXJvdiBpcyAgYSBTZW5pb3IgQ2xvdWQgQXJjaGl0ZWN0IGF0IE1pY3Jvc29mdC4gSGUgd29ya3MgZGlyZWN0bHkgd2l0aCBib3RoIHN0YXJ0dXBzIGFuZCBlbnRlcnByaXNlcyB0byBlbmFibGUgdGhlaXIgc29sdXRpb25zIGluIE1pY3Jvc29mdCBjbG91ZCwgYW5kIHRvIG1ha2UgQXp1cmUgYmV0dGVyIGFzIGEgcmVzdWx0IG9mIHRoaXMgd29yayB3aXRoIHBhcnRuZXJzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEyNCxcbiAgICBmaXJzdE5hbWU6ICdEb3VnbGFzJyxcbiAgICBsYXN0TmFtZTogJ0Nyb2NrZm9yZCcsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ0RvdWdsYXMgQ3JvY2tmb3JkIGRpc2NvdmVyZWQgdGhlIEpTT04gRGF0YSBJbnRlcmNoYW5nZSBGb3JtYXQuIEhlIGlzIGFsc28gdGhlIGF1dGhvciBvZiBfSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNfLiBIZSBoYXMgYmVlbiBjYWxsZWQgYSBndXJ1LCBidXQgaGUgaXMgYWN0dWFsbHkgbW9yZSBvZiBhIG1haGF0bWEuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0MTgwOCxcbiAgICBmaXJzdE5hbWU6ICdQYXVsJyxcbiAgICBsYXN0TmFtZTogJ0V2ZXJpdHQnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdQYXVsIGlzIHRoZSBQeUNoYXJtIGFuZCBXZWJTdG9ybSBEZXZlbG9wZXIgQWR2b2NhdGUgYXQgSmV0QnJhaW5zLiBCZWZvcmUgdGhhdCwgUGF1bCB3YXMgYSBwYXJ0bmVyIGF0IEFnZW5kYWxlc3MgQ29uc3VsdGluZyBhbmQgY28tZm91bmRlciBvZiBab3BlIENvcnBvcmF0aW9uLCB0YWtpbmcgdGhlIGZpcnN0IG9wZW4gc291cmNlIGFwcGxpY2F0aW9uIHNlcnZlciB0aHJvdWdoICQxNE0gb2YgZnVuZGluZy4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDEyNjksXG4gICAgZmlyc3ROYW1lOiAnQXJ1bicsXG4gICAgbGFzdE5hbWU6ICdHdXB0YScsXG4gICAgc2F0OiBmYWxzZSxcbiAgICBzdW46IHRydWUsXG4gICAgZmF2b3JpdGU6IHRydWUsXG4gICAgYmlvOlxuICAgICAgJ0FydW4gR3VwdGEgaXMgYSBQcmluY2lwYWwgT3BlbiBTb3VyY2UgVGVjaG5vbG9naXN0IGF0IEFtYXpvbiBXZWIgU2VydmljZXMuIEhlIGhhcyBidWlsdCBhbmQgbGVkIGRldmVsb3BlciBjb21tdW5pdGllcyBmb3IgMTIrIHllYXJzIGF0IFN1biwgT3JhY2xlLCBSZWQgSGF0IGFuZCBDb3VjaGJhc2UuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxNzI1LFxuICAgIGZpcnN0TmFtZTogJ0JyYWQnLFxuICAgIGxhc3ROYW1lOiAnSXJieScsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogZmFsc2UsXG4gICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgIGJpbzpcbiAgICAgICdCcmFkIGlzIGFuIGFjY29tcGxpc2hlZCAuTkVUIHNvZnR3YXJlIGFyY2hpdGVjdCBzcGVjaWFsaXppbmcgaW4gRG9tYWluIERyaXZlbiBEZXNpZ24gYW5kIEV2ZW50IERyaXZlbiBBcmNoaXRlY3R1cmVzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTg4MDUsXG4gICAgZmlyc3ROYW1lOiAnTWlja2V5IFcuJyxcbiAgICBsYXN0TmFtZTogJ01hbnRsZScsXG4gICAgc2F0OiB0cnVlLFxuICAgIHN1bjogdHJ1ZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ01pY2tleSBoYXMgYmVlbiBkZXZlbG9waW5nIHNvZnR3YXJlIHN5c3RlbXMgYW5kIHByb2R1Y3RzIGZvciBvdmVyIDQwIHllYXJzLCBhcyBhIHN5c3RlbXMgcHJvZ3JhbW1lciwgVGVjaCBMZWFkLCBNYW5hZ2VyLCBWUCBFbmdpbmVlcmluZywgQ1RPLCBDT08sIGFuZCBub3cgQ0VPL0NUTyBvZiBoaXMgb3duIGNvbXBhbnkuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA4MzY3LFxuICAgIGZpcnN0TmFtZTogJ0dheWxlIExhYWttYW5uJyxcbiAgICBsYXN0TmFtZTogJ01jRG93ZWxsJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0dheWxlIExhYWttYW5uIE1jRG93ZWxsIGlzIHRoZSBmb3VuZGVyIGFuZCBDRU8gb2YgQ2FyZWVyQ3VwLmNvbSBhbmQgdGhlIGF1dGhvciBvZiB0aHJlZSBiZXN0IHNlbGxpbmcgYm9va3MuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxODcsXG4gICAgZmlyc3ROYW1lOiAnRGF2ZScsXG4gICAgbGFzdE5hbWU6ICdOaWVsc2VuJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICBiaW86XG4gICAgICAnQXMgSGVhZCBvZiBFY29zeXN0ZW0gUHJvZ3JhbXMsIERhdmUgdXNlcyBlbWVyZ2luZyB0ZWNobm9sb2dpZXMgYW5kIG9wZW4gc291cmNlIHByb2plY3RzIGxpa2UgTWljcm9zZXJ2aWNlcywgU2VydmVybGVzcyAmIEt1YmVybmV0ZXMgdG8gYnJpbmcgdGhlIG1hZ2ljIG9mIFJlZGlzIHRvIHRoZSBicm9hZGVyIGNvbW11bml0eS4nLFxuICB9LFxuICB7XG4gICAgaWQ6IDgyMyxcbiAgICBmaXJzdE5hbWU6ICdLZXZpbicsXG4gICAgbGFzdE5hbWU6ICdOaWxzb24nLFxuICAgIHNhdDogZmFsc2UsXG4gICAgc3VuOiB0cnVlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgIFwiVGVhbSBMZWFkIG9mIHRoZSBDaHJvbWVjYXN0IFRlY2huaWNhbCBTb2x1dGlvbnMgRW5naW5lZXIgdGVhbSwgYSBKYXZhIENoYW1waW9uIGFuZCB0aHJlZSB0aW1lIEphdmFPbmUgUm9jayBTdGFyIFByZXNlbnRlci4gS2V2aW4gaGFzIHNwb2tlbiBhdCBjb25mZXJlbmNlcyBzdWNoIGFzIEphdmFPbmUsIERldm94eCwgSkFYLCBPJ1JlaWxseSBGbHVlbnQsIFNpbGljb24gVmFsbGV5IENvZGUgQ2FtcCwgSkFYIGFuZCBIVE1MNURldkNvbmYuXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogODU5MCxcbiAgICBmaXJzdE5hbWU6ICdDaHJpcycsXG4gICAgbGFzdE5hbWU6ICdSaWNoYXJkc29uJyxcbiAgICBzYXQ6IHRydWUsXG4gICAgc3VuOiBmYWxzZSxcbiAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgYmlvOlxuICAgICAgJ0NocmlzIFJpY2hhcmRzb24gaXMgYSBkZXZlbG9wZXIgYW5kIGFyY2hpdGVjdC4gSGUgaXMgYSBKYXZhIENoYW1waW9uLCBhIEphdmFPbmUgcm9jayBzdGFyIGFuZCB0aGUgYXV0aG9yIG9mIFBPSk9zIGluIEFjdGlvbiwgd2hpY2ggZGVzY3JpYmVzIGhvdyB0byBidWlsZCBlbnRlcnByaXNlIEphdmEgYXBwbGljYXRpb25zIHdpdGggZnJhbWV3b3JrcyBzdWNoIGFzIFNwcmluZyBhbmQgSGliZXJuYXRlLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMTA4MDgsXG4gICAgZmlyc3ROYW1lOiAnQW50b255JyxcbiAgICBsYXN0TmFtZTogJ1Jvc3MnLFxuICAgIHNhdDogdHJ1ZSxcbiAgICBzdW46IGZhbHNlLFxuICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgIGJpbzpcbiAgICAgICdBbnRvbnkgUm9zcyBpcyBhIGNvbnN1bHRhbnQgc3BlY2lhbGl6aW5nIGluIGRhdGEgc2NpZW5jZSBhbmQgbWFjaGluZSBsZWFybmluZyBhcHBsaWVkIHRvIHNwb3J0cyBwZXJmb3JtYW5jZS4gSGUgaGFzIHdvcmtlZCBjbG9zZWx5IHdpdGggVVNDIGFuZCBVQ0xBIGFuZCBpcyBwcmVzZW50bHkgaW52b2x2ZWQgd2l0aCB0aGUgUmVjdXJzZSBDZW50ZXIgaW4gTmV3IFlvcmsgcmVzZWFyY2hpbmcgZGVlcCBsZWFybmluZyBhbmQgdm9pY2UgcmVjb2duaXRpb24uJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJEYXRhO1xuIiwiaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9ICh7XG4gIGlkLFxuICBmaXJzdE5hbWUsXG4gIGxhc3ROYW1lLFxuICBmYXZvcml0ZSxcbiAgYmlvLFxuICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRhdGEtc2Vzc2lvbmlkPXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsICFmYXZvcml0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vc3JjL0hlYWRlcic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9zcmMvTWVudSc7XHJcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsJztcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgLy8gQ09ERSBPTkxZIExFRlQgSEVSRSBDT01NRU5URUQgT1VUIEZPUiBURUFDSCBQVVJQT1NFUy5cclxuICAvLyBCRVNUIFBSQUNUSUNFIFdPVUxEIEJFIFRPIFJFTU9WRSBDT01NRU5URUQgQ09ERSBPVVQgQVMgSVRcclxuICAvLyAgIFdPVUxEIEJFIElOIFNPVVJDRSBDT05UUk9MIEFORCBOT1QgTkVDRVNTQVJZLlxyXG5cclxuICAvL2NvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBmdW5jdGlvbiBzcGVha2Vyc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKTtcclxuXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9zZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxyXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBbc3BlYWtpbmdTdW5kYXksIHNwZWFraW5nU2F0dXJkYXldKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXHJcbiAgICA/IFtdXHJcbiAgICA6IHNwZWFrZXJMaXN0XHJcbiAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICh7IHNhdCwgc3VuIH0pID0+XHJcbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xyXG5cclxuICAgIGFsZXJ0KFxyXG4gICAgICAnUExVUkFMU0lHSFQgQ09VUlNFIE5PVEU6IHNldFNwZWFrZXJMaXN0IElTIEJST0tFTiBPTiBQVVJQT1NFLiAgVEhJUyBJUyBGSVhFRCBJTiBORVhUIENMSVAnLFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBQTFVSQUxTSUdIVCBDT1VSU0UgTk9URTogc2V0U3BlYWtlckxpc3QgSVMgQlJPS0VOIE9OIFBVUlBPU0UuICBUSElTIElTIEZJWEVEIElOIE5FWFQgQ0xJUFxyXG4gICAgc2V0U3BlYWtlckxpc3QoXHJcbiAgICAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmlkID09PSBzZXNzaW9uSWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPE1lbnUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyICBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxyXG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cclxuICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxyXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==