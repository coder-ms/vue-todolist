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
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa,
il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per 
aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done 
del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            //addNewElement
            newTask:{
                text :'',
            },
            hasError : false,
            //element list
            ingredients:[
                {
                    text: 'onion',
                    done: false,
                },
                {
                    text: 'wine',
                    done: true,
                },
                {
                    text: 'steak 600g',
                    done: false,
                },
                {
                    text: 'spicies mix 30g',
                    done: false,
                },
                {
                    text: 'oil',
                    done: true,
                },
            ],
        }
    },
    methods:{
        // addElement
        addElement(){
            if(this.newTask.ingredients.length >= 5 ){
                this.ingredients.unshift(newTask.ingredients);
                this.hasError = false;
            }else{
                this.hasError = true;
            }
           this.newTask.ingredients = '';
        },
        // removeElement
        removeElement(i){
            this.ingredients.splice(i,1);
        },
        // alertCheck
        alertCheck(){
            console.log('alaertCheck');
        }
    },
    mounted(){
        console.log('in mounted');
    }
}).mount('#app');



