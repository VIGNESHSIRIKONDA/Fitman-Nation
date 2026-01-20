import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [filter, setFilter] = useState('All');
  // Dynamic categories based on existing posts
  const categories = ['All', ...Array.from(new Set(MOCK_BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = filter === 'All' ? MOCK_BLOG_POSTS : MOCK_BLOG_POSTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black italic uppercase mb-6 tracking-tighter">
            The <span className="text-red-600">Lab</span> Blog
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold transition-all border ${filter === cat ? 'bg-red-600 border-red-600 text-white' : 'bg-transparent border-white/10 text-neutral-400 hover:border-red-600/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 hover:border-red-600/30 transition-all group cursor-pointer">
              <div className="h-56 overflow-hidden">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-red-600 text-xs font-black uppercase tracking-widest">{post.category}</span>
                  <span className="text-neutral-500 text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase group-hover:text-red-600 transition-colors">{post.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-bold border-b border-red-600 pb-1">READ ARTICLE</span>
                    <span className="text-neutral-600 text-xs uppercase">By {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
