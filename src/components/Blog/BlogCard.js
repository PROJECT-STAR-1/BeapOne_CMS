import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-60 object-cover rounded-t-xl"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${post.badgeColor}`}
          >
            {post.category}
          </span>
          <span className="text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-lg font-semibold mb-3">{post.title}</h3>

        <p className="text-gray-600 text-sm mb-6">{post.description}</p>

        <button
          className={`w-full flex items-center justify-center gap-2 text-white py-2 rounded-full transition ${post.buttonColor}`}
        >
          View Post <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
