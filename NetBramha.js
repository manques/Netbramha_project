/*getside navbar*/
/* Using menu icon*/
/*Show navbar*/
function menu_icon(){
	document.getElementById("navbar_id").style.display="block";
}

/*hide navbar*/
function close_navbar(){
	document.getElementById("navbar_id").style.display="none";
}

/*//////////////////////////checkbox///////////////////////////////////////*/
function checkbox(e){
	var id = e.id;
	var flag = document.getElementById('checkbox-'+id).checked;
	var children = e.childNodes;
	var child;
	for (var i = 0; i < children.length; i++) {
		if(children[i].className == 'checkbox_inner'){
			child = children[i];
		}
	}

	if (flag) {
		document.getElementById('checkbox-'+id).checked = false;
		child.style.background = 'rgb(216, 216, 216)';
	}else{
		document.getElementById('checkbox-'+id).checked = true;	
		child.style.background = 'rgb(60, 177, 230)';	
	}
}

window.onload = function() {
	var checkboxes = document.getElementsByClassName("checkbox_outer");
	for(i=0;i<checkboxes.length;i++){
		checkboxes[i].addEventListener('click',function() {
			checkbox(this);
		});
	}
}

