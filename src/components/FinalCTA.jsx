import { motion } from 'framer-motion'
import elviraStanding from '../../public/elvira-standing.webp'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-champagne-300/15 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-br from-champagne-200 via-nude-100 to-champagne-100 opacity-60" />
              <img
                src={elviraStanding}
                alt="Эльвира Бакытбековна"
                className="relative z-10 w-56 sm:w-72 h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-800 mb-4">
              Өзүңүздү{' '}
              <span className="text-gradient-gold italic">сулуулаңыз</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-charcoal-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              6500+ кыз буга чейин курсту аяктап, салонсуз эле өздөрүн сулуулап жатышат.
              Кийинки ким? Сиз!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="btn-gold px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 animate-pulse-glow"
              >
                Курска катталуу
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/elvira_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-champagne-300 text-charcoal-600 font-semibold hover:bg-champagne-50 transition-all inline-flex items-center justify-center gap-2"
              >
                Телеграмга жазуу
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
