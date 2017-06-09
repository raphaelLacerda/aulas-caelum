define(['jquery'], function($ ) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = $('<div></div>');
            expect(el.text()).toEqual('require.js up and running');
        });

    });

});