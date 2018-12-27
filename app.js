var questionNum = 1; 

window.onload = function(){
    showData();
}
function showData(){
    var firebaseRef = firebase.database().ref("forTeach/user01/thai105/quiztype");
    firebaseRef.once('value').then(function(dataSnapsshot) {
        console.log(dataSnapsshot.val());
    });
}

function insertDataChoice(name,question,choice1,choice2,choice3,choice4,correct,i){
    var firebaseRef = firebase.database().ref("forTeach/user01/thai105/1/"+name+"/q"+i);
    firebaseRef.push({
        question : question,
        answer1 : choice1,
        answer2 : choice2,
        answer3 : choice3,
        answer4 : choice4,
        correct : correct
    })
    
}
function insertDataTF(name,question,correct,i){
    var firebaseRef = firebase.database().ref("forTeach/user01/thai105/2/"+name+"/q"+i);
    firebaseRef.push({
        question : question,
        correct : correct
    })
    
}
function insertDataSA(name,question,correct,i){
    var firebaseRef = firebase.database().ref("forTeach/user01/thai105/3/"+name+"/q"+i);
    firebaseRef.push({
        question : question,
        correct : correct
    })
    
}
function updateDatabaseChoice(){
    var name = document.getElementById('name').value;
   
    for(var i = 1; i <= questionNum; i++){
        var question = document.getElementById('q' + i).value;
        var answer1 = document.getElementById(i + 'a1').value;
        var answer2 = document.getElementById(i + 'a2').value;
        var answer3 = document.getElementById(i + 'a3').value;
        var answer4 = document.getElementById(i + 'a4').value;
        var correct = document.getElementById('correct' + i).value;
        insertDataChoice(name,question,answer1,answer2,answer3,answer4,correct,i);
    }
    
    
}


function updateDatabaseTF(){
    var name = document.getElementById('name').value;
    
    for(var i = 1; i <= questionNum; i++){
        var question = document.getElementById('q' + i).value;
        var radios = document.getElementsByName('yes');

        for (var j = 0, length = radios.length; j < length; j++)
            {
                if (radios[j].checked)
                {
                    if(j==0) {
                    var radio = "yes"
                    insertDataTF(name,question,radio,i); }
                    if(j==1) {
                    var radio = "no"
                    insertDataTF(name,question,radio,i) }
                    

                // only one radio can be logically checked, don't check the rest
                break;
                }
            }
    }
    
    
}

function updateDatabaseSA(){
    var name = document.getElementById('name').value;
   
    for(var i = 1; i <= questionNum; i++){
        var question = document.getElementById('q' + i).value;
        var correct = document.getElementById('correct' + i).value;
        insertDataSA(name,question,correct,i);
    }
    
    
}

