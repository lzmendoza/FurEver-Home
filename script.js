/* =====================================
   FUREVER HOME JAVASCRIPT
   PART 1 — TERMS + REGISTRATION SYSTEM
===================================== */


document.addEventListener("DOMContentLoaded", function(){


    const termsModal =
    document.getElementById("termsModal");


    const registerModal =
    document.getElementById("registerModal");


    const continueBtn =
    document.getElementById("continueBtn");


    const agree =
    document.getElementById("agree");


    const browseBtn =
    document.getElementById("browseBtn");




    /* ===============================
       SHOW TERMS MODAL
    =============================== */


    if(termsModal){


        termsModal.style.display = "flex";


    }





    /* ===============================
       CONTINUE BUTTON
    =============================== */


    if(continueBtn){


        continueBtn.addEventListener(
            "click",
            function(){


                if(!agree.checked){


                    alert(
                        "Please agree to the Terms & Conditions first."
                    );


                    return;

                }



                termsModal.style.display="none";



                if(registerModal){

                    registerModal.style.display="flex";

                }



            }
        );


    }







    /* ===============================
       BROWSE AS GUEST
    =============================== */


    if(browseBtn){


        browseBtn.addEventListener(
            "click",
            function(){


                registerModal.style.display="none";


            }
        );


    }







    /* ===============================
       FLOATING REGISTER BUTTON
    =============================== */


    const floatingRegister =
    document.querySelector(".floating-register a");



    if(floatingRegister){


        floatingRegister.addEventListener(
            "click",
            function(e){


                e.preventDefault();


                if(registerModal){

                    registerModal.style.display="flex";

                }


            }
        );


    }



    /* ===============================
       REGISTER ACCOUNT
    =============================== */


    const registerButton =
    registerModal?.querySelector(
        "button:not(#browseBtn)"
    );



    if(registerButton){


        registerButton.addEventListener(
            "click",
            function(){



                const inputs =
                registerModal.querySelectorAll(
                    "input"
                );



                let empty=false;



                inputs.forEach(input=>{


                    if(
                        input.value.trim()===""
                    ){

                        empty=true;

                    }


                });





                if(empty){


                    alert(
                        "Please complete all registration fields."
                    );


                    return;


                }






                alert(
                    "🎉 Registration Successful!"
                );



                registerModal.style.display="none";



                inputs.forEach(input=>{

                    input.value="";

                });



            }
        );


    }








    /* ===============================
       CLOSE MODAL OUTSIDE CLICK
    =============================== */


    window.addEventListener(
        "click",
        function(e){



            if(e.target === termsModal){


                termsModal.style.display="none";


            }




            if(e.target === registerModal){


                registerModal.style.display="none";


            }




        }
    );



});

/* =====================================
   PART 2 — PET SEARCH + FILTER SYSTEM
===================================== */


document.addEventListener("DOMContentLoaded", function(){


    const searchInput =
    document.getElementById("searchPets");


    const filterButtons =
    document.querySelectorAll(".filter-btn");


    const petCards =
    document.querySelectorAll(".pet-card");



    let currentFilter = "all";





    /*
       FILTER FUNCTION
    */

    function filterPets(){


        const searchValue =
        searchInput ?
        searchInput.value.toLowerCase().trim()
        :
        "";



        petCards.forEach(card=>{


            const petName =
            card.querySelector("h2")
            ?.textContent
            .toLowerCase();



            const breed =
            card.querySelector(".breed")
            ?.textContent
            .toLowerCase();



            const matchesSearch =
            petName.includes(searchValue) ||
            breed.includes(searchValue);



            const matchesFilter =
            currentFilter === "all" ||
            card.classList.contains(currentFilter);




            if(
                matchesSearch &&
                matchesFilter
            ){

                card.style.display="block";


            }

            else{


                card.style.display="none";


            }



        });



    }







    /*
       SEARCH EVENT
    */

    if(searchInput){


        searchInput.addEventListener(
            "input",
            filterPets
        );


    }






    /*
       FILTER BUTTON EVENT
    */


    filterButtons.forEach(button=>{


        button.addEventListener(
            "click",
            function(){



                /*
                   Remove active class
                */

                filterButtons.forEach(btn=>{

                    btn.classList.remove("active");

                });




                /*
                   Add active class
                */

                this.classList.add("active");




                /*
                   Get selected category
                */

                currentFilter =
                this.dataset.filter;




                filterPets();



            }
        );


    });




});

