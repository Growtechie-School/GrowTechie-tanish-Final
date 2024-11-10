export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    imageUrl: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      slug: "ai-web-development", 
      excerpt: "Explore how artificial intelligence is reshaping the landscape of web development and what it means for developers.",
      author: "Ramakrushna Mohapatra",
      date: "2024-09-15",
      readTime: "5 min read",
      category: "Technology",
      tags: ["AI", "Web Development", "Future Tech"],
      imageUrl: "/Artificial-Intelligence-in-Web-Development.png",
    },
    {
      id: 2,
      title: "Mastering React Hooks: A Comprehensive Guide",
      slug: "mastering-react-hooks",
      excerpt: "Dive deep into React Hooks and learn how to leverage them to write more efficient and cleaner React code.",
      author: "Vijeeth",
      date: "2024-09-10",
      readTime: "8 min read",
      category: "Programming",
      tags: ["React", "JavaScript", "Web Development"],
      imageUrl: "/Mastering_React.webp",
    },
    {
      id: 3,
      title: "The Rise of Serverless Architecture",
      slug: "rise-of-serverless-architecture",
      excerpt: "Discover the benefits and challenges of serverless architecture and how it's changing the way we build and deploy applications.",
      author: "Alice Johnson",
      date: "2024-09-05",
      readTime: "6 min read",
      category: "Cloud Computing",
      tags: ["Serverless", "Cloud", "Architecture"],
      imageUrl: "/Serverless-An-Emerging-Software-Architecture-768x389.jpg",
    },
  ];
  