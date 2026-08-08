import { motion, AnimatePresence } from 'motion/react';
import { Mail, Shield, Globe, ExternalLink, ChevronRight, Lock, UserCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

type GatewayStep = 'intro' | 'intent' | 'verify' | 'reveal';

export default function ContactPage() {
  const [step, setStep] = useState<GatewayStep>('intro');
  const [intent, setIntent] = useState<'acquisition' | 'inquiry' | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [isError, setIsError] = useState(false);

  // Simple "Human check": Sum of two numbers
  const num1 = 14;
  const num2 = 22;
  const expectedSum = (num1 + num2).toString();

  const handleVerify = () => {
    if (verificationCode === expectedSum) {
      setStep('reveal');
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600">
              <Shield size={16} />
              <span className="text-xs font-bold uppercase tracking-widest">Protocol Version 2.0</span>
            </div>
            <h1 className="text-4xl md:text-7xl text-brand-black leading-tight font-normal tracking-tighter uppercase italic">
              Access <br/> Restricted
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-normal">
              To maintain the integrity of our research node and protect Member Zero from automated noise, all direct messaging protocols have been retired. 
            </p>
            <div className="pt-8 flex flex-col md:flex-row gap-4">
              <a 
                href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                Acquire Domain (Direct)
                <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => setStep('intent')}
                className="group flex items-center justify-center gap-4 px-8 py-4 bg-brand-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-all shadow-xl shadow-black/10"
              >
                Inquiry Gateway
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        );

      case 'intent':
        return (
          <motion.div 
            key="intent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">Step 01 / Specify Intent</h2>
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={() => { setIntent('acquisition'); setStep('verify'); }}
                className="flex items-center justify-between p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-blue-600 transition-all text-left shadow-sm group"
              >
                <div>
                  <h3 className="text-xl font-normal uppercase italic tracking-tighter text-brand-black flex items-center gap-3">
                    <Globe size={20} className="text-blue-600" />
                    Domain Acquisition
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 italic">Inquire about the ownership of jalh.com</p>
                </div>
                <ChevronRight size={24} className="text-gray-200 group-hover:text-blue-600 transition-colors" />
              </button>
              
              <button 
                onClick={() => { setIntent('inquiry'); setStep('verify'); }}
                className="flex items-center justify-between p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-blue-600 transition-all text-left shadow-sm group"
              >
                <div>
                  <h3 className="text-xl font-normal uppercase italic tracking-tighter text-brand-black flex items-center gap-3">
                    <Mail size={20} className="text-blue-600" />
                    General Inquiry
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 italic">Research partnerships or data inquiries</p>
                </div>
                <ChevronRight size={24} className="text-gray-200 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>

            <button 
              onClick={() => setStep('intro')}
              className="text-[10px] text-gray-400 font-mono uppercase tracking-widest hover:text-blue-600 underline"
            >
              Back to Start
            </button>
          </motion.div>
        );

      case 'verify':
        return (
          <motion.div 
            key="verify"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-8 bg-white p-12 border border-gray-100 rounded-[3rem] shadow-2xl"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <UserCheck size={32} />
              </div>
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">Step 02 / Human Verification</h2>
                <h3 className="text-2xl font-normal uppercase italic tracking-tighter text-brand-black">Resolve Protocol</h3>
                <p className="text-gray-500 text-sm italic">To reveal the transmission endpoint, please solve this kinetic sum:</p>
              </div>

              <div className="w-full max-w-xs space-y-4">
                <div className="flex items-center justify-center gap-4 text-3xl font-mono text-brand-black font-bold tracking-tighter py-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span>{num1}</span>
                  <span className="text-gray-300">+</span>
                  <span>{num2}</span>
                  <span className="text-gray-300">=</span>
                  <input 
                    type="text"
                    maxLength={3}
                    placeholder="??"
                    className={`w-16 bg-white border ${isError ? 'border-red-500 bg-red-50 animate-shake' : 'border-gray-200'} rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-blue-600/10 focus:border-blue-600 transition-all`}
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                  />
                </div>
                
                <button 
                  onClick={handleVerify}
                  className="w-full py-4 bg-brand-black text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Verify Identity
                  <ChevronRight size={14} />
                </button>
              </div>

              <button 
                onClick={() => setStep('intent')}
                className="text-[10px] text-gray-400 font-mono uppercase tracking-widest hover:text-blue-600"
              >
                Change Intent
              </button>
            </div>
          </motion.div>
        );

      case 'reveal':
        return (
          <motion.div 
            key="reveal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Lock size={120} className="text-blue-600" />
              </div>

              <div className="space-y-4">
                 <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">Verification Complete</h2>
                 <h3 className="text-3xl md:text-5xl text-brand-black font-normal uppercase italic tracking-tighter leading-none">Transmission <br/> Protocols Revealed</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Section */}
                <div className="space-y-4 p-8 bg-blue-50/30 rounded-[2rem] border border-blue-100/50">
                  <div className="flex items-center gap-3 text-blue-600">
                    <Mail size={18} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure Email Endpoint</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-600 font-mono uppercase tracking-widest opacity-60">Address reveals as:</p>
                    <p className="text-xl md:text-2xl font-mono font-bold text-brand-black break-all select-all selection:bg-blue-200">
                      info <span className="text-blue-400">[at]</span> jalh.com
                    </p>
                  </div>
                  <p className="text-[10px] text-gray-400 font-mono italic leading-relaxed">
                    Subject Line Req: [JALH - {intent === 'acquisition' ? 'ACQUISITION' : 'INQUIRY'}]
                  </p>
                </div>

                {/* Acquisition Section */}
                {intent === 'acquisition' && (
                  <div className="space-y-4 p-8 bg-black rounded-[2rem] text-white">
                    <div className="flex items-center gap-3 text-blue-400">
                      <Globe size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Public Marketplace</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-normal uppercase italic tracking-tighter leading-tight">Proceed via Institutional Custodian</p>
                      <p className="text-xs text-gray-400">For secure, instant settlement in the research node hierarchy.</p>
                    </div>
                    <a 
                      href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 group text-xs font-bold uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors"
                    >
                      View on GoDaddy
                      <ExternalLink size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                )}

                {/* Inquiry Info */}
                {intent === 'inquiry' && (
                  <div className="space-y-4 p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                    <div className="flex items-center gap-3 text-gray-400">
                      <AlertCircle size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Notice to Researchers</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed italic">
                      Response latency may vary based on established kinetic stabilization cycles. Member Zero reviews all authenticated inquiries twice per lunar cycle.
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-8 border-t border-gray-50">
                 <button 
                  onClick={() => { setStep('intro'); setVerificationCode(''); }}
                  className="text-[10px] text-gray-400 font-mono uppercase tracking-widest hover:text-blue-600 underline"
                >
                  Reset Session Protocols
                </button>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-32 px-6 md:px-12 overflow-hidden">
      <ColorPatch color="bg-blue-600" size="w-[60rem] h-[60rem]" opacity={0.04} className="-top-48 -right-48" />
      <ColorPatch color="bg-purple-400" size="w-[40rem] h-[40rem]" opacity={0.02} className="bottom-0 left-0" />
      
      <SEO 
        title="Contact JALH Research Gateway"
        description="Verified access protocol for jalh.com domain inquiries and research communication."
        keywords="contact jalh, buy jalh.com, member zero, research inquiry"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        <div className="mt-24 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Node Type</h4>
            <p className="text-xs font-mono text-brand-black uppercase">Archive_Secondary</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Status</h4>
            <p className="text-xs font-mono text-green-600 uppercase">Operational</p>
          </div>
          <div className="hidden md:block">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</h4>
            <p className="text-xs font-mono text-brand-black uppercase">Global_Edge</p>
          </div>
          <div className="hidden md:block">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Encryption</h4>
            <p className="text-xs font-mono text-brand-black uppercase">AES-256_Auth</p>
          </div>
        </div>
      </div>
    </div>
  );
}