/* =====================================
   PART 3 — ADOPTION FORM VALIDATION
===================================== */


document.addEventListener("DOMContentLoaded", function(){


    const adoptionForm =
    document.querySelector(".adoption-form");



    if(adoptionForm){



        adoptionForm.addEventListener(
            "submit",
            function(e){



                e.preventDefault();




                /*
                    Get all fields
                */

                const inputs =
                adoptionForm.querySelectorAll(
                    "input, textarea, select"
                );



                let valid = true;



                inputs.forEach(field=>{


                    if(
                        field.hasAttribute("required") &&
                        field.value.trim()===""
                    ){

                        valid=false;

                    }


                });






                if(!valid){


                    alert(
                        "Please complete all required fields."
                    );


                    return;


                }






                /*
                   Get specific information
                */

                const email =
                adoptionForm
                .querySelector(
                    'input[type="email"]'
                )
                .value
                .trim();




                const phone =
                adoptionForm
                .querySelector(
                    'input[type="tel"]'
                )
                .value
                .trim();




                const age =
                adoptionForm
                .querySelector(
                    'input[type="number"]'
                )
                .value;







                /*
                   Email Validation
                */

                const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



                if(!emailPattern.test(email)){


                    alert(
                        "Please enter a valid email address."
                    );


                    return;


                }






                /*
                   Philippine Phone Validation
                */


                const phonePattern =
                /^09\d{9}$/;



                if(!phonePattern.test(phone)){


                    alert(
                        "Phone number must start with 09 and contain 11 digits."
                    );


                    return;


                }







                /*
                   Age Validation
                */


                if(Number(age) < 18){


                    alert(
                        "You must be at least 18 years old to adopt."
                    );


                    return;


                }








                /*
                   Successful Submission
                */


                alert(
                    "🎉 Adoption Application Submitted Successfully!\n\nThank you for choosing FurEver Home."
                );



                adoptionForm.reset();




            }
        );



    }



});

/* =====================================
   PART 4 — CONTACT FORM VALIDATION
===================================== */


document.addEventListener("DOMContentLoaded", function(){



    const contactForm =
    document.getElementById("contactForm");



    if(contactForm){



        contactForm.addEventListener(
            "submit",
            function(e){



                e.preventDefault();





                const name =
                document.getElementById("contactName")
                .value
                .trim();



                const email =
                document.getElementById("contactEmail")
                .value
                .trim();



                const subject =
                document.getElementById("subject")
                .value
                .trim();



                const message =
                document.getElementById("message")
                .value
                .trim();







                /*
                    Check Empty Fields
                */


                if(
                    name === "" ||
                    email === "" ||
                    subject === "" ||
                    message === ""
                ){


                    alert(
                        "Please complete all fields before sending your message."
                    );


                    return;


                }







                /*
                    Email Validation
                */


                const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



                if(!emailPattern.test(email)){


                    alert(
                        "Please enter a valid email address."
                    );


                    return;


                }







                /*
                    Message Length Check
                */


                if(message.length < 10){


                    alert(
                        "Message should contain at least 10 characters."
                    );


                    return;


                }








                /*
                    Successful Send
                */


                alert(
                    "📩 Your message has been sent successfully!\n\nThank you for contacting FurEver Home."
                );



                contactForm.reset();




            }
        );



    }



});

/* =====================================
   PART 5 — EXTRA WEBSITE FEATURES
===================================== */


/* ===============================
   DARK MODE
=============================== */


