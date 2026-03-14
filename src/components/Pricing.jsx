import { motion } from 'framer-motion'
import { Zap, Check, Gift, Shield, ArrowRight } from 'lucide-react'

const features = [
  'Макияждын 5 түрүн үйрөнөсүз',
  'Кистилерге толук разбор',
  'Косметикаларга разбор',
  'Косметологтун кеңеши (БОНУС)',
  'Видео сабактар Телеграмда',
  'Куратордон кайтарым байланыш',
  'Өмүр бою жетки',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-800" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-champagne-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-500/10 text-champagne-400 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Атайын сунуш
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Чектелген{' '}
            <span className="text-gradient-gold italic">арзандатуу</span>
          </h2>
          <p className="font-body text-charcoal-300 max-w-lg mx-auto">
            Бүгүн катталыңыз жана 90% арзандатуу алыңыз — бул мүмкүнчүлүктү колдон чыгарбаңыз!
          </p>
        </motion.div>

        {/* Card + Image layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-0 items-center">
          {/* Elvira image — left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:flex lg:col-span-2 justify-center"
          >
            <div className="relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-champagne-500/10 blur-2xl" />
              <img
                src="/elvira-pink.webp"
                alt="Эльвира Бакытбековна"
                className="relative z-10 w-72 h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Glassmorphism Card — right side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-3"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-gold opacity-20 blur-xl" />

            <div className="relative glass-card-gold rounded-[2rem] p-8 sm:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-gold text-charcoal-800 text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Gift className="w-3.5 h-3.5" />
                  Чектелген сунуш
                </div>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 mt-2">
                Курс: «Сам себе визажист нөлдөн»
              </h3>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-champagne-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-champagne-400" />
                    </div>
                    <span className="font-body text-sm text-charcoal-200">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <div>
                  <p className="text-xs text-charcoal-400 mb-0.5">Баштапкы баа:</p>
                  <span className="font-display text-2xl font-bold text-charcoal-500 line-through decoration-red-400 decoration-2">
                    10,000 сом
                  </span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-charcoal-600" />
                <div>
                  <p className="text-xs text-champagne-400 mb-0.5">Азыркы баа:</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold">
                      1,000
                    </span>
                    <span className="font-display text-lg text-champagne-400 font-semibold">сом</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold">
                  -90%
                </div>
              </div>

              <a
                href="https://t.me/elvira_beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full btn-gold px-10 py-4 rounded-full text-base font-bold animate-pulse-glow"
              >
                Азыр катталуу
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-charcoal-400">
                <Shield className="w-4 h-4" />
                <span className="text-xs">Коопсуз төлөм</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
