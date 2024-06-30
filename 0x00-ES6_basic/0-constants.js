/**
 * Task 0: Const or let?
 * Modify the function taskFirst to instantiate variables using const
 * Modify the function taskNext to instantiate variables using let
 * 
 * Exported Functions:
 *  - taskFirst: returns a string using const
 *  - taskNext: returns a string using let
 */

export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
