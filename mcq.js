const question=[{
    'question':"What is our Planet",
    'a':"Earth",
    'b':"Mars",
    'c':"Saturn",
    'd':"Moon",
    "correct":"Earth"
},
{
    'question':"What is the light weight Metal",
    'a':"Iron",
    'b':"Zink",
    'c':"Lithium",
    'd':"Murcury",
    "correct":"Lithium"
},{
    'question':"What is produced by trees",
    'a':"Nitrogen",
    'b':"Sulphur",
    'c':"Oxygen",
    'd':"Carbondioxide",
    "correct":"Oxygen"
}]

//console.log(question[2]);


let num=0;

function answers()
{
    let check=question[0].correct;
    console.log(check);

}
//answers();
function all()
{
   // let check=question[0].correct;
let ques=document.querySelector("h4");
ques.innerHTML=question[num].question;
let alte=document.querySelectorAll("div .A");
console.log(alte);
alte[0].nextElementSibling.innerHTML=question[num].a;
alte[1].nextElementSibling.innerHTML=question[num].b;
alte[2].nextElementSibling.innerHTML=question[num].c;
alte[3].nextElementSibling.innerHTML=question[num].d;
//alte.innerHTML=question[0].a;
// Array.from(alte).forEach((item)=>
// {
//    console.log(item.innerHTML=question[num].a);
//    item.nextElementSibling.innerHTML=question[num].a;
//    //num++;

// });
// alte.forEach((item)={
//     console.log(item)
    
// });
}
all();
let result=0;
document.querySelector(".submit").addEventListener("click",()=>{
    let input=document.querySelectorAll("input");
    input.forEach((i)=>
        {
           
        if(i.checked)
            {

                let check=question[num].correct;
                if(check==i.nextElementSibling.innerHTML)
            {
                i.nextElementSibling.style.backgroundColor="lime";

                console.clear();
               console.log("correct");
               result++;
               alert("correct" + result);
               i.checked=false;  
               //n++;
            }
            else{
                i.nextElementSibling.style.backgroundColor="orange";
                console.clear();
                console.log("False");
                alert("False");
              //  n++;
            }
            setTimeout(()=>{
                num++;
                all();
                i.nextElementSibling.style.backgroundColor="white";
            },1200);
           
            }
            else{
                num=num;
            }
          if(question.length==num)
          {
            //console.log("Question Over");
            let s=document.querySelector(".container");
            s.innerHTML="Question Over ! Your Score is : " + result;

            s.style.backgroundColor="purple";
            s.style.color="white";
            s.style.textAlign="center";
            s.style.justifyContent="center";
            s.style.width="max-content";
            s.style.height="max-content";
            const nd1=document.createElement("button");
            nd1.setAttribute('class','nd');
            nd1.innerHTML="Play Again";
            s.appendChild(nd1);
            document.querySelector(".nd").addEventListener("click",()=>{
                //url("mcq.html");
                document.querySelector(".container").style.display="flex";
                let num=0;
                document.querySelector(".container").innerHTML=all(); 
                alert("start again");
            
            });
          }
    }
   
)


// })
   
});

//console.log(question.length);


