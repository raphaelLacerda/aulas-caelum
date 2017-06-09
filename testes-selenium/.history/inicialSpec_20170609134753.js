define(['jquery'], function($ ) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');
            window.alert($);
            window.alert(require('jquery'));
        });

    });

});