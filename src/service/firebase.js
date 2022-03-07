// Import the functions you need from the SDKs you need
// import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query,where} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCriCoHeLqBifvSMzQCSTgcR73VxxlREU",
  authDomain: "ecommerce-kumo.firebaseapp.com",
  projectId: "ecommerce-kumo",
  storageBucket: "ecommerce-kumo.appspot.com",
  messagingSenderId: "369804991039",
  appId: "1:369804991039:web:0d4c8d3ffd3f7b6db7f68a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db




// export async function getAllItems(){
//   try{
//     const data = collection(db,"items");
//     const itemsColection = await getDocs(data);
//     const result = itemsColection.docs.map(item =>{
//       return {...item.data(), id: item.id}
//     });
//     return result
//   }
//   catch(err){
//     console.error(err)
//   }
// }


// export async function getItemsCategory(category){
//   try{
//     const data = collection(db,"items");
//     const itemsCategoryColection = await getDocs(Q);
//     const Q = query(data, where("category","==", category));
//     const result = itemsCategoryColection.docs.map(item =>{
//       return {...item.data(), id: item.id}
//     });
//     console.log(result)
//     return result
//   }
//   catch(err){
//     console.error(err)
//   }
// }
