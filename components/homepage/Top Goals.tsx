import React from 'react';
interface ArticleProps {
    title: string;
    image: string;
  }
function TopGoals() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 className="text-2xl font-extrabold text-gray-900">Top Daily Goals</h2>
        <section className="mt-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-2">
          <Article
            title="Liverpool VS Fullham"
            image="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
          />
          <Article
            title="PSG VS Barca"
            image="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <Article
            title="Realmarid VS Atletic"
            image="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          />
        </section>
      </article>
    </section>
  );
}

function Article({ title, image }: ArticleProps) {
  return (
    <article
      className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <a className="text-white text-xl font-bold text-center" href="#">
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
      </div>
    </article>
  );
}

export default TopGoals;