function addQuestion(){
    questionNum += 1;
    
    var questionsDiv = document.getElementById('allQuestions');
    
    var newQuestionDiv = document.createElement("div");
    var tabspace= document.createElement("label");
    var tabspace2= document.createElement("label");
    //var span = document.createElement("span");
    
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    
    var answer1Field = document.createElement('input');
    
    
    var answer2Field = document.createElement('input');
    
    
    var answer3Field = document.createElement('input');
    
   
    var answer4Field = document.createElement('input');
    
   
   // tabspace.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    questionLabel.innerHTML = "Question " + String(questionNum);
    questionField.setAttribute('class', 'question');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text'); 
    questionField.setAttribute('placeholder', 'tab to add question'); 
    tabspace.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    tabspace2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    
    answer1Field.setAttribute('id', String(questionNum) + "a1");
    answer1Field.setAttribute('type', 'text');
    answer1Field.setAttribute('placeholder', 'Answer 1');
    answer2Field.setAttribute('id', String(questionNum) + "a2");
    answer2Field.setAttribute('type', 'text');
    answer2Field.setAttribute('placeholder', 'Answer 2');
    answer3Field.setAttribute('id', String(questionNum) + "a3");
    answer3Field.setAttribute('type', 'text');
    answer3Field.setAttribute('placeholder', 'Answer 3');
    answer4Field.setAttribute('id', String(questionNum) + "a4");
    answer4Field.setAttribute('type', 'text');
    answer4Field.setAttribute('placeholder', 'Answer 3');
    
    
    newQuestionDiv.setAttribute('id', 'question-field');//Sets class of div
    
    newQuestionDiv.appendChild(questionLabel);
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(questionField);
    newQuestionDiv.appendChild(document.createElement('br'));
    
    newQuestionDiv.appendChild(answer1Field);
    newQuestionDiv.appendChild(tabspace2);    
    newQuestionDiv.appendChild(answer2Field);
    newQuestionDiv.appendChild(document.createElement('br'));
    
    newQuestionDiv.appendChild(answer3Field);
    newQuestionDiv.appendChild(tabspace);
    newQuestionDiv.appendChild(answer4Field);
    newQuestionDiv.appendChild(document.createElement('br'));

    questionsDiv.appendChild(document.createElement('br'));//Creates a break between each question
    questionsDiv.appendChild(newQuestionDiv);//Adds the question div to the screen
    
    newQuestionDiv.style.backgroundColor = randomColor();
}
function addQuestionTF(){
    questionNum += 1;
    
    var questionsDiv = document.getElementById('allQuestions');
    
    var newQuestionDiv = document.createElement("div");
       
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    var answer1Label = document.createElement('label');
    var answer1Field = document.createElement('input');
    
    var answer2Label = document.createElement('label');
    var answer2Field = document.createElement('input');
    var tabspace= document.createElement("label");
    
    questionLabel.innerHTML = "Question " + String(questionNum);
    questionField.setAttribute('class', 'question');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text');
    questionField.setAttribute('placeholder', 'Tab to add question');
       
    answer1Field.setAttribute('id', String(questionNum) + "Yes");
    answer1Field.setAttribute('type', 'radio');
    answer1Field.setAttribute('name','yes'+ String(questionNum));
    answer1Field.setAttribute('class','form-radio');
    answer1Field.checked = true;

    answer2Field.setAttribute('id', String(questionNum) + "No");
    answer2Field.setAttribute('type', 'radio');
    answer2Field.setAttribute('class','form-radio');
    answer2Field.setAttribute('name','yes'+ String(questionNum));

    tabspace.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    answer1Label.innerHTML = "Yes ";     
    answer2Label.innerHTML = "No "; 
   
    newQuestionDiv.setAttribute('id', 'question-field');//Sets class of div
    
    newQuestionDiv.appendChild(questionLabel);
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(questionField);
    newQuestionDiv.appendChild(document.createElement('br'));
    
    newQuestionDiv.appendChild(answer1Field);
    newQuestionDiv.appendChild(answer1Label); 
    newQuestionDiv.appendChild(tabspace); 
    newQuestionDiv.appendChild(answer2Field);
    newQuestionDiv.appendChild(answer2Label);
    
    
    
    questionsDiv.appendChild(document.createElement('br'));//Creates a break between each question
    questionsDiv.appendChild(newQuestionDiv);//Adds the question div to the screen
    
    newQuestionDiv.style.backgroundColor = randomColor();
}

function addQuestionSA(){
    questionNum += 1;
    
    var questionsDiv = document.getElementById('allQuestions');
    
    var newQuestionDiv = document.createElement("div");
    
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    var answer1Label = document.createElement('label');
    var answer1Field = document.createElement('input');
    var tabspace= document.createElement("label");
    
    
    
    
    questionLabel.innerHTML = "Question " + String(questionNum) + " : ";
    questionField.setAttribute('class', 'question');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text');
    questionField.setAttribute('placeholder', 'Tab to add question');
    answer1Label.innerHTML = "Answer : ";
    tabspace.innerHTML = "&nbsp;&nbsp;";
    
    
    answer1Field.setAttribute('id', String(questionNum) + "Answer ");
    answer1Field.setAttribute('type', 'text');
    answer1Field.setAttribute('placeholder', 'Tab to add answer');
    
    
    newQuestionDiv.setAttribute('id', 'question-field');//Sets class of div
    
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(questionLabel);
    newQuestionDiv.appendChild(questionField);
    newQuestionDiv.appendChild(document.createElement('br'));
    
    newQuestionDiv.appendChild(answer1Label);
    newQuestionDiv.appendChild(tabspace); 
    newQuestionDiv.appendChild(answer1Field);
    
    
    
    questionsDiv.appendChild(document.createElement('br'));//Creates a break between each question
    questionsDiv.appendChild(newQuestionDiv);//Adds the question div to the screen
    
    newQuestionDiv.style.backgroundColor = randomColor();
}