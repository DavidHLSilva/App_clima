var win = Titanium.UI.createWindow({
	backgroundGradient: {
   		type: 'linear',
    	colors: ['#FFDD7C', '#FF6370'],
    	startPoint: { x: 0, y: 0 },
    	endPoint: { x: '100%', y: '100%' },
    	backFillStart:false
    },
	width: Titanium.UI.FILL,
	height: Titanium.UI.FILL,
	layout: 'vertical'
});

/**
 *  ---------------- ICONO ----------------------
 */
var view_icono = Titanium.UI.createView({
	backgroundColor: 'red',
	width: Titanium.UI.FILL,
	height: 	'20%',
	layout: 'absolute'
});

var img_icono = Titanium.UI.createImageView({
	image: 'assets/home/wind.png',
	height: '25%'
});

view_icono.add(img_icono);

/**
 *  ---------------- TEMPERATURA ----------------------
 */
var view_temp = Titanium.UI.createView({
	backgroundColor: 'blue',
	width: Titanium.UI.FILL,
	height: 	'50%',
	layout: 'absolute'
});

var wrap_temp = Titanium.UI.createView({
	backgroundColor: 'green',
	width: Titanium.UI.SIZE,
	height: Titanium.UI.SIZE,
	layout : 'vertical'
	
});

var lb_temp = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: '25º',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 64
	}
});

var lb_estado = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: 'Cloudy',
	top: '-10dpi',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 32
	}
});

var lb_viento = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: 'Wind: E 2mph',
	top: '20dpi',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 16
	}
});

var lb_humedad = Titanium.UI.createLabel({
	color:'#FFFFFF',
	width: Titanium.UI.FILL,
	text: 'Humidity: 51%',
	top: '0dpi',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 16
	}
});

wrap_temp.add(lb_temp);
wrap_temp.add(lb_estado);
wrap_temp.add(lb_viento);
wrap_temp.add(lb_humedad);
view_temp.add(wrap_temp);

/**
 *  ---------------- FECHA ----------------------
 */
var view_fecha = Titanium.UI.createView({
	backgroundColor: 'pink',
	width: Titanium.UI.FILL,
	height: 	'30%'
});

win.add(view_icono);
win.add(view_temp);
win.add(view_fecha);

win.open();
