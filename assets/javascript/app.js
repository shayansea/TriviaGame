var card = $("#quiz")

var quiz = [
    {
        Q: "1. How old is the actor Hugh Laurie who plays Dr. Gregory House in House MD?",
        A: ["65", "58", "62", "59"],
        correctA: "59"
    },

    {
        Q: "2. What year did House MD first air on T.V.?",
        A: ["2004", "2005", "2006", "2007"],
        correctA: "2004"
    },

    {
        Q: "3. Which of the following is not an episode title of House MD?",
        A: ["The Mistake", "Top Secret", "It's a Wonderful Lie", "Burning Questions"],
        correctA: "Burning Questions"
    },

    {
        Q: "4. Which of the following actors was not a guest star on House MD?",
        A: ["Amanda Seyfried", "Kristen Bell", "Leighton Meester", "Evan Peters"],
        correctA: "Kristen Bell"
    },

    {
        Q: "5. What is the name of James Wilson's dog which he bought with his second wife Bonnie Wilson?",
        A: ["Hector", "Harris", "Hayden", "Harry"],
        correctA: "Hector"
    },
    {
        Q: "6. Who plays Dr.Cuddy in House MD?",
        A: ["Megan Mullally", "Lisa Edelstein", "Julia Louis-Dreyfus", "Julianne Moore"],
        correctA: "Lisa Edelstein"
    },
    {
        Q: "7. Why did Foreman quit?",
        A: ["He was not happy with his salary", "He didn't like his coworkers", "He wanted to start his own practice", "He didn't want to turn into House"],
        correctA: "He didn't want to turn into House"
    },
    {
        Q: "8. In what season did a former patient shoot House?",
        A: ["Season 1", "Season 2", "Season 3", "Season 4"],
        correctA: "Season 2"
    },
    {
        Q: "9. What is Foreman's first name on House?",
        A: ["Robert", "James", "Chris", "Eric"],
        correctA: "Eric"
    },
    {
        Q: "What nationality is Chase on House?",
        A: ["Canadian", "American", "Australian", "British"],
        correctA: "Australian"
    },

]

var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
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
        $("#quiz").prepend("<h2> Time Remaining:<span id = 'countDown'> 20 </span> Seconds </h2>")
        $("#start").remove()
        for (var i = 0; i < quiz.length; i++) {
            card.append("<h3> " + quiz[i].Q + "<h3>");
            for (var j = 0; j < quiz[i].A.length; j++) {
                card.append("<input type='radio' name='question-" + i +
                    "' value='" + quiz[i].A[j] + "''>" + quiz[i].A[j]);


            }
        }
        card.append("<button id = 'done'> Done </button>")
    },
    done: function () {
        clearInterval(timer);
        console.log($("input[name='question-0']:checked").val());
        if($("input[name='question-0']:checked").val() === quiz[0].correctA) { 
            this.correct++;
            

        } else {
            this.incorrect++;
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