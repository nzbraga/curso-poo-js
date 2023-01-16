
const button = document.getElementById("atack1")
const button2 = document.getElementById("atack2")

button.addEventListener('click', ()=>{
    if(h1._Life >= 0){
    h1.atack()
    button.classList.toggle('hide')
    button2.classList.toggle('hide')
    } else {
        console.log(h1._Name + " esta mortinho da silva")
    }
    
})
button2.addEventListener('click', ()=>{
    if(h2._Life >= 0){
        h2.atack()
        button.classList.toggle('hide')
        button2.classList.toggle('hide')
        } else {
            console.log(h2._Name + " esta mortinho da silva")
        }
})



function dice(max,r) {
    return Math.floor(Math.random() * max + 1)+r
}

class Hero {
    constructor(Name, Classe, classStrong , classDexterity, classResistance, classArmor, classFirePower, Bag, classLife){
        this._Name = Name 
        this._Classe = Classe 
        this._Strong = classStrong 
        this._Dexterity = classDexterity
        this._Resistance = classResistance 
        this._Armor = classArmor
        this._FirePower = classFirePower 
        this._Bag = Bag 
        this._Life = classLife
        this._Dano = 0
       

    }

    atack(){
               

        let rollDice = dice(6,0)

        if(rollDice == 6 || rollDice == 1){
                               
            switch (rollDice) {
                case 6:
                    this._Life --
                    console.log(this._Name + ", teve um erro Critico e se machucou com a própria arma")
                break;
                case 1:
                    console.log("ataque de:" + this._Name)
                    this._Dano = dice(6,this._Strong)*2;
                    console.log("Dano Critico:" + this._Dano)

                    h2._Life = h2._Life - this._Dano

                    
                    
                    
                                      
                break;
                default:
            }

            } else { 

            let resDice = ((this._Dexterity > rollDice) ? "maior" : "menor")

            switch (resDice) {

                case "maior":
                    console.log("ataque de:" + this._Name)
                    this._Dano = dice(6,this._Strong);
                    console.log("Dano " + this._Dano)

                    h2._Life = h2._Life - this._Dano

                    
                    
                    
                                        
                break;
                case "menor":
                    console.log(this._Name + ", errou o Ataque")
                    
                break;
                    
                default:
                
            }

            if (this._Life <= 0){
                console.log(this._Name + ' morrer')
                
            }
        }
    }
   

    info(){
        console.log("Nome.........:" + this._Name)
        console.log("Classe.......:" + this._Classe)
        console.log("Pontos de Vida:" + this._Life)
    }

   
}

let h1 = new Hero("Bob", "mago", 3, 4, 2, 1, 2, "corda", 12)
let h2 = new Hero("Jony", "mago", 2, 3, 3, 2, 1, "corda", 18)

h1.info()
h2.info()



