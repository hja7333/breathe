import "flowbite/dist/flowbite.min.css";
import "flowbite/dist/flowbite.min.js";

function Footer() {
  const openSocialMediaProfile = (profileUrl) => {
    window.open(profileUrl, "_blank");
  };
  return (
    <footer>
      <button
        type="button"
        class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
        onClick={() =>
          openSocialMediaProfile("https://github.com/hja7333/breathe")
        }
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
        Hit for Github source code{" "}
      </button>
      <button
        type="button"
        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        onClick={() =>
          openSocialMediaProfile(
            "https://www.linkedin.com/in/alan-hunt-69957b59/"
          )
        }
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 18 19"
        >
          <path
            fill-rule="evenodd"
            d="M16 0H2C0.89543 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.89543 17.1046 0 16 0ZM5.12162 15.9472H3.0033V7.68765H5.12355V15.9472H5.12162ZM4.06292 6.24744C3.05653 6.24744 2.24562 5.43653 2.24562 4.42922C2.24562 3.42239 3.05653 2.61147 4.06292 2.61147C5.07025 2.61147 5.88117 3.42239 5.88117 4.42922C5.88117 5.43653 5.07025 6.24744 4.06292 6.24744ZM15.9999 15.9472H13.8815V11.2814C13.8815 10.2186 13.8532 8.82988 12.0839 8.82988C10.2719 8.82988 10.0216 10.0307 10.0216 11.1819V15.9472H7.90236V7.68765H9.99172V8.95264H10.0384V8.95264C11.1141 7.64795 12.6524 7.27201 13.7757 7.27201C16.7778 7.27201 17.9586 9.35051 17.9586 12.2609V15.9472H15.9999V15.9472Z"
            fill="white"
          />
        </svg>
        Hit for Linkedin profile{" "}
      </button>
      <button
        type="button"
        className="text-black bg-white hover:bg-gray-300 focus:ring-4 focus:outline-none focus:[#282828
        ] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-gray-300 me-2 mb-2"
        onClick={() =>
          openSocialMediaProfile("https://www.youtube.com/watch?v=PLvoOUOAx5A")
        }
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          fill="#FF0000" // Set the fill color to YouTube red
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            clipRule="evenodd"
          />
        </svg>
        Hit for YouTube channel
      </button>
      <p>
        Designed + Developed by Alan Hunt, COPYRIGHT ©{" "}
        {new Date().getFullYear()} Alan Hunt
      </p>{" "}
    </footer>
  );
}

export default Footer;
