import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "components", "content", "blogs");
  
  try {
    const filenames = fs.readdirSync(dir);
    return filenames.map((filename) => ({
      slug: filename.replace(/\.md$/, ""),
    }));
  } catch (error) {
    console.error("Error reading blog directory:", error);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "components", "content", "blogs", `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return (
      <div className="bg-black text-white min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
            <span>{data.author}</span>
            <span>{data.date}</span>
            <span>{data.readTime}</span>
          </div>
          {data.imageUrl && (
            <img 
              src={data.imageUrl} 
              alt={data.title} 
              className="w-full h-64 object-cover mb-8 rounded-lg"
            />
          )}
          <div className="prose prose-lg prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span key={tag} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading blog post:", error);
    return (
      <div className="bg-black text-white min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p>Sorry, the requested blog post could not be found.</p>
        </div>
      </div>
    );
  }
}