var card = $("#quiz")

var quiz = [
    {
        Q: "1. What is Pablo Picasso's country of birth?",
        A: ["France", "Brazil", "Italy", "Spain"],
        correctA: "Spain"
    },

    {
        Q: "2. How old was Picasso when he died?",
        A: ["78", "91", "88", "89"],
        correctA: "91"
    },

    {
        Q: "3. What is Pablo Picasso famous for?",
        A: ["Cubism", "Impressionism", "Abstract Art", "Surrealism"],
        correctA: "Cubism"
    },

    {
        Q: "4. Which of these Periods is not considered part of Picasso's Periods?",
        A: ["Crystal Period", "Green Period", "Blue Period", "Rose Period"],
        correctA: "Green Period"
    },

    {
        Q: "5. With whom did Pablo Picasso cofound the Cubist movement?",
        A: ["Paul Cezanne", "Georges Braque", "Beatrice Blick", "Diego Rivera"],
        correctA: "Georges Braque"
    },


]

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 15,
    countDown: function () {
        game.counter--
        $("#countDown").html(game.counter)
        if (game.counter === 0) {
            console.log("Time's Up!")
            game.done()
        }
    },
    start: function () {
        $("#message").empty();
        timer = setInterval(game.countDown, 1000)
        $("#quiz").prepend("<h2> Time Remaining:<span id = 'countDown'> 15 </span> Seconds </h2>")
        $("#start").remove()
        for (var i = 0; i < quiz.length; i++) {
            card.append("<h3> " + quiz[i].Q + "<h3>");
            for (var j = 0; j < quiz[i].A.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + quiz[i].A[j] + "''>" + quiz[i].A[j]);


            }
        }
        card.append("<hr><button id = 'done'> Done </button>")
    },
    done: function () {
        clearInterval(timer);
        console.log($("input[name='question-0']:checked").val());
        for (var i = 0; i < quiz.length; i++) {
            if($("input[name='question-" + i + "']:checked").val() === quiz[i].correctA) { 
                this.correct++;
                
    
            } else {
                this.incorrect++;
            }


        }
        
        game.result();

    },

    result: function () {
        $("#quiz").empty();
        $("#message").append("<p>You have " + this.correct + " correct!</p> <p> And you have" + this.incorrect + "incorrect </p>") 
        $("#message").append('<button class = "start"> Start </button>');
        this.correct=0;
        this.incorrect=0;
        

     
    }

}



$(document).on("click", ".start", function () {
    $(".start").hide();
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});