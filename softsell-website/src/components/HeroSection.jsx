import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Turn Unused Software Into Cash
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          SoftSell helps businesses monetize their unused software licenses quickly and securely.
        </motion.p>
        
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sell My Licenses
        </motion.button>
      </div>
    </section>
  )
}