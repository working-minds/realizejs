var TableHeader = React.createClass({
  mixins: [CssClassMixin, LocalizedResourceFieldMixin],
  propTypes: {
    label: Realize.PropTypes.localizedString,
    sortable: React.PropTypes.bool,
    sortDirection: React.PropTypes.string,
    onSort: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.header',
      sortable: true,
      sortDirection: null,
      onSort: function(sortData) {
        return true;
      }
    };
  },

  render: function() {
    return (
      <th className={this.className()}>
        <span onClick={this.sortColumn} className={this.labelClassName()}>
          {this.getLabel()}
        </span>
      </th>
    );
  },

  getLabel: function() {
    if(!!this.props.label && this.props.label.length > 0) {
      return Realize.t(this.props.label);
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
    var sortField = this.props.name;
    var sortDirection = this.getSortDirection();

    return {
      field: sortField,
      direction: sortDirection
    };
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
