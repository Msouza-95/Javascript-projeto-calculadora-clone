class CalcController{

    constructor(){

         this._displayCalcEl = document.querySelector("#display");  
         this._currentDateEl = document.querySelector("#data");
         this._currentTimeEl = document.querySelector("#hora");
         this.initialize();  
    }

    initialize(){
        
        
        this._displayCalcEl.innerHTML = "10"; 
        this._currentDateEl.innerHTML = "17/10/2019";
    }

    get displayCalcEl(){

        return this._displayCalcEl.innerHTML; 
    }
    
    set displayCalcEl(value){

        this._displayCalcEl.innerHTML = value; 
    }

    get currentTime(){

        return this._currenTimeEl.innerHTML; 
    }
    set  currentTime(value){

        this._currenTimeEl.innerHTML = value; 
    }

    get currentDate(){

        return this._currenTimeEl.innerHTML; 
    }

    set currentDate(value){

        this._currentDateEl.innerHTML= value; 
    }
}
