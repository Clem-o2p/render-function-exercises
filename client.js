import { render, mount } from "./index.js";

const renderContext = window.document;

const HelloTitle = render(renderContext, "h1", "Hello");

const app = render(renderContext, "section", HelloTitle);


mount(renderContext, "app", app);

