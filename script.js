var sound = new Howl({
    src: ['audio.mp3'],
    loop: true,
    onend: function() {
      console.log('Finished!');
    }
  });

var firstFlag = true;

$('.start').click(function(){
    openFullscreen();
    $('.stage1').fadeOut();
    firstFlag = true;
    fire_modal('cake_modal.png','Eiiitss!','Sebelum mulai bikin kue, siapin dulu earphone yukkk, karena aku pengen nadya bikin kue nya sambil dengerin lagu hihi, jadii yukk pasang earphone nya kalo udah langsung gasss bikin kue.');
})

progress = 1;

$('.modal_content button').click(function(){
    if(!firstFlag){
        progress++;
    }
    close_modal(progress)
})

function openFullscreen() {
    var elem = document.body;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

function close_modal(callback){
    modal.css('transform','translateY(-50%) scale(0)')
    if(firstFlag){
        setTimeout(function(){
            fire_modal('cake_modal.png','Yuk bikin kue!','Karena ini hari ulang tahun nadya, dan yahh aku gapunya bakat buat bikin kue yang bagus, terus aku liat2 juga nadya seneng banget kayanya teh bikin2 makanan gitu. Jadi maap2 nihh kalo ulang tahun kali ini nadya harus bikin kue ulang tahun nadya sendiri secara digital hihi. Mulai dari bikin adonan kue-nya, terus panggang di oven digital dan terakhir di hias. Selamat bersenang-senang dan selamat ulang tahun.');
            sound.play();
        },200);
        firstFlag = false;
    }else{
        if(progress > 4){
            setTimeout(function(){
                $('.block-hover').show();
                $('.card-book-birthday').show();
                $('.block-hover').fadeOut(5000);
            },600)
        }else{
            setTimeout(function(){
                $('.stage' + callback).fadeIn();
            },600)
        }
    }
}


function fire_modal(imgurl,title,content){

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title).show();
    modal.find('img').attr('src',imgurl);
    modal.find('p').html(content);
    setTimeout(function(){
        modal.css('transform','translateY(-50%) scale(1)')
    },1000)


}


mixing = false;
mixtimes = 0;

$('.mixer').click(function(){
    if(mixing == false){
        mixing = true
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function(){
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        },1000)
    }
    if(mixtimes == 6){
        $('.stage2').fadeOut();
        fire_modal('mix_modal.png','Asikk adonan nya jadii!','Mantapp keliatannya adonan nya udah oke nihh, so far so good. Nah sekarang ma nadya sok minum dulu biar ga dehidrasi haha kurang minum wae soalnya, biar nanti aku yang masukin adonan nya ke loyang, jadi nanti nadya tinggal masukin aja weh ya loyangnya ke oven, yaa perkiraan sihh sekitar 3 detik juga udah mateng.');

    }

})

$('.tin').draggable({
    revert:true
})
$( ".oven" ).droppable({
    drop: function( event, ui ) {
        $('.stage3').fadeOut();
        fire_modal('oven_modal.png','Adonan nya udah mateng nihh!','Ga sia2 emang latihan bikin cookies cau teh yaa haha, kue nya matang dengan baik pasti jadi kue ter-enak sih menurut aku. Nahh sekarang gass hias kue nya yukk pake bahan2 lain kaya selai, cokelat dan masih banyak lagi.');
    }
})

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function(){
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if(bases < 6){
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function(){
    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if(fillings < 7){
        add_filling(f)
    }
})

function add_sponge(t){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function(){
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
     $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})
function add_filling(f){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin(){
    $('h1,h2,.options,.startagain,.add').fadeOut();
    
    setTimeout(function(){
        $('.cakemake').fadeIn()
        $('.cakemake').animate({'margin-top':'0px'})
    },1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle(){
    var stages = $('.cakemake > div').length;
    var h = (stages/2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="candle.png" /></div>')
    $('svg').show()
    setTimeout(function(){
        $('.stage4').fadeOut()
        fire_modal('cake_modal.png','Horeeee!','Akhirnya jadi juga kue nya, kerenn sihh hasilnya haha emang bakatt yaa nadya bikin kuee, cantik banget kue nya. Oiya satu lagi, aku ada hadiah kecil buat nadya, tapii yaa hadiah nya sederhana sihh dan tentu nya digital juga wkwk maap yaa, jadii yaa semoga nadya suka');
    },8000);
    
}

$('.add').click(function(){
    fin();
})

$('.sa').click(function(){
    window.location.reload();
})