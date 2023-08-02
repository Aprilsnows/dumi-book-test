function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
import React, { memo } from 'react';
import './Pagination.less';
var Pagination = /*#__PURE__*/ memo(function (props) {
  var currentPage = props.currentPage,
    totalPages = props.totalPages,
    onPageChange = props.onPageChange,
    maxVisiblePages = props.maxVisiblePages;
  var getPageRange = function getPageRange() {
    if (totalPages < maxVisiblePages) {
      return Array.from(
        {
          length: totalPages,
        },
        function (_, index) {
          return index + 1;
        },
      );
    }
    if (totalPages <= maxVisiblePages) {
      return Array.from(
        {
          length: totalPages,
        },
        function (_, index) {
          return index + 1;
        },
      );
    } else if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      var pages = _toConsumableArray(Array(maxVisiblePages)).map(function (_, index) {
        return index + 1;
      });
      pages.push('...');
      pages.push(totalPages);
      return pages;
    } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      var _pages = [1, '...'];
      for (var i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        _pages.push(i);
      }
      return _pages;
    } else {
      var _pages2 = [1, '...'];
      for (
        var _i = currentPage - Math.floor(maxVisiblePages / 2);
        _i <= currentPage + Math.floor(maxVisiblePages / 2);
        _i++
      ) {
        _pages2.push(_i);
      }
      _pages2.push('...');
      _pages2.push(totalPages);
      return _pages2;
    }
  };
  var handlePageChange = function handlePageChange(page) {
    onPageChange(page);
  };
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  var pageRange = getPageRange();
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'pagination',
    },
    /*#__PURE__*/ React.createElement(
      'button',
      {
        disabled: currentPage === 1,
        onClick: handlePreviousPage,
      },
      'Previous',
    ),
    pageRange.map(function (page, index) {
      return /*#__PURE__*/ React.createElement(
        'button',
        {
          key: index,
          className: page === currentPage ? 'active' : '',
          onClick: function onClick() {
            return handlePageChange(page);
          },
        },
        page,
      );
    }),
    /*#__PURE__*/ React.createElement(
      'button',
      {
        disabled: currentPage === totalPages,
        onClick: handleNextPage,
      },
      'Next',
    ),
  );
});
Pagination.defaultProps = {
  totalPages: 50,
  maxVisiblePages: 5,
  currentPage: 1,
  onPageChange: function onPageChange() {},
};
export default Pagination;
