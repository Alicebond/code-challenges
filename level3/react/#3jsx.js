// What is JSX?

/* 
- It's short for JavaScript XML
- Write JavaScript with an HTML-like template syntax
  (not HTML, not a string)
- Produces elements that represent objects

*/

// What is the difference between an element and a component

// an element is a JavaScript object written in jsx
const element = <div>Hello</div>;
// a component is a function returns an element
const component = () => <div>Hellooooo</div>;

// Can you write React without JSX?
// Yes
const componentX = () => React.createElement("div", null, "hello");
