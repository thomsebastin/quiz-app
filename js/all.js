(function() {
    // to set the body height to browser height
    var bodyTag = document.querySelector("body");
    bodyTag.style.height = screen.height + "px";
    // to fetch the json file
    var jiffUrl = "http://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json";
    $.getJSON(jiffUrl, function(data) {
        // console.log(data);
        var myData = data;

        iQuest = 0;
        firstQue = myData[iQuest];

        function increment() {
            return iQuest++;
            firstQue = myData[iQuest];
        }
        console.log(myData);
        // question is here
        var question = document.getElementById("question");
        question.innerText = firstQue.text;
        // options for questions called here
        // for loop to dynamically fetch four answers
        var optionLabels = ["A", "B", "C", "D"];
        for (var ourOptions in firstQue.options) {
            var para = document.createElement("p");
            var parentBlock = document.getElementById("answerSec");
            para.setAttribute("id", "optionNum" + [ourOptions]);
            para.innerHTML += optionLabels[ourOptions] + ". " + firstQue.options[ourOptions];
            parentBlock.appendChild(para);
        };
        // now checking for correct answers
        for (answerBtns in optionLabels) {
            var inputMe = document.createElement("input");
            var ansBlock = document.getElementById("ansBtn");
            inputMe.className = "chalkBtn";
            inputMe.setAttribute("id", answerBtns);
            inputMe.setAttribute("type", "button");
            inputMe.setAttribute("value", optionLabels[answerBtns]);
            ansBlock.appendChild(inputMe);
        };
        // this is for showing question number progress
        var totalVal = document.getElementById("totalVal");
        totalVal.innerHTML = "Javascript Quiz " + myData.indexOf(firstQue) + " of " + myData.length;


        // for answer validation (here is a lil jQuery)
        $("input").click(function(event) {
            var storedAns = event.target.id
            if (storedAns == firstQue.answer) {
                alert("That's a correct answer");
                increment();
            } else alert("Try again");
        });
    });
})();
