

function calculateGrade(){


    event.preventDefault();

    let marks = document.getElementById('marks').value;

    let convertedMarks = parseFloat(marks);

    if(convertedMarks>100){
        console.log("invalid marks");
        document.getElementById(result).innerHTML = "invalid marks";
    }

    else if(convertedMarks<0){
        console.log("invalid marks");
        document.getElementById(result).innerHTML = "invalid marks";
    }

    else if(convertedMarks>=80){
        console.log("The grade is A+");
        document.getElementById(result).innerHTML = "The grade is A+";
    }

    else if(convertedMarks>=70){
        console.log("The grade is A");
        document.getElementById(result).innerHTML = "The grade is A";
    }

    else if(convertedMarks>=60){
        console.log("The grade is A-");
        document.getElementById(result).innerHTML = "The grade is A-";
    }

    else if(convertedMarks>=50){
        console.log("The grade is B");
        document.getElementById(result).innerHTML = "The grade is B";
    }

    else if(convertedMarks>=40){
        console.log("The grade is C");
        document.getElementById(result).innerHTML = "The grade is C";
    }

    else if(convertedMarks>=33){
        console.log("The grade is D");
        document.getElementById(result).innerHTML = "The grade is D";
    }

    else{
        console.log("The grade is F");
        document.getElementById(result).innerHTML = "The grade is F";
    }


    document.getElementById('marks').value = "";

}