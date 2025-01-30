document.getElementById('revertButton').addEventListener('click', function() {
    // Obtiene el valor del input
    const inputText = document.getElementById('textInput').value;

    // Revertir el texto
    const reversedText = inputText.split('').reverse().join('');

    // Mostrar el resultado en el div correspondiente
    document.getElementById('result').textContent = reversedText;
});