document.addEventListener("DOMContentLoaded", function(){


    const darkModeBtn =
    document.getElementById("darkModeBtn");



    if(darkModeBtn){


        darkModeBtn.addEventListener(
            "click",
            function(){


                document.body.classList.toggle(
                    "dark-mode"
                );



                localStorage.setItem(
                    "darkMode",
                    document.body.classList.contains(
                        "dark-mode"
                    )
                );



            }
        );



        /*
           Remember user preference
        */


        if(
            localStorage.getItem("darkMode")
            === "true"
        ){

            document.body.classList.add(
                "dark-mode"
            );

        }



    }



});







/* ===============================
   SCROLL TO TOP BUTTON
=============================== */


document.addEventListener("DOMContentLoaded", function(){



    let scrollBtn =
    document.getElementById("scrollTop");



    /*
       Create only once
    */


    if(!scrollBtn){


        scrollBtn =
        document.createElement("button");


        scrollBtn.id="scrollTop";

        scrollBtn.innerHTML="⬆";


        document.body.appendChild(
            scrollBtn
        );


    }







    window.addEventListener(
        "scroll",
        function(){



            if(window.scrollY > 300){


                scrollBtn.style.display =
                "block";


            }

            else{


                scrollBtn.style.display =
                "none";


            }



        }
    );







    scrollBtn.addEventListener(
        "click",
        function(){


            window.scrollTo({

                top:0,

                behavior:"smooth"

            });


        }
    );



});







/* ===============================
   HERO GREETING MESSAGE
=============================== */


document.addEventListener("DOMContentLoaded", function(){



    const hero =
    document.querySelector(".hero");



    if(hero){



        /*
           Prevent duplicate greeting
        */


        if(
            !document.querySelector(
                ".welcome-message"
            )
        ){



            const greeting =
            document.createElement("h3");


            greeting.className =
            "welcome-message";



            const hour =
            new Date().getHours();




            if(hour < 12){


                greeting.textContent =
                "☀ Good Morning!";


            }


            else if(hour < 18){


                greeting.textContent =
                "🌤 Good Afternoon!";


            }


            else{


                greeting.textContent =
                "🌙 Good Evening!";


            }





            hero.prepend(
                greeting
            );



        }



    }



});







/* ===============================
   FOOTER CURRENT DATE
=============================== */


document.addEventListener("DOMContentLoaded", function(){



    const footer =
    document.querySelector("footer");



    if(footer){



        if(
            !footer.querySelector(
                ".current-date"
            )
        ){



            const date =
            document.createElement("p");



            date.className =
            "current-date";



            date.textContent =
            "📅 " +
            new Date()
            .toDateString();




            footer.appendChild(
                date
            );



        }



    }



});







/* ===============================
   WEBSITE LOADED MESSAGE
=============================== */


window.addEventListener(
    "load",
    function(){


        console.log(
            "🐾 Welcome to FurEver Home!"
        );


    }
);

/* =====================================
   PART 6 — DYNAMIC PET DETAILS SYSTEM
===================================== */


/* ===============================
   PET DATABASE
=============================== */


