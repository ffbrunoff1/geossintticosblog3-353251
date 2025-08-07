import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, ArrowRight, Tag, Eye } from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function Services() {
  const recentPosts = mockPosts.slice(1)

  const categoryColors = {
    'Geotêxtil': 'bg-blue-100 text-blue-800',
    'Geogrelha': 'bg-green-100 text-green-800',
    'Geomembrana': 'bg-purple-100 text-purple-800',
    'Geocélula': 'bg-orange-100 text-orange-800',
    'Técnico': 'bg-gray-100 text-gray-800',
    'Pesquisa': 'bg-red-100 text-red-800'
  }

  return (
    <section id="articles" className="section-padding bg-white">
      <div className="container-max mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Últimas{' '}
            <span className="text-gradient">Publicações</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore nossos artigos técnicos mais recentes sobre geossintéticos, 
            com análises detalhadas e aplicações práticas na engenharia.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                      <Tag className="w-3 h-3 inline mr-1" />
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-white text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{post.views || '1.2k'}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4 text-primary-500" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-primary-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link
                      to={`/post/${post.slug}`}
                      className="group/btn inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      <span>Ler artigo</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Ver Todos os Artigos</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}