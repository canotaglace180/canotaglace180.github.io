var jsons = [
		{
			"title" : "La course de la banquise",
			"location" : "Marina de Portneuf",
			"adresse" : "Rue du Quai",
			"jour" : "21",
			"mois" : "janvier",
			"mois_id" : "01",
			"heure" : "11:00",
			"url_facebook" : "https://www.facebook.com/banquiseportneuf/?fref=ts",
			"url_photos" : "http://banquiseportneuf.qc.ca/album-photo/course-2016/",
			"url_web" : "http://banquiseportneuf.qc.ca"
		},
		{
			"title" : "Course de Rimouski - Rikifest",
			"location" : "Marina du Port de Rimouski-Est",
			"adresse" : "Quai de Rimouski-Est",
			"jour" : "28",
			"mois" : "janvier",
			"mois_id" : "01",
			"heure" : "11:30",
			"url_facebook" : "https://www.facebook.com/Rikifestival/",
			"url_photos" : "#",
			"url_web" : "http://www.rikifest.com"
		},
		{
			"title" : "Course du Carnaval de Québec",
			"location" : "Bassin Louise",
			"adresse" : "170, Rue Dalhousie",
			"jour" : "05",
			"mois" : "février",
			"mois_id" : "02",
			"heure" : "13:00",
			"url_facebook" : "https://www.facebook.com/carnavaldequebec",
			"url_photos" : "#",
			"url_web" : "https://carnaval.qc.ca"
		},
		{
			"title" : "Défi canot à glace Montréal",
			"location" : "Vieux Port de Montréal",
			"adresse" : "Bassin de l'Horloge, Rue Quai de l'Horloge",
			"jour" : "12",
			"mois" : "février",
			"mois_id" : "02",
			"heure" : "12:45",
			"url_facebook" : "https://www.facebook.com/DefiCanotAGlaceMontreal",
			"url_photos" : "http://deficanotaglace.ca",
			"url_web" : "http://deficanotaglace.ca"
		}
		,
		{
			"title" : "Course canot à glace Sorel-Tracy",
			"location" : "Quai de Sorel-Tracy",
			"adresse" : "125, rue du Traversier",
			"jour" : "18",
			"mois" : "février",
			"mois_id" : "02",
			"heure" : "12:45",
			"url_facebook" : "https://www.facebook.com/Course-de-canot-à-glace-Sorel-Tracy-769036959817879/?fref=ts",
			"url_photos" : "http://www.coursedecanotaglacesorel-tracy.com",
			"url_web" : "http://www.coursedecanotaglacesorel-tracy.com"
		},
		{
			"title" : "La grande traversée Casino de Charlevoix",
			"location" : "Quai de l'isle-aux-Coudres",
			"adresse" : "Traverse St Joseph De La Rive ",
			"jour" : "25",
			"mois" : "février",
			"mois_id" : "02",
			"heure" : "14:00",
			"url_facebook" : "#",
			"url_photos" : "#",
			"url_web" : "http://www.grandetraversee.com"
		},
		{
			"title" : "Grand défi Chez Victor",
			"location" : "Bassin Louise",
			"adresse" : "170, Rue Dalhousie",
			"jour" : "04",
			"mois" : "mars",
			"mois_id" : "03",
			"heure" : "12:30",
			"url_facebook" : "https://www.facebook.com/GrandDefiChezVictor/",
			"url_photos" : "https://www.facebook.com/GrandDefiChezVictor/",
			"url_web" : "http://grand-defi.chezvictorburger.com"
		}

	];
     
        
function isOdd(num) { return num % 2;}

