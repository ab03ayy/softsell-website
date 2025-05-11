import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa'

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Upload License Details",
      description: "Provide information about your unused software licenses through our secure portal."
    },
    {
      icon: <FaSearchDollar className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Get Instant Valuation",
      description: "Our system analyzes market demand and provides a fair valuation within minutes."
    },
    {
      icon: <FaMoneyBillWave className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Receive Payment",
      description: "Get paid quickly via your preferred method after we verify and resell your licenses."
    }
  ]

  return (
    <section className="py-16 dark:bg-gray-800 bg-gray-100 rounded-xl my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6 rounded-lg dark:bg-gray-700 bg-white shadow-lg">
              {step.icon}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}