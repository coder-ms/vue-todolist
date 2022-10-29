/*
Descrizione:
Rifare l'esercizio della to do list argomento dell to-do list a piacere 
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue;

createApp({
  data() {
    return{
        //boolean
        activeIndex: 0,
        bChecked: false,
        bActive : false,

        //nuovo allenamento
        newTrainig:{
            text :'',
        },
        
        lessFive : false,
        trainingList:[
            {
                text: '3x300m rec. 3min',
                done: false,
            },
            {
                text: '4x200m rec. 3min',
                done: true,
            },
            {
                text: '4x150m rec. 2min',
                done: false,
            },
            {
                text: '6x100m rec. 2min',
                done: false,
            },
            {
                text: '12x60m rec 1min',
                done: true,
            },
        ]
    }
},
    methods:{
        addNewTraining(){
            let clone ={};
            for(let key in this.newTrainig){
                clone[key] = this.newTrainig[key];
            }
            if(this.newTrainig.text.length >= 5 ){
                this.trainingList.unshift(clone);
                this.lessFive = false;
            }else{
                this.lessFive = true;
            }

           this.newTrainig.text = '';
        },
        removeTraining(ix){
            this.trainingList.splice(ix,1);
        },
        alertTrainig(index){
          bChecked = true;
        },
        checkedTraining(ix){
            this.bActive = !this.bActive;
        }
    },
}).mount('#app');