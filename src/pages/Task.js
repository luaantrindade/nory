import React from "react";
import { CloudUploadIcon } from "@heroicons/react/outline"; // Importing the upload icon

export function Task() {
  return (
    <div>
      <div className="text-white text-4xl mb-6 text-center">Import your data in each section:</div>

      <div className="flex items-center justify-center h-[60vh] bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center space-x-4 ">
          <div>Items</div>
            <CloudUploadIcon className="h-12 w-12 text-gray-400 " />
          </div>

          {/* Card 2 */}
          <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center space-x-4 ">
            <div>Ingridients</div>
            <CloudUploadIcon className="h-12 w-12 text-gray-400" />
          </div>

          {/* Card 3 */}
          <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center space-x-4 ">
          <div>Recipes</div>
            <CloudUploadIcon className="h-12 w-12 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;


