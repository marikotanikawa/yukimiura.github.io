(function(){

    const show = document.getElementById('show');
    const hide = document.getElementById('hide');
    
    show.addEventListener('click',function(){
     document.body.className = 'open';
    });

    hide.addEventListener('click',function(){
     document.body.className = '';
    });

})();
