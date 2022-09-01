/* EJERCICIO FIZZ BUZZ */

function FizzBuzz(arr) {
  const convert = arr.toString().split(',');
  const fizz = [];
  const buzz = [];
  const fizzBuzz = [];
  convert.filter((r) => {
    if (r % 3 === 0 || !r.search('3')) fizz.push(r);
    if (r % 5 === 0 || !r.search('5')) buzz.push(r);
    if (r % 5 === 0 && r % 3 === 0) return fizzBuzz.push(r);
  });
}
FizzBuzz([15, 3, 5, 3, 3, 7, 9, 5, 3, 5, 7, 435, 63, 5, 6, 3, 547, 3, 54, 87]);

/* PREGUNTAS Y RESPUESTAS */

/* 1) ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor
y porque?
2)  ¿Implementaría un cache del lado del cliente? ¿Porque?
*/

// RESPUESTA:
/* 1)
Lo ideal es meterlo en una CDN, como S3 de AWS.
En término mas técnicos, tambien podes armar un endpoint que con multer (mws) lo procesas.
*/

/* 2)
  /* SI, Todo cache es para ahorrar tiempo/ancho de banda/capacidad computacional.
*/
