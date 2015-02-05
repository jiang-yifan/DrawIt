(function(){

    Modal = function($object){
      this.$overlay = $('<div id="overlay"></div>');
      this.$modal = $('<div id="modal"></div>');
      this.$content = $('<div id="content"></div>');

      $object.append(this.$overlay);
      $object.append(this.$modal);
      this.$modal.append(this.$content);
      this.close();
    },

    // Append the HTML

    // Center the modal in the viewport
    Modal.prototype.center = function () {
      var top, left;

      top = Math.max($(window).height() - this.$modal.outerHeight(), 0) / 2;
      left = Math.max($(window).width() - this.$modal.outerWidth(), 0) / 2;

      this.$modal.css({
          top:top + $(window).scrollTop(),
          left:left + $(window).scrollLeft()
      });
    };

    // Open the modal
    Modal.prototype.open = function (settings) {
      this.$content.empty().append(settings.content);

      this.$modal.css({
          width: settings.width || 'auto',
          height: settings.height || 'auto'
      })

      this.center();

      $(window).bind('resize.modal', this.center.bind(this));

      this.$modal.show();
      this.$overlay.show();
    };

    // Close the modal
    Modal.prototype.close = function () {
      this.$modal.hide();
      this.$overlay.hide();
      this.$content.empty();
      $(window).unbind('resize.modal');
    };

    Modal.prototype.remove = function () {
      this.$modal.remove();
      this.$overlay.remove();
      this.$content.remove();
      $(window).unbind('resize.modal');
    };

}());
