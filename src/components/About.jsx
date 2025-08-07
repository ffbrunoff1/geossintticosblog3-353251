import { motion } from 'framer-motion'
import { Award, Target, Users, BookOpen, Lightbulb, TrendingUp } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Compartilhar conhecimento técnico sobre geossintéticos e suas aplicações na engenharia geotécnica moderna.'
    },
    {
      icon: BookOpen,
      title: 'Conteúdo Especializado',
      description: 'Artigos técnicos, estudos de caso e análises detalhadas sobre geotêxteis, geogrelhas e geomembranas.'
    },
    {
      icon: Users,
      title: 'Comunidade Técnica',
      description: 'Conectamos engenheiros, pesquisadores e profissionais da área de geotecnia e engenharia civil.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Acompanhamos as últimas tendências e inovações em materiais geossintéticos e técnicas de aplicação.'
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Todo nosso conteúdo é revisado por especialistas e baseado em normas técnicas atualizadas.'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Contínuo',
      description: 'Atualizações constantes com novos artigos, pesquisas e desenvolvimentos do setor.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Sobre o{' '}
            <span className="text-gradient">Geossintéticos.Blog</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Somos o principal portal de conhecimento técnico sobre geossintéticos no Brasil, 
            dedicado a compartilhar informações atualizadas e especializadas para profissionais 
            da engenharia geotécnica e civil.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full flex flex-col">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Junte-se à Nossa Comunidade
          </h3>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Milhares de engenheiros e profissionais já confiam em nosso conteúdo 
            para se manterem atualizados sobre as melhores práticas em geossintéticos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Assinar Newsletter
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Explorar Artigos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}