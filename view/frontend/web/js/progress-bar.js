define([
    "jquery"
], function($){
        "use strict";
		
        return function(config, element) {
            //c
			var title = config.title;
			var percent = config.percent;
			var percent_label = config.percent_label;
			
			
			
			if (percent_label == '' || typeof percent_label == 'undefined' ) {
				percent_label = `${percent}%`;
			}
			
			var $title = $('<strong>').html(title);
			var $wrapper = $('<div>', { 'class' : 'progress-wrapper' });
			var $percent = $('<div>', { 'class' : 'progress-percent', 'style': `width:${percent}%` }).html(`<span>${percent_label}</span>`);
			$percent.appendTo($wrapper);
			
			
			$(element).append($title);
			$(element).append($wrapper);
        }
    }
)