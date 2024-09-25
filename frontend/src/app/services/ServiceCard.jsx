import React from "react";

const ServiceCard = ({ title, description, price, image, artisanName, artisanPhoto, addToCart }) => {
  // دالة لإضافة الخدمة إلى السلة
  const handleAddToCart = () => {
    // أضف اللوجيك الخاص بك هنا لإضافة الخدمة إلى السلة
    console.log(`تمت إضافة ${title} إلى السلة`);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            alt={title}
            className="w-full object-cover"
            height={400}
            src={image} // عرض الصورة
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
            width={600}
          />
        </div>
      </div>
      <div className="p-3 flex justify-between">
        <div className="">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
          <p className="mt-4 text-2xl font-bold">{price}</p>
        </div>
        <div className="">
          <p className="ml-4 text-lg font-semibold">{artisanName}</p>
          <img
            alt={artisanName}
            className="h-10 w-10 rounded-full object-cover"
            src={artisanPhoto}
          />
        </div>
      </div>
      {/* زر لإضافة الخدمة إلى السلة */}
      <div className="p-3 flex justify-center">
        <button
          onClick={addToCart}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          إضافة إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
