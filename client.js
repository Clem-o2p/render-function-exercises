import { render, mount } from "./index.js";

const renderContext = window.document;

const HelloTitle = render(renderContext, "h1", null, "Hello");

const Paragraph = render(renderContext, "p", null, "lorem ipsum dolor sit amet");


/* You can do this one when the first render implementation is OK */
const app = render(renderContext, "section", null, [HelloTitle, Paragraph]);

mount(renderContext, "app", app);

