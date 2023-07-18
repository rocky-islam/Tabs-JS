console.log('connect');


document.getElementById('btn-1').addEventListener('click', function(){
    // console.log('clicked btn 1');
    let section2 = document.getElementById('section-2');
    section2.style.display = 'none'
    let section3 = document.getElementById('section-3');
    section3.style.display = 'none'
    let section4 = document.getElementById('section-4');
    section4.style.display = 'none'

    let section1 = document.getElementById('section-1');
    section1.style.display ='block'
})


document.getElementById('btn-2').addEventListener('click', function(){
    // console.log('clicked btn 1');
    let section1 = document.getElementById('section-1');
    section1.style.display = 'none'
    let section3 = document.getElementById('section-3');
    section3.style.display = 'none'
    let section4 = document.getElementById('section-4');
    section4.style.display = 'none'

    let section2 = document.getElementById('section-2');
    section2.style.display ='block'
})



document.getElementById('btn-3').addEventListener('click', function(){
    // console.log('clicked btn 1');
    let section2 = document.getElementById('section-2');
    section2.style.display = 'none'
    let section1 = document.getElementById('section-1');
    section1.style.display = 'none'
    let section4 = document.getElementById('section-4');
    section4.style.display = 'none'

    let section3 = document.getElementById('section-3');
    section3.style.display ='block'
})



document.getElementById('btn-4').addEventListener('click', function(){
    // console.log('clicked btn 1');
    let section2 = document.getElementById('section-2');
    section2.style.display = 'none'
    let section3 = document.getElementById('section-3');
    section3.style.display = 'none'
    let section1 = document.getElementById('section-1');
    section1.style.display = 'none'

    let section4 = document.getElementById('section-4');
    section4.style.display ='block'
})