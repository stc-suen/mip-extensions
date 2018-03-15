/**
 * sytown广告插件
 * 
 * @author sytown
 * @version 1.0.0
 */
define(function (require) {
    var customElement = require('customElement').create();
    var util = require('util');
    
    /**
     * build
     *
     */
    function build() {

        var _this = this;

        _this.addEventAction('close', function(event) {
            event.preventDefault();
            util.css(_this.element, 'display', 'none');
        });

    }

    customElement.prototype.build = build;
   
    return customElement;
});

