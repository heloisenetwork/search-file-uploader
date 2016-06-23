var FormEvaluator = (function () {
    function FormEvaluator() {
        var _this = this;
        this.jquery = jQuery;
        this.checkFormData = function () {
            var formContents = _this.jquery('#fileToLoad');
            console.log(formContents);
            _this.jquery.post({
                url: 'http://localhost:8667/upload',
                data: formContents,
                error: function (data, text) {
                    console.log(data);
                    console.log(text);
                }
            });
        };
    }
    FormEvaluator.prototype.init = function () {
        var _this = this;
        jQuery('document').ready(function () {
            var button = _this.jquery('#subm');
            button.click(function (clickEvent) {
                clickEvent.preventDefault();
            });
            button.click(_this.checkFormData);
        });
    };
    return FormEvaluator;
}());
var formEv = new FormEvaluator();
//# sourceMappingURL=upload.js.map