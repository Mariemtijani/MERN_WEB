/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pVZfecbsIV4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function CartTable() {
    return (
      <div className="container mx-auto my-8 px-4 md:px-6">
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-right text-sm font-bold text-gray-500 dark:text-gray-400">العنصر</th>
                <th className="px-4 py-3 text-right text-sm font-bold text-gray-500 dark:text-gray-400">الاسم</th>
                <th className="px-4 py-3 text-right text-sm font-bold text-gray-500 dark:text-gray-400">الكمية</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-500 dark:text-gray-400">السعر</th>
                <th className="px-4 py-3 text-left text-sm font-bold text-gray-500 dark:text-gray-400">المجموع</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-4">
                  <img
                    alt="صورة المنتج"
                    className="rounded-md object-cover"
                    height={64}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width={64}
                  />
                </td>
                <td className="px-4 py-4 font-medium">سماعات لاسلكية</td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-start">
                    <button
                      className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 mr-2"
                      type="button"
                    >
                      <svg
                        className="h-4 w-4 "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 12H6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <span className="px-2">2</span>
                    <button
                      className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-2 py-1 text-sm font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 ml-2"
                      type="button"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4 text-left">$79.99</td>
                <td className="px-4 py-4 text-left">$159.98</td>
              </tr>
             
            </tbody>
            <tfoot className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <td className="px-4 py-3 text-left font-bold" colSpan={4}>
                  المجموع:
                </td>
                <td className="px-4 py-3 text-left font-medium">$299.94</td>
              </tr>
            </tfoot>
          </table>
        </div>
       
      </div>
    )
  }