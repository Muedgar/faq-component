/*
 let faq = [
{
    title: "",
    content: ``
 },
...
{
    title: "",
    content: ``
}
]
*/

let faq = [
    {
        title: "How many team members can I invite?",
        content: `You can invite up to 2 additional users on the Free plan. There is no limit on 
        team members for the Premium plan.`
    },
    {
        title: "What is the maximum file upload size?",
        content: `No more than 2GB. All files in your account must fit your allotted storage space.`
    },
    {
        title: "How do I reset my password?",
        content: `Click “Forgot password” from the login page or “Change password” from your profile page.
        A reset link will be emailed to you.`
    },
    {
        title: "Can I cancel my subscription?",
        content: `Yes! Send us a message and we’ll process your request no questions asked.`
    },
    {
        title: "Do you provide additional support?",
        content: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`
    }
];



function populateFaq() {
    let faqContent = document.querySelector(".faq-content");

    faq.forEach((fq,index) => {
        let faqInfo = document.createElement("div");
        faqInfo.setAttribute("class","faq-info");
        faqInfo.setAttribute("id",`faqInfo${index}`);

        faqInfo.addEventListener("click", () => {{
            handleClick(`faqInfo${index}`);
        }});

        let question = document.createElement("div");
        question.setAttribute("class","question");
        
        let pOne = document.createElement("p");
        pOne.innerHTML = fq.title;

        let span = document.createElement("span");
        let img = document.createElement("img");
        img.setAttribute("src","./images/icon-arrow-down.svg");
        img.setAttribute("aria-hidden", "true");

        span.appendChild(img);

        question.appendChild(pOne);
        question.appendChild(span);

        faqInfo.appendChild(question);

        let answer = document.createElement("div");
        answer.setAttribute("class","answer");
        
        let pTwo = document.createElement("p");
        pTwo.innerHTML = fq.content;

        answer.appendChild(pTwo);

        faqInfo.appendChild(answer);

        faqContent.appendChild(faqInfo);
    })
}

populateFaq();

document.getElementById("faqInfo0").click();

function handleClick(fq) {
    let faqInfo = document.getElementById(fq);
   

    // for all faqInfo classes remove styles

    document.querySelectorAll(".faq-info").forEach((element) => {
        // remove color
        element.children[0].children[0].style.color = "hsl(240, 4%, 34%)";
        element.children[0].children[1].children[0].style.transform = "rotateZ(0deg)";
        // remove height
        element.children[1].style.height = "0px";
    });

    // clicked faqInfo add styles
    // remove color
    faqInfo.children[0].children[0].style.color = "black";
    // remove height
    faqInfo.children[1].style.height = "fit-content";
    faqInfo.children[0].children[1].children[0].style.transform = "rotateZ(180deg)";
}