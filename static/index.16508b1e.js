import { j as jsxRuntime, u as useToggle, r as react, a as useInputState, c as clsx, b as reactDom } from "./vendor.9aeb4bc3.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var styles = "";
const header = "_header_1dwaf_1";
var classes$4 = {
  header
};
const searchBox = "_search-box_60d15_1";
const engineToggle = "_engine-toggle_60d15_39";
const inputForm = "_input-form_60d15_73";
const submit = "_submit_60d15_105";
const disable = "_disable_60d15_141";
var classes$3 = {
  searchBox,
  engineToggle,
  inputForm,
  submit,
  disable
};
var googleIcon = "./static/google.40a770b1.svg";
var duckIcon = "./static/duck.6bebc188.svg";
var searchIcon = "./static/search.da724b64.svg";
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const searchEngines = ["Google", "DuckDuckGo"];
const Search = () => {
  const [searchEngine, searchEngineToggle] = useToggle("Google", searchEngines);
  const [disableSubmit, setDisableSubmit] = react.exports.useState(false);
  const [inputValue, setInputValue] = useInputState("");
  const handleInputClick = (e) => {
    e.target.select();
  };
  const handleSubmit = (e) => {
    if (disableSubmit)
      e.preventDefault();
  };
  react.exports.useEffect(() => {
    if (inputValue !== "" && disableSubmit)
      setDisableSubmit(false);
    else if (inputValue === "" && !disableSubmit)
      setDisableSubmit(true);
  }, [inputValue]);
  return /* @__PURE__ */ jsxs("form", {
    className: classes$3.searchBox,
    action: searchEngine === "Google" ? "https://google.com/search" : "https://duckduckgo.com/",
    spellCheck: false,
    method: "get",
    onSubmit: handleSubmit,
    children: [/* @__PURE__ */ jsx("img", {
      className: classes$3.engineToggle,
      src: searchEngine === "Google" ? googleIcon : duckIcon,
      alt: "",
      onClick: () => searchEngineToggle()
    }), /* @__PURE__ */ jsx("input", {
      className: classes$3.inputForm,
      name: "q",
      type: "text",
      value: inputValue,
      placeholder: `Search with ${searchEngine}`,
      onClick: handleInputClick,
      onChange: setInputValue
    }), /* @__PURE__ */ jsx("button", {
      className: clsx(classes$3.submit, disableSubmit && classes$3.disable),
      children: /* @__PURE__ */ jsx("img", {
        src: searchIcon,
        alt: ""
      })
    })]
  });
};
const clock = "_clock_1e3qj_1";
var classes$2 = {
  clock
};
const ClockItem = react.exports.memo(({
  time
}) => {
  const displayTime = time.toString().padStart(2, "0");
  return /* @__PURE__ */ jsx("p", {
    children: displayTime
  });
});
const DigitalClock = () => {
  const interval = react.exports.useRef();
  const date = react.exports.useRef(new Date());
  const [hours, setHours] = react.exports.useState(date.current.getHours());
  const [minutes, setMinutes] = react.exports.useState(date.current.getMinutes());
  const [seconds, setSeconds] = react.exports.useState(date.current.getSeconds());
  react.exports.useEffect(() => {
    interval.current = setInterval(() => {
      const date2 = new Date();
      const [currentHours, currentMinutes, currentSeconds] = [date2.getHours(), date2.getMinutes(), date2.getSeconds()];
      if (hours != currentHours)
        setHours(currentHours);
      if (minutes != currentMinutes)
        setMinutes(currentMinutes);
      if (seconds != currentSeconds)
        setSeconds(currentSeconds);
    }, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: classes$2.clock,
    children: [/* @__PURE__ */ jsx(ClockItem, {
      time: hours
    }), /* @__PURE__ */ jsx(ClockItem, {
      time: minutes
    }), /* @__PURE__ */ jsx(ClockItem, {
      time: seconds
    })]
  });
};
const Header = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: classes$4.header,
    children: [/* @__PURE__ */ jsx(DigitalClock, {}), /* @__PURE__ */ jsx(Search, {})]
  });
};
const category = "_category_1w7km_1";
var classes$1 = {
  category
};
const Category = ({
  bookmark: bookmark2,
  icon
}) => {
  console.log(bookmark2);
  return /* @__PURE__ */ jsx("div", {
    className: classes$1.category,
    children: icon
  });
};
const bookmark = "_bookmark_150s9_1";
var classes = {
  bookmark
};
const code = [
  {
    name: "Github",
    link: "https://github.com/"
  },
  {
    name: "Netlify",
    link: "https://app.netlify.com/"
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/"
  },
  {
    name: "GitHub - 3r3bu5x9/Prismatic-Night",
    link: "https://github.com/3r3bu5x9/Prismatic-Night"
  },
  {
    name: "Mantine",
    link: "https://mantine.dev/getting-started/"
  }
];
const course = [
  {
    name: "L\u1EDBp 9A4",
    link: "https://meet.google.com/yyk-ifxa-ynj?lfhs=2"
  },
  {
    name: "H\u1ECDc th\xEAm V\u0103n",
    link: "https://meet.google.com/yqr-mrwm-aqb"
  },
  {
    name: "H\u1ECDc th\xEAm anh",
    link: "https://meet.google.com/qqb-mvbz-yot"
  },
  {
    name: "B\u1ED3i D\u01B0\u1EE1ng Tin",
    link: "https://meet.google.com/igu-rdic-dtg?pli=1"
  },
  {
    name: "Figma",
    link: "https://www.youtube.com/watch?v=D56hs0Twfco"
  }
];
const socialMedia = [
  {
    name: "Youtube",
    link: "https://www.youtube.com/"
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/"
  },
  {
    name: "Messenger",
    link: "https://www.messenger.com/"
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/u/0/#inbox"
  },
  {
    name: "Otaku list",
    link: "https://otaku-list.netlify.app/"
  }
];
const utils = [
  {
    name: "Drive",
    link: "https://drive.google.com/drive/my-drive"
  }
];
var data = {
  code,
  course,
  socialMedia,
  utils
};
const Bookmarks = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: classes.bookmark,
    children: [/* @__PURE__ */ jsx(Category, {
      bookmark: data.code,
      icon: "Code"
    }), /* @__PURE__ */ jsx(Category, {
      bookmark: data.course,
      icon: "Course"
    }), /* @__PURE__ */ jsx(Category, {
      bookmark: data.socialMedia,
      icon: "Social Media"
    }), /* @__PURE__ */ jsx(Category, {
      bookmark: data.utils,
      icon: "Utils"
    })]
  });
};
const App = () => {
  return /* @__PURE__ */ jsxs(react.exports.Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Bookmarks, {})]
  });
};
reactDom.exports.render(/* @__PURE__ */ jsx(App, {}), document.getElementById("app-root"));
