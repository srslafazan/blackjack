
var Deck = function Deck () {
            
            var faces = ["Ace", '2', '3', '4', '5', '6', '7', '8', '9', '10', "Jack", "Queen", "King"];
            var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

            

            this.build = function(){
                var deck = [];
                for ( i in suits ) {
                    for ( j in faces ){
                        deck.push(faces[j] + " of " + suits[i]); 
                    }
                }
                return deck;
            };
            
            this.deck = this.build();

            this.shuffle = function(){
                for ( i in this.deck ){
                    var randomIndex = Math.floor(Math.random()*(this.deck.length));
                    while(randomIndex === i){
                        randomIndex = Math.floor(Math.random()*(this.deck.length));
                    }
                    var tmp = this.deck[i];
                    this.deck[i] = this.deck[randomIndex];
                    this.deck[randomIndex] = tmp;
                }
                console.log(this.deck);
            };

            this.reset = function(){
                this.deck = this.build();
            };

            this.deal = function(){

                var randomIndex = Math.floor(Math.random()*this.deck.length);
                var dealt = this.deck[randomIndex];
                this.deck[randomIndex] = this.deck[this.deck.length - 1];
                this.deck.pop();
                return dealt;
            };
        };

        var Player = function Player(name){

            this.name = name;
            this.hand = [];

            this.draw = function(deck){
                this.hand.push(deck.deal());
            }
            this.discard = function(i){
                if ( i === undefined && this.hand.length ){
                    return this.hand.pop();
                } else if(this.hand[i]){
                    discard = this.hand[i];
                    this.hand[i] = this.hand[this.hand.length - 1];
                    this.hand.pop()
                    return discard;
                } else {
                    console.log(this.name + " could not discard because there is no card in the specified position.");
                }
            }
            this.showHand = function(){
                console.log(this.hand);
            }
        }
        // var Player = new Player('Steve');
        var Deck = new Deck();
        // var Player1 = new Player('Steve');
        // var Player2 = new Player('Cassy');
        // var Player3 = new Player('Ryan');
        // var Player4 = new Player('Sierra');

        // var players = [Player1, Player2, Player3, Player4];
        


// WITHOUT JQUERY
        // (function addPlayernames(players){
        //     for( var i = 0; i < players.length; i++ ){
        //         playerheading = document.createElement('H4')
        //         playertext = document.createTextNode(players[i].name);
        //         playerheading.appendChild(playertext);

        //         document.getElementById( 'player' + (i + 1).toString() ).appendChild(playerheading);
        //     }
        // })(players);
        // addPlayernames(players);



