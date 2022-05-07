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