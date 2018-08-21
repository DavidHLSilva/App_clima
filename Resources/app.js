var win = Titanium.UI.createWindow({
	backgroundGradient: {
   		type: 'linear',
    	colors: ['#7C1215', '#010D0F'],
    	startPoint: { x: '100%', y: 0 },
    	endPoint: { x: 0, y: '100%' },
    	backFillStart:false
   },
    theme: "Theme.AppCompat.Fullscreen",
	width: Titanium.UI.FILL,
	height: Titanium.UI.FILL,
	layout: 'vertical'
});

/**
 *  ---------------- ICONO ----------------------
 */
var view_baseIcono = Titanium.UI.createView({
	//backgroundColor: 'red',
	width: Titanium.UI.FILL,
	height: 	'25%',
	layout: 'vertical'
});

var view_separaIcono = Titanium.UI.createView({
	//backgroundColor: 'white',
	width: Titanium.UI.FILL,
	height: '50%'
});

var view_icono = Titanium.UI.createView({
	//backgroundColor: 'brown',
	width: Titanium.UI.FILL,
	height:'50%'
});

var img_icono = Titanium.UI.createImageView({
	image: 'assets/home/celsius.png',
	height: '100%',
	//top: '30dpi',
});

view_baseIcono.add(view_separaIcono);
view_baseIcono.add(view_icono);
view_icono.add(img_icono);

/**
 *  ---------------- TEMPERATURA ----------------------
 */
var view_temp = Titanium.UI.createView({
	//backgroundColor: 'blue',
	width: Titanium.UI.FILL,
	height: 	'45%',
	layout: 'absolute'
});

var wrap_temp = Titanium.UI.createView({
	//backgroundColor: 'green',
	width: Titanium.UI.SIZE,
	height: Titanium.UI.SIZE,
	layout : 'vertical'
	
});

var lab_temp = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: 'CDMX',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 64
	}
});

var lab_estado = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: '',
	top: '-10dp',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 32
	}
});

var lab_viento = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: '',
	top: '20dp',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 16
	}
});

var lab_humedad = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: '',
	top: '0dp',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 16
	}
});

wrap_temp.add(lab_temp);
wrap_temp.add(lab_estado);
wrap_temp.add(lab_viento);
wrap_temp.add(lab_humedad);
view_temp.add(wrap_temp);

/**
 *  ---------------- FECHA ----------------------
 */
var view_baseFecha = Titanium.UI.createView({
	//backgroundColor: 'pink',
	width: Titanium.UI.FILL,
	height: 	'30%',
	layout: 'vertical'
});

var view_dia = Titanium.UI.createView({
	//backgroundColor: 'purple',
	width: Titanium.UI.FILL,
	height: '45%',
	layout: 'vertical'
});

var view_horas = Titanium.UI.createView({
	//backgroundColor: 'white',
	width: Titanium.UI.FILL,
	height: '55%',
	layout: 'absolute'
});

var lab_dia = Titanium.UI.createLabel({
	color:'white',
	width: Titanium.UI.FILL,
	text: '',
	left: '25dp',
		font: {
		fontSize: 24
	}
});

var lab_mes = Titanium.UI.createLabel({
	color:'white',
	width: Titanium.UI.FILL,
	text: '',
	top: '-12dp',
	left: '25dp',
	font: {
		fontSize: 35
	}
});

var view_horaInicio = Titanium.UI.createView({
	//backgroundColor: 'orange',
	width: '50%',
	height: Titanium.UI.FILL,
	left: 0,
	layout: 'vertical'
});

var view_horaFin = Titanium.UI.createView({
	//backgroundColor: 'brown',
	width: '50%',
	height: Titanium.UI.FILL,
	right: 0,
	layout: 'vertical'
});

var lab_horaInicio = Titanium.UI.createLabel({
	color:'white',
	width: Titanium.UI.FILL,
	text: '',
	left: '25dp',
	top: '-3dp',
	font: {
		fontSize: 20
	}
});

var lab_horaFin = Titanium.UI.createLabel({
	color:'white',
	text: '',
	right: '25dp',
	top: '-3dp',
	font: {
		fontSize: 15
	}
});

var lab_lastU = Titanium.UI.createLabel({
	color: 'white',
	width: Titanium.UI.FILL,
	text: '',
	left: '25dp',
	top: '10dp',
	font: {
		fontSize: 12
	}
	
});

