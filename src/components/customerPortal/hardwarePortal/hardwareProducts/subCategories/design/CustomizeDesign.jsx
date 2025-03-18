import { useState, Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import FileUploader from "../../../../forms/FileUpload";

export function CustomizeDesign() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Open Modal Button */}
      <button type="button"
        onClick={() => setOpen(true)}
        className="flex-1 px-8 py-4 rounded-xl border-2 border-blue-900 text-blue-900 font-semibold hover:bg-blue-900 hover:text-white transition-colors"
      >
        Customize
      </button>

      {/* Modal using Headless UI */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black/50" />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              {/* Modal Header */}
              <DialogTitle className="text-lg font-bold text-gray-800">
                Propose Changes
              </DialogTitle>

              {/* Modal Body */}
              <div className="mt-4 space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="description" className="text-gray-800 font-semibold mb-2">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900"
                    placeholder="Describe your request..."
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <FileUploader />
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex justify-center items-center my-4">
                <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="mr-2" />
                  <span className="underline font-semibold hover:text-[rgb(0,0,122)]">
                    I agree to Fundi Agreement
                  </span>
                </label>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex justify-end gap-2 mt-6">
                <button type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Close
                </button>
                <button type='button'
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-[rgb(0,0,122)] text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
