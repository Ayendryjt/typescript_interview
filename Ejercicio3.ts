function smallestSubarrayLength(arr: number[], S: number): number {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
  
      while (windowSum >= S) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  const arr1 = [2, 1, 5, 2, 3, 2];
  const S1 = 7;
  console.log(smallestSubarrayLength(arr1, S1)); // Output: 2
  
  const arr2 = [2, 1, 5, 2, 8];
  const S2 = 7;
  console.log(smallestSubarrayLength(arr2, S2)); // Output: 1