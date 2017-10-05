<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="ContactUs.aspx.cs" Inherits="VidharbhaShetkari.ContactUs" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div class="container">
	<ul class="breadcrumb">
				<li><a href="http://livedemo00.template-help.com/opencart_63371/index.php?route=common/home"><i class="fa fa-home"></i></a></li>
				<li><a href="http://livedemo00.template-help.com/opencart_63371/index.php?route=information/contact">Contact Us</a></li>
			</ul>
	<div class="row">								<div id="content" class="col-sm-12 contact_page">
			<h1 class="no-line">Contact Us</h1>
			<div class="map">
		<div id="google-map" class="map_model" data-zoom="14"
		data-y="40.6700"
		data-x=" -73.9400"
		data-disable-ui="false"
		data-scrollwheel="false"
		data-draggable="true"
		style="height:400px; width: 100%">
	</div>
	<ul class="map_locations">
		<li data-x=" -73.9400"
			data-y="40.6700">
			<p> My Company Glasgow D04 89GR</p>
		</li>
			</ul>
</div>


<script>
    var tmp = 1;
    var marker_path = 'http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/marker_map-40x40.png';
    var marker_active_path = 'http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/marker_map_active-40x40.png';
    var styles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444"}] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2"}] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off"}] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45}] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified"}] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off"}] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off"}] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on"}]}];
    var type;
    switch (tmp) {
        case 1:
            type = google.maps.MapTypeId.ROADMAP;
            break;
        case 2:
            type = google.maps.MapTypeId.TERRAIN;
            break;
        case 3:
            type = google.maps.MapTypeId.HYBRID;
            break;
        case 4:
            type = google.maps.MapTypeId.SATELLITE;
            break;
        default:
            type = google.maps.MapTypeId.ROADMAP;
    }
    jQuery(document).ready(function ($) {
        var o = $('#google-map');
        o.googleMap({
            marker: {
                basic: marker_path,
                active: marker_active_path
            },
            type: type,
            styles: styles
        });
    });
</script>
<div class="col-sm-4">
	<div class="box twitter soc_info text-center">
		<div class="box-heading">
			<h3>Twitter Timeline</h3>
		</div>
		<div id="twitterRefresher" class="box-content">
			<a class="twitter-timeline" width="290" height="300" data-theme="dark" href="TemplateMonster" data-tweet-limit="" data-widget-id="517285297164267522">
			</a>
		</div>
	</div>
</div>
<script>
    window.twttr = (function (d, s, id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = {
            _e: [], ready: function (f) {
                t._e.push(f)
            }
        });
    } (document, "script", "twitter-wjs"));

    // Twitter refresher "class"
    var TwitterRefresh = function (options) {
        this.id = options.id;
        this.code = options.code;
    }

    TwitterRefresh.prototype.doRefresh = function () {
        document.getElementById(this.id).innerHTML = this.code;
        if (document.getElementById('twitter-wjs') != null) {
            document.getElementById('twitter-wjs').remove();
        }
        window.twttr = (function (d, s, id) {
            var t, js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            return window.twttr || (t = {
                _e: [], ready: function (f) {
                    t._e.push(f)
                }
            });
        } (document, "script", "twitter-wjs"));

    }

    // Create new instance
    var twtrefresher = new TwitterRefresh({
        id: 'twitterRefresher',
        code: '<a class="twitter-timeline" width="290" height="300" data-theme="dark" href="TemplateMonster" data-tweet-limit="" data-widget-id="517285297164267522"></a>'
    });

    ;
    (function ($) {
        $(window).on('resize', function () {

        })
    })(jQuery)


 </script><div class="col-xs-12 col-sm-4 col-md-4">
	<div id="fb-root"></div>

	<div class="box facebook info text-center">
		<div class="box-heading">
			<h3>Facebook Box</h3>
		</div>
		<div class="content">
			<div class="fb-page" data-href="https://www.facebook.com/TemplateMonster" data-width="370" data-height="300" data-hide-cover="false" data-show-facepile="true" data-show-posts="true">
			</div>
		</div>
	</div>
</div>

