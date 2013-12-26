KISSY.use('node,gallery/bidi/1.1/,xtemplate', function (S,Node,Bidi) {

        var data = {
          "refundFee": {
            "defaultValue": "10.00",
            "label": "需要退款金额",
            "max": "10.00",
            "min": "0",
            "postFee": "0.00",
            "required": true,
            "value": "",
            "write": false
        }
        };
            var form = Bidi.xbind('form', data);
            Bidi.init();

});
