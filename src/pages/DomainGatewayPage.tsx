import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ColorPatch from '../components/ColorPatch';
import SEO from '../components/SEO';

export default function DomainGatewayPage() {
  return (
    <>
      <SEO 
        title="Buy JALH.com"
        description="Official acquisition gateway for JALH.com. Secure the intellectual property, digital authority, and premium 4-letter domain name associated with the JALH framework."
        keywords="buy jalh.com, premium domain for sale, domain acquisition"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "JALH.com Premium Domain Name Asset JALH",
            "image": [
              "https://jalh.com/api/og-image/domain-gateway",
              "https://jalh.com/jalh-logo.png"
            ],
            "description": "Exclusive four-letter ultra-premium branding asset and sovereign domain JALH.com, currently listed for JALH acquisition.",
            "sku": "JALH-DOMAIN-001",
            "mpn": "JALH-COM-2026",
            "brand": {
              "@type": "Brand",
              "name": "JALH"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://godaddy.com/domainsearch/find?domainToCheck=jalh.com",
              "priceCurrency": "USD",
              "price": "25000.00",
              "priceValidUntil": "2027-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition",
              "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "US",
                "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
              },
              "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                  "@type": "MonetaryAmount",
                  "value": "0",
                  "currency": "USD"
                },
                "shippingDestination": {
                  "@type": "DefinedRegion",
                  "addressCountry": "US"
                },
                "deliveryTime": {
                  "@type": "ShippingDeliveryTime",
                  "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 0,
                    "unitCode": "DAY"
                  },
                  "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 0,
                    "unitCode": "DAY"
                  }
                }
              }
            }
          }
        ]}
      />
      
      <section className="relative min-h-screen bg-transparent pt-32 pb-24 px-12 overflow-hidden font-sans font-normal">
        <ColorPatch color="bg-blue-600" size="w-[70rem] h-[70rem]" opacity={0.08} className="-top-32 -right-32" />
        <ColorPatch color="bg-purple-400" size="w-[40rem] h-[40rem]" opacity={0.05} className="bottom-0 -left-12" />
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="text-xl text-black leading-tight font-normal">Domain <br/>sales <br/>gateway</h1>
            <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
              <div className="text-base text-blue-600">Protocol: Asset transfer ready</div>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  You have reached the official commercial endpoint for the **jalh.com** top-level domain. This asset is currently under the custodianship of Member zero and is integrated into the broader JALH (judiciously always looking happy) research ecosystem.
                </p>
                <p className="mt-4">
                  Acquisition of jalh.com includes all digital goodwill, SEO momentum, and the historical archive associated with this node. 
                </p>
              </div>
              
              <div className="space-y-4 pt-12 border-t border-gray-100">
                <h3 className="text-base text-black font-normal">Acquisition benefits</h3>
                <ul className="space-y-2 text-base text-gray-400 list-none p-0">
                  <li className="flex gap-4"><span>[+]</span> Instant digital authority</li>
                  <li className="flex gap-4"><span>[+]</span> Clean WHOIS history</li>
                  <li className="flex gap-4"><span>[+]</span> Premium 4-letter acronym value</li>
                  <li className="flex gap-4"><span>[+]</span> Indexed research visibility</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-12 rounded-2xl border border-gray-100 space-y-8 shadow-sm text-center">
              <div className="space-y-4">
                <div className="text-base text-blue-600">Current status: Available</div>
                <div className="text-lg text-black font-normal">jalh.com</div>
              </div>

              <div className="space-y-6">
                <Link 
                  to="/contact" 
                  className="inline-block w-full px-12 py-6 bg-black text-white text-base rounded-full hover:bg-blue-600 transition-all shadow-xl text-center"
                >
                  Inquire via Gateway
                </Link>
                
                <a 
                  href="https://www.godaddy.com/domainsearch/find?domainToCheck=jalh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full px-12 py-6 bg-blue-50 text-blue-600 text-base rounded-full hover:bg-blue-100 transition-all border border-blue-100 text-center font-bold"
                >
                  Acquire via GoDaddy
                </a>
              </div>

              <div className="pt-8 border-t border-gray-200 text-sm text-gray-400 leading-relaxed">
                Transactions are processed through secure global registrars. Title transfer initiated within 24 hours of clearance.
              </div>
            </div>
          </div>

          <div className="pt-24 border-t border-gray-100 flex flex-col items-center gap-12 text-center">
            <Link to="/" className="text-base text-blue-600 hover:underline">Return to home node</Link>
          </div>
        </div>
      </section>
    </>
  );
}