<script>
    window.fbAsyncInit = function () {
        var id = '';
        if (id == '') {
            id = false;
        }
        FB.init({
            appId: id,
            xfbml: true,
            version: 'v2.3'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    } (document, 'script', 'facebook-jssdk'));


    ;
    (function ($) {
        var o = $('.fb-page');

        $(window).load(function () {
            o.css({ 'display': 'block' })
			.find('span').css({
			    'width': '100%',
			    'display': 'block',
			    'text-align': 'inherit'
			})
			.find('iframe').css({
			    'display': 'inline-block',
			    'position': 'static'
			});
        });

        $(window).on('load resize', function () {
            if (o.parent().width() < o.find('iframe').width()) {
                o.find('iframe').css({
                    'transform': 'scale(' + (o.width() / o.find('iframe').width()) + ')',
                    'transform-origin': '0% 0%'
                })
				.parent().css({
				    'height': (o.find('iframe').height() * (o.width() / o.find('iframe').width())) + 'px'
				});
            } else {
                o
				.find('span').css({
				    'height': o.find('iframe').height() + 'px'
				})
				.find('iframe').css({
				    'transform': 'none'
				});
            }
        });
    })(jQuery);
</script><div class="col-sm-4">
<div class="box pinterest soc_info text-center">
		<div class="box-heading">
			<h3>Pinterest Profile Widget</h3>
		</div>
		<div class="box-content">
			<a data-pin-do="embedUser" href="https://www.pinterest.com/templatemonster/" data-pin-scale-width="100" data-pin-scale-height="190" data-pin-board-width="290"></a>
		</div>
	</div>
</div>

<script>
    (function (d) {
        var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
        p.type = 'text/javascript';
        p.async = true;
        p.src = '//assets.pinterest.com/js/pinit.js';
        f.parentNode.insertBefore(p, f);
    } (document));
</script>
			<div class="clear"></div>
			<h3>Our Location</h3>
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row">
												<div class="col-sm-4">
							<a href="./">
								<img src="http://livedemo00.template-help.com/opencart_63371/image/cache/catalog/logo-258x50.png" alt="StoreFlex" title="StoreFlex" class="img-thumbnail"/>
							</a>
						</div>
												<div class="col-sm-4">
							<div class="icon material-design-phone370">
								<strong>Telephone</strong><br>
								<a href="callto:(800) 123-4567">(800) 123-4567</a>
							</div>
						</div>
												<div class="col-sm-4">
							<div class="icon fa-key">
								<strong>Opening Hours</strong><br/>
								7 Days a week from 9:00 am to 7:00 pm							</div>
						</div>
												<div class="col-sm-4">
							<strong>StoreFlex</strong><br/>
							<address>
																<a href="//maps.google.com/maps?q=40.6700%2C+-73.9400&amp;hl=en-gb&amp;t=m&amp;z=15" target="_blank">
									My Company Glasgow D04 89GR								</a>
															</address>
						</div>
												<div class="col-sm-4">
							<div class="icon fa-fax">
								<strong>Fax</strong><br>
								<a href="callto:(800) 2345-6789">(800) 2345-6789</a>
							</div>
						</div>
																		<div class="col-sm-4">
							<div class="icon fa-comments-o">
								<strong>Comments</strong><br/>
								We are glad to hear from you							</div>
						</div>
											</div>
				</div>
			</div>
						<form action="http://livedemo00.template-help.com/opencart_63371/index.php?route=information/contact" method="post" enctype="multipart/form-data" class="form-horizontal">
				<fieldset>
					<legend>Contact Form</legend>
					<div class="form-group required">
						<label class="col-sm-2 control-label" for="input-name">Your Name</label>
						<div class="col-sm-10">
							<input type="text" name="name" value="" id="input-name" class="form-control" />
													</div>
					</div>
					<div class="form-group required">
						<label class="col-sm-2 control-label" for="input-email">E-Mail Address</label>
						<div class="col-sm-10">
							<input type="text" name="email" value="" id="input-email" class="form-control" />
													</div>
					</div>
					<div class="form-group required">
						<label class="col-sm-2 control-label" for="input-enquiry">Enquiry</label>
						<div class="col-sm-10">
							<textarea name="enquiry" rows="10" id="input-enquiry" class="form-control"></textarea>
													</div>
					</div>
									</fieldset>
				<div class="buttons">
					<div class="pull-right">
						<input class="btn btn-primary" type="submit" value="Submit" />
					</div>
				</div>
			</form>
					</div>
			</div>
</div>
</asp:Content>
