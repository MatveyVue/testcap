import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC5LEXiZ-_LcPg3pUlb9tuDzQvUptHF7s",
  authDomain: "giftcaps.firebaseapp.com",
  databaseURL: "https://giftcaps-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "giftcaps",
  storageBucket: "giftcaps.firebasestorage.app",
  messagingSenderId: "762854065131",
  appId: "1:762854065131:web:116cf5343de1d1e353cfae",
  measurementId: "G-LK9N0SKT0P"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const form = document.getElementById("entryForm");

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Wallet = document.getElementById("Wallet").value;

    if (Wallet === "") {
        alert("Пожалуйста, заполните поле.");
        return;
    }

    try {
        const newEntryRef = push(ref(db, 'Wallet'));
        await set(newEntryRef, { Wallet });
        alert("Вы участвуете в розыгрыше!");
        document.getElementById("Wallet").value = "";
        const nextPageUrl = 'index.html'; 
        setTimeout(() => {
            window.location.href = nextPageUrl; 
        }, 500);
    } catch (error) {
        alert(`Ошибка:(`);
        console.error("Ошибка:(");
    }
});