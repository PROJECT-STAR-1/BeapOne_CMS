import BlogCard from "@/components/Blog/BlogCard";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-indigo-900 hover:bg-indigo-800",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 2,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 3,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-red-500 hover:bg-red-600",
      badgeColor: "bg-red-100 text-red-700",
    },
    {
      id: 4,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 5,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-indigo-900 hover:bg-indigo-800",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      id: 6,
      category: "Finance",
      date: "Jan 20, 2025",
      title: "Multi-branch finance tracking",
      description:
        "Entrepreneurs and small business owners can optimize their finance tracking, by utilizing multi-branch finance tracking.",
      image: "/images/blog/small.svg",
      buttonColor: "bg-emerald-500 hover:bg-emerald-600",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1B1464] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="mt-2 text-sm text-gray-300">
            Product Overview / <span className="text-indigo-300">Blog</span>
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Blog
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CustomerCareSection />
      <TestimonialsSection />
    </div>
  );
}
