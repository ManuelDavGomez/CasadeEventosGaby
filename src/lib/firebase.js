// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

// Configuración de Firebase
const firebaseConfig = {
 apiKey: "AIzaSyC-Hb39qyFEpoS91yDzOmrV9YwIvFMiPxs",
  authDomain: "casadeeventosgaby-46dea.firebaseapp.com",
  projectId: "casadeeventosgaby-46dea",
  storageBucket: "casadeeventosgaby-46dea.firebasestorage.app",
  messagingSenderId: "226976859979",
  appId: "1:226976859979:web:1e931d21caef47657a0ace",
  measurementId: "G-2Z1J2QGWGL"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Obtener fechas bloqueadas para un vestido específico
export const fetchBlockedDates = async (dressId) => {
  const dbRef = ref(db, `blockedDates/${dressId}`);
  try {
    const snapshot = await get(dbRef);
    return snapshot.exists() ? snapshot.val() : [];
  } catch (error) {
    console.error("Error al obtener las fechas bloqueadas:", error);
    return [];
  }
};

// Guardar fechas bloqueadas sin sobrescribir otras entradas
export const saveBlockedDates = async (dressId, dates) => {
  const dbRef = ref(db, `blockedDates/${dressId}`);
  try {
    await set(dbRef, dates);
  } catch (error) {
    console.error("Error al guardar las fechas bloqueadas:", error);
  }
};