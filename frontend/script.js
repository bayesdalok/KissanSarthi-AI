document.addEventListener('DOMContentLoaded', function() {
    
    // --- MOCK USER PROFILE ---
    const userProfile = {
        name: "राजेश पटेल",
        location: "वडोदरा, गुजरात",
        phone: "9876543210"
    };

    // --- TRANSLATION DATA ---
    const translations = {
        en: {
            autofillBtn: "Auto-fill with my details",
            skipLink: "Skip to main content",
            navDashboard: "Dashboard",
            navServices: "Services",
            navMandi: "Market",
            navChatbot: "AI Assistant",
            navSupport: "Support",
            navPolicies: "Policies",
            marqueeText: "📢 PM-KISAN Scheme Extended: Now ₹8,000 per year | Up to 50% discount on crop insurance | KCC limit increased to ₹3 lakh | Free certification for organic farming",
            heroTitle: "Empowering Indian Farmers with AI",
            heroSubtitle: "The future of farming, now at your fingertips.",
            heroBtnStart: "Get Started",
            heroBtnLearn: "Learn More",
            dashboardTitle: "📅 Today's Dashboard",
            dashboardWeather: "Weather",
            dashboardMarket: "Market Movers",
            dashboardTip: "Tip of the Day",
            dashboardChat: "Quick Chat",
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
            chatbotHeader: "Prajanya AI Assistant",
            chatbotOnline: "🟢 Online - Get instant replies",
            chatbotWelcome: "Hello! I am your Prajanya AI. You can ask me anything about weather, market prices, crop diseases, or government schemes.",
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
            support2Desc: "Kisan Call Centre: 1800-180-1551",
            bookAppointmentBtn: "Book Appointment",
            support3Title: "Training Programs",
            support3Desc: "Free online and offline training for new technologies.",
            viewCoursesBtn: "View Courses",
            storiesTitle: "🌟 Success Stories",
            farmer1Name: "Rajesh Patel",
            farmer1Location: "Vadodara, Gujarat",
            farmer1Story: "\"With Prajanya AI's advice, my tomato crop yield improved by 40%. The AI assistant identified pests at the right time.\"",
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
            govSitesTitle: "🔗 Official Government Resources",
            govSitePMKisan: "PM-KISAN Samman Nidhi",
            govSiteAgriWelfare: "Dept. of Agriculture & Farmers Welfare",
            govSiteEnam: "e-NAM (National Agriculture Market)",
            govSiteSoilHealth: "Soil Health Card",
            linksTitle: "Important Links",
            trainingTitle: "🎓 Training Videos",
            video1Title: "Digital Farming",
            video2Title: "Organic Farming",
            video3Title: "Drip Irrigation",
            video4Title: "Soil Health",
            pestTitle: "🐛 AI Pest & Disease Detection",
            pestDesc: "Upload a photo of the affected crop to get a diagnosis.",
            imageUploadText: "Image for pest detection:",
        },
        hi: {
            autofillBtn: "मेरी जानकारी भरें",
            skipLink: "मुख्य सामग्री पर जाएं",
            navDashboard: "डैशबोर्ड",
            navServices: "सेवाएं",
            navMandi: "मंडी",
            navChatbot: "AI सहायक",
            navSupport: "सहायता",
            navPolicies: "नीतियां",
            marqueeText: "📢 PM-KISAN योजना विस्तार: अब ₹8,000 प्रति वर्ष | फसल बीमा में 50% तक की छूट | KCC की लिमिट बढ़कर ₹3 लाख | ऑर्गेनिक खेती के लिए मुफ्त सर्टिफिकेशन",
            heroTitle: "AI के साथ भारतीय किसानों को सशक्त बनाना",
            heroSubtitle: "खेती का भविष्य, अब आपकी उंगलियों पर।",
            heroBtnStart: "अभी शुरू करें",
            heroBtnLearn: "और जानें",
            dashboardTitle: "📅 आज का डैशबोर्ड",
            dashboardWeather: "मौसम",
            dashboardMarket: "बाजार मूवर्स",
            dashboardTip: "आज का सुझाव",
            dashboardChat: "त्वरित चैट",
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
            chatbotHeader: "Prajanya AI Assistant",
            chatbotOnline: "🟢 ऑनलाइन - तुरंत जवाब पाएं",
            chatbotWelcome: "नमस्ते! मैं आपका Prajanya AI हूँ। आप मुझसे मौसम, बाज़ार भाव, फसल की बिमारियों, या सरकारी योजनाओं के बारे में कुछ भी पूछ सकते हैं।",
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
            support2Desc: "किसान कॉल सेंटर: 1800-180-1551",
            bookAppointmentBtn: "अपॉइंटमेंट बुक करें",
            support3Title: "प्रशिक्षण कार्यक्रम",
            support3Desc: "नई तकनीकों के लिए मुफ्त ऑनलाइन और ऑफलाइन प्रशिक्षण।",
            viewCoursesBtn: "कोर्स देखें",
            storiesTitle: "🌟 सफलता की कहानियां",
            farmer1Name: "राजेश पटेल",
            farmer1Location: "वडोदरा, गुजरात",
            farmer1Story: "\"Prajanya AI की सलाह से मेरी टमाटर की फसल 40% बेहतर हुई। AI सहायक ने सही समय पर कीड़ों की पहचान कराई।\"",
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
            govSitesTitle: "🔗 आधिकारिक सरकारी संसाधन",
            govSitePMKisan: "PM-KISAN सम्मान निधि",
            govSiteAgriWelfare: "कृषि एवं किसान कल्याण विभाग",
            govSiteEnam: "e-NAM (राष्ट्रीय कृषि बाजार)",
            govSiteSoilHealth: "मृदा स्वास्थ्य कार्ड",
            linksTitle: "महत्वपूर्ण लिंक",
            trainingTitle: "🎓 प्रशिक्षण वीडियो",
            video1Title: "डिजिटल खेती",
            video2Title: "जैविक खेती",
            video3Title: "टपक सिंचाई",
            video4Title: "मृदा स्वास्थ्य",
            pestTitle: "🐛 AI कीट और रोग का पता लगाना",
            pestDesc: "निदान प्राप्त करने के लिए प्रभावित फसल का फोटो अपलोड करें।",
            imageUploadText: "कीट का पता लगाने के लिए छवि:",
        },
        gu: {
            autofillBtn: "મારી વિગતો ભરો",
            skipLink: "મુખ્ય સામગ્રી પર જાઓ",
            navDashboard: "ડેશબોર્ડ",
            navServices: "સેવાઓ",
            navMandi: "બજાર",
            navChatbot: "AI સહાયક",
            navSupport: "સહાય",
            navPolicies: "નીતિઓ",
            marqueeText: "📢 PM-KISAN યોજના વિસ્તરણ: હવે ₹8,000 પ્રતિ વર્ષ | પાક વીમામાં 50% સુધીની છૂટ | KCC મર્યાદા ₹3 લાખ સુધી વધી | ઓર્ગેનિક ખેતી માટે મફત પ્રમાણપત્ર",
            heroTitle: "AI વડે ભારતીય ખેડૂતોને સશક્ત બનાવવા",
            heroSubtitle: "ખેતીનું ભવિષ્ય, હવે તમારી આંગળીઓ પર।",
            heroBtnStart: "હમણાં શરૂ કરો",
            heroBtnLearn: "વધુ જાણો",
            dashboardTitle: "📅 આજનું ડેશબોર્ડ",
            dashboardWeather: "હવામાન",
            dashboardMarket: "બજાર મૂવર્સ",
            dashboardTip: "આજની ટીપ",
            dashboardChat: "ઝડપી ચેટ",
            servicesTitle: "🛠️ અમારી સેવાઓ",
            service1Title: "હવામાનની આગાહી",
            service1Desc: "15 દિવસની સચોટ હવામાનની આગાહી, વરસાદની સંભાવના અને ખેતી માટે સૂચનો.",
            service2Title: "પાક સલાહ",
            service2Desc: "AI-આધારિત પાકની પસંદગી, વાવણીનો સમય અને ઉત્પાદકતા વધારવાની રીતો.",
            service3Title: "જીવાત-રોગની ઓળખ",
            service3Desc: "તમારા પાકનો ફોટો અપલોડ કરીને તરત જ જીવાતો અને રોગોને ઓળખો અને સારવાર માટે સૂચનો મેળવો.",
            service4Title: "બજારની માહિતી",
            service4Desc: "રીઅલ-ટાઇમ બજાર ભાવ, માંગ-પુરવઠાની સ્થિતિ અને વેચાણ માટેનો યોગ્ય સમય.",
            mandiTitle: "🏪 આજના બજાર ભાવ",
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
            chatbotHeader: "Prajanya AI Assistant",
            chatbotOnline: "🟢 ઓનલાઈન - તરત જવાબ મેળવો",
            chatbotWelcome: "નમસ્તે! હું તમારો Prajanya AI છું. તમે મને હવામાન, બજાર ભાવ, પાકના રોગો અથવા સરકારી યોજનાઓ વિશે કંઈપણ પૂછી શકો છો.",
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
            support2Desc: "કિસાન કોલ સેન્ટર: 1800-180-1551",
            bookAppointmentBtn: "એપોઇન્ટમેન્ટ બુક કરો",
            support3Title: "તાલીમ કાર્યક્રમો",
            support3Desc: "નવી તકનીકો માટે મફત ઓનલાઈન અને ઓફલાઈન તાલીમ.",
            viewCoursesBtn: "કોર્સ જુઓ",
            storiesTitle: "🌟 સફળતાની વાર્તાઓ",
            farmer1Name: "રાજેશ पटेल",
            farmer1Location: "વડોદરા, ગુજરાત",
            farmer1Story: "\"Prajanya AIની સલાહથી, મારા ટામેટાના પાકમાં 40% સુધારો થયો. AI સહાયકે યોગ્ય સમયે જીવાતોને ઓળખી કાઢ્યા.\"",
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
            feedbackSuccessMsg: "� આભાર! તમારો પ્રતિસાદ સબમિટ કરવામાં આવ્યો છે.",
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
            govSitesTitle: "🔗 સત્તાવાર સરકારી સંસાધનો",
            govSitePMKisan: "PM-KISAN સન્માન નિધિ",
            govSiteAgriWelfare: "કૃષિ અને ખેડૂત કલ્યાણ વિભાગ",
            govSiteEnam: "e-NAM (રાષ્ટ્રીય કૃષિ બજાર)",
            govSiteSoilHealth: "જમીન આરોગ્ય કાર્ડ",
            linksTitle: "મહત્વપૂર્ણ લિંક્સ",
            trainingTitle: "🎓 તાલીમ વિડિઓઝ",
            video1Title: "ડિજિટલ ખેતી",
            video2Title: "જૈવિક ખેતી",
            video3Title: "ટપક સિંચાઈ",
            video4Title: "જમીન આરોગ્ય",
            pestTitle: "🐛 AI જીવાત અને રોગની શોધ",
            pestDesc: "નિદાન મેળવવા માટે અસરગ્રસ્ત પાકનો ફોટો અપલોડ કરો.",
            imageUploadText: "જીવાત શોધવા માટે છબી:",
        },
        mr: {
            autofillBtn: "माझी माहिती भरा",
            skipLink: "मुख्य सामग्रीवर जा",
            navDashboard: "डॅशबोर्ड",
            navServices: "सेवा",
            navMandi: "बाजार",
            navChatbot: "AI सहाय्यक",
            navSupport: "सहाय्य",
            navPolicies: "धोरणे",
            marqueeText: "📢 PM-KISAN योजना विस्तार: आता ₹8,000 प्रति वर्ष | पीक विम्यावर 50% पर्यंत सूट | KCC मर्यादा ₹3 लाखांपर्यंत वाढली | सेंद्रिय शेतीसाठी मोफत प्रमाणपत्र",
            heroTitle: "AI सह भारतीय शेतकऱ्यांना सक्षम करणे",
            heroSubtitle: "शेतीचे भविष्य, आता तुमच्या बोटांच्या टोकावर.",
            heroBtnStart: "सुरुवात करा",
            heroBtnLearn: "अधिक जाणून घ्या",
            dashboardTitle: "📅 आजचा डॅशबोर्ड",
            dashboardWeather: "हवामान",
            dashboardMarket: "बाजार मूव्हर्स",
            dashboardTip: "आजचा सल्ला",
            dashboardChat: "द्रुत चॅट",
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
            chatbotHeader: "Prajanya AI Assistant",
            chatbotOnline: "🟢 ऑनलाइन - त्वरित उत्तरे मिळवा",
            chatbotWelcome: "नमस्कार! मी तुमचा Prajanya AI आहे. तुम्ही मला हवामान, बाजार भाव, पिकांचे रोग किंवा सरकारी योजनांबद्दल काहीही विचारू शकता.",
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
            support2Desc: "किसान कॉल सेंटर: 1800-180-1551",
            bookAppointmentBtn: "अपॉइंटमेंट बुक करा",
            support3Title: "प्रशिक्षण कार्यक्रम",
            support3Desc: "नवीन तंत्रज्ञानासाठी मोफत ऑनलाइन आणि ऑफलाइन प्रशिक्षण.",
            viewCoursesBtn: "कोर्स पहा",
            storiesTitle: "🌟 यशोगाथा",
            farmer1Name: "राजेश पटेल",
            farmer1Location: "वडोदरा, गुजरात",
            farmer1Story: "\"Prajanya AI च्या सल्ल्याने माझ्या टोमॅटोच्या पिकात 40% सुधारणा झाली. AI सहाय्यकाने योग्य वेळी कीड ओळखली.\"",
            farmer2Name: "सुनीતા शर्मा",
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
            govSitesTitle: "🔗 अधिकृत सरकारी संसाधने",
            govSitePMKisan: "PM-KISAN सन्मान निधी",
            govSiteAgriWelfare: "कृषी आणि शेतकरी कल्याण विभाग",
            govSiteEnam: "e-NAM (राष्ट्रीय कृषी बाजार)",
            govSiteSoilHealth: "मृदा आरोग्य कार्ड",
            linksTitle: "महत्वपूर्ण लिंक्स",
            trainingTitle: "🎓 प्रशिक्षण व्हिडिओ",
            video1Title: "डिजिटल शेती",
            video2Title: "सेंद्रिय शेती",
            video3Title: "ठिबक सिंचन",
            video4Title: "मृदा आरोग्य",
            pestTitle: "🐛 AI कीड आणि रोग ओळख",
            pestDesc: "निदान मिळविण्यासाठी प्रभावित पिकाचा फोटो अपलोड करा.",
            imageUploadText: "कीटक शोधण्यासाठी प्रतिमा:",
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
    
    // --- BACKEND API INTEGRATION ---
    const CHAT_API_URL = "http://localhost:8002/chat";
    const PEST_API_URL = "http://localhost:5000/predict";

    // --- VOICE I/O STATE & SETUP ---
    let isVoiceOutputEnabled = false;
    const toggleVoiceBtn = document.getElementById('toggle-voice-btn');
    const micBtn = document.getElementById('mic-btn');
    const messageInput = document.getElementById('messageInput');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;

    const langCodeMap = {
        en: 'en-US',
        hi: 'hi-IN',
        gu: 'gu-IN',
        mr: 'mr-IN'
    };
    
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.interimResults = false;

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            messageInput.value = transcript;
            sendMessage();
        });
        
        recognition.addEventListener('end', () => {
            micBtn.classList.remove('is-listening');
        });
        
        recognition.addEventListener('error', (event) => {
            console.error("Speech recognition error:", event.error);
            micBtn.classList.remove('is-listening');
        });

        micBtn.addEventListener('click', () => {
            if (micBtn.classList.contains('is-listening')) {
                recognition.stop();
            } else {
                micBtn.classList.add('is-listening');
                recognition.lang = langCodeMap[localStorage.getItem('language') || 'hi'];
                recognition.start();
            }
        });

    } else {
        micBtn.style.display = 'none';
        console.warn("Speech Recognition not supported in this browser.");
    }

    toggleVoiceBtn.addEventListener('click', () => {
        isVoiceOutputEnabled = !isVoiceOutputEnabled;
        toggleVoiceBtn.classList.toggle('is-active', isVoiceOutputEnabled);
        if (!isVoiceOutputEnabled) {
            window.speechSynthesis.cancel(); // Stop any ongoing speech
        }
    });

    function speakText(text) {
        if (!isVoiceOutputEnabled || !window.speechSynthesis) return;
        window.speechSynthesis.cancel(); // Cancel previous speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCodeMap[localStorage.getItem('language') || 'hi'];
        window.speechSynthesis.speak(utterance);
    }

    // --- CHATBOT ENHANCEMENT ---
    const sendMessage = async function() {
        const messagesContainer = document.getElementById('chatMessages');
        const userQuery = messageInput.value.trim();
        if (userQuery === '') return;

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = userQuery;
        messagesContainer.appendChild(userMessage);
        messageInput.value = '';
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
            typeResponse(botMessage, "Connection to the AI service failed. This might be due to an ad blocker or because the local backend server is not running. Please check your browser extensions and ensure the server is active.");
        }
    };

    // --- MARKET PRICE FETCHER (Original Static Version) ---
    function fetchMarketPrices() {
        const container = document.getElementById('produce-grid-container');
        const prices = [
            { commodity: "Wheat", modal_price: 2200 },
            { commodity: "Paddy", modal_price: 1800 },
            { commodity: "Onion", modal_price: 1500 },
            { commodity: "Tomato", modal_price: 1200 },
            { commodity: "Potato", modal_price: 1000 },
            { commodity: "Green Chilli", modal_price: 3000 },
        ];
        
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
                speakText(text); // Speak the final response
            }
        }
        typeChar();
    }
    
    // Predefined question functionality
    const askPredefinedQuestion = function(question) {
        messageInput.value = question;
        sendMessage();
    }
    
    // --- AUTO-FILL FUNCTIONALITY ---
    function autoFillForm() {
        document.getElementById('sellerName').value = userProfile.name;
        document.getElementById('sellerLocation').value = userProfile.location;
        document.getElementById('sellerPhone').value = userProfile.phone;
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
    const openTrainingModal = function() {
        const modal = document.getElementById('trainingModal');
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }
    const closeTrainingModal = function() {
        const modal = document.getElementById('trainingModal');
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
    messageInput.addEventListener('keypress', e => {
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
        setTimeout(() => messageInput.focus(), 500);
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

        if (translations[lang] && translations[lang].chatbotPlaceholder) {
            messageInput.placeholder = translations[lang].chatbotPlaceholder;
        }
        localStorage.setItem('language', lang);
        // Update speech recognition language if it exists
        if (recognition) {
            recognition.lang = langCodeMap[lang];
        }
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
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(el => observer.observe(el));
    
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

    // --- CHATBOT IMAGE UPLOAD ---
    const uploadImageBtn = document.getElementById('uploadImageBtn');
    const chatImageUpload = document.getElementById('chatImageUpload');

    uploadImageBtn.addEventListener('click', () => chatImageUpload.click());

    chatImageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            const messagesContainer = document.getElementById('chatMessages');
            
            // Add user message with image preview
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.innerHTML = `
                <p data-key="imageUploadText">Image for pest detection:</p>
                <img src="${imageUrl}" alt="Uploaded crop image" style="max-width: 100%; border-radius: 8px; margin-top: 8px;">
            `;
            messagesContainer.appendChild(userMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            chatImageUpload.value = ''; // Reset file input

            // Show bot typing indicator
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.innerHTML = '<span class="typing">AI is analyzing the image...</span>';
            messagesContainer.appendChild(botMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            // Mock backend call and response
            setTimeout(() => {
                const mockResponse = "Analysis complete. This looks like **Tomato Leaf Mold**. I recommend applying a copper-based fungicide. Avoid overhead watering to reduce humidity around the plants.";
                typeResponse(botMessage, mockResponse);
            }, 2500);
        }
        reader.readAsDataURL(file);
    });

    // --- ATTACH ALL EVENT LISTENERS ---
    document.getElementById('policyLink').addEventListener('click', openPolicyModal);
    document.getElementById('openSellerModalBtn').addEventListener('click', openSellerModal);
    document.getElementById('autofillBtn').addEventListener('click', autoFillForm);
    document.querySelector('.send-btn').addEventListener('click', sendMessage);
    document.getElementById('floatingChatbot').addEventListener('click', scrollToChatbot);
    document.getElementById('generatePitchBtn').addEventListener('click', generateSalesPitch);
    document.getElementById('copyPitchBtn').addEventListener('click', () => copyToClipboard('salesPitchText', document.getElementById('copyPitchBtn')));
    document.getElementById('trainingCard').addEventListener('click', openTrainingModal);
    
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