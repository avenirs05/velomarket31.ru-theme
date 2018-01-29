  <?php if ($products) { ?>  
  <div class="product-grid row">
    <?php $a = 0; ?>
    <?php foreach ($products as $product) { ?>
    <div class="cols col-lg-4 col-md-4 col-sm-4 col-xs-4">    
    <div class="product">
        <?php if ($product['product_stickers']) { ?>
        <div class="sticker-box-cat">
          <?php foreach ($product['product_stickers'] as $product_sticker) { ?>
            <span class="stickers-cat" style="color: <?php echo $product_sticker['color']; ?>; background: <?php echo $product_sticker['background']; ?>;">
              <?php echo $product_sticker['text']; ?>
            </span>
          <?php } ?>
        </div>
        <?php } ?>        
        <?php if ($product['economy']) { ?>
            <div class="sticker">-<?php echo $product['economy']; ?>%</div>
        <?php } ?>
     
        <?php if ($product['thumb']) { ?>
            <div class="image">
              <a href="<?php echo $product['href']; ?>"><img src="<?php echo $product['thumb']; ?>" title="<?php echo $product['name']; ?>" alt="<?php echo $product['name']; ?>" /></a>
                     <?php if ($product['dop_img']) { ?>
                        <a class="hover-image" href="<?php echo $product['href']; ?>"><img src="<?php echo $product['dop_img']; ?>" title="<?php echo $product['name']; ?>" alt="<?php echo $product['name']; ?>" /></a>
                    <?php } ?>
                    <?php if (isset($popup_view_data['status']) && $popup_view_data['status']) { ?>
                    <a href='javascript:void(0);' class='popup_view_button' onclick='get_popup_view("<?php echo $product['product_id']; ?>");'><?php echo $popup_view_text['button_popup_view']; ?></a>
                    <?php } ?>
            </div>
        <?php } ?>
        <div class="product-about">
            <div class="name"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></div>
            <div class="description"><?php echo $product['description']; ?></div>
            <?php if ($product['price']) { ?>
               <div class="price">
               <?php if (!$product['special']) { ?>
                  <?php echo $product['price']; ?>
            <?php } else { ?>
               <span class="price-old"><?php echo $product['price']; ?></span> <span class="price-new"><?php echo $product['special']; ?></span>
            <?php } ?>
          </div>
          <?php } ?>
          <?php if (isset($product['oct_options']) && $product['oct_options']) { ?>
            <div class="cat-options">
              <?php foreach ($product['oct_options'] as $option) { ?>
                <?php if ($option['type'] == 'image') { ?>
                  <div class="form-group">
                    <label class="control-label"><?php echo $option['name']; ?>: </label>
                    <?php if ($option['product_option_value']) { ?>
                      <?php foreach ($option['product_option_value'] as $product_option_value) { ?>
                        <div class="radio">
                          <label>
                            <img src="<?php echo $product_option_value['image']; ?>" alt="<?php echo $product_option_value['name']; ?>" class="img-responsive" title="<?php echo $product_option_value['name']; ?>" />
                          </label>
                        </div>
                      <?php } ?>
                    <?php } ?>
                  </div>
                <?php } else { ?>
                  <div class="form-group size-box">
                    <label class="control-label"><?php echo $option['name']; ?>: </label>
                    <?php if ($option['product_option_value']) { ?>
                      <?php foreach ($option['product_option_value'] as $product_option_value) { ?>
                        <div class="radio">
                          <label><?php echo $product_option_value['name']; ?></label>
                        </div>
                      <?php } ?>
                    <?php } ?>
                  </div>
                <?php } ?>
              <?php } ?>
            </div>
          <?php } ?>
          <div class="product-buttons">
              <?php if ($product['rating']) { ?>
               <div class="rating">
		          <?php for ($i = 1; $i <= 5; $i++) { ?>
		          <?php if ($product['rating'] < $i) { ?>
		          <span><i class="fa fa-star-o stars-rev"></i></span>
		          <?php } else { ?>
		          <span><i class="fa fa-star stars-rev"></i></span>
		          <?php } ?>
		          <?php } ?>
		        </div>
            <?php } ?>
              <a class="cart" onclick="addToCart('<?php echo $product['product_id']; ?>');">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i><?php echo $button_cart; ?>
              </a>
              <div class="additional">
                  <a class="wishlist" onclick="addToWishList('<?php echo $product['product_id']; ?>');"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                  <a class="compare" onclick="addToCompare('<?php echo $product['product_id']; ?>');"><i class="fa fa-exchange" aria-hidden="true"></i></a>
              </div>
          </div>
          
        </div>
        
    </div> </div> 
     
    <?php } ?>
    
   
  <?php  } else { ?>

  <?php } ?>