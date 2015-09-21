/**
 * @author AdrianRivera
 */

var images = [];
var viewingImages = [];
var dimensions = new Array(60);
var i = 2;
var k = 1;
var scrHeight = screen.height;
var scrnWidth = screen.width;
var img;
var zoomed = false;

var imageNum;
var height;
var width;
var id;
var section;

$(document).ready(function(){
	
	for( var j = 2; j < 60; j++){
		dimensions[j] = new Array(2);
	
		
	}
	
	for(i; i < 60; i++){
		images[i] = "img/ProcessedImages/ProcessedPaintings/" + i + ".jpg";
		
		img = new Image();
		
		img.onload = function(){		
			
			if(i == 60){
				i = 2;
			}
			
			
			dimensions[i][0] = $(this)[0].width;
			dimensions[i][1] = $(this)[0].height;
			console.log(i + ", " + dimensions[i][0] + ", " + dimensions[i][1]);
			i++;
			
			
		};
			img.src = images[i];
					
				
				
			
			
	}
		
	
	for(i = 1; i < 100; i++){
		viewingImages[i] = "img/ProcessedImages/ProcessedPaintings/" + i + ".jpg";	
	}
	
	i = 2;
			
	
	for(i; i < 12; i++){
		var imageDiv = document.createElement("div");
		
		var modal = document.createElement("section");
		var modalAttr = document.createAttribute("class");
		modalAttr.value = "modal fade bs-example-modal-lg" + i;
		var targetAttr = document.createAttribute("class");
		
		modal.setAttributeNode(modalAttr);
		var tabInd = document.createAttribute("tabindex");
		tabInd.value = "-1";
		var role = document.createAttribute("role");
		role.value = "dialog";
		var ariaLab = document.createAttribute("aria-labelledby");
		ariaLab.value = "myLargeModalLabel";
		
		 
		modal.setAttributeNode(tabInd);
		modal.setAttributeNode(role);
		modal.setAttributeNode(ariaLab);
		
		var innerDiv1 = document.createElement("div");
		var innerClass = document.createAttribute("class");
		innerClass.value="modal-dialog modal-lg";
		innerDiv1.setAttributeNode(innerClass);
		
		var innerDiv2 = document.createElement("div");
		var innerClass = document.createAttribute("class");
		var content = document.createElement("img");
		var source = document.createAttribute("src");
		var closeBtn = document.createElement("button");
			
		source.value = images[i];
		var type = document.createAttribute("type");
		type.value = "button";
		var btnClass = document.createAttribute("class");
		btnClass.value = "close";
		var dataDism = document.createAttribute("data-dismiss");
		dataDism.value = "modal";
		var ariaLabel = document.createAttribute("aria-label");
		ariaLabel.value = "Close";
		
		closeBtn.setAttributeNode(type);
		closeBtn.setAttributeNode(btnClass);
		closeBtn.setAttributeNode(dataDism);
		closeBtn.setAttributeNode(ariaLabel);
		
		content.setAttributeNode(source);
		var closeIcon = document.createElement("h2");
		closeIcon.innerHTML = "";
		closeBtn.appendChild(closeIcon);
		
		innerClass.value="modal-content glyphicon";
		innerDiv2.setAttributeNode(innerClass);
		
		innerDiv2.appendChild(closeBtn);
		innerDiv2.appendChild(content);
		
		innerDiv1.appendChild(innerDiv2);
		modal.appendChild(innerDiv1);
		
		var classAtt = document.createAttribute("class");
		var classAtt2 = document.createAttribute("class");
		classAtt.value = "preview";
		var thumbId = document.createAttribute("id");
		thumbId.value = "thumb" + i;
		imageDiv.setAttributeNode(classAtt);
		modal.setAttributeNode(thumbId);
		var action = document.createAttribute("onclick");
		action.value = "validateImageSize(this)";
		imageDiv.setAttributeNode(action);
		
		var anchorElem = document.createElement("a");
		var dataToggle = document.createAttribute("data-toggle");
		dataToggle.value = "modal";
		var dataTarg = document.createAttribute("data-target");
		dataTarg.value = ".bs-example-modal-lg" + i;
		var type = document.createAttribute("type");
		type.value = "button";
		anchorElem.setAttributeNode(dataToggle);
		anchorElem.setAttributeNode(dataTarg);
		anchorElem.setAttributeNode(type);
		
		var target = document.createAttribute("href");
		target.value = "#";
		anchorElem.setAttributeNode(target);
		var imageElem = document.createElement("img");
		var imageLoc = document.createAttribute("src");
		imageLoc.value = images[i];
		imageElem.setAttributeNode(imageLoc);
		anchorElem.appendChild(imageElem);
		
		var titleElem = document.createElement("h3");
		var titleNode = document.createTextNode("Title");
		titleElem.appendChild(titleNode);
		var descElem = document.createElement("p");
		var descNode = document.createTextNode("Lorem ipsum...");
		
		descElem.appendChild(descNode);
		imageDiv.appendChild(anchorElem);
		imageDiv.appendChild(titleElem);
		imageDiv.appendChild(descElem);
		imageDiv.appendChild(modal);
		
		if(images[i].width > 300){
			images[i].style.width = "50px";	
			}
			
		
		var bod = document.getElementById("column");
		bod.appendChild(imageDiv);
	}
	for(i=12; i < 22; i++){
		var imageDiv = document.createElement("div");
		var classAtt = document.createAttribute("class");
		var classAtt2 = document.createAttribute("class");
		classAtt.value = "preview";
		imageDiv.setAttributeNode(classAtt);
		
		
		var imageElem = document.createElement("img");
		var imageLoc = document.createAttribute("src");
		
		imageLoc.value = images[i];
		imageElem.setAttributeNode(imageLoc);
		var titleElem = document.createElement("h3");
		var titleNode = document.createTextNode("Title");
		titleElem.appendChild(titleNode);
		var descElem = document.createElement("p");
		var descNode = document.createTextNode("Lorem ipsum...");
		descElem.appendChild(descNode);
		imageDiv.appendChild(imageElem);
		imageDiv.appendChild(titleElem);
		imageDiv.appendChild(descElem);
		
		
			
		
		var bod = document.getElementById("column-two");
		bod.appendChild(imageDiv);
	}
	for(i=22; i < 30; i++){
		var imageDiv = document.createElement("div");
		var classAtt = document.createAttribute("class");
		var classAtt2 = document.createAttribute("class");
		classAtt.value = "preview";
		imageDiv.setAttributeNode(classAtt);
		
		
		var imageElem = document.createElement("img");
		var imageLoc = document.createAttribute("src");
		imageLoc.value = images[i];
		imageElem.setAttributeNode(imageLoc);
		var titleElem = document.createElement("h3");
		var titleNode = document.createTextNode("Title");
		titleElem.appendChild(titleNode);
		var descElem = document.createElement("p");
		var descNode = document.createTextNode("Lorem ipsum...");
		descElem.appendChild(descNode);
		imageDiv.appendChild(imageElem);
		imageDiv.appendChild(titleElem);
		imageDiv.appendChild(descElem);
		
		if(images[i].width > 300){
			images[i].style.width = "50px";	
			}	
			
		
		var bod = document.getElementById("column-three");
		bod.appendChild(imageDiv);
	}
	for(i=30; i < 40; i++){
		var imageDiv = document.createElement("div");
		var classAtt = document.createAttribute("class");
		var classAtt2 = document.createAttribute("class");
		classAtt.value = "preview";
		imageDiv.setAttributeNode(classAtt);
		
		
		var imageElem = document.createElement("img");
		var imageLoc = document.createAttribute("src");
		imageLoc.value = images[i];
		imageElem.setAttributeNode(imageLoc);
		var titleElem = document.createElement("h3");
		var titleNode = document.createTextNode("Title");
		titleElem.appendChild(titleNode);
		var descElem = document.createElement("p");
		var descNode = document.createTextNode("Lorem ipsum...");
		descElem.appendChild(descNode);
		imageDiv.appendChild(imageElem);
		imageDiv.appendChild(titleElem);
		imageDiv.appendChild(descElem);
		
		if(images[i].width > 300){
			images[i].style.width = "50px";	
			}	
			
		
		var bod = document.getElementById("column-four");
		bod.appendChild(imageDiv);
	}
	for(i=40; i < 55; i++){
		var imageDiv = document.createElement("div");
		var classAtt = document.createAttribute("class");
		var classAtt2 = document.createAttribute("class");
		classAtt.value = "preview";
		imageDiv.setAttributeNode(classAtt);
		
		
		var imageElem = document.createElement("img");
		var imageLoc = document.createAttribute("src");
		imageLoc.value = images[i];
		imageElem.setAttributeNode(imageLoc);
		var titleElem = document.createElement("h3");
		var titleNode = document.createTextNode("Title");
		titleElem.appendChild(titleNode);
		var descElem = document.createElement("p");
		var descNode = document.createTextNode("Lorem ipsum...");
		descElem.appendChild(descNode);
		imageDiv.appendChild(imageElem);
		imageDiv.appendChild(titleElem);
		imageDiv.appendChild(descElem);
		
		if(images[i].width > 300){
			images[i].style.width = "50px";	
			}	
			
		
		var bod = document.getElementById("column-five");
		bod.appendChild(imageDiv);
	}
		 
	});
	

	$(".modal-content:after").click(function(){
		alert("So far so good");
		
	});
	
	function validateImageSize(object){
		$(this).clearQueue();
		clickedObj = object;
		var innerImage = $(object).find("img");
		var numCount = 0;
		id = clickedObj.id;
		imageNum = id.toString().charAt(5).concat(id.toString().charAt(6));
		
		
		
		var image = new Image();
		
		image.onload = function() {
			
			width = $(this)[0].width;
			height = $(this)[0].height;
			
			
		};
		image.src = $(innerImage)[0].getAttribute("src");
		
		
		
			
			if(image.height > image.width){
				$(".modal-lg").css({"height": "auto"});
				$(".modal-lg").css({"width":"35%"});
			} else {
				$(".modal-lg").css({"width":"80%"});
				$(".modal-lg").css({"height":"auto"});
			}
			
		
	}
