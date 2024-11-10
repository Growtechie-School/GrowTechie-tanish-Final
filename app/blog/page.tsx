"use client";

import { useState } from "react";
import { blogPosts } from "@/data/blogposts";
import BlogPostCard from "@/components/BlogPostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Technology", "Programming", "Cloud Computing"];

  const filteredPosts = activeTab === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeTab);

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blogs</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover insights, tutorials, and the latest in tech from our expert writers.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`text-sm font-medium px-4 py-2 rounded-full ${
                  activeTab === category ? "bg-primary text-primary-foreground" : "text-white hover:bg-gray-800"
                }`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} {...post} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
