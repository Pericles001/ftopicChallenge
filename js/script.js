    $(function() {

            var count = 0;
            var cible = $('#bgvideo');
            var cible2 = $('#submit');
            /*style input*/
            $('#y1').on('click', function() {
                $('#y1').css('background-color', 'black', 'color', 'white');
                $('#n1').css('background-color', 'white', 'color', 'white');
                count += 1;

            })

            $('#y2').on('click', function() {
                $('#y2').css('background-color', 'black', 'color', 'white');
                $('#n2').css('background-color', 'white', 'color', 'white');
                count += 1;

            })

            $('#y3').on('click', function() {
                $('#y3').css('background-color', 'black', 'color', 'white');
                $('#n3').css('background-color', 'white', 'color', 'white');
                count += 1;

            })

            $('#y4').on('click', function() {
                $('#y4').css('background-color', 'black', 'color', 'white');
                $('#n4').css('background-color', 'white', 'color', 'white');
                count += 1;

            })

            $('#y5').on('click', function() {
                $('#y5').css('background-color', 'black', 'color', 'white');
                $('#n5').css('background-color', 'white', 'color', 'white');
                count += 1;

            })
            $('#n1').on('click', function() {
                $('#n1').css('background-color', 'black', 'color', 'white');
                $('#y1').css('background-color', 'white', 'color', 'white');
            })
            $('#n2').on('click', function() {
                $('#n2').css('background-color', 'black', 'color', 'white');
                $('#y2').css('background-color', 'white', 'color', 'white');
            })

            $('#n3').on('click', function() {
                $('#n3').css('background-color', 'black', 'color', 'white');
                $('#y3').css('background-color', 'white', 'color', 'white');
            })

            $('#n4').on('click', function() {
                $('#n4').css('background-color', 'black', 'color', 'white');
                $('#y4').css('background-color', 'white', 'color', 'white');
            })

            $('#n5').on('click', function() {
                $('#n5').css('background-color', 'black', 'color', 'white');
                $('#y5').css('background-color', 'white', 'color', 'white');
            })

            //            change button  style onclick
            $('#dismute').on('click', function() {
                $('#dismute').css('background-color', '#06460a', 'font-size', '45px');

                //                ask user name
                var name = prompt('what is your name ?');
                // hide cases jumbotron
                $('#cases').css('display', 'none');
                //                create a new jumbotron
                $('#testJumb').css('display', 'block');
                //                show user name
                $('#nam').html(name).css('font-size', '30px');
                //                ask five questions using form group

                //                treat
                //                treatment occurs when we click on submit button
                $('#submit').on('click', function() {

                    $('#testJumb').css('display', 'none');
                    if (count > 2) {
                        $('#na').html(name);
                        $('#positive').css('display', 'block');
                        $('#result').html(count);
                    } else {
                        $('#negative').css('display', 'block');
                        $('#result').html(count);
                        $('#na1').html(name);

                    }


                });

            });

        });
