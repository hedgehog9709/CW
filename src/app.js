const _body = $('body');
const _window = $(window);
const _document = $(document);

var window_width = _window.width();
var window_height = _window.height();
var scrolled = _window.scrollTop();

/*
 * Vendor Prefixes
 *
 * Helper self-invoking function which
 * stores css3 prefixes for current browser 
 */

const prefix = (function () {
	var styles = window.getComputedStyle(document.documentElement, ''),
		pre = (Array.prototype.slice
			.call(styles)
			.join('') 
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
		)[1],

		dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];

		return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		};
})();

/*
 * Responsive breakpoints
 */

const break_points = {
	lg: 1024,
	md: 992,
	sm: 768,
}

const App = {
	init: function(){

	},

	onResize: function(){

	},

	onScroll: function(){

	}
}

_document.ready(App.init);

_window.on('load resize', function(){
	window_width = _window.width();
	window_height = _window.height();

	App.onResize();
});

_window.scroll(function(){
	scrolled = _window.scrollTop();

	App.onScroll();
});



