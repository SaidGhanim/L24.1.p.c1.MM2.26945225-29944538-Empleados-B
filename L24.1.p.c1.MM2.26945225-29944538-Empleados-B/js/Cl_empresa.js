export default class Cl_empresa {
    constructor (){
        this.acumNuevoSueldo = 0
    }
    
    procesarEmpleado(e){
        this.acumNuevoSueldo += e.NuevoSueldo()
    }

    SueldoTotal(){
        return this.acumNuevoSueldo
    }
}

