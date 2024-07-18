/**En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por 
empleado y por la empresa) que deberá pagar en la próxima nómina. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana 
(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos 
(administrativo) gana $150: 
Juan tendrá un sueldo de $120 
Ana tendrá un sueldo de $144 
Lin tendrá un sueldo de $220 
Mary tendrá un sueldo de $60 
Carlos tendrá un sueldo de $165 
El total de sueldo que debe pagar la empresa es de $709  */

import Cl_empleado from "./Cl_empleado.js"
import Cl_empresa from "./Cl_empresa.js"

let e1 = new Cl_empleado("obrero", 100)
let e2 = new Cl_empleado("obrero", 120)
let e3 = new Cl_empleado("administrativo", 200)
let e4 = new Cl_empleado("obrero", 50)
let e5 = new Cl_empleado("administrativo", 150)
let e = new Cl_empleado
let emp = new Cl_empresa

emp.procesarEmpleado(e1)
emp.procesarEmpleado(e2)
emp.procesarEmpleado(e3)
emp.procesarEmpleado(e4)
emp.procesarEmpleado(e5)

let salida = document.getElementById("salida")
salida.innerHTML = "Juan tendrá un sueldo de $" + e1.NuevoSueldo() + "<br>"
salida.innerHTML += "Ana tendrá un sueldo de $" + e2.NuevoSueldo() + "<br>"
salida.innerHTML += "Lin tendrá un sueldo de $" + e3.NuevoSueldo() + "<br>"
salida.innerHTML += "Mary tendrá un sueldo de $" + e4.NuevoSueldo() + "<br>"
salida.innerHTML += "Carlos tendrá un sueldo de $" + e5.NuevoSueldo() + "<br>"
salida.innerHTML += "El total de sueldo que debe pagar la empresa es de $" + emp.SueldoTotal()
