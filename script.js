var pages = [
{ sections : [
	{name:"Navigation",actions:[
		{name:"Move Cursor",description:"UP or DOWN or LEFT or RIGHT", command:"up down left right", page:7},
		{name:"Screen Navigation",description:"hold SHIFT + [ UP or DOWN or LEFT or RIGHT ]", command:"shifthold up down left right", page:7}]},
	{name:"Edition",actions:[
		{name:"Change Value",secondary:"fine",description:"hold EDIT + [ LEFT or RIGHT ]", command:"edithold left right", page:7},
		{name:"Change Value",secondary:"coarse",description:"hold EDIT + [ UP or DOWN ]", command:"edithold up down", page:7},
		{name:"Cut Value",secondary:"or set to default",description:"EDIT + OPTION", command:"edit option", page:7},
		{name:"YES",secondary:"in dialog",description:"EDIT", command:"edit", page:7},
		{name:"NO",secondary:"(or exit) in dialog",description:"OPTION", command:"option", page:7}]},
	{name:"Play",actions:[
		{name:"Play All Tracks",secondary:"from song cursor",description:"hold SHIFT + PLAY", command:"shifthold play" ,page:7},
		{name:"Mute Current Track",description:"hold OPTION + SHIFT",extra:"(latch mute by releasing OPTION first)", command:"optionhold shift", page:11},
		{name:"Solo Current Track",description:"hold OPTION + PLAY",extra:"(latch solo by releasing OPTION first)", command:"optionhold play", page:11},
		{name:"Clear All Mute",secondary:" and solos",description:"hold OPTION + hold SHIFT + PLAY", command:"optionhold shifthold play", page:11}]}
	]},{sections: [
	{name:"Selection",actions:[
		{name:"Enter Selection Mode",description:"hold SHIFT + OPTION",extra:"(tap OPTION to cycle through modes)", command:"shifthold option" ,page:7},
		{name:"Copy Selection",secondary:"(exit mode)",description:"OPTION", command:"option" ,page:7},
		{name:"Paste Copy Buffer",description:"hold SHIFT + EDIT", command:"shifthold edit" ,page:7}]},
	{name:"Song Screen",actions:[
		{name:"Play Song",secondary:"at cursor position",description:"PLAY", command:"play", page: 11},
		{name:"Cue Row",secondary:"while playing",description:"hold LEFT + PLAY", command:"lefthold play", page:11},
		{name:"Create",secondary:"new chain",description:"double-tap EDIT", command:"edit double", page: 11},
		{name:"Clone and Paste",secondary:"chain alone",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 11},
		{name:"Clone and Paste",secondary:"chain & phrases",description:"hold SHIFT + OPTION then double-tap EDIT", command:"shifthold option1st edit2nd double", page: 11},
		{name:"Solo Tracks",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page:11},
		{name:"Jump 16 Rows",secondary:"up or down",description:"hold OPTION + [ UP or DOWN ] ", command:"optionhold up down", page:11},
		{name:"Move Selection", description:"in selection mode, hold EDIT + [ UP or DOWN ]",command:"edithold up down", page: 11},
		{name:"Render Selection", description:"in selection mode, double-tap EDIT", command:"edit double", page: 11}]}
	]},{sections: [
	{name:"Chain Screen",actions:[
		{name:"Play Chain",secondary:"from cursor position",description:"PLAY", command:"play", page: 13},
		{name:"Create",secondary:"new phrase",description:"double-tap EDIT", command:"edit double"},
		{name:"Clone and Paste",secondary:"phrase",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 13},
		{name:"Jump to Track",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page: 13},
		{name:"Jump to Chain",secondary:"previous or next",description:"hold OPTION + [ UP or DOWN ]", command:"optionhold up down", page: 13}]},
	{name:"Phrase Screen",actions:[
		{name:"Play Phrase",secondary:"from cursor position",description:"PLAY", command:"play", page: 15},
		{name:"Create",secondary:"new instrument",description:"on instrument column, EDIT (double-tap)", command:"edit double", page: 15},
		{name:"Clone and Paste",secondary:"instrument",description:"hold SHIFT + OPTION then EDIT", command:"shifthold option1st edit2nd", page: 15},
		{name:"Jump to Track",secondary:"left or right",description:"hold OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right", page: 15},
		{name:"Jump to Phrase",secondary:"previous or next",description:"hold OPTION + [ UP or DOWN ] ", command:"optionhold up down", page: 15},
		{name:"Interpolate Values",description:"in selection mode (single column), hold SHIFT + EDIT", command:"shifthold edit", page: 15},
		{name:"Move Selection",description:"in selection mode (multi column), hold EDIT + [ UP or DOWN]", command:"edithold up down", page: 15}]}
		]},{sections: [
	{name:"Intrument Screen",actions:[
		{name:"Preview Instrument",description:"PLAY", command:"play"},
		{name:"Copy Instrument",description:"hold SHIFT + OPTION", command:"shifthold option"},
		{name:"Jump to Intrument",secondary:"previous or next",description:"OPTION + [ LEFT or RIGHT ] ", command:"optionhold left right"},
		{name:"Edit Parameter",description:"EDIT + [ Touchscreen LEFT and RIGHT ]", command:"edithold"},
		{name:"Map Parameter",description:"OPTION + [ Touchscreen LEFT and RIGHT or UP and DOWN ]", command:"optionhold"}]},
	{name:"Table Screen",actions:[
		{name:"Interpolate Values",description:"while in selection mode, hold SHIFT + EDIT", command:"shifthold edit", page: 21},
		{name:"Jump to Table",secondary:"previous or next",description:"OPTION + [ LEFT or RIGHT ] ", command:"option left right", page: 21}]},
	{name:"File Browser",actions:[
		{name:"Sort Directory",description:"SHIFT + OPTION", command:"shift option", page:9},
		{name:"Delete Selected File",description:"EDIT + OPTION", command:"edit option", page:9}]},
	{name:"Mixer Screen", actions:[
		{name:"Create Snapshot",description:"hold SHIFT + OPTION", command:"shifthold option", page:27},
		{name:"Recall Snapshot",description:"hold SHIFT + EDIT", command:"shifthold edit", page:27}]}]}]
	
$( document ).ready(function() {
		
	$("#recto").append(render_page(pages[0]));
	$("#recto").append(render_page(pages[3]));

	$("#verso").append(render_page(pages[1]));
	$("#verso").append(render_page(pages[2]));

	$(".to_hide").remove();
});

function render_page(page)
{
	new_page = $("<div class='page'>");

	$.each(page.sections, function(index, section)
	{
		new_section = $("<div class='section'>" + section.name + '</div>');
		$(new_page).append(new_section);
		$.each(section.actions, function(index, action)
		{
			var cloned = new $("#template").clone();
			$(cloned).removeAttr('id');
			$(".name", cloned).text(action.name);
			$(".secondary", cloned).text(action.secondary);
			$(".description", cloned).text(action.description);
			$(".extra", cloned).text(action.extra);
			
			$(".buttons", cloned).removeClass().addClass("buttons");
			$(".buttons", cloned).addClass("buttons " + action.command);
			$(new_page).append(cloned);
		});
	});
	return new_page;
}
