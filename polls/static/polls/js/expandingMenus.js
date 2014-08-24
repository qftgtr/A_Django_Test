/*	Expanding Menus for Indexhibit
 *		uses jquery
 *
 *	Created by Ross Cairns  Mar 2008
*/


function expandingMenu(num) {
	var speed = 300;
	var item_title = $("#menu ul").eq(num).children(":first");
	var items = $("#menu ul").eq(num).children(":gt(0)");
	$("#menu ul").eq(num).children(".active").children().css("color","#900");

	/* add click functions + pointer to title */
	item_title.css({cursor:"pointer"});
	
	/* hide items if not active */
	if ($("#menu ul").eq(num).children(".active").length==0) {
		items.each(function() {$(this).hide()});
		
		item_title.toggle(
			function () {items.show(speed);}, 
			function () {
				items.each(function() {
					if (!$(this).is(".active"))
						$(this).hide(speed);
				});
			}
		);
	}
/*	items.each(function() {
		if ($(this).is(".active")) {
			$(this).show();
			//$(this).children().css("color", "#006");
		}
		else
			$(this).hide();
		});*/
}