import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag, Eye, Heart } from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function PostPage() {
  const { slug } = useParams()
  const post = mockPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    )
  }

  const categoryColors = {
    'Geotêxtil': 'bg-blue-100 text-blue-800',
    'Geogrelha': 'bg-green-100 text-green-800',
    'Geomembrana': 'bg-purple-100 text-purple-800',
    'Geocélula': 'bg-orange-100 text-orange-800',
    'Técnico': 'bg-gray-100 text-gray-800',
    'Pesquisa': 'bg-red-100 text-red-800'
  }

  return (
    <article className="min-h-screen bg-white pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos artigos</span>
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                  <Tag className="w-3 h-3 inline mr-1" />
                  {post.category}
                </span>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>2.5k visualizações</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>142 curtidas</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-primary-500" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-300"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartilhar</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                Os geossintéticos representam uma revolução na engenharia geotécnica moderna. 
                Estes materiais poliméricos têm transformado a forma como abordamos questões 
                relacionadas à estabilização de solos, drenagem e contenção em projetos de 
                engenharia civil.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Aplicações Principais
              </h2>

              <p>
                Na engenharia rodoviária, os geotêxteis são amplamente utilizados para 
                separação de camadas, evitando a mistura de materiais granulares diferentes 
                e mantendo a integridade estrutural do pavimento ao longo do tempo.
              </p>

              <p>
                As geogrelhas, por sua vez, oferecem excelente capacidade de reforço, 
                distribuindo cargas de forma eficiente e aumentando significativamente 
                a resistência à tração de solos granulares.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Vantagens Técnicas
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Redução significativa nos custos de construção</li>
                <li>Maior durabilidade das estruturas</li>
                <li>Facilidade de instalação e manutenção</li>
                <li>Sustentabilidade ambiental</li>
                <li>Versatilidade de aplicações</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Considerações Técnicas
              </h2>

              <p>
                A seleção adequada do tipo de geossintético deve considerar fatores como 
                resistência química, estabilidade UV, propriedades mecânicas e condições 
                específicas do local de aplicação. Uma análise criteriosa destes parâmetros 
                é fundamental para o sucesso do projeto.
              </p>

              <p>
                É importante destacar que a instalação adequada é crucial para o desempenho 
                dos geossintéticos. Seguir rigorosamente as especificações técnicas e 
                normas aplicáveis garante a eficácia e longevidade da solução implementada.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                <p className="text-primary-800 font-medium">
                  💡 <strong>Dica Técnica:</strong> Sempre consulte as normas ABNT NBR 
                  pertinentes ao projeto específico e realize ensaios de caracterização 
                  dos materiais antes da especificação final.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Conclusão
              </h2>

              <p>
                Os geossintéticos continuam evoluindo e oferecendo soluções cada vez mais 
                eficientes para os desafios da engenharia geotécnica. Sua correta aplicação 
                representa um investimento inteligente em projetos que demandam performance, 
                durabilidade e sustentabilidade.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="bg-gradient-primary rounded-xl p-8 text-white text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">
                Gostou deste artigo?
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Explore mais conteúdos técnicos sobre geossintéticos em nosso blog
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Ver Mais Artigos
                </Link>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Assinar Newsletter
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </article>
  )
}