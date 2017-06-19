(function () {

    'use strict';
    // var $ = require('../../node_modules/jquery/dist/jquery.js');
    function get(url) {

        var p1 = new Promise(
            (resolve, reject) => {
                executarAjax(url, 'GET', resolve, reject);
            }
        );
        return p1;
    }

    function post(url, dataAsJson) {

        var p1 = new Promise(
            (resolve, reject) => {
                executarAjaxComDados(url, 'POST', resolve, reject, dataAsJson);
            }
        );
        return p1;
    }

    function put(url, dataAsJson) {

        var p1 = new Promise(
            (resolve, reject) => {
                executarAjaxComDados(url, 'PUT', resolve, reject, dataAsJson);
            }
        );
        return p1;
    }

    function remove(url) {

        var p1 = new Promise(
            (resolve, reject) => {
                executarAjax(url, 'DELETE', resolve, reject);
            }
        );
    }

    function executarAjax(url, metodo, resolve, reject) {
        $.ajax({
            url: url,
            type: metodo,
            success: resolve,
            error: reject
        });
    }

    function executarAjaxComDados(url, metodo, resolve, reject, dataAsJson) {
        var jsonAsString = JSON.stringify(dataAsJson);

        $.ajax({
            url: url,
            type: metodo,
            contentType: 'application/json',
            data: jsonAsString,
            success: resolve,
            error: reject
        });
    }
    module.exports = {
        get: get,
        post: post,
        put: put,
        remove: remove
    };
})();
