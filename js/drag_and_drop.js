/****************************
*  
*  Demonstration of jQuery Draggable and Droppable plugins
*
****************************/

$(document).ready(init);

function init(){
  // ------------- ������ ��� ��-�� draggable---- ---------------
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").draggable({		// ����� �������������
    cursor: 'move',					// ��� ������� ��� ��������������
    opacity: 0.5,
  });
  // ------------- draggable ��������� ������ ������� -----------
  $("#skeleton .head").draggable({
    grid: [20, 20],
    containment:'parent',		// ������������ ������� �������������� (parent (������������ �������), document (������� ��������), window (����), [x1, y1, x2, y2])
    revert: true,						// ����� �� ������� ��������� �� ���� ����� ����� ��������������
    revertDuration: 1000,		// �� ����� ����� ������� ����� ��������� �� ���� ����� ����� ��������������
    helper : 'clone',				// � �������� ������������� �� ������� �drop� ��� ������� ����� ����������
    drag : function(event, ui) {
      var a=ui.position.top;
      var b=ui.offset.top;
      $('#res').text('What are you doing? It`s my head!! [position] parent: '+a+' abs: '+b);
    },
    stop: function(event, ui) {
      $('#res').text('I Kill You!');
    }
  });
  // ------------- droppable ��������� ������ ������� -----------
  $("#skeleton .head").droppable({
    accept: '.head',				// ����� ��������� ������ �� ��������, ������� �������� �� ���������
    activeClass: 'active',	// ����� �������� � �������� �������� � ������ ������ �����������
    hoverClass: 'hover',		// ����� �������� � �������� �������� � ������, ����� ������������ ������� �������� ��� ������� ���������
    drop: function(){	
      $('#res1').text($('#res1').text() + " Head: +1 ");  // $(this) - drop, $(ui.draggable) - drag
    },
    stop: function(event, ui) {
      $('#res').text('I Kill You!');
    },
    activate: function(){	
      $('#res').text("Oooh yeees, give me this head.. =%-) ");
      $("#skeleton .head").html('<img src="images/skeleton/s_head_give_it_to_me.png" />');
    },
    deactivate: function(){	
      $('#res').text("Oooh yeees, give me this head.. =%-) ");
      $("#skeleton .head").html('');
    },
    over : function(){	
      $('#res').text("nyam-nyam.. mmm..");
    },
    out  : function(){
      $('#res').text("OH, noooo !!! Give it to me  >:-[ ");
      $('#res1').text($('#res1').text() + " Head: -1 ");
    },
  });
  // ------------- ������ ������ ������������ � ������ ������ ���� --------
  $(".head").draggable({
    snap: true
  });
  // ------------- ������ ������ ����� �� ������������ -----------
  $("#zombie .head").draggable("destroy");  	// ������� ��� ���������������� ������� Draggable. 
  // ------------- ���� ����� ����� �������� �� ������  ----------- 
  $("#zombie").draggable({
    handle: ".head"  			// ����������, �� ����� ������� ������ ������� �������������� ��������������. 
  });
  
  $(".head, .lhand, .body, .rhand, .lfoot, .rfoot").css('position', 'absolute');	// cmall bug fix for chrome :)
  
}


// ##################################### some information #############################################

/* DRAGGABLE

	axis - ������������ �������������� �������� ���� �� ����������� (x) ���� �� ��������� (y) ��� ���������.

	delay - ���������� ����� � �������������, �� ��������� ��������, �������� �������������� 

	distance - ���������� ���������� � ��������, ������� ��������� ���� ������ ������ ����� ����, ��� �� ������ �� ������ ����, ������ ��� �������� ��������������

	zIndex - ���������� �������� �������� z-index (����� ����) ������������� ��������. 
	
	disable/enable - �������� ���������/�������� ������ ���� ���������������� ������� Draggable
	
*/


/* DROPPABLE

	greedy - ���� �������� ������������, ���� ������� ������� �������� ��������� � ������ ������� �������. �� ��������� �������� ����� �������� false. ���� ���������� � true, �� ����� ����� ����������� �� ���������� ������� �������, �� �� � �������-��������.

	tolerance - ����������, ����� ����� ����������� "�����" ��������, ��� ���������� ��� ��� ������� ���������. �������� ��������� ��������: 
		- intersect - ������������ ������� �������� ������� ���� �� �� 50% (�������� �� ���������),
		- fit � ������������ ������� ��������� ����� � ������� �������,
		- pointer � ��������� ���� ����� � ������� �������,
		- touch � ������������ ������� ������� ������� ��������.
		
	��������� ���� ���������� ������� � ���������:
		activate - ������� ��������� � ������� �����������.
		deactivate - ������� ��������� � ������ ��������� �����������.
		over - ������� ��������� ��� ����� ������������� �������� � �������.
		out - ������� ��������� ��� ������ ������������� �������� �� ��������.
		drop - ������� ��������� � ������ "������" ������������� �������� � �������.

*/

/* some links

	http://www.site-do.ru/js/jquery11.php
	http://www.site-do.ru/js/jquery10.php
	http://www.simplecoding.org/drag-drop-s-ispolzovaniem-jquery-ui.html
	http://printables.kaboose.com/printable-monsters.html
	http://www.xiper.net/collect/js-plugins/ui/drag-n-drop.html
	http://www.xiper.net/collect/js-plugins/ui/easydrag.html		
	http://jqueryui.com/demos/draggable/#sortable
	http://www.answerium.com/article33/
	http://www.coolwebmasters.com/tutorials/1071-drag-and-drop-how-to-drag-and-drop-objects.html
	http://www.1stwebdesigner.com/freebies/drag-drop-jquery-plugins/

*/





