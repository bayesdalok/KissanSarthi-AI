document.addEventListener('DOMContentLoaded', function() {
            
    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            skipLink: "Skip to main content",
            navServices: "Services",
            navMandi: "Market",
            navChatbot: "AI Assistant",
            navSupport: "Support",
            navPolicies: "Policies",
            marqueeText: "📢 PM-KISAN Scheme Extended: Now ₹8,000 per year | Up to 50% discount on crop insurance | KCC limit increased to ₹3 lakh | Free certification for organic farming",
            heroTitle: "🌾 Kisan-Sarthi AI - Your Digital Agri-Companion",
            heroSubtitle: "Modernize your farming with the power of AI. From weather updates to market prices, get everything in one place.",
            heroBtnStart: "Get Started",
            heroBtnLearn: "Learn More",
            servicesTitle: "🛠️ Our Services",
            service1Title: "Weather Forecast",
            service1Desc: "Accurate 15-day weather forecast, rain probability, and farming advice.",
            service2Title: "Crop Advisory",
            service2Desc: "AI-based crop selection, sowing time, and methods to increase productivity.",
            service3Title: "Pest & Disease ID",
            service3Desc: "Instantly identify pests and diseases by uploading a photo of your crop and get treatment suggestions.",
            service4Title: "Market Information",
            service4Desc: "Real-time market prices, demand-supply status, and the right time to sell.",
            mandiTitle: "🏪 Today's Market Prices",
            mandiLocation: "Vadodara Market",
            sellProductBtn: "Sell Your Produce",
            quintal: "Quintal",
            kg: "Kg",
            min: "Min",
            max: "Max",
            fromLastWeek: "From last week",
            stable: "Stable",
            wheat: "🌾 Wheat",
            paddy: "🌾 Paddy",
            onion: "🧅 Onion",
            tomato: "🍅 Tomato",
            potato: "🥔 Potato",
            chilli: "🌶️ Green Chilli",
            chatbotTitle: "🤖 AI Agriculture Advisor",
            chatbotHeader: "Kisan-Sarthi AI Assistant",
            chatbotOnline: "🟢 Online - Get instant replies",
            chatbotWelcome: "Hello! I am your Kisan-Sarthi AI. You can ask me anything about weather, market prices, crop diseases, or government schemes.",
            chatbotPlaceholder: "Write your question here...",
            suggestedQuestions: "Suggested Questions:",
            qWeatherText: "Weather",
            qPriceText: "Prices",
            qPestText: "Pests",
            qSchemeText: "Schemes",
            qWeather: "What is the weather forecast for Vadodara for the next 5 days?",
            qPrice: "What is the price of onions in Vadodara market today?",
            qPest: "My tomato plant leaves have yellow spots. What could it be?",
            qScheme: "Who is eligible for the PM-KISAN scheme?",
            supportTitle: "🤝 Support Center",
            support1Title: "Helpline",
            support1Desc: "Available 24x7",
            support2Title: "Expert Advice",
            support2Desc: "Get advice from experienced agricultural experts via video call.",
            bookAppointmentBtn: "Book Appointment",
            support3Title: "Training Programs",
            support3Desc: "Free online and offline training for new technologies.",
            viewCoursesBtn: "View Courses",
            storiesTitle: "🌟 Success Stories",
            farmer1Name: "Rajesh Patel",
            farmer1Location: "Vadodara, Gujarat",
            farmer1Story: "\"With Kisan-Sarthi AI's advice, my tomato crop yield improved by 40%. The AI assistant identified pests at the right time.\"",
            farmer2Name: "Sunita Sharma",
            farmer2Location: "Anand, Gujarat",
            farmer2Story: "\"I saved my crop from rain with accurate weather information. I also get market prices on time.\"",
            farmer3Name: "Vikas Gupta",
            farmer3Location: "Bharuch, Gujarat",
            farmer3Story: "\"The entire process for the KCC loan became easy. I also get information about government schemes.\"",
            footerText: "An Initiative For The Building Blocks Of Our Country - FARMERS",
            modalSellTitle: "🛒 Sell Your Produce",
            modalSellDesc: "Fill in your product details and get better prices",
            formName: "Name",
            formProduct: "Product",
            formProductSelect: "Select Product",
            formProductWheat: "Wheat",
            formProductPaddy: "Paddy",
            formProductOnion: "Onion",
            formProductTomato: "Tomato",
            formProductPotato: "Potato",
            formProductChilli: "Green Chilli",
            formProductOther: "Other",
            formQuantity: "Quantity (Quintal/Kg)",
            formPrice: "Expected Price (₹ per unit)",
            formLocation: "Location",
            formPhone: "Mobile Number",
            submitBtn: "Submit",
            sellerSuccessMsg: "✅ Your product has been submitted successfully!",
            pitchTitle: "✨ AI-Powered Sales Pitch",
            pitchDesc: "Use this AI-generated message to send to your customers.",
            generatePitchBtn: "Generate Pitch",
            copyBtn: "Copy",
            feedbackTitle: "💬 Give Feedback",
            feedbackDesc: "Your feedback is very important to us",
            formRating: "Give Rating",
            formFeedback: "Your Feedback",
            feedbackSuccessMsg: "🙏 Thank you! Your feedback has been submitted.",
            policyTitle: "🏛️ Latest Government Policies and Schemes",
            policy1Title: "PM-KISAN Scheme Extension 2025",
            policy1Detail1: "Benefit: Now ₹8,000 per year (previously ₹6,000)",
            policy1Detail2: "Eligibility: All landholding farmer families",
            policy1Detail3: "Application: Online at pmkisan.gov.in",
            policy1Detail4: "New Feature: Instant verification via mobile OTP",
            policy2Title: "Pradhan Mantri Fasal Bima Yojana Update",
            policy2Detail1: "Reduced Premium: Kharif 2%, Rabi 1.5%",
            policy2Detail2: "New Technology: Damage assessment using drones and satellites",
            policy2Detail3: "Quick Payout: Claim settlement within 15 days",
            policy2Detail4: "Coverage: All natural calamities included",
            policy3Title: "Kisan Credit Card (KCC) New Features",
            policy3Detail1: "Increased Limit: Up to ₹3 lakh without collateral",
            policy3Detail2: "Low Interest Rate: 4% per annum (after subsidy)",
            policy3Detail3: "Digital KCC: Online application, instant approval",
            policy3Detail4: "Multi-use: For farming, animal husbandry, and fisheries",
            howToApply: "📱 How to Apply?",
            applyStep1: "Go to the 'Government Schemes' section on the Kisan-Sarthi AI app",
            applyStep2: "Check your eligibility",
            applyStep3: "Upload the required documents",
            applyStep4: "Submit the application with one click",
            downloadAppBtn: "Download Kisan-Sarthi AI App",
        },
        hi: {
            skipLink: "मुख्य सामग्री पर जाएं",
            navServices: "सेवाएं",
            navMandi: "मंडी",
            navChatbot: "AI सहायक",
            navSupport: "सहायता",
            navPolicies: "नीतियां",
            marqueeText: "📢 PM-KISAN योजना विस्तार: अब ₹8,000 प्रति वर्ष | फसल बीमा में 50% तक की छूट | KCC की लिमिट बढ़कर ₹3 लाख | ऑर्गेनिक खेती के लिए मुफ्त सर्टिफिकेशन",
            heroTitle: "🌾 Kisan-Sarthi AI - आपका डिजिटल कृषि सारथी",
            heroSubtitle: "AI की शक्ति से आधुनिक खेती करें। मौसम की जानकारी से लेकर बाज़ार के भाव तक, सब कुछ एक ही जगह।",
            heroBtnStart: "अभी शुरू करें",
            heroBtnLearn: "और जानें",
            servicesTitle: "🛠️ हमारी सेवाएं",
            service1Title: "मौसम पूर्वानुमान",
            service1Desc: "15 दिन तक का सटीक मौसम पूर्वानुमान, वर्षा की संभावना, और खेती के लिए सुझाव।",
            service2Title: "फसल सलाह",
            service2Desc: "AI-आधारित फसल चयन, बुआई का समय, और उत्पादकता बढ़ाने के तरीके।",
            service3Title: "कीट-रोग पहचान",
            service3Desc: "फसल की फोटो अपलोड करके कीट-रोग की तुरंत पहचान और उपचार के सुझाव।",
            service4Title: "बाज़ार की जानकारी",
            service4Desc: "रियल-टाइम बाज़ार के भाव, मांग-आपूर्ति की स्थिति, और बेचने का सही समय।",
            mandiTitle: "🏪 आज के बाज़ार भाव",
            mandiLocation: "वडोदरा मंडी",
            sellProductBtn: "अपना उत्पाद बेचें",
            quintal: "क्विंटल",
            kg: "किलो",
            min: "न्यूनतम",
            max: "अधिकतम",
            fromLastWeek: "पिछले सप्ताह से",
            stable: "स्थिर",
            wheat: "🌾 गेहूं",
            paddy: "🌾 धान",
            onion: "🧅 प्याज",
            tomato: "🍅 टमाटर",
            potato: "🥔 आलू",
            chilli: "🌶️ हरी मिर्च",
            chatbotTitle: "🤖 AI कृषि सलाहकार",
            chatbotHeader: "Kisan-Sarthi AI Assistant",
            chatbotOnline: "🟢 ऑनलाइन - तुरंत जवाब पाएं",
            chatbotWelcome: "नमस्ते! मैं आपका Kisan-Sarthi AI हूँ। आप मुझसे मौसम, बाज़ार भाव, फसल की बिमारियों, या सरकारी योजनाओं के बारे में कुछ भी पूछ सकते हैं।",
            chatbotPlaceholder: "यहां अपना सवाल लिखें...",
            suggestedQuestions: "सुझावित प्रश्न:",
            qWeatherText: "मौसम",
            qPriceText: "भाव",
            qPestText: "कीड़े",
            qSchemeText: "योजना",
            qWeather: "अगले 5 दिनों के लिए वडोदरा में मौसम का पूर्वानुमान क्या है?",
            qPrice: "वडोदरा मंडी में प्याज का आज का भाव क्या है?",
            qPest: "मेरी टमाटर की फसल के पत्तों पर पीले धब्बे हैं। यह क्या हो सकता है?",
            qScheme: "PM-KISAN योजना के लिए कौन पात्र है?",
            supportTitle: "🤝 सहायता केंद्र",
            support1Title: "हेल्पलाइन",
            support1Desc: "24x7 उपलब्ध",
            support2Title: "विशेषज्ञ सलाह",
            support2Desc: "अनुभवी कृषि विशेषज्ञों से वीडियो कॉल पर सलाह लें।",
            bookAppointmentBtn: "अपॉइंटमेंट बुक करें",
            support3Title: "प्रशिक्षण कार्यक्रम",
            support3Desc: "नई तकनीकों के लिए मुफ्त ऑनलाइन और ऑफलाइन प्रशिक्षण।",
            viewCoursesBtn: "कोर्स देखें",
            storiesTitle: "🌟 सफलता की कहानियां",
            farmer1Name: "राजेश पटेल",
            farmer1Location: "वडोदरा, गुजरात",
            farmer1Story: "\"Kisan-Sarthi AI की सलाह से मेरी टमाटर की फसल 40% बेहतर हुई। AI सहायक ने सही समय पर कीड़ों की पहचान कराई।\"",
            farmer2Name: "सुनीता शर्मा",
            farmer2Location: "आणंद, गुजरात",
            farmer2Story: "\"मौसम की सही जानकारी से मैंने बारिश से पहले अपनी फसल बचा ली। बाज़ार के भाव भी सही समय पर मिल जाते हैं।\"",
            farmer3Name: "विकास गुप्ता",
            farmer3Location: "भरूच, गुजरात",
            farmer3Story: "\"KCC लोन की पूरी प्रक्रिया आसान हो गई। सरकारी योजनाओं की जानकारी भी मिल जाती है।\"",
            footerText: "हमारे देश के निर्माताओं - किसानों के लिए एक पहल",
            modalSellTitle: "🛒 अपना उत्पाद बेचें",
            modalSellDesc: "अपने उत्पाद की जानकारी भरें और बेहतर दाम पाएं",
            formName: "नाम",
            formProduct: "उत्पाद",
            formProductSelect: "उत्पाद चुनें",
            formProductWheat: "गेहूं",
            formProductPaddy: "धान",
            formProductOnion: "प्याज",
            formProductTomato: "टमाटर",
            formProductPotato: "आलू",
            formProductChilli: "हरी मिर्च",
            formProductOther: "अन्य",
            formQuantity: "मात्रा (क्विंटल/किलो)",
            formPrice: "अपेक्षित मूल्य (₹ प्रति यूनिट)",
            formLocation: "स्थान",
            formPhone: "मोबाइल नंबर",
            submitBtn: "सबमिट करें",
            sellerSuccessMsg: "✅ आपका उत्पाद सफलतापूर्वक सबमिट हो गया!",
            pitchTitle: "✨ AI-Powered Sales Pitch",
            pitchDesc: "अपने ग्राहकों को भेजने के लिए AI द्वारा बनाया गया यह संदेश उपयोग करें।",
            generatePitchBtn: "पिच बनाएं",
            copyBtn: "कॉपी",
            feedbackTitle: "💬 फीडबैक दें",
            feedbackDesc: "आपका फीडबैक हमारे लिए बहुत महत्वपूर्ण है",
            formRating: "रेटिंग दें",
            formFeedback: "आपका फीडबैक",
            feedbackSuccessMsg: "🙏 धन्यवाद! आपका फीडबैक सबमिट हो गया।",
            policyTitle: "🏛️ नवीनतम सरकारी नीतियां और योजनाएं",
            policy1Title: "PM-KISAN योजना विस्तार 2025",
            policy1Detail1: "लाभ: अब ₹8,000 प्रति वर्ष (पहले ₹6,000)",
            policy1Detail2: "पात्रता: सभी भूमिधारक किसान परिवार",
            policy1Detail3: "आवेदन: pmkisan.gov.in पर ऑनलाइन",
            policy1Detail4: "नवीन सुविधा: मोबाइल OTP से तुरंत वेरिफिकेशन",
            policy2Title: "प्रधानमंत्री फसल बीमा योजना अपडेट",
            policy2Detail1: "प्रीमियम कम: खरीफ 2%, रबी 1.5%",
            policy2Detail2: "नई तकनीक: ड्रोन और सैटेलाइट से नुकसान आकलन",
            policy2Detail3: "त्वरित भुगतान: 15 दिन में क्लेम सेटलमेंट",
            policy2Detail4: "कवरेज: सभी प्राकृतिक आपदाएं शामिल",
            policy3Title: "किसान क्रेडिट कार्ड (KCC) नई सुविधाएं",
            policy3Detail1: "बढ़ी हुई लिमिट: ₹3 लाख तक बिना गारंटी",
            policy3Detail2: "कम ब्याज दर: 4% वार्षिक (सब्सिडी के बाद)",
            policy3Detail3: "डिजिटल KCC: ऑनलाइन आवेदन, तुरंत अप्रूवल",
            policy3Detail4: "मल्टी-यूज: खेती, पशुपालन, मत्स्य पालन के लिए",
            howToApply: "📱 आवेदन कैसे करें?",
            applyStep1: "Kisan-Sarthi AI ऐप पर 'सरकारी योजना' सेक्शन पर जाएं",
            applyStep2: "अपनी पात्रता चेक करें",
            applyStep3: "आवश्यक डॉक्यूमेंट अपलोड करें",
            applyStep4: "एक क्लिक में आवेदन सबमिट करें",
            downloadAppBtn: "Kisan-Sarthi AI ऐप डाउनलोड करें",
        },
        gu: {
            skipLink: "મુખ્ય સામગ્રી પર જાઓ",
            navServices: "સેવાઓ",
            navMandi: "બજાર",
            navChatbot: "AI સહાયક",
            navSupport: "સહાય",
            navPolicies: "નીતિઓ",
            marqueeText: "📢 PM-KISAN યોજના વિસ્તરણ: હવે ₹8,000 પ્રતિ વર્ષ | પાક વીમામાં 50% સુધીની છૂટ | KCC મર્યાદા ₹3 લાખ સુધી વધી | ઓર્ગેનિક ખેતી માટે મફત પ્રમાણપત્ર",
            heroTitle: "🌾 કિસાન-સારથી AI - તમારા ડિજિટલ કૃષિ સારથી",
            heroSubtitle: "AI ની શક્તિથી આધુનિક ખેતી કરો. હવામાનની માહિતીથી લઈને બજારના ભાવ સુધી, બધું એક જ જગ્યાએ.",
            heroBtnStart: "હમણાં શરૂ કરો",
            heroBtnLearn: "વધુ જાણો",
            servicesTitle: "🛠️ અમારી સેવાઓ",
            service1Title: "હવામાનની આગાહી",
            service1Desc: "15 દિવસની સચોટ હવામાનની આગાહી, વરસાદની સંભાવના અને ખેતી માટે સૂચનો.",
            service2Title: "પાક સલાહ",
            service2Desc: "AI-આધારિત પાકની પસંદગી, વાવણીનો સમય અને ઉત્પાદકતા વધારવાની રીતો.",
            service3Title: "જીવાત-રોગની ઓળખ",
            service3Desc: "તમારા પાકનો ફોટો અપલોડ કરીને તરત જ જીવાતો અને રોગોને ઓળખો અને સારવાર માટે સૂચનો મેળવો.",
            service4Title: "બજારની માહિતી",
            service4Desc: "રીઅલ-ટાઇમ બજાર ભાવ, માંગ-પુરવઠાની સ્થિતિ અને વેચાણ માટેનો યોગ્ય સમય.",
            mandiTitle: "� આજના બજાર ભાવ",
            mandiLocation: "વડોદરા બજાર",
            sellProductBtn: "તમારું ઉત્પાદન વેચો",
            quintal: "ક્વિન્ટલ",
            kg: "કિલો",
            min: "ન્યૂનતમ",
            max: "મહત્તમ",
            fromLastWeek: "ગયા સપ્તાહથી",
            stable: "સ્થિર",
            wheat: "🌾 ઘઉં",
            paddy: "🌾 ડાંગર",
            onion: "🧅 ડુંગળી",
            tomato: "🍅 ટામેટા",
            potato: "🥔 બટાકા",
            chilli: "🌶️ લીલા મરચા",
            chatbotTitle: "🤖 AI કૃષિ સલાહકાર",
            chatbotHeader: "કિસાન-સારથી AI સહાયક",
            chatbotOnline: "🟢 ઓનલાઈન - તરત જવાબ મેળવો",
            chatbotWelcome: "નમસ્તે! હું તમારો કિસાન-સારથી AI છું. તમે મને હવામાન, બજાર ભાવ, પાકના રોગો અથવા સરકારી યોજનાઓ વિશે કંઈપણ પૂછી શકો છો.",
            chatbotPlaceholder: "તમારો પ્રશ્ન અહીં લખો...",
            suggestedQuestions: "સૂચવેલા પ્રશ્નો:",
            qWeatherText: "હવામાન",
            qPriceText: "ભાવ",
            qPestText: "જીવાત",
            qSchemeText: "યોજના",
            qWeather: "આગામી 5 દિવસ માટે વડોદરામાં હવામાનની આગાહી શું છે?",
            qPrice: "વડોદરા બજારમાં આજે ડુંગળીનો ભાવ શું છે?",
            qPest: "મારા ટામેટાના છોડના પાંદડા પર પીળા ડાઘ છે. તે શું હોઈ શકે?",
            qScheme: "PM-KISAN યોજના માટે કોણ પાત્ર છે?",
            supportTitle: "🤝 સહાય કેન્દ્ર",
            support1Title: "હેલ્પલાઇન",
            support1Desc: "24x7 ઉપલબ્ધ",
            support2Title: "નિષ્ણાતની સલાહ",
            support2Desc: "અનુભવી કૃષિ નિષ્ણાતો પાસેથી વીડિયો કૉલ દ્વારા સલાહ મેળવો.",
            bookAppointmentBtn: "એપોઇન્ટમેન્ટ બુક કરો",
            support3Title: "તાલીમ કાર્યક્રમો",
            support3Desc: "નવી તકનીકો માટે મફત ઓનલાઈન અને ઓફલાઈન તાલીમ.",
            viewCoursesBtn: "કોર્સ જુઓ",
            storiesTitle: "🌟 સફળતાની વાર્તાઓ",
            farmer1Name: "રાજેશ પટેલ",
            farmer1Location: "વડોદરા, ગુજરાત",
            farmer1Story: "\"કિસાન-સારથી AIની સલાહથી, મારા ટામેટાના પાકમાં 40% સુધારો થયો. AI સહાયકે યોગ્ય સમયે જીવાતોને ઓળખી કાઢ્યા.\"",
            farmer2Name: "સુનિતા શર્મા",
            farmer2Location: "આણંદ, ગુજરાત",
            farmer2Story: "\"સચોટ હવામાન માહિતીથી મેં વરસાદ પહેલાં મારો પાક બચાવી લીધો. મને બજાર ભાવ પણ સમયસર મળી જાય છે.\"",
            farmer3Name: "વિકાસ ગુપ્તા",
            farmer3Location: "ભરૂચ, ગુજરાત",
            farmer3Story: "\"KCC લોનની સમગ્ર પ્રક્રિયા સરળ બની ગઈ. મને સરકારી યોજનાઓની માહિતી પણ મળે છે.\"",
            footerText: "આપણા દેશના નિર્માતાઓ - ખેડૂતો માટે એક પહેલ",
            modalSellTitle: "🛒 તમારું ઉત્પાદન વેચો",
            modalSellDesc: "તમારા ઉત્પાદનની વિગતો ભરો અને વધુ સારા ભાવ મેળવો",
            formName: "નામ",
            formProduct: "ઉત્પાદન",
            formProductSelect: "ઉત્પાદન પસંદ કરો",
            formProductWheat: "ઘઉં",
            formProductPaddy: "ડાંગર",
            formProductOnion: "ડુંગળી",
            formProductTomato: "ટામેટા",
            formProductPotato: "બટાકા",
            formProductChilli: "લીલા મરચા",
            formProductOther: "અન્ય",
            formQuantity: "જથ્થો (ક્વિન્ટલ/કિલો)",
            formPrice: "અપેક્ષિત કિંમત (₹ પ્રતિ યુનિટ)",
            formLocation: "સ્થળ",
            formPhone: "મોબાઇલ નંબર",
            submitBtn: "સબમિટ કરો",
            sellerSuccessMsg: "✅ તમારું ઉત્પાદન સફળતાપૂર્વક સબમિટ કરવામાં આવ્યું છે!",
            pitchTitle: "✨ AI-સંચાલિત સેલ્સ પિચ",
            pitchDesc: "તમારા ગ્રાહકોને મોકલવા માટે આ AI-જનરેટેડ સંદેશનો ઉપયોગ કરો.",
            generatePitchBtn: "પિચ બનાવો",
            copyBtn: "કૉપિ કરો",
            feedbackTitle: "💬 પ્રતિસાદ આપો",
            feedbackDesc: "તમારો પ્રતિસાદ અમારા માટે ખૂબ જ મહત્વપૂર્ણ છે",
            formRating: "રેટિંગ આપો",
            formFeedback: "તમારો પ્રતિસાદ",
            feedbackSuccessMsg: "🙏 આભાર! તમારો પ્રતિસાદ સબમિટ કરવામાં આવ્યો છે.",
            policyTitle: "🏛️ નવીનતમ સરકારી નીતિઓ અને યોજનાઓ",
            policy1Title: "PM-KISAN યોજના વિસ્તરણ 2025",
            policy1Detail1: "લાભ: હવે ₹8,000 પ્રતિ વર્ષ (પહેલાં ₹6,000)",
            policy1Detail2: "પાત્રતા: તમામ જમીનધારક ખેડૂત પરિવારો",
            policy1Detail3: "અરજી: pmkisan.gov.in પર ઓનલાઈન",
            policy1Detail4: "નવી સુવિધા: મોબાઇલ OTP દ્વારા ત્વરિત ચકાસણી",
            policy2Title: "પ્રધાનમંત્રી ફસલ બીમા યોજના અપડેટ",
            policy2Detail1: "ઘટાડેલું પ્રીમિયમ: ખરીફ 2%, રવિ 1.5%",
            policy2Detail2: "નવી ટેકનોલોજી: ડ્રોન અને સેટેલાઇટનો ઉપયોગ કરીને નુકસાનનું આકારણી",
            policy2Detail3: "ઝડપી ચુકવણી: 15 દિવસમાં દાવાની પતાવટ",
            policy2Detail4: "કવરેજ: તમામ કુદરતી આફતોનો સમાવેશ",
            policy3Title: "કિસાન ક્રેડિટ કાર્ડ (KCC) નવી સુવિધાઓ",
            policy3Detail1: "વધેલી મર્યાદા: કોલેટરલ વિના ₹3 લાખ સુધી",
            policy3Detail2: "ઓછો વ્યાજ દર: વાર્ષિક 4% (સબસિડી પછી)",
            policy3Detail3: "ડિજિટલ KCC: ઓનલાઈન અરજી, ત્વરિત મંજૂરી",
            policy3Detail4: "બહુ-ઉપયોગ: ખેતી, પશુપાલન અને મત્સ્યઉદ્યોગ માટે",
            howToApply: "📱 અરજી કેવી રીતે કરવી?",
            applyStep1: "કિસાન-સારથી AI એપ્લિકેશન પર 'સરકારી યોજનાઓ' વિભાગ પર જાઓ",
            applyStep2: "તમારી પાત્રતા તપાસો",
            applyStep3: "જરૂરી દસ્તાવેજો અપલોડ કરો",
            applyStep4: "એક ક્લિકમાં અરજી સબમિટ કરો",
            downloadAppBtn: "કિસાન-સારથી AI એપ્લિકેશન ડાઉનલોડ કરો",
        },
        mr: {
            skipLink: "मुख्य सामग्रीवर जा",
            navServices: "सेवा",
            navMandi: "बाजार",
            navChatbot: "AI सहाय्यक",
            navSupport: "सहाय्य",
            navPolicies: "धोरणे",
            marqueeText: "📢 PM-KISAN योजना विस्तार: आता ₹8,000 प्रति वर्ष | पीक विम्यावर 50% पर्यंत सूट | KCC मर्यादा ₹3 लाखांपर्यंत वाढली | सेंद्रिय शेतीसाठी मोफत प्रमाणपत्र",
            heroTitle: "🌾 किसान-सारथी AI - तुमचा डिजिटल कृषी सारथी",
            heroSubtitle: "AI च्या शक्तीने आधुनिक शेती करा. हवामानाच्या माहितीपासून ते बाजाराच्या भावापर्यंत, सर्व काही एकाच ठिकाणी.",
            heroBtnStart: "सुरुवात करा",
            heroBtnLearn: "अधिक जाणून घ्या",
            servicesTitle: "🛠️ आमच्या सेवा",
            service1Title: "हवामान अंदाज",
            service1Desc: "15-दिवसांचा अचूक हवामान अंदाज, पावसाची शक्यता आणि शेतीसाठी सल्ला.",
            service2Title: "पीक सल्ला",
            service2Desc: "AI-आधारित पीक निवड, पेरणीची वेळ आणि उत्पादकता वाढवण्याचे मार्ग.",
            service3Title: "कीड आणि रोग ओळख",
            service3Desc: "तुमच्या पिकाचा फोटो अपलोड करून कीड आणि रोग त्वरित ओळखा आणि उपचारांसाठी सूचना मिळवा.",
            service4Title: "बाजार माहिती",
            service4Desc: "वास्तविक-वेळेतील बाजार भाव, मागणी-पुरवठ्याची स्थिती आणि विक्रीसाठी योग्य वेळ.",
            mandiTitle: "🏪 आजचे बाजार भाव",
            mandiLocation: "वडोदरा बाजार",
            sellProductBtn: "तुमचे उत्पादन विका",
            quintal: "क्विंटल",
            kg: "किलो",
            min: "किमान",
            max: "कमाल",
            fromLastWeek: "मागील आठवड्यापासून",
            stable: "स्थिर",
            wheat: "🌾 गहू",
            paddy: "🌾 भात",
            onion: "🧅 कांदा",
            tomato: "🍅 टोमॅटो",
            potato: "🥔 बटाटा",
            chilli: "🌶️ हिरवी मिरची",
            chatbotTitle: "🤖 AI कृषी सल्लागार",
            chatbotHeader: "किसान-सारथी AI सहाय्यक",
            chatbotOnline: "🟢 ऑनलाइन - त्वरित उत्तरे मिळवा",
            chatbotWelcome: "नमस्कार! मी तुमचा किसान-सारथी AI आहे. तुम्ही मला हवामान, बाजार भाव, पिकांचे रोग किंवा सरकारी योजनांबद्दल काहीही विचारू शकता.",
            chatbotPlaceholder: "तुमचा प्रश्न येथे लिहा...",
            suggestedQuestions: "सुचवलेले प्रश्न:",
            qWeatherText: "हवामान",
            qPriceText: "भाव",
            qPestText: "कीड",
            qSchemeText: "योजना",
            qWeather: "पुढील 5 दिवसांसाठी वडोदरामधील हवामानाचा अंदाज काय आहे?",
            qPrice: "वडोदरा बाजारात आज कांद्याचा भाव काय आहे?",
            qPest: "माझ्या टोमॅटोच्या रोपाच्या पानांवर पिवळे डाग आहेत. ते काय असू शकते?",
            qScheme: "PM-KISAN योजनेसाठी कोण पात्र आहे?",
            supportTitle: "🤝 सहाय्य केंद्र",
            support1Title: "हेल्पलाइन",
            support1Desc: "24x7 उपलब्ध",
            support2Title: "तज्ञ सल्ला",
            support2Desc: "अनुभवी कृषी तज्ञांकडून व्हिडिओ कॉलद्वारे सल्ला मिळवा.",
            bookAppointmentBtn: "अपॉइंटमेंट बुक करा",
            support3Title: "प्रशिक्षण कार्यक्रम",
            support3Desc: "नवीन तंत्रज्ञानासाठी मोफत ऑनलाइन आणि ऑफलाइन प्रशिक्षण.",
            viewCoursesBtn: "कोर्स पहा",
            storiesTitle: "🌟 यशोगाथा",
            farmer1Name: "राजेश पटेल",
            farmer1Location: "वडोदरा, गुजरात",
            farmer1Story: "\"किसान-सारथी AI च्या सल्ल्याने माझ्या टोमॅटोच्या पिकात 40% सुधारणा झाली. AI सहाय्यकाने योग्य वेळी कीड ओळखली.\"",
            farmer2Name: "सुनीता शर्मा",
            farmer2Location: "आनंद, गुजरात",
            farmer2Story: "\"अचूक हवामान माहितीमुळे मी पावसापूर्वी माझे पीक वाचवले. मला बाजाराचे भावही वेळेवर मिळतात.\"",
            farmer3Name: "विकास गुप्ता",
            farmer3Location: "भरूच, गुजरात",
            farmer3Story: "\"KCC कर्जाची संपूर्ण प्रक्रिया सोपी झाली. मला सरकारी योजनांचीही माहिती मिळते.\"",
            footerText: "आपल्या देशाच्या निर्मात्यांसाठी - शेतकऱ्यांसाठी एक उपक्रम",
            modalSellTitle: "🛒 तुमचे उत्पादन विका",
            modalSellDesc: "तुमच्या उत्पादनाची माहिती भरा आणि चांगला भाव मिळवा",
            formName: "नाव",
            formProduct: "उत्पादन",
            formProductSelect: "उत्पादन निवडा",
            formProductWheat: "गहू",
            formProductPaddy: "भात",
            formProductOnion: "कांदा",
            formProductTomato: "टोमॅटो",
            formProductPotato: "बटाटा",
            formProductChilli: "हिरवी मिरची",
            formProductOther: "इतर",
            formQuantity: "प्रमाण (क्विंटल/किलो)",
            formPrice: "अपेक्षित किंमत (₹ प्रति युनिट)",
            formLocation: "स्थान",
            formPhone: "मोबाइल नंबर",
            submitBtn: "सबमिट करा",
            sellerSuccessMsg: "✅ तुमचे उत्पादन यशस्वीरित्या सबमिट झाले आहे!",
            pitchTitle: "✨ AI-शक्तीवर चालणारी सेल्स पिच",
            pitchDesc: "तुमच्या ग्राहकांना पाठवण्यासाठी हा AI-व्युत्पन्न संदेश वापरा.",
            generatePitchBtn: "पिच तयार करा",
            copyBtn: "कॉपी करा",
            feedbackTitle: "💬 अभिप्राय द्या",
            feedbackDesc: "तुमचा अभिप्राय आमच्यासाठी खूप महत्त्वाचा आहे",
            formRating: "रेटिंग द्या",
            formFeedback: "तुमचा अभिप्राय",
            feedbackSuccessMsg: "🙏 धन्यवाद! तुमचा अभिप्राय सबमिट झाला आहे.",
            policyTitle: "🏛️ नवीनतम सरकारी धोरणे आणि योजना",
            policy1Title: "PM-KISAN योजना विस्तार 2025",
            policy1Detail1: "लाभ: आता ₹8,000 प्रति वर्ष (पूर्वी ₹6,000)",
            policy1Detail2: "पात्रता: सर्व जमीनधारक शेतकरी कुटुंबे",
            policy1Detail3: "अर्ज: pmkisan.gov.in वर ऑनलाइन",
            policy1Detail4: "नवीन वैशिष्ट्य: मोबाइल OTP द्वारे त्वरित पडताळणी",
            policy2Title: "प्रधानमंत्री फसल विमा योजना अद्यतन",
            policy2Detail1: "कमी प्रीमियम: खरीप 2%, रब्बी 1.5%",
            policy2Detail2: "नवीन तंत्रज्ञान: ड्रोन आणि उपग्रहाद्वारे नुकसानीचे मूल्यांकन",
            policy2Detail3: "त्वरित पेमेंट: 15 दिवसांत दाव्याची पूर्तता",
            policy2Detail4: "व्याप्ती: सर्व नैसर्गिक आपत्तींचा समावेश",
            policy3Title: "किसान क्रेडिट कार्ड (KCC) नवीन वैशिष्ट्ये",
            policy3Detail1: "वाढलेली मर्यादा: तारणाशिवाय ₹3 लाखांपर्यंत",
            policy3Detail2: "कमी व्याज दर: वार्षिक 4% (अनुदानानंतर)",
            policy3Detail3: "डिजिटल KCC: ऑनलाइन अर्ज, त्वरित मंजुरी",
            policy3Detail4: "बहु-उपयोग: शेती, पशुपालन आणि मत्स्यपालनासाठी",
            howToApply: "📱 अर्ज कसा करावा?",
            applyStep1: "किसान-सारथी AI ॲपवरील 'सरकारी योजना' विभागात जा",
            applyStep2: "तुमची पात्रता तपासा",
            applyStep3: "आवश्यक कागदपत्रे अपलोड करा",
            applyStep4: "एका क्लिकमध्ये अर्ज सबमिट करा",
            downloadAppBtn: "किसान-सारथी AI ॲप डाउनलोड करा",
        }
    };
    
    // --- DYNAMIC HEADER SPACING ---
    const header = document.querySelector('.header');
    const marquee = document.querySelector('.policies-marquee');

    function adjustContentSpacing() {
        const headerHeight = header.offsetHeight;
        marquee.style.marginTop = `${headerHeight}px`;
    }

    adjustContentSpacing();
    window.addEventListener('resize', adjustContentSpacing);

    // --- FLOATING CHATBOT VANISHING EFFECT ---
    const floatingChatbot = document.getElementById('floatingChatbot');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            // Scrolling down past 200px from top
            floatingChatbot.classList.add('is-hidden');
        } else if (window.scrollY < lastScrollY) {
            // Scrolling up
            floatingChatbot.classList.remove('is-hidden');
        }
        // Update last scroll position for the next event
        lastScrollY = window.scrollY <= 0 ? 0 : window.scrollY; 
    }, { passive: true });
    
    // Set current date
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('hi-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const BASE_URLS = {
        chat: "https://chat-service-l3dm.onrender.com",
        market: "https://market-services.onrender.com",
        user: "https://user-service-znmf.onrender.com",
        weather: "https://weather-service-e16o.onrender.com"
      };
      
      // Example call:
      async function getWeather(location) {
        const res = await fetch(`${BASE_URLS.weather}/weather?location=${location}`);
        return await res.json();
      }
      

    // --- CHATBOT ENHANCEMENT ---
    const sendMessage = async function() {
        const input = document.getElementById('messageInput');
        const messagesContainer = document.getElementById('chatMessages');
        const userQuery = input.value.trim();
        if (userQuery === '') return;

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = userQuery;
        messagesContainer.appendChild(userMessage);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Show bot typing indicator
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.innerHTML = '<span class="typing">AI सोच रहा है...</span>';
        messagesContainer.appendChild(botMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        announceToScreenReader('AI का जवाब आ रहा है');

        try {
            const response = await fetch(CHAT_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userQuery, language: localStorage.getItem('language') || 'hi' })
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            typeResponse(botMessage, data.response);
        } catch (error) {
            console.error("Error calling Chat Service:", error);
            typeResponse(botMessage, "माफ़ कीजिए, AI से संपर्क करने में कोई समस्या हुई। कृपया बाद में प्रयास करें।");
        }
    };

    // --- MARKET PRICE FETCHER ---
    async function fetchMarketPrices() {
        const container = document.getElementById('produce-grid-container');
        try {
            const response = await fetch(MARKET_API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const prices = await response.json();
            
            container.innerHTML = ''; // Clear existing content
            prices.forEach(item => {
                const card = document.createElement('article');
                card.className = 'produce-card';
                card.tabIndex = 0;
                card.innerHTML = `
                    <h3>🌾 ${item.commodity}</h3>
                    <p class="price">₹${item.modal_price}/<span data-key="quintal">क्विंटल</span></p>
                `;
                container.appendChild(card);
            });

        } catch (error) {
            console.error("Could not fetch market prices:", error);
            container.innerHTML = `<p>Could not load market prices. Please ensure the backend is running.</p>`;
        }
    }

    fetchMarketPrices(); // Fetch prices on page load

    // --- SALES PITCH GENERATOR ---
    const generateSalesPitch = async function() {
        const product = document.getElementById('sellerProduct').value;
        const quantity = document.getElementById('sellerQuantity').value;
        const price = document.getElementById('sellerPrice').value;
        const location = document.getElementById('sellerLocation').value;
        const salesPitchText = document.getElementById('salesPitchText');
        const generateBtn = document.getElementById('generatePitchBtn');

        if (!product || !quantity || !price || !location) {
            salesPitchText.value = "Please fill all form details first.";
            return;
        }

        generateBtn.classList.add('loading');
        generateBtn.disabled = true;
        salesPitchText.value = "AI आपका संदेश बना रहा है...";

        const prompt = `
            You are an expert agricultural salesperson. Write a short, persuasive, and professional sales pitch in Hinglish (Hindi + English).
            The farmer is selling "${quantity}" of high-quality "${product}" from "${location}".
            The expected price is "${price}".
            The message should be suitable for sending on WhatsApp to potential buyers.
            Start with a greeting and end with a call to action including the farmer's phone number.
            Farmer's phone number is ${document.getElementById('sellerPhone').value}.
            Make it sound appealing and highlight the quality of the produce.
        `;

        // This feature can be re-enabled once the chat service is upgraded to handle different types of prompts
        // For now, we simulate a response.
        setTimeout(() => {
            salesPitchText.value = `नमस्ते! हमारे पास ${location} से ताज़ा ${product} उपलब्ध है। मात्रा: ${quantity}, भाव: ${price}। अभी संपर्क करें!`;
            generateBtn.classList.remove('loading');
            generateBtn.disabled = false;
        }, 1500);
    };

    // --- UTILITY FUNCTIONS ---
    const copyToClipboard = function(elementId, button) {
        const textarea = document.getElementById(elementId);
        textarea.select();
        try {
            document.execCommand('copy');
            const originalText = button.innerHTML;
            button.innerHTML = 'Copied!';
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    
    // Enhanced typing effect
    function typeResponse(element, text) {
        element.innerHTML = '';
        let i = 0;
        function typeChar() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
                i++;
                setTimeout(typeChar, 15);
            } else {
                announceToScreenReader('AI का जवाब तैयार है');
            }
        }
        typeChar();
    }
    
    // Predefined question functionality
    const askPredefinedQuestion = function(question) {
        const input = document.getElementById('messageInput');
        input.value = question;
        sendMessage();
    }
    
    // Enhanced modal functionality
    const openSellerModal = function() {
        const modal = document.getElementById('sellerModal');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => document.getElementById('sellerName').focus(), 100);
    }
    const closeSellerModal = function() {
        const modal = document.getElementById('sellerModal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        resetForm('sellerForm');
        document.getElementById('geminiSalesPitch').style.display = 'none';
    }
    const showFeedbackModal = function() {
        const modal = document.getElementById('feedbackModal');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        setTimeout(() => document.querySelector('.star-btn').focus(), 100);
    }
    const closeFeedbackModal = function() {
        const modal = document.getElementById('feedbackModal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        resetForm('feedbackForm');
    }
    const openPolicyModal = function() {
        const modal = document.getElementById('policyModal');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }
    const closePolicyModal = function() {
        const modal = document.getElementById('policyModal');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
    
    // Enhanced form validation
    function validateForm(formId) {
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        inputs.forEach(input => {
            const errorDiv = document.getElementById(input.name + 'Error');
            if (!input.value.trim()) {
                showError(input, errorDiv, 'यह फील्ड आवश्यक है');
                isValid = false;
            } else {
                if (input.type === 'tel' && !/^[0-9]{10}$/.test(input.value)) {
                    showError(input, errorDiv, 'कृपया 10 अंकों का वैध मोबाइल नंबर डालें');
                    isValid = false;
                } else {
                    clearError(input, errorDiv);
                }
            }
        });
        return isValid;
    }
    
    function showError(input, errorDiv, message) {
        input.classList.add('input-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }
    
    function clearError(input, errorDiv) {
        input.classList.remove('input-error');
        if (errorDiv) errorDiv.style.display = 'none';
    }
    
    function resetForm(formId) {
        const form = document.getElementById(formId);
        form.reset();
        form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
        form.querySelectorAll('.error').forEach(el => el.style.display = 'none');
        form.querySelectorAll('.success-message').forEach(el => el.style.display = 'none');
    }
    
    // Enhanced form submissions
    document.getElementById('sellerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('sellerForm')) {
            document.getElementById('sellerSuccess').style.display = 'block';
            document.getElementById('geminiSalesPitch').style.display = 'block';
            announceToScreenReader('उत्पाद सफलतापूर्वक सबमिट हो गया');
        }
    });
    
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('feedbackForm')) {
            document.getElementById('feedbackSuccess').style.display = 'block';
            announceToScreenReader('फीडबैक सफलतापूर्वक सबमिट हो गया');
            setTimeout(closeFeedbackModal, 2000);
        }
    });
    
    // Star rating functionality
    document.querySelectorAll('.star-btn').forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            document.getElementById('feedbackRating').value = rating;
            document.querySelectorAll('.star-btn').forEach((s, i) => {
                s.style.color = i < rating ? '#ff9800' : '#ccc';
            });
            clearError(document.getElementById('feedbackRating'), document.getElementById('ratingError'));
        });
    });
    
    // Screen reader announcements
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.className = 'sr-only';
        announcement.setAttribute('role', 'alert');
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => document.body.removeChild(announcement), 1000);
    }
    
    // Enhanced keyboard navigation
    document.getElementById('messageInput').addEventListener('keypress', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    floatingChatbot.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToChatbot();
        }
    });
    
    // Enhanced scroll to chatbot
    const scrollToChatbot = function() {
        const chatbotSection = document.getElementById('chatbot');
        chatbotSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => document.getElementById('messageInput').focus(), 500);
    }
    
    // Language switcher enhancement
    document.getElementById('langSwitcher').addEventListener('change', function() {
        const lang = this.value;
        switchLanguage(lang);
    });

    function switchLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-question-key]').forEach(element => {
            const key = element.dataset.questionKey;
            if (translations[lang] && translations[lang][key]) {
                element.dataset.question = translations[lang][key];
            }
        });

        const input = document.getElementById('messageInput');
        if (translations[lang] && translations[lang].chatbotPlaceholder) {
            input.placeholder = translations[lang].chatbotPlaceholder;
        }
        localStorage.setItem('language', lang);
    }

    const savedLang = localStorage.getItem('language') || 'hi';
    document.getElementById('langSwitcher').value = savedLang;
    switchLanguage(savedLang);
    
    // Enhanced dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        const moonIcon = this.querySelector('.icon-moon');
        const sunIcon = this.querySelector('.icon-sun');
        
        if (isDark) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }

        this.setAttribute('aria-label', isDark ? 'लाइट मोड' : 'डार्क मोड');
        announceToScreenReader(isDark ? 'डार्क मोड चालू' : 'लाइट मोड चालू');
        try { localStorage.setItem('darkMode', isDark); } catch (e) {}
    });
    
    // Load dark mode preference
    try {
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            const toggle = document.getElementById('darkModeToggle');
            toggle.querySelector('.icon-moon').style.display = 'none';
            toggle.querySelector('.icon-sun').style.display = 'inline-block';
        }
    } catch (e) {}
    
    // Intersection observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section, .mandi-header, .services-grid, .support-options').forEach(el => observer.observe(el));
    
    // Modal accessibility enhancements
    function trapFocus(modal) {
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        modal.addEventListener('keydown', e => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
            if (e.key === 'Escape') modal.querySelector('.close')?.click();
        });
    }
    
    document.querySelectorAll('.modal').forEach(trapFocus);
    
    // Close modals when clicking outside
    window.addEventListener('click', e => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) modal.querySelector('.close')?.click();
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- ATTACH ALL EVENT LISTENERS ---
    document.getElementById('policyLink').addEventListener('click', openPolicyModal);
    document.getElementById('openSellerModalBtn').addEventListener('click', openSellerModal);
    document.querySelector('.send-btn').addEventListener('click', sendMessage);
    document.getElementById('floatingChatbot').addEventListener('click', scrollToChatbot);
    document.getElementById('generatePitchBtn').addEventListener('click', generateSalesPitch);
    document.getElementById('copyPitchBtn').addEventListener('click', () => copyToClipboard('salesPitchText', document.getElementById('copyPitchBtn')));
    document.getElementById('downloadAppBtn').addEventListener('click', () => alert('यह डेमो वर्शन है। वास्तविक ऐप में यह सुविधा उपलब्ध होगी।'));

    document.querySelectorAll('.modal .close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });

    document.getElementById('predefinedQuestions').addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (button) {
            askPredefinedQuestion(button.dataset.question);
        }
    });
});