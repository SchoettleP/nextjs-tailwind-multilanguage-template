const SvgThemeSwitch = ({ width = 100 }) => (
  <svg
    width={width}
    viewBox="0 0 140 140"
    fill="none"
    className="w-auto cursor-pointer group mx-auto z-10"
  >
    <circle
      cx="70"
      cy="70"
      r="70"
      fill="currentColor"
      className="text-blue-600 dark:text-yellow-300 "
    ></circle>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M82.5612 138.876C55.6458 126.762 37 100.476 37 70C37 39.5244 55.6458 13.2383 82.5613 1.1239C115.227 7.04239 140 35.6281 140 70C140 104.372 115.227 132.958 82.5612 138.876Z"
      fill="currentColor"
      className="text-yellow-300 group-hover:text-blue-200 dark:text-blue-500 dark:group-hover:text-yellow-500 "
    ></path>
  </svg>
);

export default SvgThemeSwitch;
