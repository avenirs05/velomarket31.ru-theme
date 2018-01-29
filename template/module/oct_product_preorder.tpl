<div id="popup-product-preorder-wrapper">
  <div class="popup-heading"><?php echo $heading_title; ?></div>
  <div class="popup-center">
    <?php if (isset($heading_title_product)) { ?>
    <div class="popup_product_name text-center"><?php echo $heading_title_product; ?></div>
    <?php } ?>
    <?php if (isset($thumb)) { ?>
    <div class="popup_product_image text-center"><img src="<?php echo $thumb; ?>" /></div>
    <?php } ?>
    <?php if (isset($price) && isset($special)) { ?>
    <div class="popup_product_prices text-center">
      <?php if (!$special) { ?>
      <?php echo $price; ?>
      <?php } else { ?>
      <span style="text-decoration: line-through;"><?php echo $price; ?></span>
      <?php echo $special; ?>
      <?php } ?>
    </div>
    <?php } ?>
		<?php if ($text_promo) { ?>
		<div class="popup-promo-text"><?php echo $text_promo; ?></div>
		<?php } ?>
    <form method="post" enctype="multipart/form-data" id="product-preorder-form">
      <div class="payment-info">
        <?php if ($oct_product_preorder_data['name']) { ?>
        <div>
          <label><?php echo $enter_name; ?><?php if ($oct_product_preorder_data['name'] == 2) { ?><span class="required">*</span><?php } ?></label>
          <input name="name" value="<?php echo $name;?>" placeholder="<?php echo $enter_name; ?>" />
        </div>
        <?php } ?>
        <?php if ($oct_product_preorder_data['telephone']) { ?>
        <div>
          <label><?php echo $enter_telephone; ?><?php if ($oct_product_preorder_data['telephone'] == 2) { ?><span class="required">*</span><?php } ?></label>
          <input name="telephone" value="<?php echo $telephone;?>" placeholder="<?php echo $enter_telephone; ?>" />
        </div>
        <?php } ?>
        <?php if ($oct_product_preorder_data['email']) { ?>
        <div>
          <label><?php echo $enter_email; ?><?php if ($oct_product_preorder_data['email'] == 2) { ?><span class="required">*</span><?php } ?></label>
          <input name="email" value="<?php echo $email;?>" placeholder="<?php echo $enter_email; ?>" />
        </div>
        <?php } ?>
        <?php if ($oct_product_preorder_data['comment']) { ?>
        <div>
          <label><?php echo $enter_comment; ?><?php if ($oct_product_preorder_data['comment'] == 2) { ?><span class="required">*</span><?php } ?></label>
          <textarea name="comment" placeholder="<?php echo $enter_comment; ?>"><?php echo $comment;?></textarea>
        </div>
        <?php } ?>
        <input type="hidden" name="pid" value="<?php echo $href; ?>">
		<input type="hidden" name="mid" value="<?php echo $model; ?>">
      </div>
    </form>
  </div>
  <div class="popup-footer">
    <a id="popup-send-button"><?php echo $button_send; ?></a>
  </div>
<script type="text/javascript"><!--
function masked(element, status) {
  if (status == true) {
    $('<div/>')
    .attr({ 'class':'masked' })
    .prependTo(element);
    $('<div class="masked_loading" />').insertAfter($('.masked'));
  } else {
    $('.masked').remove();
    $('.masked_loading').remove();
  }
}
$('#popup-send-button').on('click', function() {
  masked('#popup-product-preorder-wrapper', true);
  $.ajax({
      type: 'post',
      url:  'index.php?route=module/oct_product_preorder/send',
      dataType: 'json',
      data: $('#product-preorder-form').serialize(),
      success: function(json) {
        if (json['error']) {
          if (json['error']['field']) {
            masked('#popup-product-preorder-wrapper', false);
            $('.text-danger').remove();
            $.each(json['error']['field'], function(i, val) {
              $('[name="' + i + '"]').addClass('error_style').after('<div class="text-danger">' + val + '</div>');
            });
          }
        } else {
          if (json['output']) {
            masked('#popup-product-preorder-wrapper', false);
            $('#popup-send-button').remove();
						$('#popup-product-preorder-wrapper .popup-footer').remove();
            $('#popup-product-preorder-wrapper .popup-center').html(json['output']);
          }
        }
      }
  });
});
//--></script>
</div>
