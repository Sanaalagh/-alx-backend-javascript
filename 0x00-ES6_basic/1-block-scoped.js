/**
 * Task 1: Block Scope
 * Modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
 * 
 * Exported Function:
 *  - taskBlock: returns an array with the values of the variables
 */

export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
