import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("It has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("textarea change and submit", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });

    wrapped.update();
  });

  it("has a textarea users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("empties text area in comment box", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
