/**
 * Task 2: Arrow functions
 * Rewrite the standard function to use ES6’s arrow syntax
 * 
 * Exported Function:
 *  - getNeighborhoodsList: creates an object with a method to add neighborhoods
 */

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
