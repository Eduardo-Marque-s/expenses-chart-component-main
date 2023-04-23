const wed = document.querySelector('#wed1')
const result = document.querySelector('#resultado')
const thu = document.querySelector('#thu1')
const result2 = document.querySelector('#resultado2')

wed.addEventListener("click", function(){
if(result.style.display === 'none'){
    result.style.display = 'block';
}else{
    result.style.display = 'none';
}
});

thu.addEventListener("click", function(){
    if(result2.style.display === 'none'){
        result2.style.display = 'block';
    }else{
        result2.style.display = 'none';
    }
    });
    
