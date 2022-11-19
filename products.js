fetch("people.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var htmlText = ``;
    htmlText +=
      '<li class="post-422 product type-product status-publish has-post-thumbnail product_cat-tile first instock shipping-taxable purchasable product-type-simple">';
    htmlText +=
      '<a rel="canonical" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"';
    htmlText += '<div style="background-color: white; border: 1px solid #fff">';
    htmlText += '<div class="image-inner">';
    htmlText += `<img src="${data.src}" class="tile_image wp-post-image" alt="Concrete Abstracts AzulGlazed Vitrified Tiles"/>`;
    htmlText += `</div>`;
    htmlText += `<div class="nt-ribbon">NEW</div>`;
    htmlText += `<div class="clearfix"></div></div></a>`;
    htmlText += `<div class="clearfix"></div>`;
    htmlText += `<h2 class="woocommerce-loop-product__title">Concrete Abstracts Azul</h2>`;
    htmlText += `<div class="tile-list-text"><p>Glazed Vitrified Tiles,1200 x 2500 mm</p></div></li>`;
    // mainContainer.appendChild(htmlText);
    mainContainer.innerHTML = htmlText;
  }
}
