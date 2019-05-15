

function eatPieces(param) {
	var letters = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    if($('[data-posx="'+ letters[letters.indexOf(param.attr('data-posx')) +1] +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').attr('data-occuped') == 'yes') {
        $('[data-posx="'+ letters[letters.indexOf(param.attr('data-posx')) +1] +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').addClass('casePossible');
    }

    if($('[data-posx="'+ letters[letters.indexOf(param.attr('data-posx')) -1] +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').attr('data-occuped') == 'yes') {
        $('[data-posx="'+ letters[letters.indexOf(param.attr('data-posx')) -1] +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').addClass('casePossible');
    }
}


function movePion(param, bool) {
    var positionx = param.attr('data-posx');
    var positiony = param.attr('data-posy');
    if(bool == true) {
        if(param.children().attr('alt') != undefined) { // si la case sélectionnée contient bien une pièce
            if(param.children().attr('alt') == 'pion.noir') { // dans le cas où on a choisit le pion noir
                eatPieces(param);
                if(param.children().attr('data-position') == "initial") {
                    $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +1) +'"]').addClass('casePossible');
                    $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +2) +'"]').addClass('casePossible');

                    movesPossibles = ['' + positionx + (parseInt(positiony)+1) + '', '' + positionx+(parseInt(positiony) +2) +''];
                }
                else if(param.children().attr('data-position') == "modified") {
                    if($('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +1) +'"]').attr('data-occuped') == 'no') {
                        $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +1) +'"]').addClass('casePossible');

                        movesPossibles = ['' + positionx + (parseInt(positiony)+1) + ''];
                    }
                }
            }
            if(param.children().attr('alt') == 'pion.blanc') { // dans le cas où on a choisi un pion blanc
                if(param.children().attr('data-position') == "initial") {
                    $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -1) +'"]').addClass('casePossible');
                    $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -2) +'"]').addClass('casePossible');
                    movesPossibles = ['' + positionx + (parseInt(positiony)-1) + '', '' + positionx+(parseInt(positiony) -2) +''];
                }
                else {
                    if($('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -1) +'"]').attr('data-occuped') == 'no') {
                        $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -1) +'"]').addClass('casePossible');

                        movesPossibles = ['' + positionx + (parseInt(positiony)-1) + ''];
                    }
                }
            }
        }
    }

    if(bool == false) {
        if(param.children().attr('alt') != undefined) {
            if(param.children().attr('alt') == 'pion.noir') {
                $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +1) +'"]').removeClass('casePossible');
                $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) +2) +'"]').removeClass('casePossible');
            }
            if(param.children().attr('alt') == 'pion.blanc') {
                $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -1) +'"]').removeClass('casePossible');
                $('[data-posx="'+ positionx +'"][data-posy="'+ (parseInt(positiony) -2) +'"]').removeClass('casePossible');
            }
        }
    }
}
