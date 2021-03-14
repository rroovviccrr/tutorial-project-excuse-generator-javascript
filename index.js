windows.onload = () =>{
    document.querySelector("#btn").addEventListener("click", () =>{
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
    console.log("hello");
};

let generateExcuse = () => {

    let pronoun = ['A','the'];
    let subject = ['jogger', 'racoon', 'dog', 'driver', 'comedia', 'picone'];
    let action = ['took my', 'threw my', 'yelled at my', 'stolen my', 'bit my'];
    let possetion = ['homework', 'toe', 'car', 'shoe'];
    let where = ['on the street', 'tin myhouse', 'in my driveaway'];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex =  Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex =Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);



    return pronoun[pronounIndex] + ' ' +  subject[subjectIndex] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[whereIndex];
};