# ecommerce-product-page-main

what i learnt.

i learned how to create distance btween an anchor tag and underline when hovering over them. initially i used border-bottom property but it wasn't working properly - it will shift the anchor tag up and create more space inside the header section which is a poor user experience so i decided to tune it up i went ahead to watch videos on youtube and i discovered that i can use pseudo (::after) selector to create the effect.

also i saw in the tutorial from youtube that the tutor used pointer-event:none but when i used it, it doesn't allow the effect i created to work so i decided to comment it out and the whole started working properly. if their is any explanantion on how to use it, i am always available to discusion.

among many things i learned was when i created hover on an image inside the header section - with (border: 2px solid color), 

    header .user a img.avatar{
        border-radius: 50%;
        border: 2px solid transparent;
    }
    
it will make the image grow and all other elements will shift to the left for a few pixel which inturn increase the space within the header section. however, i tried to reduce the width of the image, yet the problem didn't solve so i went to read on it from google. the solution i found to it was to use (boder:2px solid transparent)

    header .user a:hover img.avatar{
        border: 2px solid var(--Orange);
    }

 on the image first and then create the hover effect and it works perfectly.


 when  i switch to mobile view, i change the display of the button to column then i change its width to 100% but the button that i used to increase or decrease the order value is extending beyond the screen width which causes the screen to scroll to right and i don't know what is causing it so to solve this i changed the width to 90% of the screen and i added some padding to it but when i extended the screen more, it's width will reduce and it will create some space after the button. then i headed t youtube to watch videos related to it so i realized i can use logical propotion i.e (max-width:100%) and it works pefectly on all devices.

 i also learn in the project that whenever you have two or more tags in group always put them inside a div tag for easy styling. this is the case of span tags i used for price. initially with my design i put them freely inside the code without putting them inside a div tag 

        <span class="price">$125.00</span>
        <span class="disc">50%</span>
        <span class="init">$250.00</span>

 and when i switch to mobile view the space between the previous price and the discount cant be achieved so i then put them back inside a div tage 
    <div class="val">
                <span class="price">$125.00</span>
                <span class="disc">50%</span>
                <span class="init">$250.00</span>
    </div>
 and i set the display to flex and margin 0 then margin-left to auto.

        .main-content span.init{
            margin: 0;
            margin-left: auto;
            margin-right: 1rem;
        }


i also learn that you can only become better and better developer by keep practicing and keep solving as many challenges as possible because many things i have learnt i am able to implement it in this project.



 challenges:

 i used images available with starter pack of the challenge for icons and i try to change the colors to my favorite color but it is not working so if their is any solution to it i am open for any contribution.


one of the challenge i faced in this project is that whenever i click on the image gallery in desktop design, the active image suppose to have a border around it and also should have overlay on it which is like 75% transparent but in my solution design i am unable to achieve that aim.

i also need solution on how to remove the stepper arrow in the <input type="number" value="0" min="0" max="10" id="num">. in my own way, i used the readonly attribute but i will like the user to input nmmber themself without usng the plus or minus button if they will but with the readonly attribute, it wont be possible.
 
