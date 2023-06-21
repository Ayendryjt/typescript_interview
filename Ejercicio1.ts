function countUniqueWays(N: number, X: number[]): number {
    if (N <= 1) {
      return 1; 
    }  
   
    const ways: number[] = new Array(N + 1).fill(0);
    ways[0] = 1;
    ways[1] = 1;
  
    for (let i = 2; i <= N; i++) {
      for (let j = 0; j < X.length; j++) {
        if (i >= X[j]) {
          ways[i] += ways[i - X[j]];
        }
      }
    }
  
    return ways[N];
  }
  
  function printUniqueWays(N: number, X: number[]): void {
    const uniqueWays = countUniqueWays(N, X);
    console.log(`Número de formas únicas de subir ${N} escalones:`);
    console.log(uniqueWays);
  }
  
  // Ejemplo 1: Subir 1 o 2 escalones a la vez
  const N1 = 4;
  printUniqueWays(N1, [1, 2]);
  
  // Ejemplo 2: Subir 1, 3 o 5 escalones a la vez
  const N2 = 6;
  printUniqueWays(N2, [1, 3, 5]);