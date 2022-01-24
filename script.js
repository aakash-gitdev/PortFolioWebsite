
    window.onscroll = function (event) 
    {
        if(this.scrollY > 1000)
        {
            $('.navbar').addClass("sticky");
        }
        else{

            $('.navbar').removeClass("sticky");
            
        }
    }
