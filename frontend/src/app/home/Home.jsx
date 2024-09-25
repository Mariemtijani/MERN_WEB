import React from 'react';
import Features from './Features';
import CategoryCard from '../categories/CategoryCard';
import './home.css';
import Footer from './Footer';
import { useCategory } from '../admin/categories/CategoryContext';

export default function Home() {
  const { categories } = useCategory();

  console.log(categories);

  // Function to convert binary data to base64 string
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <div>
      <div className="bg-slate-50 min-h-screen p-8 mt-16">
        <main className="grid grid-cols-3">
          <div className="col-span-2 pt-16">
            <h2 className="text-7xl font-bold leading-tight mb-6 text-[#00807C]">
              اكتشفوا سحر الحرف اليدوية المغربية
            </h2>
            <p className="mt-4 text-base text-gray-500 lg:mt-8 sm:text-2xl">
              منتجات حرفية تعبر عن الثقافة والإبداع
            </p>
            <div className="flex items-center space-x-10 mb-8 mt-10 w-3/4">
              <button className="bg-[#FFAD71] font-bold text-white px-4 py-2 rounded-r-md hover:bg-[#62BDAE] focus:outline-none focus:ring-2 focus:ring-[#ff385c] focus:ring-offset-2">
                بحث
              </button>
              <input
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ff385c] focus:border-transparent"
                placeholder="البحث عن الحرفيين"
              />
            </div>
            <div className="overflow-hidden mb-6">
              <div>
                <div>
                  <a
                    title=""
                    className="button inline-flex bg-[#62BDAE] py-2 text-white px-3 rounded font-bold mt-3"
                    role="button"
                  >
                    انضم مجاناً
                  </a>
                  <p className="mt-3 text-gray-600">
                    هل انضممت إلينا بالفعل؟{' '}
                    <a
                      href="#"
                      title=""
                      className="text-[#62BDAE] transition-all duration-200 hover:underline"
                    >
                      تسجيل الدخول
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Marrakech alley"
              className="rounded-t-full"
              src={process.env.PUBLIC_URL + `/Images/jame3.jpg`}
              style={{
                aspectRatio: '300/400',
                objectFit: 'cover',
                height: '600px',
              }}
            />
          </div>
        </main>
      </div>

      <h2 className="text-center pt-16 font-bold text-gray-900 text-2xl decoration-teal-500 overline">
        التصنيفات
      </h2>
      <section className="w-full py-12 md:py-24 lg:py-12">
        <div className="container grid gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {categories.map((cat) => {
            const imageBase64 = cat.imageData
              ? `data:${cat.imageData.contentType};base64,${arrayBufferToBase64(cat.imageData.data.data)}`
              : null;
            return (
              <CategoryCard
                key={cat._id}
                name={cat.name}
                image={imageBase64}
                id={cat._id}
              />
            );
          })}
        </div>
      </section>

      {/* <Features /> */}
      <Footer />
    </div>
  );
}
