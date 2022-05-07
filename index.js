
     //-- les bar de navigation souligné --//

     var head = document.querySelectorAll('ul li a');
     for (let i = 0; i < head.length; i++) {

         head[i].addEventListener('mouseover', line);
         function line(){
             head[i].style.textDecoration = "line-through" ;
         }

         head[i].addEventListener('mouseout', unline);
         function unline(){
             head[i].style.textDecoration = "none";        
         }
     }
    //-- les boutons --//
     
     var button = document.querySelector('.button2');
       button.addEventListener('mouseover', hover);
       function hover() {
           button.style.color = "var(--primary-ad-color)" ;
           button.style.backgroundColor =  "var(--white-ad-color)" ;
           button.style.boxShadow = "5px 5px 5px gray";
           button.style.fontWeight = "800"

       }
       button.addEventListener('mouseout', unhover);
       function unhover() {
           button.style.backgroundColor =  "" ;
           button.style.color = "var(--white-ad-color)" ;
           button.style.boxShadow = "0 0 0 0";
           button.style.fontWeight = "500";

       }
    
        //-- les bouton1 en boucle --//

       var css = document.querySelectorAll('.button1, .form-button');
       for (let i = 0; i < css.length; i++){
        css[i].addEventListener('mouseover', myhover);
        function myhover() {
            css[i].style.color = "var(--white-ad-color)" ;
            css[i].style.backgroundColor =  "var(--primary-ad-color)" ;
            css[i].style.boxShadow = "5px 5px 10px white";
            css[i].style.fontWeight = "500";
           
 
        }
        css[i].addEventListener('mouseout', myunhover);
        function myunhover() {
            css[i].style.backgroundColor = "var(--white-ad-color)"  ;
            css[i].style.color = "var(--primary-ad-color)" ;
            css[i].style.boxShadow = "0 0 0 0";
            css[i].style.fontWeight = "500";
        }
       }

       //-- envoyer (boutton) --//

       var passed = document.querySelector('.form-button');
        passed.addEventListener('mouseover', pass);
        function pass() {
            passed.style.color = "var(--white-ad-color)" ;
            passed.style.backgroundColor =  "var(--primary-ad-color)" ;
            passed.style.boxShadow = "5px 5px 10px white";
            passed.style.fontWeight = "500";
           
 
        }
        passed.addEventListener('mouseout', unpass);
        function unpass() {
            passed.style.backgroundColor = ""  ;
            passed.style.color = "var(--white-ad-color)" ;
            passed.style.boxShadow = "0 0 0 0";
            passed.style.fontWeight = "500";
        }
       

        //-- les incones dans le footer --//

        var foot = document.querySelectorAll('.footer-icones');
        for (let i = 0; i < foot.length; i++) {
            foot[i].addEventListener('mouseover', move);
            function move(){
                foot[i].style.backgroundColor = "var(--primary-ad-color)";
                foot[i].style.color = "var(--white-ad-color)";
            }

            
            foot[i].addEventListener('mouseout', unmove);
            function unmove(){
                foot[i].style.backgroundColor = "var(--primary-ad-color)";
                foot[i].style.color = "var(--black-ad-color)";
            }
        }

        
               //-- zoom sur les 3  spider --//
        let spiderman = document.getElementsByClassName('card-img-top');
        for (let i = 0; i<spiderman.length; i++) {
            let image = spiderman[i];
            image.addEventListener('mouseover', function () {
                image.style.transform ='scale(5.1)'
            });
            image.addEventListener('mouseout', function () {
                image.style.transform ='scale(1)'
            });
        }


         //-- validation de formulaire --//

         document.getElementById("about").addEventListener("submit" , function (py) {
            py.preventDefault();
            let erreur;
            let name = document.getElementById("name");
            let firstname = document.getElementById("firstname");
            let taille = document.getElementById("taille");
            let poids = document.getElementById("Poids");
            let email = document.getElementById("email");
        
            if (!email.value) {
                erreur = "veuiller renseigner votre email";
            }
            if (!poids.value) {
                erreur = "veuiller renseigner votre poids";
            }
            if (!taille.value) {
                erreur = "veuiller renseigner votre taille";
            }
            if (!firstname.value) {
                erreur = "veuiller renseigner votre prenom";
            }
            if (!name.value) {
                erreur = "veuiller renseigner votre nom";
            }
        
            if (erreur) {
                py.preventDefault();
                document.getElementById("erreur").innerHTML = erreur;
                return false;
            } else {
                document.querySelector(".modale").style.display= 'block'; 
            }
        
        } )


                let ratio = .1;
        
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
          }
        
         let handelIntersect = function (entries , observer) {
            entries.forEach(function (entry) {
                if (entry.intersectionRatio > ratio) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                } 
            })
         }
        let observer = new IntersectionObserver(handelIntersect, options);
        observer.observe(document.querySelector('.fade'));
         
       





      
       