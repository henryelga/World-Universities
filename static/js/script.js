
function display() {
    var city = $("#city").val();
    var url =
        "http://universities.hipolabs.com/search?country=" + city;

    $.getJSON(url, function (data) {
        // console.log(data);

        var html = "";

        if (data.length === 0) {
            html +=
                `<div class="alert alert-primary" role="alert">
                    Oops....Sorry, no data found for this place. Search for another place.
                </div>`;

        } else {
            html +=
                `<thead class="thead-dark"><tr><th scope="col">#</th>
            <th scope="col">University Name</th><th scope="col">Site Link</th></tr>
            </thead><tbody>`;
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i])

                html +=
                    "<tr><th scope='row'>" +
                    i +
                    "</th><td>" +
                    data[i]['name'] +
                    "</td><td><a href=" + data[i]['web_pages'][0] + ">" +
                    data[i]['web_pages'][0] +
                    "</a></td></tr>";
            }
        }
        $("#uniData").html(html)

    });
}
