import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-localstorage-mock";
import "jest-canvas-mock";

configure({ adapter: new Adapter() });

console.error = error => {
  throw new Error(error);
};

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
