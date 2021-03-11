import { useState } from 'react';
import ClickAwayListener from './clickAwayListener';
import SvgArrowDown from '../svg/arrowDown';

const DropdownItem = ({ item: { name, onClick } }) => {
  return (
    <div
      className="py-1 cursor-pointer"
      role="none"
      onClick={() =>
        onClick ? onClick() : console.log('No function provided!')
      }
    >
      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        {name}
      </span>
    </div>
  );
};

const Dropdown = ({ title, items }) => {
  const [show, setShow] = useState(false);

  return (
    <ClickAwayListener onAwayClick={() => setShow(false)}>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            {title}
            <SvgArrowDown className="-mr-1 ml-2 h-5 w-5" />
          </button>
        </div>
        {show && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {items?.map((item, index) => (
              <DropdownItem key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
