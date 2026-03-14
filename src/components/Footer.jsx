import { motion } from 'framer-motion'
import { Sparkles, Heart, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-champagne-500/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a href="#hero" className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-champagne-500" />
            <span className="font-display text-xl font-semibold text-white">
              Elvira<span className="text-champagne-400">Beauty</span>
            </span>
          </a>
          <p className="font-body text-sm text-charcoal-400 max-w-md mx-auto mb-8">
            Визажист жана эстетист Эльвира Бакытбековна менен сулуулук дүйнөсүнө кадам шилтеңиз
          </p>

          <a
            href="https://t.me/elvira_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2AABEE]/10 text-[#2AABEE] font-medium text-sm hover:bg-[#2AABEE]/20 transition-colors"
          >
            <Send className="w-4 h-4" />
            Телеграмга кирүү
          </a>
        </motion.div>

        <div className="border-t border-charcoal-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} ElviraBeauty. Бардык укуктар корголгон.
          </p>
          <p className="text-xs text-charcoal-500 flex items-center gap-1">
            Сүйүү менен жасалды <Heart className="w-3 h-3 text-champagne-500 fill-champagne-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
