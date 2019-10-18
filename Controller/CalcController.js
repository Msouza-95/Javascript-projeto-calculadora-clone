class CalcController{

    constructor(){
        this._locale = "pt-BR"; 
         this._displayCalcEl = document.querySelector("#display");  
         this._DateEl = document.querySelector("#data");
         this._TimeEl = document.querySelector("#hora");
         this.initialize();  
         this.initButtonsEvents(); 
    }

    initialize(){
            this.setDisplayDateTime(); 
        setInterval(() => {
            this.setDisplayDateTime(); 
        },1000);
       
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{

            element.addEventListener(event,fn,false);
        });

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); 

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn,"click drag", e => {

                console.log(btn.className.baseVal.replace("btn-","")); 
            }); 
            this.addEventListenerAll(btn,"mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer"; 
            }); 
        });
    }
    


    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);  

    }
    get displayDate(){

        return this._DateEl.innerHTML; 
    }

    get displayTime(){

        return this._TimeEl.innerHTML; 
    }

    
    set displayDate(value){

        return this._DateEl.innerHTML = value; 
    }

    set displayTime(value){

         this._TimeEl.innerHTML = value; 
    }
    get displayCalcEl(){

        return this._displayCalcEl.innerHTML; 
    }
    
    set displayCalcEl(value){

        this._displayCalcEl.innerHTML = value; 
    }


    get currentDate(){

        return new Date(); 
    }

    set currentDate(value){

        this._currentDate= value; 
    }
}
