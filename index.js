/* Solution with string*/

// export const render = (renderContext, element, children) => {
//   const domElement = renderContext.createElement(element);

//   if (children) {
//     domElement.insertAdjacentHTML("beforeend", children);
//   }

//   return domElement.outerHTML;
// };

// export const mount = (renderContext, el, component) => {
//   const rootElement = renderContext.getElementById(el);
//   rootElement.outerHTML = component;
// }

/* Solution with array */

export const render = (renderContext, element, attributes, children) => {
  const domElement = renderContext.createElement(element);

  if (attributes) {
    Object.keys(attributes).forEach(attrKey => {
      domElement.setAttribute(attrKey, attributes[attrKey])
    })
  }

  if (children) {
    if (typeof children === "string") {
      domElement.insertAdjacentHTML("beforeend", children);
    } else if (typeof children === "object" && children.length) {
      children.forEach(child => {
        domElement.insertAdjacentHTML("beforeend", child);
      })
    } else {
      console.log("children param must be a String or Array of Strings");
      return;
    }
  }


  return domElement.outerHTML;
};

export const mount = (renderContext, el, component) => {
  const rootElement = renderContext.getElementById(el);
  rootElement.outerHTML = component;
}