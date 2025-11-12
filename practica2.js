import { initializeApp } from "firebase/app";
import {getDatabase, ref, onValue} from

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let parrafo = document.querySelector("p");

const refDatos = ref(db, "huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()
    parrafo.textContent = `La huerta tiene una temperatura en el suelo de ${huerta.tempSuelo}° y de humedad de ${huerta.humSuelo}`
    
   
})