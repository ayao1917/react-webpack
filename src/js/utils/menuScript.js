let $ = require('jquery');

export default class MenuScript {
    constructor(props) {
        //TODO: add initial here if need
    }

    execute() {
        $('#sidemenu-container').toggleClass('active');

        /**
         *
         * Touch Gestures
         *        &
         * Hover and Animation Triggers
         *
         **/

        /* Hover Effects */

        $('.portfolio-grid article a, .button, button, input[type="submit"], input[type="reset"], input[type="button"], #header a, .header-button, #nav-container a, .nav-child-container, .gallery-container a, #ps-custom-back').bind('mouseover mouseout', function (event) {
            $(this).toggleClass('hover');
        });

        /* Sidebar multi-level menu */

        $('.nav-child-container').bind('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            var ul = $this.next('ul');
            var ulChildrenHeight = ul.children().length * 46;

            if (!$this.hasClass('active')) {
                $this.toggleClass('active');
                ul.toggleClass('active');
                ul.height(ulChildrenHeight + 'px');
            } else {
                $this.toggleClass('active');
                ul.toggleClass('active');
                ul.height(0);
            }
        });

        /* Sidebar Functionality */

        var opened = false;
        $('#menu-trigger').bind('click', function (event) {
            $('#content-container').toggleClass('active');
            $('#sidemenu').toggleClass('active');
            if (opened) {
                opened = false;
                setTimeout(function () {
                    $('#sidemenu-container').removeClass('active');
                }, 500);
            } else {
                $('#sidemenu-container').addClass('active');
                opened = true;
            }
        });

        $('.nav a').bind('click', function (event) {
            event.preventDefault();
            var path = $(this).attr('href');
            $('#content-container').toggleClass('active');
            $('#sidemenu').toggleClass('active');
            setTimeout(function () {
                window.location = path;
            }, 500);
        });

        /**
         *
         * Check if the child menu has an active item.
         * If yes, then it will expand the menu by default.
         *
         **/

        var $navItems = $('.nav ul li a');

        $navItems.each(function (index) {
            if ($(this).hasClass('current')) {
                $parentUl = $(this).parent().parent();
                $parentUl.height($parentUl.children('li').length * 46 + "px");
                $parentUl.prev().addClass('active');
                $parentUl.addClass('active');
                $anchor = $parentUl.prev();
                $anchor.children('.nav-child-container').addClass('active');
            }
        });
    }
}