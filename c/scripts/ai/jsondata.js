
if (Cookies.get('admin') == "1") {


    // luna
    $.getJSON("https://valky.xyz/m/json/luna.json", function (jsonFromFile) {

        $(function () {
            $('#table-luna').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // welcome
    $.getJSON("https://valky.xyz/m/json/welcome.json", function (jsonFromFile) {

        $(function () {
            $('#table-welcome').bootstrapTable({
                data: jsonFromFile
            });
        });

    });


    // runic
    $.getJSON("https://valky.xyz/m/json/runic.json", function (jsonFromFile) {

        $(function () {
            $('#table-runic').bootstrapTable({
                data: jsonFromFile
            });
        });

    });



}

else {
    window.open("/404","_self");
}