jQuery.each(jsons, function(index, val) {


	var background = document.createElement('div');
	if (isOdd(index)){
		background.style.backgroundColor = "rgba(255,255,255,0.15)";
	}
	

	var container = document.createElement('div');
	container.className = "container text-left sousBoiteEvenement";

	var container2 = document.createElement('div');
	container2.className = "row marketing";

	var container3 = document.createElement('div');
	container3.className = "col-lg-4 col-md-4 col-sm-4 col-xs-4 text-center";
	container3.style.marginTop = "-10px";

	var date = document.createElement("h1");
	var date_text = document.createTextNode(val.jour);
	date.appendChild(date_text);

	var mois = document.createElement("h2");
	var mois_text = document.createTextNode(val.mois);
	mois.style.marginTop = "-15px";

	mois.appendChild(mois_text);

	var time = document.createElement("h2");

	var time_image = document.createElement("span");
	time_image.style.fontSize = "30px";
	time_image.className = "glyphicon glyphicon-time";

	var time_text = document.createTextNode(val.heure);
	time.style.marginTop = "0px";
	time.appendChild(time_image);
	time.appendChild(time_text);

	container3.appendChild(date);
	container3.appendChild(mois);
	container3.appendChild(time);

	var containercenter = document.createElement("div");
	containercenter.className = "col-lg-8 col-md-8 col-sm-8 col-xs-8 text-left vcenter center-block";

	var title = document.createElement("h3");
	var title_text = document.createTextNode(val.title);
	title.appendChild(title_text);
	containercenter.appendChild(title);

	var locationCity = document.createElement("h4");
	var locationCity_text = document.createTextNode(val.location);
	locationCity.appendChild(locationCity_text);
	containercenter.appendChild(locationCity);

	var adresse = document.createElement("p");
	var adresse_span = document.createElement("span");
	adresse_span.className = "glyphicon glyphicon-map-marker";
	var adresse_text = document.createTextNode(" "+val.adresse);
	adresse.appendChild(adresse_span);
	adresse.appendChild(adresse_text);
	containercenter.appendChild(adresse);

	var containerIcone = document.createElement("div");
	containerIcone.className = "row marketing";


	if (val.url_facebook != "#") {
		var containerface = document.createElement("div");
		containerface.className = "col-lg-4 col-md-4 col-sm-4";
		containerface.style.marginBottom = "20px";
		var button1 = document.createElement("a");
		button1.className = "buttonDetail";
		button1.href = val.url_facebook;
		var button1_span = document.createElement("span");
		button1_span.className = "fa fa-facebook-official";
		var button1_text = document.createTextNode(" facebook");
		button1.appendChild(button1_span);
		button1.appendChild(button1_text);
		containerface.appendChild(button1);
		containerIcone.appendChild(containerface);
	}


	

	if (val.url_photos != "#") {
		var containerPhotos = document.createElement("div");
		containerPhotos.className = "col-lg-4 col-md-4 col-sm-4";
		containerPhotos.style.marginBottom = "20px";
		var button2 = document.createElement("a");
		button2.className = "buttonDetail";
		button2.href = val.url_photos;
		var button2_span = document.createElement("span");
		button2_span.className = "glyphicon glyphicon-picture";
		var button2_text = document.createTextNode(" Photos");
		button2.appendChild(button2_span);
		button2.appendChild(button2_text);
		containerPhotos.appendChild(button2);
		containerIcone.appendChild(containerPhotos);
	}

	
	if (val.url_web != "#") {
		var containerglobe = document.createElement("div");
		containerglobe.className = "col-lg-4 col-md-4 col-sm-4";
		containerglobe.style.marginBottom = "20px";
		var button3 = document.createElement("a");
		button3.className = "buttonDetail";
		button3.href = val.url_web;
		var button3_span = document.createElement("span");
		button3_span.className = "glyphicon glyphicon-globe";
		var button3_text = document.createTextNode(" Site Officiel");
		button3.appendChild(button3_span);
		button3.appendChild(button3_text);
		containerglobe.appendChild(button3);
		containerIcone.appendChild(containerglobe);
	}
	

	container2.appendChild(container3);
	containercenter.appendChild(containerIcone);
	container2.appendChild(containercenter);
	container.appendChild(container2);
	background.appendChild(container)

	document.getElementById("eventList").appendChild(background);


	});






