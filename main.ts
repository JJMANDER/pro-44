/**
 * Declaración de variables globales
 */
// --- 3. BOTÓN A: APUESTA A QUE EL SIGUIENTE ES MENOR ---
input.onButtonPressed(Button.A, function () {
    // Guardamos el número actual en pantalla como el 'anterior' [00:04:58]
    numeroAnterior = numeroSorteado
    // Generamos un nuevo número para comparar
    nuevoSorteo()
    // Condición: Si el nuevo número sorteado es MENOR que el anterior [00:06:22]
    if (numeroSorteado < numeroAnterior) {
        // Carita feliz por acertar [00:06:54]
        basic.showIcon(IconNames.Happy)
        // Suma un punto [00:07:08]
        puntos += 1
        // Espera 1 segundo [00:07:44]
        basic.pause(1000)
        // Prepara el siguiente número
        nuevoSorteo()
    }
})
// --- 5. BOTÓN A + B: VER PUNTUACIÓN ACTUAL ---
input.onButtonPressed(Button.AB, function () {
    // Al presionar ambos botones, se desplaza el puntaje total [00:08:47]
    basic.showNumber(puntos)
})
// --- 4. BOTÓN B: APUESTA A QUE EL SIGUIENTE ES MAYOR ---
input.onButtonPressed(Button.B, function () {
    // Guardamos el número actual en pantalla como el 'anterior'
    numeroAnterior = numeroSorteado
    // Generamos un nuevo número para comparar
    nuevoSorteo()
    // Condición: Si el nuevo número sorteado es MAYOR que el anterior [00:08:03]
    if (numeroSorteado > numeroAnterior) {
        // Carita feliz por acertar
        basic.showIcon(IconNames.Happy)
        // Suma un punto
        puntos += 1
        // Espera 1 segundo
        basic.pause(1000)
        // Prepara el siguiente número
        nuevoSorteo()
    }
})
// --- 2. FUNCIÓN DE SORTEO (Modularizada) ---
function nuevoSorteo () {
    // Escoge un número al azar entre 0 y 9 [00:02:25]
    numeroSorteado = randint(0, 9)
    // Muestra el número generado en la matriz de LEDs [00:03:43]
    basic.showNumber(numeroSorteado)
}
let numeroSorteado = 0
let puntos = 0
let numeroAnterior = 0
// --- 1. CONFIGURACIÓN INICIAL (Al Iniciar) ---
// Inicializamos los valores base tal como se describe en el video
// Número ficticio inicial [00:01:46]
numeroAnterior = 99
// El puntaje comienza en 0 [00:02:12]
puntos = 0
// Llamamos a la función para generar el primer número del juego
nuevoSorteo()
