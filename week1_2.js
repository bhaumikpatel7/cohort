// compiled and interpreted language


/*compiled language
1.first need to compile then need to run
2.usually dont compile if there is an error
3.ex.C++

Interpreted Language
1.usually go line by line
2.can run partially if the error comes later
3.ex. JS Python


*/

function greet(){
   let firstName = "Bhaumik ";
   let lastName = "Patel"
   console.log("Good morning " + firstName + lastName);
}

//greet();

function greetGender(){

    gender = 'male'
    if (gender == 'male')
        console.log("Good Morning Male");
    
    else 
        console.log("Good Morning Female");
      
}

//greetGender()

function count(){
    let sum = 0
    for (let index = 1; index < 1001; index++) {
        
        sum = index+sum;
        console.log(index);
    }
    console.log(sum);
}
// count()

const num = [1,2,3,4,5,6,7,8,9]

for(let i = 0;i< num.length;i++){
    if(num[i] % 2 == 0){
       // console.log(num[i]);
    }
}

const user1 = {
    firstName1 : "Bhaumik",
    gender : "male"

}

console.log(user1["gender"]);