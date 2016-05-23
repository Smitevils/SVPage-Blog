// load list-page in container of admin panel

var dataPage;
var loadPage;

$(document).ready(function() {
//
    $(document).on("click", ".menu-item", function(event) {
        event.preventDefault();
        dataPage = $(this).data("page");
        loadAdminPage(dataPage);
    })

    function loadAdminPage(pageName) {
        if (pageName == "articles") {
            $(document).find('.admin-main').load('admin-pages/articles.html');
        } else if (pageName == "properties") {
            $(document).find('.admin-main').load('admin-pages/properties.html');
        }

    }
// $(document).ready({})
});
