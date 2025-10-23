<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAdQy31XwiIgFfZKtRXMo93CWqNnuhaw2E",
    authDomain: "fir-2025d.firebaseapp.com",
    projectId: "fir-2025d",
    storageBucket: "fir-2025d.firebasestorage.app",
    messagingSenderId: "928768369483",
    appId: "1:928768369483:web:d4b4500a22e0269b267ece"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

let inputEdad = document.querySelector('#edad')
let inputNombre = document.querySelector('#Nombre')
let btnGuardar = document.querySelector('#cargar')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializamos la base de datos
const db = getFirestore(app);
// Cuando el usuario hace clic en el botón "Guardar"...
btnGuardar.onclick = () => {

  // 📥 1️⃣ Obtenemos el valor que el usuario escribió en los campos del formulario
  let nombre = inputNombre.value; // Tomamos el texto del input con id="nombre"
  let edad = Number(inputEdad.value); // Convertimos el valor de edad a número

  // ⚠️ 2️⃣ Verificamos que los campos no estén vacíos
  if (!nombre || !edad) { // Si falta alguno de los dos...
    alert("Por favor, completa todos los campos."); // Mostramos un aviso
    return; // Y salimos de la función (no se guarda nada)
  }

  // 🧩 3️⃣ Llamamos a addDoc() para guardar la información en Firestore
  // addDoc() crea un nuevo documento dentro de la colección "personas"
  // collection(db, "personas") indica la base de datos y el nombre de la colección
  addDoc(collection(db, "personas"), {
    nombre: nombre, // Campo "nombre" con el valor que escribió el usuario
    edad: edad // Campo "edad" con el número que escribió el usuario
  })

    // ✅ 4️⃣ Si la operación fue exitosa, se ejecuta el bloque .then()
    .then((docRef) => {
      // docRef contiene información sobre el documento recién creado
      console.log("Documento agregado con ID:", docRef.id); // Mostramos el ID en consola
      alert("Persona guardada correctamente ✅"); // Mostramos un mensaje al usuario

      // 🧽 5️⃣ Limpiamos los campos del formulario para poder escribir otra persona
      inputNombre.value = "";
      inputEdad.value = "";
    })

    // ❌ 6️⃣ Si ocurre algún error (por ejemplo, sin conexión o permisos)
    // se ejecuta el bloque .catch()
    .catch((error) => {
      // Mostramos el error en la consola para que el profesor/desarrollador lo vea
      console.error("Error al agregar documento:", error);

      // Mostramos un mensaje de error al usuario
      alert("Ocurrió un error al guardar ❌");
    });
};