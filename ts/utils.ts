import Type from './type';

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
 * @returns New HTMLElement
 */
export const createElement = (tag: keyof HTMLElementTagNameMap, options: NewElementOptions): HTMLElement => {
  const element = document.createElement(tag);
  const { id, classes, listeners } = options;
  
  if (id) element.id = id;
  if (classes) element.classList.add(...classes);
  if (listeners) listeners.forEach(listener => element.addEventListener(...listener));

  return element;
};

/**
 * Receive an object and add its properties to `globalThis`
 * @param set {object} Object with properties that will be added to `globalThis`
 */
export const makeGlobal = (set: object): void =>
  Object.entries(set).forEach(entry => globalThis[entry[0]] = entry[1]);

/**
 * Decorator function that add the given class to `globalThis`
 * @param type {Type} Class that will be added to `globalThis`
 */
export const Global = <T extends Type>(type: T): T => {
  globalThis[type.name] = type;
  return type;
};