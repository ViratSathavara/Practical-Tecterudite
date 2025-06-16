import { Link } from 'react-router-dom';
import SavingsCalculator from '../components/SavingsCalculator';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              HOW MUCH <br />
              <span className="text-blue-600">COULD YOU SAVE?</span>
            </h1>
            
            <SavingsCalculator />
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Saved on</h2>
              <div className="flex justify-center space-x-8">
                <Link to="/about" className="text-lg hover:text-blue-600 transition">About us</Link>
                <Link to="/process" className="text-lg hover:text-blue-600 transition">Our Process</Link>
                <Link to="/technometrics" className="text-lg hover:text-blue-600 transition">Technometrics</Link>
                <Link to="/map" className="text-lg hover:text-blue-600 transition">Map</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would go here */}
    </div>
  );
}