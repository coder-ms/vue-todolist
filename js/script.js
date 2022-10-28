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

const { createApp } = Vue

createApp({
  data() {
    return{
        activeIndex: 0,
        fatto: false,
        isActive : false,

        aggiunta:{
            text :'',
        },
        minlength : false,
        list:[
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
        add(){
            let clone ={};
            for(let key in this.aggiunta){
                clone[key] = this.aggiunta[key]
            }
            if(this.aggiunta.text.length >= 5 ){
                this.list.unshift(clone);
                this.minlength = false;
            }else{
                this.minlength = true;
            }

           this.aggiunta.text = '';
        },
        removeTask(i){
            this.list.splice(i,1)
        },
        allerta(index){
          fatto = true;

        },
        checked(i){
            this.isActive = !this.isActive;
        }
    },
}).mount('#app')