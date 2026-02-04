import { getAllAccountsByRole } from "./accountServices.js";

async function loadData(){

   const data=  await getAllAccountsByRole(1);
   console.log(data);
}
loadData();