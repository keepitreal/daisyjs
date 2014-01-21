requirejs.config({
	paths: {
		'js': '../js/src',
		'test': '../test/spec',
		'jasmine': '../js/lib/jasmine/jasmine',
		'jasmine-html': '../js/lib/jasmine/jasmine-html',
		'jasmine-boot': '../js/lib/jasmine/boot'
	},
	shim : {
		'jasmine': {
			exports: 'jasmine'
		},
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		},
		'jasmine-boot': {
			deps: ['jasmine', 'jasmine-html'],
			exports: 'jasmine'
		}
	}
});

var specs = [
	'test/XmlSpec'
];

require(['jasmine-boot'], function () {
	require(specs, function () {
	  window.onload();
	});
});