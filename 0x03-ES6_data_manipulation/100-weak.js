/**
 * @description Exported instance of WeakMap to track API endpoint usage.
 */
export const weakMap = new WeakMap();

/**
 * @description Function to track the number of times an endpoint is queried.
 * Throws an error if the number of queries for an endpoint is 5 or more.
 * 
 * @param {Object} endpoint - The endpoint to be queried.
 * @param {string} endpoint.protocol - The protocol of the endpoint (e.g., 'http').
 * @param {string} endpoint.name - The name of the endpoint (e.g., 'getUsers').
 * @throws {Error} If the number of queries for the endpoint is 5 or more.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  
  let queryCount = weakMap.get(endpoint);
  queryCount += 1;
  
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount);
}

