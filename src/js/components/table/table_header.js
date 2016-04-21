var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var LocalizedResourceFieldMixin = require('realize/mixins/localized_resource_field_mixin.jsx');

window.TableHeader = React.createClass({
  mixins: [CssClassMixin, LocalizedResourceFieldMixin],

  propTypes: {
    name: React.PropTypes.string,
    label: Realize.PropTypes.localizedString,
    format: React.PropTypes.oneOf(['text', 'currency', 'number', 'percentage', 'boolean', 'date', 'datetime', 'time']),
    sortable: React.PropTypes.bool,
    sortDirection: React.PropTypes.string,
    sortFieldName: React.PropTypes.string,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.header',
      sortable: true,
      sortDirection: null,
      sortFieldName: null,
      onSort: function(sortData) { return true; }
    };
  },

  render: function() {
    return (
      <th className={this.headerClassName()}>
        <span onClick={this.sortColumn} className={this.labelClassName()}>
          {this.getLabel()}
        </span>
      </th>
    );
  },

  headerClassName: function() {
    var className = this.className();
    if(!!this.props.format) {
      className += ' table-header--' + this.props.format;
    }

    return className;
  },

  getLabel: function() {
    if(!!this.props.label && this.props.label.length > 0) {
      return Realize.i18n.t(this.props.label);
    }

    return this.localizeResourceField();
  },

  labelClassName: function() {
    var className = '';

    if(!this.props.clearTheme) {
      className += Realize.themes.getCssClass('table.header.label');
    }

    if(this.props.sortable) {
      className += " sortable";

      var sortDirection = this.props.sortDirection;
      if(sortDirection !== null) {
        className += " " + sortDirection;
      }
    }

    return className;
  },

  sortColumn: function() {
    if(!this.props.sortable) {
      return null;
    }

    var sortData = this.buildSortData();
    this.props.onSort(sortData);
  },

  buildSortData: function() {
    var sortField = this.getSortFieldName();
    var sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection
    };
  },

  getSortFieldName: function() {
    return this.props.sortFieldName || this.props.name;
  },

  getSortDirection: function() {
    var currentSortDirection = this.props.sortDirection;
    if(currentSortDirection === null || currentSortDirection == 'desc') {
      return 'asc';
    } else if(currentSortDirection == 'asc') {
      return 'desc';
    }
  }

});
