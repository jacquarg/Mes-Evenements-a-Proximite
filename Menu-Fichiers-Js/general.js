$(document).ready(function() {

    var divContainer = $("#DivDomApi");

// le lien d'api
// la filtrages des evenmeents general

    $("#cinemaGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cin%C3%A9ma%22%2C%20%222017%22%2C%20%22mars%22&rows=20&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#cinemaGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cinema%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#theatreGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mars%22&rows=20&start=1&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#theatreGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&start=3&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#spectacleGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mars%22&rows=20&start=3&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#spectacleGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#danseGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mars%22&rows=20&start=2&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#danseGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#animationGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mars%22&rows=20&start=3&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#animationGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#sportGeneral").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mars%22&rows=20&start=2&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });

    $("#sportGratuit").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=20&start=2&pretty=false&timezone=UTC", function(json) {

          json.records.forEach(function(item) {
              creImg = $("<img/>");
              creHref = creImg.attr("src", item.record.fields.image);
              apiImage = creImg.attr("class", "apiImage");
              divContainer.append(creImg);

              divTitle = $("<div></div>");
              title = $("<h5></h5>");
              divTitle.append(title);
              divContainer.append(divTitle);
              divTitle.attr("class", "apiDivTitle");
              title.attr("class", "apiTitle");
              title.append(" " + item.record.fields.title);

              divDateStart = $("<div></div>");
              dateStart = $("<h5>Date de début:</h5>");
              divDateStart.append(dateStart);
              divContainer.append(divDateStart);
              divDateStart.attr("class", "apiDivDateStart");
              dateStart.attr("class", "apiDateStart");
              dateStart.append(" " +item.record.fields.date_start);

              divDateEnd = $("<div></div>");
              dateEnd = $("<h5>Date de fin:</h5>");
              divDateEnd.append(dateEnd);
              divContainer.append(divDateEnd);
              divDateEnd.attr("class", "apiDivDateEnd");
              dateEnd.attr("class", "apiDateEnd");
              dateEnd.append(" " +item.record.fields.date_end);

              divAdresse = $("<div></div>");
              adresse = $("<h5>City: </h5>");
              divAdresse.append(adresse);
              divContainer.append(divAdresse);
              divAdresse.attr("class", "apiDivAdresse");
              adresse.attr("class", "apiAdresse");
              adresse.append(" " +item.record.fields.city);

              divPrix = $("<div></div>");
              prix = $("<h5>Le prix:</h5>");
              divPrix.append(prix);
              divContainer.append(divPrix);
              divPrix.attr("class", "apiDivPrix");
              adresse.attr("class", "apiPrix");
              prix.append(" " +item.record.fields.pricing_info);

              divDescription = $("<div></div>");
              description = $("<h5>Description:</h5>");
              divDescription.append(description);
              divContainer.append(divDescription);
              divDescription.attr("class", "apiDivDescription");
              description.attr("class", "apiDescription");
              description.append(" " +item.record.fields.description);

              creLink = $("<a>Le lien vers le site: </a>");
              creLink.attr("class", "creLink");
              divContainer.append(creLink);
              creLink.attr("href", item.record.fields.link);

            });

        });

    });


});
