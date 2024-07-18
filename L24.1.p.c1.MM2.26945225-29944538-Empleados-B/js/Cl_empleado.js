export default class Cl_empleado {
    constructor (tipo, sueldoActual){
        this.tipo = tipo
        this.sueldoActual = sueldoActual
    }

    set tipo(tipo){
        this._tipo = tipo
    }

    get tipo(){
        return this._tipo
    }

    Aumento(){
        if(this.tipo == "obrero"){
            return this.sueldoActual * 0.2
        }else if(this.tipo == "administrativo"){
            return this.sueldoActual * 0.1
        }
    }

    NuevoSueldo(){
        return this.sueldoActual + this.Aumento()
    }
}


      