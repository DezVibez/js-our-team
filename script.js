console.log("js ok")

/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato


 # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg */ 

//funzione stampa foto 

const targetPrint = document.getElementById("targetPrint")
const targetTry = document.getElementById("targetTry")

const data = [{name: "Wayne Barnett", role: "Founder & CEO", photo: "wayne-barnett-founder-ceo.jpg"}, 
            {name: "Angela Caroll", role: "Chief Editor", photo: "angela-caroll-chief-editor.jpg"},
            {name: "Walter Gordon ", role: "Office Manager", photo: "walter-gordon-office-manager.jpg"},
            {name: "Angela Lopez", role: "Social Media Manager", photo: "angela-lopez-social-media-manager.jpg"},
            {name: "Scott Estrada", role: "Developer", photo: "scott-estrada-developer.jpg"},
            {name: "Barbara Ramos", role: "Graphic Designer", photo: "barbara-ramos-graphic-designer.jpg"}]

console.log(data) //===> MILESTONE1


//analisi. 
//Voglio stampare tutte le informazioni dell'array. l'array è composto da sei elementi quindi ci giro dentro data.length volte.
//per stampare i dati nel dom ho bisogno della stringa vuota da riempire ad ogni [i].
//l'indice del mio array corrisponde ad i.
// ma ogni array è un oggetto quindi per stampare tutte le sue proprietà uso un for key annidato.

let arrayElement = "" //stringa vuota per stampa

data[0]

for (let i = 1; i < data.length + 1; i++) {
	arrayElement = data[i]

    console.log(data[i])


    targetTry.innerHTML +=`<img src="img/${arrayElement["photo"]}">` //bonus1
    
    
    
    //stampa TUTTE le coppie chiavi-valore dei singoli oggetti, negli array.

    

    for (let key in arrayElement) {

        targetPrint.innerHTML +=`${arrayElement[key]}<br>`
}
}
console.log((arrayElement))
