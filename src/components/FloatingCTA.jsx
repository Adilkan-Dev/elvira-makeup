import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, X } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/elvira_beauty'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="relative bg-white rounded-2xl shadow-xl shadow-charcoal-900/10 px-4 py-3 max-w-[200px] border border-champagne-100"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal-100 flex items-center justify-center hover:bg-charcoal-200 transition-colors"
            >
              <X className="w-3 h-3 text-charcoal-500" />
            </button>
            <p className="text-xs font-body text-charcoal-600 leading-relaxed">
              Суроолоруңуз барбы? Телеграмга жазыңыз!
            </p>
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-white border-r border-b border-champagne-100" />
          </motion.div>

          {/* Button */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2AABEE] shadow-lg shadow-[#2AABEE]/30 flex items-center justify-center hover:shadow-xl hover:shadow-[#2AABEE]/40 hover:scale-110 transition-all"
          >
            <Send className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:rotate-[-12deg] transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