var lab_horaAct = Titanium.UI.createLabel({
	color:'white',
	text: '',
	right: '25dp',
	top: '15dp',
	font: {
		fontSize: 12
	}
});

view_baseFecha.add(view_dia);
view_baseFecha.add(view_horas);
view_dia.add(lab_dia);
view_dia.add(lab_mes);
view_horas.add(view_horaInicio);
view_horas.add(view_horaFin);
view_horaInicio.add(lab_lastU);
view_horaInicio.add(lab_horaInicio);
view_horaFin.add(lab_horaAct);
view_horaFin.add(lab_horaFin);
/**
 *  ---------------- VENTANA PRINCIPAL ----------------------
 */
win.add(view_baseIcono);
win.add(view_temp);
win.add(view_baseFecha);

win.open();

/**
 *  ---------------- LLAMADA AL SERVIDOR DEL CLIMA ----------------------
 */

var url = "http://api.apixu.com/v1/current.json?key=5e0db1a14b4f4086b63163048181708&q=Mexico";
var dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var fechaActual = new Date();

function actHora(){
	var horaActual = new Date();
	
	if (horaActual.getHours() <= 9)
		var hora = "0" + horaActual.getHours() + ":" + horaActual.getMinutes();
	else
		var hora = horaActual.getHours() + ":" + horaActual.getMinutes();
		
	if (horaActual.getMinutes() <= 9)
		hora = horaActual.getHours() + ":0" + horaActual.getMinutes();
	else
		hora = horaActual.getHours() + ":" + horaActual.getMinutes();
		
	lab_horaFin.setText(hora);
	setTimeout(actHora, 1000);
}

var client = Ti.Network.createHTTPClient({ 

     onload : function(e) {
     	var climaCDMX = JSON.parse(this.responseText);
     	var diaNoche = climaCDMX.current.condition.icon;
     	if (diaNoche[diaNoche.length-9] == "y")
     		diaNoche = "day";
     	else
     		diaNoche = "night";
     	var aux = climaCDMX.current.condition.icon;
     	var	iconC = aux[aux.length-7] + aux[aux.length-6] + aux[aux.length-5];
        var temp = climaCDMX.current.temp_c + "º";
        var estate = climaCDMX.current.condition.text;
        var air = climaCDMX.current.wind_dir + " " + climaCDMX.current.wind_kph + "kph";
        var hum = climaCDMX.current.humidity + "%";
        var day = dias[fechaActual.getDay()];
        var mont = meses[fechaActual.getMonth()] + ", " + fechaActual.getDate();
        var hourI = climaCDMX.current.last_updated[11] + climaCDMX.current.last_updated[12] + climaCDMX.current.last_updated[13] + climaCDMX.current.last_updated[14] + climaCDMX.current.last_updated[15];
        if(hourI[4] == undefined){
        	hourI = "0" + hourI[0] + hourI[1] + hourI[2] + hourI[3];
        }        
        var jsonClimaCDMX = {
        	temperatura : temp,
        	estado : estate,
            viento : air,
            humedad : hum,
            dia : day,
            mes : mont,
            horaInicio : hourI, 
            iconoE : diaNoche,
            iconoC : iconC
        };
        //console.log(jsonClimaCDMX);
        //console.log('!!!!ACTUALIZADO¡¡¡¡');
        actPantalla(jsonClimaCDMX);
     },
     
     onerror : function(e) {
     	Ti.API.debug(e.error);
        alert('Se produjo un error, revise su conexion a Internet');
     },
     timeout : 10000
 });
 
 client.open("GET", url);
 client.send();
 
 actHora();

function actPantalla(json){
	lab_temp.setText(json.temperatura);
	lab_estado.setText(json.estado);
	lab_viento.setText("Wind: " + json.viento);
	lab_humedad.setText("Humidity: " + json.humedad);
	lab_dia.setText(json.dia);
	lab_mes.setText(json.mes);
	lab_horaInicio.setText(json.horaInicio);
	lab_lastU.setText("Last Updated");
	lab_horaAct.setText("Current time");
	img_icono.setImage('assets/home/weather/64x64/'+json.iconoE+'/'+json.iconoC+'.png');
} 

win.addEventListener('click', function(e){
	//Titanium.API.info('estoy en el evento click en ventana principal');
	client.open("GET", url);
	client.send();
});
