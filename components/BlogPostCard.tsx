"use client";

import { BlogPost } from "@/data/blogposts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, author, date, readTime, tags, imageUrl, slug }) => (
  <Card className="bg-[#1c1c1c] text-white h-full flex flex-col justify-between rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle className="text-xl font-bold">{title}</CardTitle>
      <div className="text-sm text-gray-400 mt-2">
        <span>{author}</span> | <span>{date}</span> | <span>{readTime}</span>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-300">{excerpt}</p>
      <div className="flex items-center mt-4 space-x-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="border-t border-gray-700 pt-4">
      <Link href={`/blog/${slug}`}>
        <Button variant="link" className="text-primary hover:text-primary/80 p-0">
          Read More
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default BlogPostCard;
