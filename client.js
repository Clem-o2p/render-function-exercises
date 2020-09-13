import { render, mount } from "./index.js";

const renderContext = window.document;

const HelloTitle = render(renderContext, "h1", "Hello");

const Paragraph = render(renderContext, "p", "lorem ipsum dolor sit amet");

const app = render(renderContext, "section", HelloTitle);

/* You can do this one when the first render implementation is OK */
// const app = render(renderContext, "section", [HelloTitle, Paragraph]);

mount(renderContext, "app", app);

