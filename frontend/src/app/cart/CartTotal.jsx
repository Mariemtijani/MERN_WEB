import React from 'react'

export default function CartTotal() {
  return (
    <div className="mt-8 px-5 pb-5">
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3">
        <h3 className="text-lg font-medium">ملخص الطلب</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 dark:text-gray-400">المجموع الفرعي</p>
            <p className="font-medium">$299.94</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">الشحن</p>
            <p className="font-medium">$0.00</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">الضريبة</p>
            <p className="font-medium">$0.00</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">المجموع</p>
            <p className="font-medium">$299.94</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex justify-end">
        <button
          className="inline-flex items-center justify-center rounded-md bg-[#62BDAE] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          type="button"
        >
          المتابعة إلى الدفع
        </button>
      </div>
    </div>
  </div>
  )
}
