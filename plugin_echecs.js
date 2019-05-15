(function($) {
	$.fn.plugin_chess=function() {

		var letters = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

		/***********************************************************************\
							Partie pour créer le plateau
		\***********************************************************************/
        function makeChessboard() {
            var i = 1, j = 1, k = 0, l = 0, m = 0, n = 1, o = 0;
            var listCarre =  document.getElementsByClassName('carre');
            var listSpanVide = document.getElementsByClassName('positiony');

            // créer les lignes et les colonnes
            for(i; i < 9; i++) {
                $('.grille').append('<div class="row" data-posy="' + i +'"></div>');
				if(i == 8) {
					$('.grille').append('<div class="rowlast"></div>');
				}
            }

            for(j; j < 10; j++) {
                $('.row').append('<div class="carre" data-occuped="no" data-posx="' + letters[j] + '"><div class="positiony"></div></div>');
            }

			for(n; n < 10; n++) {
                $('.rowlast').append('<div class="case-a">'+ letters[n] +'</div>');
            }

            for(k; k < listCarre.length; k +=1) {
                $(listCarre[k]).attr('data-posy', $(listCarre[k]).parent().data('posy'));
            }

            // créer les cases en noirs
            for(l; l < listCarre.length; l++) {
				if($(listCarre[l]).data('posx') != 9) {
					if($(listCarre[l]).data('posy') % 2 == 0) {
						if( $(listCarre[l]).data('posx') == 'a'
							|| $(listCarre[l]).data('posx') == 'c'
							||  $(listCarre[l]).data('posx') == 'e'
							||  $(listCarre[l]).data('posx') == 'g') {
						 		$(listCarre[l]).addClass('carregrey');
						}
	                }

	                if($(listCarre[l]).data('posy') % 2 != 0) {
						if($(listCarre[l]).data('posx') == 'b'
							|| $(listCarre[l]).data('posx') == 'd'
							|| $(listCarre[l]).data('posx') == 'f'
						 	|| $(listCarre[l]).data('posx') == 'h') {
							 $(listCarre[l]).addClass('carregrey');
						}
	                }
				}
				if($(listCarre[l]).data('posx') == 'undefined') {
					$(listCarre[l]).addClass('case-1');
				}
            }

			for(o; o < listSpanVide.length; o +=1) {
				$(listSpanVide[o]).text($(listSpanVide[o]).parent().data('posy'));
			}

			for(m; m < listSpanVide.length; m +=1) {
				if($(listSpanVide[m]).parent().data('posx') == 'undefined') {
					$(listSpanVide[m]).addClass('visible');
				}
			}
        }

		/***********************************************************************\
							Partie pour positionner les pièces
		\***********************************************************************/

		function placePieces() {
			var i = 1, l=0;
			var listSpanOccuped = document.getElementsByClassName('pieces');


			// on place les pions
			for(i; i < 9; i++) {
				$('[data-posx='+letters[i]+'][data-posy=2]').children('div').replaceWith('<img class="pieces" src="images/pionnoir.png" alt="pion.noir"/>');
				$('[data-posx='+letters[i]+'][data-posy=7]').children('div').replaceWith('<img class="pieces" src="images/pionblanc.png" alt="pion.blanc"/>');
				// $('[data-posx='+letters[i]+'][data-posy=2]').attr('data-occuped', 'yes');
				// $('[data-posx='+letters[i]+'][data-posy=7]').attr('data-occuped', 'yes');
			}

			// on place les tours
			$('[data-posx=a][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/tournoir.png" alt="tour.noir"/>');
			$('[data-posx=h][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/tournoir.png" alt="tour.noir"/>');
			$('[data-posx=a][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/tourblanc.png" alt="tour.blanc"/>');
			$('[data-posx=h][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/tourblanc.png" alt="tour.blanc"/>');

			// on place les cavaliers
			$('[data-posx=b][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/cavaliernoir.png" alt="cavalier.noir"/>');
			$('[data-posx=g][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/cavaliernoir.png" alt="cavalier.noir"/>');
			$('[data-posx=b][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/cavalierblanc.png" alt="cavalier.blanc"/>');
			$('[data-posx=g][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/cavalierblanc.png" alt="cavalier.blanc"/>');

			// on place les fous
			$('[data-posx=c][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/founoir.png" alt="fou.noir"/>');
			$('[data-posx=f][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/founoir.png" alt="fou.noir"/>');
			$('[data-posx=c][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/foublanc.png" alt="fou.blanc"/>');
			$('[data-posx=f][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/foublanc.png" alt="fou.blanc"/>');

			// on place les reines
			$('[data-posx=d][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/damenoir.png" alt="dame.noir"/>');
			$('[data-posx=d][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/dameblanc.png" alt="dame.blanc"/>');

			// on place les rois
			$('[data-posx=e][data-posy=1]').children('div').replaceWith('<img class="pieces" src="images/roinoir.png" alt="roi.noir"/>');
			$('[data-posx=e][data-posy=8]').children('div').replaceWith('<img class="pieces" src="images/roiblanc.png" alt="roi.blanc"/>');

			// on change les data-occuped en yes
			for(l; l < listSpanOccuped.length; l++) {
				$(listSpanOccuped[l]).parent().attr('data-occuped', 'yes');
			}
		}


		/***********************************************************************\
							Partie pour les options
		\***********************************************************************/
		$('#echecs').append('<div class="menu"></div>');
		$('.menu').append('<div class="buttons"></div>');
		$('.buttons').append('<button type="button" class="begin">Commencer</button>')

		var game = false;
		$('.begin').click(function(){
			placePieces();
			game = true;
		});


		/***********************************************************************\
							Partie débuter le tout
		\***********************************************************************/
		// on créé le plateau
		$('#echecs').append("<div class='partGame'></div>");
		$('.partGame').append('<div class="grille"></div>');
		$('.grille').css('width', '900px');
		makeChessboard();

		/***********************************************************************\
							Partie pour les mouvements
		\***********************************************************************/

		// mouvements pour le pion
		function movePion(param, bool) {
			if(bool == true) {
				if(param.children().attr('alt') != undefined) {
					if(param.children().attr('alt') == 'pion.noir') {
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').addClass('casePossible');
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +2) +'"]').addClass('casePossible');

						movesPossibles = ['' + param.attr('data-posx') + (parseInt(param.attr('data-posy'))+1) + '', '' + param.attr('data-posx')+(parseInt(param.attr('data-posy')) +2) +''];
					}
					if(param.children().attr('alt') == 'pion.blanc') {
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -1) +'"]').addClass('casePossible');
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -2) +'"]').addClass('casePossible');

						movesPossibles = ['[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -1) +'"]', '[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -2) +'"]'];

					}
				}
			}
			if(bool == false) {
				if(param.children().attr('alt') != undefined) {
					if(param.children().attr('alt') == 'pion.noir') {
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +1) +'"]').removeClass('casePossible');
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) +2) +'"]').removeClass('casePossible');
					}
					if(param.children().attr('alt') == 'pion.blanc') {
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -1) +'"]').removeClass('casePossible');
						$('[data-posx="'+ param.attr('data-posx') +'"][data-posy="'+ (parseInt(param.attr('data-posy')) -2) +'"]').removeClass('casePossible');
					}
				}
			}
		}

		// $('[data-posx="'+ ($(element).data('posx') +1) +'"][data-posy="'+ $(element).data('posy') +'"]').data('color');

		/***********************************************************************\
							Partie pour les animations de jeux
		\***********************************************************************/
		var piecesCoordX = '';
		var piecesCoordY = '';
		var selectPieces = false;


		$('.carre').mouseenter(function() {
			if(game == true) {
				$(this).addClass('hover');
			}
		});

		$('.carre').mouseleave(function() {
			if(game == true) {
				$(this).removeClass('hover');
			}
		});

		$('.carre').click(function() {
			if(game == true) {
				if($(this).children().attr('alt') != undefined) { // si on clique bien sur une image avec une pièce
					if(selectPieces == false) { // si aucune n'a pas encore été sélectionné
							$('.carre').removeClass('casePossible');
							piecesCoordX = $(this).attr('data-posx');
							piecesCoordY = $(this).attr('data-posy');
							selectPieces = true;
							$(this).addClass('caseSelected');
							movePion($(this), true);
					}
					else {  // sinon, donc si une pièce a bien été sélectionné
						if($(this).children().attr('alt') != undefined) { // si on clique sur une autre pièce pour en sélectionner une autre
							if(piecesCoordX != '' && piecesCoordY != '') {
								if($(this).attr('data-posx') == piecesCoordX && $(this).attr('data-posy') == piecesCoordY) {
									piecesCoordX = '';
									piecesCoordY = '';
									selectPieces = false;
									$(this).removeClass('caseSelected');
									movePion($(this), false);
								}
								else if($(this).attr('data-posx') != piecesCoordX || $(this).attr('data-posy') != piecesCoordY) {
									$('[data-posx="'+ piecesCoordX +'"][data-posy="'+ piecesCoordY +'"]').removeClass('caseSelected');
									piecesCoordX = $(this).attr('data-posx');
						            piecesCoordY = $(this).attr('data-posy');
						            selectPieces = true;
						            $(this).addClass('caseSelected');
									$('.carre').removeClass('casePossible');
									movePion($(this), true);
								}
							}
						}
					}
				}
				if($(this).children().attr('alt') == undefined) {
					// on doit vérifier si la case sélectionnée est disponible dans la liste de moves possibles
						var choice = $(this).attr('data-posx') + $(this).attr('data-posy');
						if(movesPossibles.indexOf(choice) != -1) {
							console.log('mouvemnt possible');
						}
						else {
							console.log('et non désolé');
						}
				}
			}
		});

    }
})(jQuery);
