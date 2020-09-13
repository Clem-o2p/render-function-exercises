const jsdom = require("jsdom");
import { render } from "./index.js";

/* As we're in a Node context, we have to mock the DOM
   JSDOM exposes the same API as the traditional DOM 
*/
const { JSDOM } = jsdom;
const dom = new JSDOM();
const mockRenderContext = dom.window.document;

/* Tests begin */

const HelloTitle = render(mockRenderContext, "h1", "Hello");

const Paragraph = render(mockRenderContext, "p", "lorem ipsum dolor sit amet");

test("Render an empty <div>", () => {
  expect(render(mockRenderContext, "div")).toStrictEqual("<div></div>");
});

test("Render an h1 tag saying 'Hello'", () => {
  expect(HelloTitle).toStrictEqual("<h1>Hello</h1>");
});

test("Render a div tag containing an h1 saying 'Hello'", () => {
  expect(render(mockRenderContext, "div", HelloTitle)).toStrictEqual("<div><h1>Hello</h1></div>");
});

test("Render a div tag containing an h1 saying 'Hello' and a paragraph of dummy text", () => {
  expect(render(mockRenderContext, "div", [HelloTitle, Paragraph])).toStrictEqual("<div><h1>Hello</h1><p>lorem ipsum dolor sit amet</p></div>");
});