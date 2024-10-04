// Simulamos una base de datos en localStorage
if (!localStorage.getItem('database')) {
    localStorage.setItem('database', JSON.stringify({balance: 1000}));
}

// Función para obtener el balance actual de la "base de datos"
function getBalance() {
    const db = JSON.parse(localStorage.getItem('database'));
    return db.balance;
}

// Función para guardar el balance en la "base de datos"
function setBalance(newBalance) {
    const db = JSON.parse(localStorage.getItem('database'));
    db.balance = newBalance;
    localStorage.setItem('database', JSON.stringify(db));
}

// Mostrar en el log las acciones realizadas
function logTransaction(message) {
    const logList = document.getElementById('log-list');
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

// Transacción 1: Operación exitosa con Commit
function transaccionUno() {
    logTransaction('Transacción 1 iniciada...');
    let initialBalance = getBalance();
    let newBalance = initialBalance + 200;

    // Simular operación exitosa
    setBalance(newBalance);
    logTransaction(`Commit: Balance actualizado a ${newBalance}`);
}

// Transacción 2: Operación fallida con Rollback
function transaccionDos() {
    logTransaction('Transacción 2 iniciada...');
    let initialBalance = getBalance();
    let newBalance = initialBalance - 500;

    // Simulamos una operación fallida (error de lógica, saldo negativo)
    if (newBalance < 0) {
        logTransaction(`Error: No se puede realizar la transacción (saldo negativo). Rollback al balance anterior: ${initialBalance}`);
    } else {
        setBalance(newBalance);
        logTransaction(`Commit: Balance actualizado a ${newBalance}`);
    }
}

// Transacción 3: Operación exitosa con Commit
function transaccionTres() {
    logTransaction('Transacción 3 iniciada...');
    let initialBalance = getBalance();
    let newBalance = initialBalance + 300;

    // Simular operación exitosa
    setBalance(newBalance);
    logTransaction(`Commit: Balance actualizado a ${newBalance}`);
}

// Transacción 4: Operación fallida con Rollback
function transaccionCuatro() {
    logTransaction('Transacción 4 iniciada...');
    let initialBalance = getBalance();
    let newBalance = initialBalance - 1500;

    // Simulamos una operación fallida (saldo negativo)
    if (newBalance < 0) {
        logTransaction(`Error: No se puede realizar la transacción (saldo negativo). Rollback al balance anterior: ${initialBalance}`);
    } else {
        setBalance(newBalance);
        logTransaction(`Commit: Balance actualizado a ${newBalance}`);
    }
}
