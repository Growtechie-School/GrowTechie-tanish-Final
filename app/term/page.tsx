import Link from 'next/link'

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <nav className="md:col-span-1 space-y-2">
            <Link href="/terms" className="block py-2 px-4 bg-gray-800 rounded">
              Terms of Use
            </Link>
            {/* <Link href="/privacy" className="block py-2 px-4 hover:bg-gray-800 rounded">
              Privacy Policy
            </Link>
            <Link href="/intellectual-property" className="block py-2 px-4 hover:bg-gray-800 rounded">
              Intellectual Property Policy
            </Link> */}
            {/* Add more sidebar links as needed */}
          </nav>

          {/* Main content */}
          <main className="md:col-span-3">
            <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
            
            <p className="mb-4">
              These Terms of Use (&quot;Terms&quot;) were last updated on October 5, 2024.
            </p>
            
            <p className="mb-4">
              Please review these Terms carefully as they serve as an enforceable contract between us and contain
              important information about your legal rights, remedies, and obligations.
            </p>
            
            <p className="mb-8 font-bold">
            YOU AGREE THAT DISPUTES BETWEEN YOU AND title: Growtechie WILL BE RESOLVED BY BINDING, 
            INDIVIDUAL ARBITRATION (INCLUDING CLAIMS THAT AROSE OR WERE ASSERTED BEFORE 
            THE EFFECTIVE DATE OF THESE TERMS), AND YOU WAIVE ANY RIGHT TO PARTICIPATE IN A 
            CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION OR A TRIAL BY JURY. 
            THESE TERMS EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION. 
            BY AGREEING TO THESE TERMS, YOU EXPRESSLY ACKNOWLEDGE THAT YOU HAVE READ AND 
            UNDERSTOOD ALL OF THESE TERMS AND HAVE TAKEN TIME TO CONSIDER THE CONSEQUENCES OF THIS 
            IMPORTANT DECISION.
            </p>
            
            <p className="mb-4">
            These Terms constitute a legally binding agreement between you and title: Growtechie, Inc., 
            a Delaware corporation, and its subsidiaries, representatives, affiliates, officers, 
            and directors, including its operat ing brand, Superpeer (collectively, “title: Growtechie,
            ” “we,” “us,” or “our”) governing your use of title: Growtechie’s website and service, or
            services directly related to title: Growtechie’s website and service, including (without limitation) 
            all websites, mobile applications, and other interactive properties through which
            such services are delivered, the Superpeer.com website, the Creatorsuite.com website, 
            and Events (as defined in Section VI below) sponsored or facilitated by title: Growtechie (collectively, the “Service” or “Services”).
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">Table of Contents</h2>
                <ul className="list-decimal list-inside space-y-2">
                <li><Link href="#accounts" className="text-blue-400 hover:underline">Accounts</Link></li>
                <li><Link href="#course-enrollment" className="text-blue-400 hover:underline">Course Enrollment and Lifetime Access</Link></li>
                <li><Link href="#payments" className="text-blue-400 hover:underline">Payments, Credits, and Refunds</Link></li>
                <li><Link href="#content-behavior" className="text-blue-400 hover:underline">Content and Behavior Rules</Link></li>
                <li><Link href="#miscellaneous" className="text-blue-400 hover:underline">Miscellaneous</Link></li>
                {/* Add more table of contents items as needed */}
                </ul>

            {/* Main content */}
            <main className="md:col-span-3">
            <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
            
            {/* Section I: Account Terms */}
            <h2 id="accounts" className="text-2xl font-semibold mt-8 mb-4">I. Account Terms</h2>
            <p className="mb-4">
             Students and Teachers must be at least 18 years of age to create an account on Growtechie or any Growtechie owned or operated platforms and to use the Services. If you are younger than 18 but above the required age for consent to use online services where you live (for example, 13 in the U.S. or 16 in Ireland), you may not set up an account, but we encourage you to invite a parent or guardian to open an account and help you watch or participate in classes or other content that is appropriate for you.
            </p>
            <p className="mb-4">
            Additionally, the following terms apply to your use of the Service and any account that you may open or attempt to open via the Service:
            </p>
            <p className="mb-4">
            You must provide us with the following information in order to create a Growtechie account: an email address you control and use and your zip code. You must also provide us with valid credit card information. Creation of accounts for other Growtechie owned or operated platforms, if any, may require you to provide other information, which will be specified in the account creation flow of any such platform.
            </p>
            {/* Section II: Course Enrollment and Lifetime Access */}
            <h2 id="course-enrollment" className="text-2xl font-semibold mt-8 mb-4">II. Course Enrollment and Lifetime Access</h2>
            <p className="mb-4">
          Unless you enrolled via a gift membership, prepaid membership, or scholarship, your subscription will continue and automatically renew on a monthly or annual basis unless and until you cancel your subscription, or your account is otherwise suspended or terminated pursuant to these Terms. When your subscription renews each month/year, we will automatically charge your payment method on file for the subscription fee, as well as any applicable tax, on the calendar day corresponding to the commencement of your paying membership.
        </p>
            {/* Section III: Payments, Credits, and Refunds */}
            <h2 id="payments" className="text-2xl font-semibold mt-8 mb-4">III. Payments, Credits, and Refunds</h2>
            <p className="mb-4">
          To use the Service, you must agree to comply with the following:
        </p>
        <p className="mb-4">
          You will not upload, share, post, transmit, distribute, offer for sale, or otherwise make available any content or items that you do not have a right to make available under any law or under contractual or fiduciary relationships or that infringes on any patent, trademark, trade secret, copyright, right of publicity, or other intellectual property right of any party.
        </p>
            {/* Section IV: Content and Behavior Rules */}
            <h2 id="content-behavior" className="text-2xl font-semibold mt-8 mb-4">IV. Content and Behavior Rules</h2>
            <p className="mb-4">
          All right, title, and interest in and to the Growtechie Services, including our websites, our existing or future applications, our APIs, databases, and the content our employees or partners submit or provide through our Service (but excluding content provided by Teachers and Students) are and will remain the exclusive property of Growtechie and its licensors. Our Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Nothing gives you a right to use the Growtechie name or any of the Growtechie trademarks, logos, domain names, and other distinctive brand features.
        </p>

            {/* Section V: Growtechie's Rights to Content You Post */}
            <h2 id="rights" className="text-2xl font-semibold mt-8 mb-4">V. Growtechie's Rights to Content You Post</h2>
            <p className="mb-4">
          These Terms define "User Content" as any design, text, graphic, image, video, logo, button icon, software, audio file, computer code, digital product or other good, or other content that a user (including both Students and Teachers) posts, submits, transmits, uploads, offers for sale, or otherwise includes or makes available on and/or via the Service. You represent and warrant that you own all intellectual property rights in the User Content and/or have obtained all authorizations and rights, including permission from any copyright or trademark owner or releases from any models or other individuals appearing in any User Content, necessary for you to display, promote, offer for sale, and/or otherwise exploit the User Content through the Services, and to convey all rights granted under these Terms.
        </p>
        <h2 id = "miscellaneous"className="text-2xl font-semibold mt-8 mb-4">VI. Miscellaneous</h2>
        <p className="mb-4">
          You agree that the Service shall be deemed a passive interactive service based solely in New York and shall not give rise to personal jurisdiction over Growtechie, either specific or general, in jurisdictions other than New York. These Terms, together with the Privacy Policy and the other Governing Documents, shall all be governed and construed in accordance with the internal laws of the State of New York, without regard to conflicts of law principles.
        </p>
        <p className="mb-4">
          Any cause of action or claim you may have with respect to any of the foregoing matters must be commenced within one (1) year after the claim or cause of action arises or such claim or cause of action is barred.
        </p>
            </main>

          </main>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditionsPage