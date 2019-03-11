$(document).ready(function () {
    function classSection() {
        this.section;
        this.article;
        this.avatar;
        this.fullname;

        this.init = function (id) {
            this.section = $('#' + id);
            return this.section;
        }

        this.appendArticle = function (img, firstName, lastName) {
            let article = this.addArticle();
            article.append(this.addAvatar(img)).append(this.addFullname(firstName, lastName));
            this.section.prepend(article);
        }

        this.addArticle = function () {
            this.article = $('<article/>', {
                'class': 'user'
            });
            return this.article;
        }

        this.addAvatar = function (img) {
            this.avatar = $('<img/>', {
                'class': 'user__avatar',
                'alt': 'thing...'
            });
            this.avatar.attr('src', img);

            return this.avatar;
        }
        this.addFullname = function (firstName, lastName) {
            this.fullname = $('<h4 class="user__fullname">' + firstName + ' ' + lastName + '</h4>');
            return this.fullname;
        }

    }


    //Append user when load page.
    $.getJSON("https://reqres.in/api/users?page=1", function (users) {
        $("#page").val(users.page);
        $.each(users.data, function (key, user) {
            var section = new classSection();
            section.init('users');
            section.appendArticle(user.avatar, user.first_name, user.last_name);
        });
    });

    //When click button
    $('#btn-more').on('click', function (e) {
        var curentPage = parseInt($("#page").val(), 10);
        $.ajax({
            url: "https://reqres.in/api/users?page=" + (curentPage + 1),
            type: "GET",
            dateType: "json",
            beforeSend: function () {
                $('#btn-more').val('loading...');
            },
            success: function (users) {
                $("#page").val(users.page);
                if (users.page == users.per_page) {
                    $('#btn-more').hide();
                };
                $.each(users.data, function (key, user) {
                    var section = new classSection();
                    section.init('users');
                    section.appendArticle(user.avatar, user.first_name, user.last_name);
                });
                $('#btn-more').val('load more');
            }
        });
    })
})