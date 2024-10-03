import React from 'react';

function Blog() {
  return (
    <section id="blogs" className="blog-section">
      <h2>Blogs</h2>
      <div className="blog-list">
        <div className="blog-item">
          <h3>Blog Post 1</h3>
          <p>Description of blog post 1.</p>
        </div>
        <div className="blog-item">
          <h3>Blog Post 2</h3>
          <p>Description of blog post 2.</p>
        </div>
        <div className="blog-item">
          <h3>Blog Post 3</h3>
          <p>Description of blog post 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
