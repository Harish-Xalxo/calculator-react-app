import React from 'react';

const Display = (props) => {

    return (
        <>
         {/* Input Section */}
         <div className="flex justify-center items-center mt-6 mb-5">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg shadow-slate-500/50 w-96">
              <input
                type="text"
                value={props.displayValue}
                className="w-full p-2 mb-4 border border-gray-300 rounded ring-2 focus:outline-none focus:ring-green-500"
                placeholder="Enter expression"
                readOnly
              />
            </div>
          </div>
        </>
    );

}

export default Display;