import { useState } from 'react'

function App() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      q: 'What is MiniMarket POS School?',
      a: 'A simple, modern point-of-sale tailored for school minimarkets — fast checkout, inventory tracking, and sales insights in one place.'
    },
    {
      q: 'Does it work on any device?',
      a: 'Yes. It runs in the browser and works great on tablets, laptops, and desktop kiosks.'
    },
    {
      q: 'Can students operate it safely?',
      a: 'Absolutely. Set secure roles for student cashiers, managers, and admins with permission controls.'
    },
    {
      q: 'Is there an offline mode?',
      a: 'Your data is safely stored in the cloud. Optional offline queueing can be enabled for intermittent connections.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 text-gray-800">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">M</div>
            <span className="font-semibold text-lg">MiniMarket POS • School</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition">Book demo</button>
            <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition">Get started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-200/50 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cyan-200/50 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 lg:pt-24 lg:pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              Built for school stores
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Fast, simple POS for your school minimarket
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Scan, sell, and track inventory in seconds. Give students real retail experience while your store runs smoothly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-sm shadow-indigo-300/50 transition">
                Try it free
              </button>
              <button className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium transition">
                Watch 90s demo
              </button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                Quick checkout
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-500" />
                Inventory sync
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-violet-500" />
                Classroom-ready
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl bg-white border border-gray-100 shadow-xl shadow-indigo-100/40 p-4">
              <div className="rounded-xl overflow-hidden border border-gray-200">
                {/* Mock POS UI */}
                <div className="grid md:grid-cols-2">
                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-indigo-600/90 text-white flex items-center justify-center font-bold">POS</div>
                      <div className="text-xs text-gray-500">Minimarket Checkout</div>
                    </div>
                    <div className="mt-4">
                      <input placeholder="Scan barcode or search" className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {[{name:'Bottled Water', price:1.5},{name:'Granola Bar', price:1.0},{name:'Notebook', price:2.5}].map((i, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white rounded-lg border border-gray-200 px-3 py-2">
                          <span className="text-sm">{i.name}</span>
                          <span className="text-sm font-medium">${i.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Cart</h3>
                      <span className="text-xs text-gray-500">#1027</span>
                    </div>
                    <div className="mt-3 divide-y border rounded-lg">
                      {[{name:'Bottled Water', qty:2, price:1.5},{name:'Notebook', qty:1, price:2.5}].map((i, idx) => (
                        <div key={idx} className="flex items-center justify-between px-3 py-2">
                          <span className="text-sm">{i.qty}× {i.name}</span>
                          <span className="text-sm font-medium">${(i.qty*i.price).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span>Subtotal</span>
                      <span className="font-medium">$5.50</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-sm">
                      <span>Tax</span>
                      <span className="font-medium">$0.46</span>
                    </div>
                    <div className="mt-2 pt-2 border-t flex items-center justify-between">
                      <span className="text-base font-semibold">Total</span>
                      <span className="text-base font-semibold">$5.96</span>
                    </div>
                    <button className="mt-4 w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition">
                      Charge $5.96
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 rounded-xl shadow-md p-3 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">✓</div>
              <div>
                <div className="text-sm font-semibold">Scan successful</div>
                <div className="text-xs text-gray-500">Added Granola Bar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to run a school store</h2>
            <p className="mt-3 text-gray-600">From quick checkout to detailed inventory — built for speed, clarity, and student-friendly operations.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Barcode & quick search', desc: 'Scan USB scanners or type to search instantly.' },
              { title: 'Inventory tracking', desc: 'Low-stock alerts, variants, and categories.' },
              { title: 'Smart pricing', desc: 'Student discounts, bundles, and happy-hours.' },
              { title: 'Simple receipts', desc: 'Print or email with one click, branded for your school.' },
              { title: 'User roles', desc: 'Student cashier, manager, and admin permissions.' },
              { title: 'Reports & insights', desc: 'Daily sales, best sellers, margins, and trends.' }
            ].map((f, idx) => (
              <div key={idx} className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-indigo-200 transition">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                  <span className="text-lg">★</span>
                </div>
                <h3 className="font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 md:py-24 bg-white/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Set up in minutes</h2>
              <p className="mt-3 text-gray-600">No complicated hardware. Use your existing laptop or tablet, plug in a scanner, and youre ready to sell.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { step: '1', title: 'Add products', desc: 'Import via CSV or add items with photos and barcodes.' },
                { step: '2', title: 'Connect scanner', desc: 'USB or Bluetooth — no drivers required.' },
                { step: '3', title: 'Assign roles', desc: 'Create secure logins for student cashiers and managers.' },
                { step: '4', title: 'Start selling', desc: 'Scan, tap, and print. Its that simple.' }
              ].map((s) => (
                <div key={s.step} className="relative rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow">{s.step}</div>
                  <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Straightforward pricing</h2>
            <p className="mt-3 text-gray-600">Start free. Upgrade when youre ready for advanced controls.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold">Starter</h3>
              <p className="mt-1 text-sm text-gray-600">Perfect for small school stores</p>
              <div className="mt-6 text-4xl font-extrabold">$0<span className="text-base font-medium text-gray-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>Unlimited products</li>
                <li>1 register</li>
                <li>Basic reports</li>
              </ul>
              <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Get started</button>
            </div>
            {/* Popular */}
            <div className="relative rounded-2xl border-2 border-indigo-300 bg-white p-6 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
              <h3 className="font-semibold">Educator</h3>
              <p className="mt-1 text-sm text-gray-600">Advanced controls for classes</p>
              <div className="mt-6 text-4xl font-extrabold">$19<span className="text-base font-medium text-gray-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>3 registers</li>
                <li>User roles & permissions</li>
                <li>Custom receipts & discounts</li>
              </ul>
              <button className="mt-6 w-full py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Start free trial</button>
            </div>
            {/* Pro */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold">Campus</h3>
              <p className="mt-1 text-sm text-gray-600">For larger schools and districts</p>
              <div className="mt-6 text-4xl font-extrabold">$49<span className="text-base font-medium text-gray-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>Unlimited registers</li>
                <li>SIS integrations</li>
                <li>Priority support</li>
              </ul>
              <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Contact sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Questions & answers</h2>
            <p className="mt-3 text-gray-600">Everything you need to know to get started quickly.</p>
          </div>
          <div className="mt-10 divide-y border rounded-2xl bg-white">
            {faqs.map((f, i) => {
              const open = openFAQ === i
              return (
                <button
                  key={i}
                  onClick={() => setOpenFAQ(open ? null : i)}
                  className="w-full text-left px-6 py-5 hover:bg-gray-50 transition"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-medium text-gray-900">{f.q}</div>
                      <div className={`mt-2 text-sm text-gray-600 ${open ? 'block' : 'hidden'}`}>{f.a}</div>
                    </div>
                    <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center border ${open ? 'bg-indigo-600 text-white border-indigo-600' : 'text-gray-500 border-gray-300'}`}>
                      {open ? '-' : '+'}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">M</div>
            <span>MiniMarket POS • School</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </div>
          <div>© {new Date().getFullYear()} All rights reserved</div>
        </div>
      </footer>
    </div>
  )
}

export default App
