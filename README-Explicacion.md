<p>
Facebook preguntó recientemente el problema: (Slider Window)

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo

Input: [2, 1, 5, 2, 3, 2], S=7

Output: 2

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2].

Input: [2, 1, 5, 2, 8], S=7

Output: 1  
 
Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8].
 
Nota: No puedes usar ciclos anidados para resolver el problema.
<h3>
La función smallestSubarrayLength recibe una matriz de números arr y un número S. Utiliza el enfoque de la ventana deslizante para encontrar el subarreglo contiguo más pequeño cuya suma es mayor o igual que S.

El algoritmo mantiene un puntero windowStart que marca el inicio del subarreglo y otro puntero windowEnd que se desplaza hacia la derecha para expandir la ventana. En cada iteración, se suma el elemento en windowEnd al windowSum. Si windowSum supera o es igual a S, se actualiza la longitud mínima (minLength) si corresponde y se mueve el windowStart hacia la derecha para reducir la ventana y buscar un subarreglo más pequeño. Este proceso continúa hasta que windowSum sea menor que S nuevamente.

Finalmente, se devuelve la longitud mínima del subarreglo encontrado. Si no se encuentra ningún subarreglo cuya suma sea mayor o igual a S, se devuelve 0.

Puedes probar el programa con diferentes matrices y valores de S para encontrar el subarreglo más pequeño según los requisitos.
</h3>
</p>

<h1>Ejercicio 2</h1>
<p>La función shortestDist recibe una cadena s y un carácter c. Crea un array distances para almacenar las distancias entre los caracteres y el carácter c. Luego, realiza dos pasadas por la cadena s. En la primera pasada, encuentra las distancias hacia la derecha desde el carácter c. En la segunda pasada, encuentra las distancias hacia la izquierda desde el carácter c y actualiza las distancias en caso de que sean menores.

La función printDistances imprime las distancias en la consola.

Puedes probar el programa con diferentes valores de s y c para obtener las distancias deseadas. En el ejemplo proporcionado, la cadena es 'helloworld' y el carácter es 'l', y el programa imprimirá [2, 1, 0, 0, 1, 2, 2, 1, 0, 1].</p>