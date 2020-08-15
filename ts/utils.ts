interface NewElementOptions {
  /**
   * ID of the element
   */
  id?: string;
  /**
   * Array with CSS classes
   */
  classes?: string[];
  /**
   * It is possible to add listeners to the same event type multiple times
  */
  listeners?: [keyof HTMLElementEventMap, EventListenerOrEventListenerObject][];
}

/**
 * Create a new element with custom options and return it
 * @param tag {keyof HTMLElementTagNameMap} Element tag
 * @param options {NewElementOptions} Options for the new element, such as id, classes and event listeners
 * @returns Returns a new HTMLElement
 */
export const createElement = (tag: keyof HTMLElementTagNameMap, options: NewElementOptions) => {
  const element = document.createElement(tag);
  const { id, classes, listeners } = options;
  
  if (id) element.id = id;
  
  for (const cls of classes) element.classList.add(cls);
  for (const listener of listeners) element.addEventListener(...listener);

  return element;
}