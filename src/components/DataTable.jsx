import React, { useState } from 'react';
import { ChevronDown, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const DataTable = ({
  columns = [],
  data = [],
  itemsPerPage = 5,
  showPagination = true,
  className = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return currentData;

    return [...currentData].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [currentData, sortConfig]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPaginationNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border-b-2 border-gray-300 px-2 py-3.5 text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-medium text-gray-700">
                      {column.header}
                    </span>
                    {column.sortable && (
                      <button
                        onClick={() => handleSort(column.key)}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label={`Sort by ${column.header}`}
                      >
                        <ChevronDown size={24} className={`transition-transform ${
                          sortConfig.key === column.key && sortConfig.direction === 'desc'
                            ? 'rotate-180'
                            : ''
                        }`} />
                      </button>
                    )}
                    {column.filterable && (
                      <button
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label={`Filter ${column.header}`}
                      >
                        <Filter size={24} />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className="border-b border-gray-300 px-2 py-3.5"
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : <span className="text-base text-gray-700">{row[column.key]}</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPagination && totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 p-4 border-t border-gray-200">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          {getPaginationNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => goToPage(pageNum)}
              className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                currentPage === pageNum
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="Next page"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
