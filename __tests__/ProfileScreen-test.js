import React from "react";
import App from "../src/App";

import renderer from "react-test-renderer";

jest.useFakeTimers();

test("renders Question Screen correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
