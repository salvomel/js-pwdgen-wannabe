// Chiedo all'utente il nome
const userName = prompt('Qual è il tuo nome?');

// Chiedo all'utente il cognome
const userSurname = prompt('Qual è il tuo cognome?');

// Chiedo all'utente il colore preferito
const userFavouriteColor = prompt('Qual è il tuo colore preferito?');

// Numero finale
const finalNumber = 21;

// Creo il messaggio
const userMessage = `Password: ${userName}${userSurname}${userFavouriteColor}${finalNumber}`;

// Lo stampo in pagina
document.getElementById('user-message').innerHTML = userMessage;