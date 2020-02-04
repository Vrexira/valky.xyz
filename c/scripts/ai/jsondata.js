
if (Cookies.get('admin') == "1") {


    // luna
    $.getJSON("/m/json/luna.json", function (jsonFromFile) {

        $(function () {
            $('#table-luna').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // welcome
    $.getJSON("/m/json/welcome.json", function (jsonFromFile) {

        $(function () {
            $('#table-welcome').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // runic
    $.getJSON("/m/json/runic.json", function (jsonFromFile) {

        $(function () {
            $('#table-runic').bootstrapTable({
                data: jsonFromFile
            });
        });

    });



}

else {
    window.open("/v/404","_self");
}