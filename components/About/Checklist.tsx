import React from "react";

export default function Checklist({ data }) {
  return (
    <div>
      <div>
        <ul className="mt-8 space-y-3 font-medium">
          {data.map((item, index) => (
            <li className="flex items-start lg:col-span-1">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="ml-3 leading-5 text-gray-600 text-lg" >{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
