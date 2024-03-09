/// What is the difference between the Virtual DOM and the "real" DOM? ///

/** Virtual DOM
 * 1. Can't directly update HTML
 *
 * 2. Acts as a copy of the real DOM, which
 *    can be frequently manipulated and
 *    updated without a page refresh.
 *
 * 3. More of a pattern than a specific technology.
 *
 * 4. Synced with the real DOM with 'react-dom'.
 *
 */

/** real DOM
 * 1. Directly updated and manipulates HTML.
 *
 * 2. Create a DOM/full repaint if it is updated.
 *
 * 3. An object-based representation of an HTML document
 *    + an interface for manipulating that object
 *
 */

// the key is diffing
// What the virtual DOM does is it looks at the difference
// between one state versus next state in the DOM and just
// update the part that been changed rather the entire page

/// Is the Virtual DOM the same as the Shadow DOM? ///
/**
 * No, Shadow DOM is a browser specific technology
 * Virtual DOM is a pattern built in react
 *
 *
 */
