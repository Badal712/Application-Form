function showDate() {
	var dt = new Date ();
	d = dt.getDate();
	m = dt.getMonth();
	y = dt.getFullYear();
	date = d+"-"+m+"-"+y;
	document.f1.txtDate.value=date;
}
function showAge() {
	var cd,bd,cdd,cdm,cdy;
	
	cd = document.f1.txtDate.value; //current date
	bd = document.f1.dtDOB.value; //birth date

	cdd = cd.substring (0, cd.indexOf("-"));
	cdm = cd.substring (cd.indexOf("-")+1, cd.lastIndexOf("-"));
	cdy = cd.substring (cd.lastIndexOf("-")+1);
	
	bdd = bd.substring (bd.lastIndexOf("-")+1); //birth date date
	bdm = bd.substring (bd.indexOf("-")+1,bd.lastIndexOf("-")); //birth date month
	bdy = bd.substring (0, bd.indexOf("-")); //birth date year
	cdd1 = parseInt(cdd);
	bdd1 = parseInt(bdd);
	
	ctt=cdy*365+cdm*30+cdd1;
	btt=bdy*365+bdm*30+bdd1;
	
	atot=ctt-btt;
	yr = parseInt(atot/365);
	days =  parseInt(atot%365);
	mon =  parseInt(days/30);
	day =  parseInt(days%30);
	
	age=(yr+" yrs "+mon+" month "+day+" days ");
	document.f1.txtAge.value=age;
}
function showPhoto() {
	var path, photo;
	path = document.f1.filePhoto.value;
	photo = path.substring (path.lastIndexOf("\\")+1);
	document.f1.imgPhoto.src = photo;
}
function showCert() {
	var path1, cert;
	path1 = document.f1.fileCert.value;
	cert = path1.substring (path1.lastIndexOf("\\")+1);
	document.f1.imgCert.src = cert;
}