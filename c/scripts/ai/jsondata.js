
if (Cookies.get('admin') == "1") {

    $.getJSON("/m/json/luna.json", function (jsonFromFile) {

        $(function () {
            $('#table').bootstrapTable({
                data: jsonFromFile
            });
        });

    });

}