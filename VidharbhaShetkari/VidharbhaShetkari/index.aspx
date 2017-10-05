<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true"
    CodeBehind="index.aspx.cs" Inherits="VidharbhaShetkari.index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container">
        <div class="row row-level-2 ">
            <div class="row-inner  clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <div class="col-inner  slider-in-block">
                        <div class="swiper-container swiper-slider" data-loop="true" data-autoplay="false"
                            data-height="480px" data-min-height="480px" data-slide-effect="slide" data-slide-speed="1200ms"
                            data-keyboard="false" data-mousewheel="false" data-mousewheel-release="false">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide slide-1" data-slide-bg="images/banner3.jpg">
                                    <div class="description">
                                        <h2>
                                            Fresh Juice
                                            <br>
                                            Healthy Groceries</h2>
                                        <p>Made of 100% Valencia oranges to hold a perfect balance of sweet and tart flavor.
                                            </p>
                                        <a class="btn-slide" href="#">Shop Now!</a>
                                    </div>
                                </div>
                                <div class="swiper-slide slide-2" data-slide-bg="images/banner2.jpg">
                                    <div class="description">
                                       
                                       
                                    </div>
                                </div>
                                <div class="swiper-slide slide-3" data-slide-bg="images/fresh-juice-3.jpg">
                                    
                                </div>
                             <%--   <div class="swiper-slide slide-4" data-slide-bg="https://livedemo00.template-help.com/opencart_63371/image/cache/catalog/slide-4-1170x480.jpg">
                                    <div class="description">
                                        <h2>
                                            Save 25–50% on
                                            <br>
                                            Healthy Groceries</h2>
                                        <p>
                                            Get Your Favorite Organic Food Delivered to Your Door</p>
                                        <a class="btn-slide" href="#">Shop Now!</a>
                                    </div>
                                </div>
                                <div class="swiper-slide slide-5" data-slide-bg="https://livedemo00.template-help.com/opencart_63371/image/cache/catalog/slide-5-1170x480.jpg">
                                    <div class="description">
                                        <h2>
                                            Save 25–50% on
                                            <br>
                                            Healthy Groceries</h2>
                                        <p>
                                            Get Your Favorite Organic Food Delivered to Your Door</p>
                                        <a class="btn-slide" href="#">Shop Now!</a>
                                    </div>
                                </div>--%>
                            </div>
                            <div class="swiper-button-next">
                            </div>
                            <div class="swiper-button-prev">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
        <div class="row">
            <div id="content" class="col-sm-12">
                <h1 style="padding-top: 30px;">
                    About</h1>
                <div class="text-center">
                    <h4>
                        Catering to your requirements, handling your needs with care
                    </h4>
                    <p>
                        Our store is more than just another average online retailer. We sell not only top
                        quality products, but give our customers a positive online shopping experience.
                        Forget about struggling to do everything at once: taking care of the family, running
                        your business, walking your dog, cleaning the house, doing the shopping, etc. Purchase
                        the goods you need every day or just like in a few clicks or taps, depending on
                        the device you use to access the Internet. We work to make your life more enjoyable.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="width: 100%; padding-top: 20px; padding-bottom: 20px;">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 " style="padding: 0; margin-top: 50px;">
                <div class="col-inner  ">
                    <!-- RD Parallax -->
                    <div id="parallax_0" class="rd-parallax">
                        <div class="rd-parallax-inner">
                            <div class="rd-parallax-layer" data-type="media" data-speed="0.1" data-direction="normal"
                                data-url="images/parallax-1-2050x820.jpg" data-blur="false" style="background-image: url(&quot;images/parallax-1-2050x820.jpg&quot;);
                                height: 512px; transform: translate3d(0px, -42px, 0px); transition: none; filter: none;"
                                data-media-width="2050" data-media-height="820">
                            </div>
                            <div class="rd-parallax-layer layer-0" data-type="html" data-speed="0" data-fade="false"
                                data-direction="inverse" style="transform: translate3d(0px, 0px, 0px); transition: none;">
                                <div class="container">
                                    <div class="block-right">
                                        <h2>
                                            <span>Hot season vitamins:</span>
                                            <br />
                                            Healthy Meals from
                                            <br />
                                            Healthy Food</h2>
                                        <a href="#" class="btn">Explore Ingredients</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
        <div class="row row-level-4 ">
            <div class="row-inner  clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <div class="col-inner  bottom-block1">
                        <div class="box specials">
                            <div class="box-heading">
                                <h3>
                                    Top Product</h3>
                            </div>
                            <div class="owl-stage-outer">
                                <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0s;">
                                    <div class="owl-item active col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div class="product-thumb transition options">
                                            <div class="image">
                                                <img src="images/product2.jpg" alt="" />
                                               
                                                <div class="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div class="caption">
                                                    <div class="name">
                                                        <a href="#">
                                                            Orange Juice</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item active col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div class="product-thumb transition options">
                                            <div class="image">
                                                <img src="images/gradeandclean.jpg" alt="" />
                                                
                                                <div class="sale">
                                                    <span>Sale</span>
                                                </div>
                                                <div class="caption">
                                                    <div class="name">
                                                        <a href="#">
                                                            Gradeing And Cleaning</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-item active col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div class="product-thumb transition options">
                                            <div class="image">
                                                <img src="images/upcommimg.jpg" alt="" />
                                                                             
                                                <div class="caption">
                                                    <div class="name">
                                                        <a href="#">
                                                            Upcomming Products</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <%-- <div class="owl-item active" style="width: 300px;">
                                                        <div class="product-thumb transition options">
                                                            <!-- Product options -->
                                                            
                                                            <div class="image">
                                                                <a class="lazy lazy-loaded" style="padding-bottom: 103.73134328358%" href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=43">
                                                                    <img width="268" height="278" alt="Antica Formula Carpano Vermouth" title="Antica Formula Carpano Vermouth"
                                                                        class="img-responsive" data-src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/alcohol/product_1-268x278.png"
                                                                        src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/alcohol/product_1-268x278.png">
                                                                </a>
                                                                <div class="cart-button">                                                                   
                                                                    <button data-product="43" class="quickview btn-icon" data-toggle="tooltip" title=""
                                                                        data-original-title="Quick View">
                                                                        <i class="fa fa-search-plus"></i>
                                                                    </button>                                                                   
                                                                </div>
                                                                <div class="rating">
                                                                    <span class="fa-stack"><i class="fa fa-star star fa-stack-1x"></i></span><span class="fa-stack">
                                                                        <i class="fa fa-star star fa-stack-1x"></i></span><span class="fa-stack"><i class="fa fa-star star fa-stack-1x">
                                                                        </i></span><span class="fa-stack"><i class="fa fa-star star fa-stack-1x"></i>
                                                                    </span><span class="fa-stack"><i class="fa fa-star star fa-stack-1x"></i></span>
                                                                </div>
                                                                <div class="sale">
                                                                    <span>Sale</span>
                                                                </div>
                                                            </div>
                                                            <div class="caption">
                                                                <div class="name">
                                                                    <a href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=43">
                                                                        Antica Formula Carpano Vermouth</a>
                                                                </div>
                                                                <div class="price">
                                                                    <span class="price-old">70.00$</span> <span class="price-new">64.00$</span>
                                                                </div>
                                                                <button class="btn-primary ani" type="button" onclick="ajaxAdd($(this),43);">
                                                                    Add to Cart<span class="over">Add to Cart</span><span class="out">Add to Cart</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item active" style="width: 300px;">
                                                        <div class="product-thumb transition options">
                                                            <!-- Product options -->
                                                            
                                                            <div class="image">
                                                                <a class="lazy lazy-loaded" style="padding-bottom: 103.73134328358%" href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=119">
                                                                    <img width="268" height="278" alt="Apple Cinnamon Doughnut Mix" title="Apple Cinnamon Doughnut Mix"
                                                                        class="img-responsive" data-src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/natural/product_45-268x278.png"
                                                                        src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/natural/product_45-268x278.png">
                                                                </a>
                                                                <div class="cart-button">
                                                                   
                                                                    <button data-product="119" class="quickview btn-icon" data-toggle="tooltip" title=""
                                                                        data-original-title="Quick View">
                                                                        <i class="fa fa-search-plus"></i>
                                                                    </button>
                                                                
                                                                </div>
                                                                <div class="sale">
                                                                    <span>Sale</span>
                                                                </div>
                                                            </div>
                                                            <div class="caption">
                                                                <div class="name">
                                                                    <a href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=119">
                                                                        Apple Cinnamon Doughnut Mix</a>
                                                                </div>
                                                                <div class="price">
                                                                    <span class="price-old">30.00$</span> <span class="price-new">25.75$</span>
                                                                </div>
                                                                <button class="btn-primary ani" type="button" onclick="ajaxAdd($(this),119);">
                                                                    Add to Cart<span class="over">Add to Cart</span><span class="out">Add to Cart</span></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="owl-item active" style="width: 300px;">
                                                        <div class="product-thumb transition options">
                                                            <!-- Product options -->                                                          
                                                            <div class="image">
                                                                <a class="lazy lazy-loaded" style="padding-bottom: 103.73134328358%" href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=154">
                                                                    <img width="268" height="278" alt="Apples Fresh Produce Fruit" title="Apples Fresh Produce Fruit"
                                                                        class="img-responsive" data-src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/natural/product_19-268x278.png"
                                                                        src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/natural/product_19-268x278.png">
                                                                </a>
                                                                <div class="cart-button">
                                                                  
                                                                    <button data-product="154" class="quickview btn-icon" data-toggle="tooltip" title=""
                                                                        data-original-title="Quick View">
                                                                        <i class="fa fa-search-plus"></i>
                                                                    </button>
                                                                 
                                                                </div>
                                                                <div class="sale">
                                                                    <span>Sale</span>
                                                                </div>
                                                            </div>
                                                            <div class="caption">
                                                                <div class="name">
                                                                    <a href="http://livedemo00.template-help.com/opencart_63371/index.php?route=product/product&amp;product_id=154">
                                                                        Apples Fresh Produce Fruit</a>
                                                                </div>
                                                                <div class="price">
                                                                    <span class="price-old">10.00$</span> <span class="price-new">8.50$</span>
                                                                </div>
                                                                <button class="btn-primary ani" type="button" onclick="ajaxAdd($(this),154);">
                                                                    Add to Cart<span class="over">Add to Cart</span><span class="out">Add to Cart</span></button>
                                                            </div>
                                                        </div>
                                                    </div>--%>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
        <center>
            <img src="images/onjus_orange_banner1.jpg" alt="" />
        </center>
    </div>
</asp:Content>
