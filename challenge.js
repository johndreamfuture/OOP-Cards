/*
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 *
 * When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */

class Card{

    constructor(suit,rank,score){
        this.suit=suit;
        this.rank=rank;
        this.score=score;
    }
}

class Deck{
    constructor(){
        this.length=52;
        this.cards=this.createCards();
       }
    createCards(){
    let suits=["hearts","spades","clubs","diamands"]
    let ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","King","Queen"]
    let scores=[1,2,3,4,5,6,7,8,9,10,11,12,13]
    let cards=[]
    for(let i=0;i<suits.length;i++){
             for(let j=0;j<ranks.length  ;j++){
               cards.push( new Card(suits[i],ranks[j],j+1))
            }

        }
    return cards
    }
    draw(){
    let index=Math.floor(Math.random()*52)
        return this.cards[index]

    }
}

let deck=new Deck()
    console.log(deck.cards)
    console.log(deck.length)
    console.log(deck.draw())

