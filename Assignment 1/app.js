Vue.component ('app1', {
    template: `
<div>
    <h1 class="text-danger">Guess The Number</h1> 

<p>We have selected a random number between 1 - 100. 
See if you can guess it.</p> 

	<label for="guessField">Enter a guess: </label> 
	<input type = "text"  v-model = guessNum class = "guessField"> 
	<input type = "submit" value = "Submit guess" v-on:click="submitGuess" class ="bg-warning border-warning"> 
	<p>{{message}}</p>
</div> `,
 data: function (){ return {
    compNum: Math.floor(Math.random() * 100 + 1),
    guess: 1,
    guessNum: '',
    message: ''
 }
  },
  methods: {
    submitGuess: function () {
      if (this.guessNum == this.compNum) {
          this.message = 'CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ' +
          this.guess + ' TRIALS '
      } else if (this.guessNum > this.compNum) {
            this.guess++
            this.message = 'Try lower'
      } else {
            this.guess++
            this.message = 'Try higher'
      }
      
    }
  }
})
Vue.component ('app2', {
    template: `
   <div>
    <h1 class="text-danger">Guess The Number</h1> 

<p>We have selected a random number between 1 - 100</p>
<p>See if you can guess it.</p> 
<p>You will be prompted how far away your guess is, Cold means you're 40 away from the target, Cool means you're 20-39 away, warm means your guess is 10-19 away and Hot means you're within 10!!</p>

	<label for="guessField">Enter a guess: </label> 
	<input type = "text"  v-model = guessNum class = "guessField"> 
	<input type = "submit" value = "Submit guess" v-on:click="submitGuess" class="bg-warning border-warning"> 
	<p>{{message}}</p>
</div> `,
data: function (){ return {
    compNum: Math.floor(Math.random() * 100 + 1),
    guess: 1,
    guessNum: '',
    message: ''
}
  },
  methods: {
    submitGuess: function () {
      if (this.guessNum == this.compNum) {
        this.message = 'CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ' +
        this.guess + ' TRIALS '
      } else if (this.guessNum > this.compNum + 40 || this.guessNum < this.compNum - 40)  {
        this.guess++
        this.message = 'Cold'
      } else if (this.guessNum > this.compNum + 20 || this.guessNum < this.compNum - 20){
        this.guess++
        this.message = 'Cool'
      }
	  else if (this.guessNum > this.compNum + 10 || this.guessNum < this.compNum - 10){
        this.guess++
        this.message = 'Warm'
      }
	  else if (this.guessNum > this.compNum || this.guessNum < this.compNum) {
        this.guess++
        this.message = 'Hot'
      }
      
    }
  }
})

Vue.component ('app3', {
    template: `
<div>
    <h1 class="text-danger">Guess The Number</h1> 

<p>Think of a number between 0-99</p>
<p>See if I can guess it</p>
<p>Tell me if I need to guess higher or lower if my first guess is wrong</p>
<p>No cheating!!!!</p>

    <button class = "bg-success border-success" v-on:click="start">Start</button>
    <p>is it {{computerGuess}}?</p>
    <button class="bg-primary border-primary" v-on:click="higher">Higher</button>
    <button class="bg-primary border-primary" v-on:click="correct">Correct</button>
    <button class="bg-primary border-primary" v-on:click="lower">Lower</button>
    <p>{{message}}</p>
</div> `,
data: function (){ return {
    guess: 0,
    message: '',
    computerGuess: '',
    min: 0,
    max: 100
}
    },
        methods: {
        higher: function () {
            this.min = this.computerGuess 
            this.guess++
            if (this.min === this.max || this.min === 99 || this.max === 1 || this.min === this.max-1) {
                this.message = 'STOP!! why are you lying??'
                } else this.cGuess()
             },
        correct: function () {
            this.computerGuess = ''
            this.message = 'Yay! I got it right in ' + 
            this.guess + ' trials'
            },
        lower: function () {
            this.max = this.computerGuess 
            this.guess ++
            if (this.min === this.max || this.min === 99 || this.max === 1 || this.min === this.max-1) {
                this.message = 'STOP!! why are you lying??'
                } else this.cGuess() 
            },
            
            cGuess: function () {
            this.computerGuess = Math.floor((this.min+this.max)/2)
           },
           
         start: function() {
            this.min = 0
            this.max = 100
            this.guess = 1
            this.computerGuess = (this.min+this.max)/2
           }
        }

})
Vue.component ('app4', {
    template: `
<div>
<h1 class="text-danger">Guess The Number</h1> 

<p>Think of a number between 0-99</p>
<p>See if I can guess it</p>
<p>Tell me if how far away my guess is, Cold means I'm 40 or more away, Cool means I'm 20-39 away, Warm means I'm 10-19 away and Hot means im less than 10 away</p>
<p>No cheating!!!!</p>

    <button class = "bg-success border-success" v-on:click="start">Start</button>
    <p>is it {{computerGuess}}?</p>
    <button class="bg-primary border-primary" v-on:click="cold">Cold</button>
    <button class="bg-primary border-primary" v-on:click="cool">Cool</button>
    <button class="bg-primary border-primary" v-on:click="correct">Correct</button>
    <button class="bg-primary border-primary" v-on:click="warm">Warm</button>
    <button class="bg-primary border-primary" v-on:click="hot">Hot</button>
    <p>{{message}}</p>
</div> `,
data: function (){ return {
      guess: 0,
      message: '',
      computerGuess: '',
      min: 0,
      max: 100 
}
    },
 methods: {
 cold: function () {
    this.min = this.computerGuess + 40
    this.guess++
    if (this.min === this.max || this.min >= 99) {
        this.message = 'STOP!! why are you lying??'
      } else this.computerGuess = this.min
    },
     
  cool: function () {
    if ( this.max >= this.computerGuess + 39){
      this.max = this.computerGuess + 39
      this.min = this.computerGuess + 20
      this.guess++
      this.computerGuess = this.min
    }
    else {this.message = 'STOP!! why are you lying??'}
  },
    
  correct: function () {
    this.computerGuess = ''
    this.message = 'Yay! I got it right in ' + 
        this.guess + ' trials'
    },
    
  warm: function () {
    if ( this.max >= this.computerGuess + 19){
      this.max = this.computerGuess + 19
      this.min = this.computerGuess + 10
      this.guess ++
      this.computerGuess = this.min
    } 
    else if(this.max > this.computerGuess && this.min + 10 < this.max){
      this.min = this.computerGuess + 10
      this.guess ++
      this.computerGuess = this.min
      }
    else {
      this.message = 'STOP!! why are you lying??'
    }
  },
    
  hot: function () {
    if ( this.max >= this.computerGuess + 9){
      this.max = this.computerGuess + 9
      this.min = this.computerGuess + 1
      this.guess ++
      this.computerGuess = this.min
    }
    else if(this.max > this.computerGuess){
      this.min = this.computerGuess + 1
      this.guess ++
      this.computerGuess = this.min
    }
    else if (this.min === this.max || this.min === 99 || this.max === 1) {
      this.message = 'STOP!! why are you lying??'
    }
  },
  
  start: function() {
     this.min = 0
     this.max = 99
     this.guess = 1
     this.computerGuess = 1
    }
  }
})
   

    

var appone = new Vue({ //eslint-disable-line no-unused-vars, no-undef
    el : '#alertbox',
    data: {
        componentObject: { app1: 'app1'},
        selector: 1

    }
})