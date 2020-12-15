

        var progressBar = {
            Bar : $('#progressbar'),
            Next : function() {
                $('#progressbar li:not(.active):first').addClass('active');
            },
            Back : function() {
                $('#progressbar li.active:last').removeClass('active');
            },
            }

            $('#next_step').on('click', function(){
                progressBar.Next();
            })
            $('#prev_step').on('click', function(){
                progressBar.Back();
            })