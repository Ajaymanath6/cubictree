import PropTypes from 'prop-types';
import { Card } from '../common';
import ErrorWarningLineIcon from 'remixicon-react/ErrorWarningLineIcon';
import CheckboxCircleLineIcon from 'remixicon-react/CheckboxCircleLineIcon';
import BroadcastLineIcon from 'remixicon-react/BroadcastLineIcon';
import AuctionLineIcon from 'remixicon-react/AuctionLineIcon';
import AlertLineIcon from 'remixicon-react/AlertLineIcon';
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon';

/**
 * TaskList - Display a list of tasks or alerts
 * @param {Object} props
 * @param {string} props.title - The title of the task list
 * @param {Array} props.items - Array of task items
 */
const TaskList = ({ title, items }) => {
  const getIconForItem = (item) => {
    // Determine icon based on item type
    if (item.text.toLowerCase().includes('ad')) {
      return BroadcastLineIcon;
    } else if (item.text.toLowerCase().includes('auction')) {
      return AuctionLineIcon;
    } else {
      return AlertLineIcon;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
      style={{
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertLineIcon style={{ width: '20px', height: '20px', color: '#073370' }} />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <ArrowRightSLineIcon style={{ width: '20px', height: '20px', color: '#575757' }} />
      </div>

      {/* Task Items */}
      <div className="divide-y divide-gray-200">
        {items.length === 0 ? (
          <div className="px-6 py-8 text-center text-gray-500">
            <p>No tasks at the moment</p>
          </div>
        ) : (
          items.map((item) => {
            const ItemIcon = getIconForItem(item);
            return (
              <div
                key={item.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer flex items-start gap-3"
              >
                <ItemIcon 
                  className="flex-shrink-0 mt-0.5" 
                  style={{ 
                    width: '20px', 
                    height: '20px', 
                    color: '#575757' 
                  }} 
                />
                <div className="flex-1">
                  <p className={`text-sm ${item.alert ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                    {item.text}
                  </p>
                </div>
                {item.time && (
                  <p className="text-xs text-gray-500 flex-shrink-0">{item.time}</p>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      alert: PropTypes.bool,
      time: PropTypes.string,
    })
  ).isRequired,
};

export default TaskList;

