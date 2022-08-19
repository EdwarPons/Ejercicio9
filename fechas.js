const hoy = new Date();
const miNacimiento = new Date(1980, 1, 10, 7, 35, 17);
const esMasTarde = hoy > miNacimiento;
const miDiaNacimiento = miNacimiento.getDate();
const miMesNacimiento = miNacimiento.getMonth() + 1;
const miAnioNacimiento = miNacimiento.getFullYear();

console.log("Hoy => " + hoy);
console.log("Mi nacimiento => " + miNacimiento);
console.log("Hoy es más tarde que mi nacimiento => " + esMasTarde.toString());
console.log("Mi día de nacimiento => " + miDiaNacimiento.toString());
console.log("Mi mes de nacimiento => " + miMesNacimiento.toString());
console.log("Mi año de nacimiento => " + miAnioNacimiento.toString());
