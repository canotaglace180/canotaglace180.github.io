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
var now = new Date();

var year = "2017";
var isOk = true;
var min = 99999999999999999;
var index_r = -1;
jQuery.each(jsons, function(index, val) {
	var dateRun = new Date(year.concat("-").concat(val.mois_id).concat("-").concat(val.jour));
	// console.log(dateRun.getTime()-now.getTime())
	if (dateRun.getTime()-now.getTime()>0){
		if (dateRun.getTime()-now.getTime()<min){
				index_r = index;
				min = dateRun.getTime()-now.getTime();
		}
	}

});

if (index_r >= 0) {
	var div1 = document.createElement("div");
	div1.className = "date-course center-block";

	var jour = document.createElement("h1");
	var mois = document.createElement("h2");
	var jour_text = document.createTextNode(jsons[index_r].jour);
	var mois_text = document.createTextNode(jsons[index_r].mois);
	jour.appendChild(jour_text);
	mois.appendChild(mois_text);

	div1.appendChild(jour);
	div1.appendChild(mois);

	var div2 = document.createElement("div");
	div2.className = "name-course center-block";
	var titlebox = document.createElement("h5");
	var title = document.createElement("h1");
	var title_text = document.createTextNode(jsons[index_r].title);
	var titlebox_text = document.createTextNode("PROCHAINE COURSE");
	title.appendChild(title_text);
	titlebox.appendChild(titlebox_text);
	titlebox.style.fontsize = "12px";
	titlebox.style.marginBottom = "-12px";
	div2.appendChild(titlebox);
	div2.appendChild(title);


	isOk = false;
	document.getElementById("nextOne").appendChild(div1);
	document.getElementById("nextOne").appendChild(div2);


	document.getElementById("nextOne").style.width = (div1.offsetWidth+div2.offsetWidth+30).toString()+"px";
	console.log(div2.offsetWidth);


}








