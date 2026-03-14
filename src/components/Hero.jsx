import { motion } from 'framer-motion'
import { ArrowDown, Star, Award, Users } from 'lucide-react'
import elviraHeroWebp from '../../public/elvira-hero.webp'
import elviraHeroPng from '../../public/elvira-hero.png'

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

const floatingVariants2 = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, -8, 8, 0],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-20 pb-12"
    >
      {/* Background + decorative blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury" />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-32 left-[8%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-champagne-200/40 blur-xl"
        />
        <motion.div
          variants={floatingVariants2}
          animate="animate"
          className="absolute top-48 right-[10%] w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-nude-300/50 blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-32 left-[15%] w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-champagne-300/30 blur-lg"
        />
        <motion.div
          variants={floatingVariants2}
          animate="animate"
          className="absolute top-40 right-[20%] hidden lg:block"
        >
          <div className="w-3 h-3 rounded-full bg-champagne-500/30" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute bottom-40 right-[30%] hidden lg:block"
        >
          <div className="w-2 h-2 rounded-full bg-champagne-400/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-600 text-xs sm:text-sm font-medium mb-6">
                <Star className="w-3.5 h-3.5 fill-champagne-500" />
                10 жылдык тажрыйба
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal-800 leading-[1.1] mb-6"
            >
              Сулуулук{' '}
              <span className="text-gradient-gold italic">өнөрүн</span>
              <br />
              үйрөнүңүз
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-base sm:text-lg text-charcoal-400 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Визажист жана эстетист{' '}
              <span className="font-semibold text-charcoal-600">
                Эльвира Бакытбековна
              </span>{' '}
              менен нөлдөн баштап өзүңүзгө макияж жасоону үйрөнүңүз
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#pricing"
                className="btn-gold px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center gap-2 animate-pulse-glow"
              >
                Курска катталуу
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#program"
                className="px-8 py-4 rounded-full border-2 border-champagne-300 text-charcoal-600 font-semibold hover:bg-champagne-50 transition-all inline-flex items-center justify-center gap-2"
              >
                Программаны көрүү
              </a>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-charcoal-800">10+</div>
                  <div className="text-xs text-charcoal-400">жыл опыт</div>
                </div>
              </div>
              <div className="w-px h-10 bg-champagne-200" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-champagne-600" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-charcoal-800">6500+</div>
                  <div className="text-xs text-charcoal-400">окуучу</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Transparent cutout image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Gradient circle behind the person */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-champagne-200 via-nude-200 to-champagne-100 opacity-60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-gold opacity-10 blur-2xl" />

              {/* Cutout image */}
              <picture>
                <source srcSet={elviraHeroWebp} type="image/webp" />
                <img
                  src={elviraHeroPng}
                  alt="Эльвира Бакытбековна — Beauty Expert"
                  className="relative z-10 w-64 sm:w-80 lg:w-[400px] h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>

              {/* Floating badge — bottom left */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute bottom-8 -left-2 sm:bottom-12 sm:-left-6 z-20 glass-card rounded-2xl p-3 sm:p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-champagne-500 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-charcoal-800">500+</div>
                    <div className="text-[10px] text-charcoal-400">Офлайн окуучу</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                variants={floatingVariants2}
                animate="animate"
                className="absolute top-4 -right-2 sm:top-8 sm:-right-4 z-20 glass-card rounded-2xl p-3 sm:p-4"
              >
                <div className="text-center">
                  <div className="font-display text-lg font-bold text-gradient-gold">5</div>
                  <div className="text-[10px] text-charcoal-400">жыл онлайн</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-champagne-300 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 rounded-full bg-champagne-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