const petData = {


    buddy: {

        name:"Buddy",

        breed:"Golden Retriever",

        age:"2 Years Old",

        gender:"Male",

        type:"Dog",

        personality:
        "Friendly • Playful • Loyal",

        description:
        "Buddy is a cheerful Golden Retriever who loves playing fetch and spending time with people. He is vaccinated, healthy, and ready for a loving family.",

        image:
        "https://a.storyblok.com/f/125940/750x1022/5535905547/ollie-landingpages-bestdogfood-golderetriever-header-mobile.png"

    },



    max:{


        name:"Max",

        breed:"Shih Tzu",

        age:"1 Year Old",

        gender:"Male",

        type:"Dog",

        personality:
        "Calm • Gentle • Loving",

        description:
        "Max is a sweet Shih Tzu who enjoys relaxing indoors and spending time with people.",

        image:
        "https://cdn.britannica.com/05/234205-050-F8D2E018/Shih-tzu-dog.jpg"


    },




    bella:{


        name:"Bella",

        breed:"Labrador Retriever",

        age:"3 Years Old",

        gender:"Female",

        type:"Dog",

        personality:
        "Active • Friendly • Smart",

        description:
        "Bella is a loving Labrador Retriever who enjoys outdoor activities and meeting new people.",

        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdP8ZP51_Mh0CqLpPlnMJ3IMGDgP07rLKDkCKAYCdBspGAOt48G92M_z_o&s=10.jpg"


    },




    charlie:{


        name:"Charlie",

        breed:"Beagle",

        age:"2 Years Old",

        gender:"Male",

        type:"Dog",

        personality:
        "Curious • Playful • Energetic",

        description:
        "Charlie is a playful Beagle who loves exploring and spending time with his family.",

        image:
        "https://bestforpet.co.nz/wp-content/uploads/2025/11/Beagle.jpg"


    },





    luna:{


        name:"Luna",

        breed:"Persian Cat",

        age:"1 Year Old",

        gender:"Female",

        type:"Cat",

        personality:
        "Quiet • Gentle • Sweet",

        description:
        "Luna is a calm Persian cat who enjoys cozy places and gentle attention.",

        image:
        "https://supertails.com/cdn/shop/articles/persian-cat_516e270f-7989-4d3a-9769-4db063118ec6_1200x.jpg?v=1774674105.jpg"


    },






    milo:{


        name:"Milo",

        breed:"Siamese Cat",

        age:"2 Years Old",

        gender:"Male",

        type:"Cat",

        personality:
        "Smart • Active • Loving",

        description:
        "Milo is an affectionate Siamese cat who loves playing and interacting with people.",

        image:
        "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg"


    },






    nala:{


        name:"Nala",

        breed:"British Shorthair",

        age:"3 Years Old",

        gender:"Female",

        type:"Cat",

        personality:
        "Calm • Curious • Friendly",

        description:
        "Nala is a gentle British Shorthair who enjoys relaxing and playing with toys.",

        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_nAC1WrPtV_niw9CkIWdCzhNfpmoPVXr5SwRjOtGbm2uegSA-9fVHaE&s=10.jpg"


    },





    mochi:{


        name:"Mochi",

        breed:"Domestic Short Hair",

        age:"8 Months Old",

        gender:"Female",

        type:"Cat",

        personality:
        "Sweet • Playful • Affectionate",

        description:
        "Mochi is a young cat who loves attention and enjoys being around people.",

        image:
        "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2022/02-11/gray+stripe+domestic+shortahair+tabby+cat+resting+in+a+maroon+cat+tree+bed-min.jpg"


    }



};







/* ===============================
   LOAD PET DETAILS
=============================== */


document.addEventListener(
    "DOMContentLoaded",
    function(){



        const params =
        new URLSearchParams(
            window.location.search
        );



        /*
           Matches:
           pet-details.html?id=buddy
        */


        const selectedPet =
        params.get("id");





        if(
            selectedPet &&
            petData[selectedPet]
        ){



            const pet =
            petData[selectedPet];







            const image =
            document.getElementById(
                "petImage"
            );



            const name =
            document.getElementById(
                "petName"
            );



            const breed =
            document.getElementById(
                "petBreed"
            );



            const age =
            document.getElementById(
                "petAge"
            );



            const gender =
            document.getElementById(
                "petGender"
            );



            const personality =
            document.getElementById(
                "petPersonality"
            );



            const description =
            document.getElementById(
                "petDescription"
            );







            if(image){

                image.src =
                pet.image;

                image.alt =
                pet.name;

            }



            if(name){

                name.textContent =
                pet.name;

            }



            if(breed){

                breed.innerHTML =
                "<strong>Breed:</strong> "
                + pet.breed;

            }



            if(age){

                age.innerHTML =
                "<strong>Age:</strong> "
                + pet.age;

            }



            if(gender){

                gender.innerHTML =
                "<strong>Gender:</strong> "
                + pet.gender;

            }



            if(personality){

                personality.innerHTML =
                "<strong>Personality:</strong> "
                + pet.personality;

            }



            if(description){

                description.textContent =
                pet.description;

            }



        }



    }
);