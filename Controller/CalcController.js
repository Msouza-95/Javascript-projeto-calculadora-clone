class CalcController{

    constructor(){

        this._operation = []; 
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

    setErro(){

        this.displayCalcEl= "ERRO"; 
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{

            element.addEventListener(event,fn,false);
        });

    }
    clearAll(){

        this._operation = []; 
        console.log(this._operation); 
    }

    clearEntry(){
        this._operation.pop(); 
        console.log(this._operation); 
    }

    addOperation(value){
            
        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){

            }else{
                // não é operação
            }
      
        }else{

            let newValue = this.getLastOperation.toString + value.toString; 
            this._operation.push(newValue);  
        }
  
       console.log(this._operation); 
      
    }

    getLastOperation(){
        return this._operation[this._operation.length-1]; 
    }

    isOperator(value){

        return (['+','-','*','/'].indexOf(value)>-1); 
    }

    setLestOperation(value){

    }

    execBtn(value){
       
        switch(value){

            case 'ac':
                this.clearAll(); 
                break; 
            case 'ce':
                this.clearEntry(); 
                break; 
            case 'porcento':
                this.addOperation('%'); 
                break;
            case 'divisao':
                this.addOperation('/'); 
                break; 
            case 'multiplicacao': 
                this.addOperation('*'); 
                break; 
            case 'subtracao':
                this.addOperation('-'); 
                break; 
            case 'soma':
                this.addOperation('+'); 
                break; 
            case 'igual':
                    this.addOperation('='); 
                break; 
            case 'ponto':
                this.addOperation('.'); 
                break; 
            case '0':
            case '1':
            case '2': 
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value)); 
                break; 

            
            default : 
                this.setErro(); 



        }
    }
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g"); 

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn,"click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-",""); 
                this.execBtn(textBtn); 
                
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
