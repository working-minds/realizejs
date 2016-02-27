var TooltipMixin = {
  componentDidUpdate: function () {
    this.initializeTooltip();
  },

  componentDidMount: function () {
    this.initializeTooltip();
  },

  initializeTooltip: function () {
    $(".tooltipped").tooltip({delay: 100});
  }
};

module.exports = TooltipMixin;
