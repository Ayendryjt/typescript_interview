function shortestDist(s: string, c: string): number[] {
    const distances: number[] = [];
    let prevIndex = -1;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === c) {
        prevIndex = i;
      }
  
      distances.push(i - prevIndex);
    }
  
    prevIndex = -1;
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === c) {
        prevIndex = i;
      }
  
      distances[i] = Math.min(distances[i], prevIndex - i);
    }
  
    return distances;
  }
  
  function printDistances(distances: number[]): void {
    console.log(distances.join(' '));
  }
  
  const s = 'helloworld';
  const c = 'l';
  
  const distances = shortestDist(s, c);
  printDistances(distances);