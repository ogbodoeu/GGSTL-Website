import { Card } from '~/components/swift-route/Card';

export const Blog = () => {
  const image = 'images/flight.jpeg';
  return (
    <div className="bg-white pt-10 px-4 sm:px-8 md:px-16 lg:px-40 min-h-screen text-text-main-swift">
      <h1 className="text-2xl font-bold mb-4">Diaspora Services</h1>
      <p className="text-lg mb-4"> </p>
      We offer a range of services to help you connect with your roots and stay in touch with your
      heritage.
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center pb-10">
        {blogs.map((blog) => (
          <Card
            onClick={() => alert('Card clicked')}
            type="blog"
            image={image}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    title: 'Flight to Paris',
  },
  {
    id: 2,
    title: 'Flight to New York',
  },
  {
    id: 3,
    title: 'Money Transfer Services',
  },
];

export default Blog;
