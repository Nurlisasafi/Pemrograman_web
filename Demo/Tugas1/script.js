// Menampilkan angka atau operasi ke layar
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Menghapus seluruh layar
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Menghapus satu karakter terakhir
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Menghitung hasil dari ekspresi matematika
function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Menghitung pangkat
function calculatePower() {
    let display = document.getElementById('display').value;
    let baseAndExponent = display.split('^');
    if (baseAndExponent.length === 2) {
        let base = parseFloat(baseAndExponent[0]);
        let exponent = parseFloat(baseAndExponent[1]);
        let result = Math.pow(base, exponent);
        document.getElementById('display').value = result;
    }
}
