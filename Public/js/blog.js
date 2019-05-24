
function postEdit(elem){
	elem = elem.parentElement.parentElement
	var Edit_Form = document.createElement("form");
	Edit_Form.method = "POST";
	Edit_Form.action = "/editPost";
	var Edit_Title = document.createElement("input");
	Edit_Title.type = "text";
	Edit_Title.name = "title";
	Edit_Title.value = elem.children[0].textContent;
	Edit_Title.setAttribute("class", "form-control");
	var Edit_Content = document.createElement("textarea");
	Edit_Content.rows = "3";
	Edit_Content.name = "content";
	Edit_Content.value = elem.children[3].textContent;
	Edit_Content.setAttribute("class", "form-control");
	var Submit_Div = document.createElement("div");
	Submit_Div.setAttribute("class", "content-edit");
	var Edit_Submit = document.createElement("input");
	Edit_Submit.type = "submit";
	Edit_Submit.value = "Submit";
	Edit_Submit.style = "float: right; margin: 10px";
	Edit_Submit.setAttribute("class", "btn btn-info");
	var Edit_Cancel = document.createElement("input");
	Edit_Cancel.type = "submit";
	Edit_Cancel.value = "cancel";
	Edit_Cancel.style = "float: right; margin: 10px";
	Edit_Cancel.setAttribute("class", "btn btn-info");
	var Edit_postId = document.createElement("input");
	Edit_postId.type = "hidden";
	Edit_postId.name = "postId";
	Edit_postId.value = elem.children[4].children[0].children[0].value;
	Edit_Form.appendChild(Edit_postId);
	Submit_Div.appendChild(Edit_Submit);
	Submit_Div.appendChild(Edit_Cancel);
	Edit_Form.appendChild(Edit_Title);
	Edit_Form.appendChild(Edit_Content);
	Edit_Form.appendChild(Submit_Div);
	while(elem.firstChild){
		elem.removeChild(elem.firstChild);
	}
	elem.style = "background: rgb(233, 225, 255)";
	elem.appendChild(Edit_Form);
}