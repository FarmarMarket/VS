<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true"
    CodeBehind="download.aspx.cs" Inherits="VidharbhaShetkari.download" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link rel="stylesheet" href="catalog/view/theme/theme741/stylesheet/baguetteBox.min.css" />
    <link href="catalog/view/theme/theme741/stylesheet/gallery-grid.css" rel="stylesheet"
        type="text/css" />

    <style type="text/css">
        .tz-gallery .col-md-4 .gal-img
        {
            height: 200px;
            overflow: hidden;
            padding: 10px;
        }
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container gallery-container">
        <div class="tz-gallery">
           
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="gal-img">
                        <a class="lightbox" href="images/download/1.jpg">
                            <img src="images/download/1.jpg" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="gal-img">
                        <a class="lightbox" href="images/download/2.jpg">
                            <img src="images/download/2.jpg" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="gal-img">
                        <a class="lightbox" href="images/download/3.jpg">
                            <img src="images/download/4.jpg" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="gal-img">
                        <a class="lightbox" href="images/download/4.jpg">
                            <img src="images/download/4.jpg" />
                        </a>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="gal-img">
                        <a class="lightbox" href="images/download/5.jpg">
                            <img src="images/download/5.jpg" />
                        </a>
                    </div>
                </div>
            </div>
    </div>
    </div>
    <script src="catalog/view/theme/theme741/js/baguetteBox.min.js"></script>
    <script>
        baguetteBox.run('.tz-gallery'); 
    </script>
</asp:Content>
