import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import NotFound from "./NotFound";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match) return <NotFound />;
  
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={`${post.title} | KennyKentola Digital`}
        description={post.excerpt}
        type="article"
      />
      
      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-blue-600 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
          </Button>
        </Link>
        
        <article className="bg-white dark:bg-slate-900 rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-200 dark:border-slate-800">
          <header className="mb-10 text-center border-b border-slate-100 dark:border-slate-800 pb-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4"/> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4"/> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4"/> {post.readTime}</span>
            </div>
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-blue-600 prose-a:text-blue-500 hover:prose-a:text-blue-600">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <h3 className="text-xl font-bold mb-4">Ready to create your QR Code?</h3>
            <Link href="/generator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Launch Generator
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
