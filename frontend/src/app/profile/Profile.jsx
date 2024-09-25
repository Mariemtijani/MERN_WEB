
export default function Profile() {
  return (
    <div className="mt-20 py-4 px-4">
      <div className="flex justify-center gap-8">
        <div className=" bg-white w-2/5 dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                alt="Artisan Profile"
                className="rounded-full"
                height={80}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width={80}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">John Doe</h2>
              <p className="text-gray-500 dark:text-gray-400">Artisan, Woodworker</p>
              
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact Details</h3>
              <div className="mt-2 text-gray-500 dark:text-gray-400">
                <p>
                  <MailIcon className="w-5 h-5 inline-block mr-2" />
                  johndoe@example.com
                </p>
                <p>
                  <PhoneIcon className="w-5 h-5 inline-block mr-2" />
                  +1 (555) 555-5555
                </p>
                <p>
                  <LocateIcon className="w-5 h-5 inline-block mr-2" />
                  123 Main St, Anytown USA
                </p>
              </div>
              <div className="mt-4">
                <button size="sm" variant="outline" className="bg-gray-700 text-white p-2">
                  Edit Info
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Services</h2>
            <button size="sm" variant="outline">
              Add Service
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between space-x-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        alt="Service Image"
                        className="rounded-md"
                        height={80}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "80/80",
                          objectFit: "cover",
                        }}
                        width={80}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Custom Furniture</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Handcrafted furniture made to order, with a focus on quality and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button size="sm" variant="outline">
                    Edit
                  </button>
                  <button className="text-red-500" size="sm" variant="outline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between space-x-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        alt="Service Image"
                        className="rounded-md"
                        height={80}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "80/80",
                          objectFit: "cover",
                        }}
                        width={80}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Woodturning</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Unique, handcrafted wooden bowls and vases created using traditional woodturning techniques.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button size="sm" variant="outline">
                    Edit
                  </button>
                  <button className="text-red-500" size="sm" variant="outline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between space-x-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        alt="Service Image"
                        className="rounded-md"
                        height={80}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "80/80",
                          objectFit: "cover",
                        }}
                        width={80}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Carving</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Intricate wood carvings, ranging from small sculptures to custom signage and home decor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button size="sm" variant="outline">
                    Edit
                  </button>
                  <button className="text-red-500" size="sm" variant="outline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between space-x-4">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        alt="Service Image"
                        className="rounded-md"
                        height={80}
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "80/80",
                          objectFit: "cover",
                        }}
                        width={80}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Restoration</h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Skilled restoration of antique and vintage furniture, bringing new life to cherished pieces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button size="sm" variant="outline">
                    Edit
                  </button>
                  <button className="text-red-500" size="sm" variant="outline">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button size="sm" variant="outline">
              Add Service
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}