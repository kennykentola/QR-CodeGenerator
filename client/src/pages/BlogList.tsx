import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18nContext";

export default function BlogList() {
  const { t, lang } = useI18n();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="QR Code Guides & Tutorials | KennyKentola Digital"
        description="Learn how to create professional QR codes for menus, payments, vCards, and WhatsApp with our step-by-step guides and tutorials."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
            {t('blog', 'title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('blog', 'subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-0 overflow-hidden hover:shadow-lg transition duration-300">
              <Link href={`/blog/${post.slug}`}>
                <a className="block p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {post.readTime[lang] || post.readTime['en']}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-blue-600 transition">
                        {post.title[lang] || post.title['en']}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt[lang] || post.excerpt['en']}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium">
                        {t('blog', 'read_article')} <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
