const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'client', 'src');
const i18nPath = path.join(srcDir, 'i18n.ts');

const newTranslations = {
  en: {
    about: { title: 'About QR Code Generator', subtitle: 'Our mission is to make QR code generation simple, fast, and accessible', mission: 'Our Mission', m1: 'We believe that QR codes should be accessible to everyone. Our platform provides a free, fast, and secure way to generate professional QR codes without any barriers to entry.', m2: "Whether you're a small business owner, marketer, or developer, our tool makes it easy to create QR codes for any purpose.", values: 'Our Values', v1Title: 'User First', v1Desc: 'We prioritize user experience and make our tools intuitive and easy to use.', v2Title: 'Performance', v2Desc: 'Lightning-fast generation and real-time preview for the best experience.', v3Title: 'Privacy', v3Desc: 'All processing happens in your browser. We never store your data.', v4Title: 'Accessibility', v4Desc: 'Free to use, no registration required, accessible from anywhere.', why: 'Why Choose Us?', w1: '35+ QR code types supported', w2: 'Advanced customization options', w3: 'Multiple export formats', w4: 'Real-time preview', w5: '100% free and no registration', w6: 'Completely private - processing in browser' },
    faq_page: { title: 'Frequently Asked Questions', subtitle: 'Find answers to common questions about QR Code Generator', q1: 'Is QR Code Generator free to use?', a1: 'Your first 3 QR code generations are completely free. After that, we charge a tiny one-time fee of ₦1,000 for lifetime unlimited access.', q2: 'Do I need to create an account?', a2: 'No, you do not need to create an account. Even when paying, you just enter your email for the receipt.', q3: 'Is my data stored on your servers?', a3: 'No, all QR code generation happens entirely in your browser. We do not store any of your data on our servers.', q4: 'What QR code types are supported?', a4: 'We support 35+ QR code types including URLs, emails, phone numbers, WiFi networks, vCards, and much more.', q5: 'Can I customize the appearance of QR codes?', a5: 'Yes, you can customize colors, size, error correction level, margin, and more. You can also add logos.', q6: 'What formats can I download QR codes in?', a6: 'You can download QR codes as PNG, JPEG, SVG, and PDF.', q7: 'Can I use these QR codes commercially?', a7: 'Yes, absolutely. You can use QR codes generated here for any purpose - personal, commercial, or otherwise.', q8: 'How do I scan a QR code?', a8: 'Most modern smartphones have built-in QR code scanning. For other devices, you can use our QR Scanner tool.', q9: 'What is error correction level?', a9: 'Error correction level determines how much of the QR code can be damaged while still being scannable.', q10: 'Can I edit a QR code after generating it?', a10: 'You can regenerate a QR code with different settings, but QR codes are static once created. To change the content, generate a new QR code.' },
    pricing_page: { title: 'Simple, Transparent Pricing', subtitle: 'Try it for free, then pay once for unlimited access.', free: 'Free Trial', free_price: '₦0', free_sub: 'First 3 QR codes are on us', f1: 'Up to 3 QR code generations', f2: '35+ QR code types', f3: 'PNG & JPEG downloads', f4: 'Custom colors and styles', f5: 'Logo upload support', start_free: 'Start Free Trial', premium: 'Unlimited Access', premium_price: '₦1,000', premium_sub: 'One-time payment, lifetime access', p1: 'Unlimited QR code generations', p2: 'All 35+ QR code types', p3: 'High-res PNG, JPEG, SVG & PDF', p4: 'Advanced customization', p5: 'Premium logo support', p6: 'No monthly subscriptions', get_unlimited: 'Get Unlimited Access' },
    contact: { title: 'Contact Us', subtitle: 'We would love to hear from you', get_in_touch: 'Get in Touch', desc: 'Have a question or suggestion? We are here to help. Send us a message and we will respond as soon as possible.', email: 'Email', phone: 'Phone', address: 'Address', form_name: 'Name', form_name_ph: 'Your name', form_email: 'Email', form_email_ph: 'your@email.com', form_subject: 'Subject', form_subject_ph: 'How can we help?', form_message: 'Message', form_message_ph: 'Your message...', send: 'Send Message', success: 'Thank you for your message! We will get back to you soon.' }
  },
  es: {
    about: { title: 'Acerca del Generador QR', subtitle: 'Nuestra misión es hacer la generación de códigos QR simple, rápida y accesible', mission: 'Nuestra Misión', m1: 'Creemos que los códigos QR deben ser accesibles para todos. Nuestra plataforma proporciona una forma gratuita, rápida y segura de generar códigos QR.', m2: 'Ya sea que sea dueño de un pequeño negocio, comercializador o desarrollador, nuestra herramienta facilita la creación de códigos QR para cualquier propósito.', values: 'Nuestros Valores', v1Title: 'El Usuario Primero', v1Desc: 'Priorizamos la experiencia del usuario y hacemos que nuestras herramientas sean intuitivas.', v2Title: 'Rendimiento', v2Desc: 'Generación ultrarrápida y vista previa en tiempo real para la mejor experiencia.', v3Title: 'Privacidad', v3Desc: 'Todo el procesamiento ocurre en su navegador. Nunca almacenamos sus datos.', v4Title: 'Accesibilidad', v4Desc: 'Uso gratuito, sin necesidad de registro, accesible desde cualquier lugar.', why: '¿Por qué Elegirnos?', w1: 'Soporte para más de 35 tipos de códigos QR', w2: 'Opciones avanzadas de personalización', w3: 'Múltiples formatos de exportación', w4: 'Vista previa en tiempo real', w5: '100% gratis y sin registro', w6: 'Completamente privado: procesamiento en el navegador' },
    faq_page: { title: 'Preguntas Frecuentes', subtitle: 'Encuentre respuestas a preguntas comunes sobre el Generador QR', q1: '¿Es gratis usar el Generador QR?', a1: 'Sus primeras 3 generaciones son completamente gratuitas. Después de eso, cobramos una pequeña tarifa única de ₦1,000 para acceso ilimitado de por vida.', q2: '¿Necesito crear una cuenta?', a2: 'No, no necesita crear una cuenta. Incluso al pagar, solo ingresa su correo electrónico para el recibo.', q3: '¿Se almacenan mis datos en sus servidores?', a3: 'No, toda la generación de códigos QR ocurre en su navegador. No almacenamos datos.', q4: '¿Qué tipos de códigos QR son compatibles?', a4: 'Soportamos más de 35 tipos de códigos QR, incluyendo URL, correos, WiFi, vCards y más.', q5: '¿Puedo personalizar la apariencia de los códigos QR?', a5: 'Sí, puede personalizar colores, tamaños, nivel de corrección de errores, márgenes y logotipos.', q6: '¿En qué formatos puedo descargar los códigos QR?', a6: 'Puede descargar códigos QR como PNG, JPEG, SVG y PDF.', q7: '¿Puedo usar estos códigos QR comercialmente?', a7: 'Sí, absolutamente. Puede usarlos para cualquier propósito.', q8: '¿Cómo escaneo un código QR?', a8: 'La mayoría de los teléfonos tienen escáner integrado. Para otros dispositivos, use nuestra herramienta Escáner QR.', q9: '¿Qué es el nivel de corrección de errores?', a9: 'Determina cuánto del código QR puede dañarse mientras sigue siendo escaneable.', q10: '¿Puedo editar un código QR después de generarlo?', a10: 'Puede regenerarlo con diferentes configuraciones, pero los códigos QR son estáticos una vez creados.' },
    pricing_page: { title: 'Precios Simples y Transparentes', subtitle: 'Pruébelo gratis, luego pague una vez por acceso ilimitado.', free: 'Prueba Gratuita', free_price: '₦0', free_sub: 'Los primeros 3 códigos QR corren por nuestra cuenta', f1: 'Hasta 3 generaciones de códigos QR', f2: 'Más de 35 tipos de códigos QR', f3: 'Descargas PNG y JPEG', f4: 'Colores y estilos personalizados', f5: 'Soporte de carga de logotipo', start_free: 'Iniciar Prueba Gratuita', premium: 'Acceso Ilimitado', premium_price: '₦1,000', premium_sub: 'Pago único, acceso de por vida', p1: 'Generaciones ilimitadas', p2: 'Todos los 35+ tipos de códigos QR', p3: 'PNG de alta resolución, JPEG, SVG y PDF', p4: 'Personalización avanzada', p5: 'Soporte premium de logotipos', p6: 'Sin suscripciones mensuales', get_unlimited: 'Obtener Acceso Ilimitado' },
    contact: { title: 'Contáctenos', subtitle: 'Nos encantaría saber de usted', get_in_touch: 'Póngase en Contacto', desc: '¿Tiene alguna pregunta o sugerencia? Estamos aquí para ayudar. Envíenos un mensaje y responderemos lo antes posible.', email: 'Correo', phone: 'Teléfono', address: 'Dirección', form_name: 'Nombre', form_name_ph: 'Su nombre', form_email: 'Correo', form_email_ph: 'su@correo.com', form_subject: 'Asunto', form_subject_ph: '¿Cómo podemos ayudar?', form_message: 'Mensaje', form_message_ph: 'Su mensaje...', send: 'Enviar Mensaje', success: '¡Gracias por su mensaje! Nos pondremos en contacto pronto.' }
  },
  fr: {
    about: { title: 'À propos du Générateur QR', subtitle: 'Notre mission est de rendre la génération de codes QR simple, rapide et accessible', mission: 'Notre Mission', m1: 'Nous pensons que les codes QR doivent être accessibles à tous. Notre plateforme offre un moyen gratuit, rapide et sécurisé de générer des codes QR.', m2: 'Que vous soyez propriétaire d\'entreprise, spécialiste du marketing ou développeur, notre outil facilite la création de codes QR.', values: 'Nos Valeurs', v1Title: 'L\'utilisateur d\'abord', v1Desc: 'Nous priorisons l\'expérience utilisateur.', v2Title: 'Performance', v2Desc: 'Génération ultra-rapide et aperçu en temps réel.', v3Title: 'Confidentialité', v3Desc: 'Tout le traitement se fait dans votre navigateur. Nous ne stockons jamais vos données.', v4Title: 'Accessibilité', v4Desc: 'Gratuit, sans inscription, accessible partout.', why: 'Pourquoi nous choisir ?', w1: 'Plus de 35 types de codes QR', w2: 'Options de personnalisation avancées', w3: 'Multiples formats d\'exportation', w4: 'Aperçu en temps réel', w5: '100% gratuit et sans inscription', w6: 'Entièrement privé - traitement dans le navigateur' },
    faq_page: { title: 'Questions Fréquemment Posées', subtitle: 'Trouvez des réponses aux questions courantes sur le Générateur QR', q1: 'Est-ce gratuit d\'utiliser le Générateur QR ?', a1: 'Vos 3 premières générations sont 100 % gratuites. Ensuite, nous facturons ₦1,000 pour un accès illimité à vie.', q2: 'Dois-je créer un compte ?', a2: 'Non, aucune inscription n\'est requise.', q3: 'Mes données sont-elles stockées sur vos serveurs ?', a3: 'Non, tout se passe dans votre navigateur.', q4: 'Quels types de codes QR sont pris en charge ?', a4: 'Plus de 35 types, dont URL, emails, WiFi, etc.', q5: 'Puis-je personnaliser les codes QR ?', a5: 'Oui, couleurs, taille, marge, et logos.', q6: 'Dans quels formats puis-je télécharger ?', a6: 'PNG, JPEG, SVG et PDF.', q7: 'Puis-je utiliser ces codes commercialement ?', a7: 'Oui, absolument.', q8: 'Comment scanner un code QR ?', a8: 'Utilisez l\'appareil photo de votre smartphone ou notre outil de scanner.', q9: 'Qu\'est-ce que le niveau de correction d\'erreur ?', a9: 'Il détermine combien le code peut être endommagé tout en restant lisible.', q10: 'Puis-je modifier un code QR ?', a10: 'Les codes QR sont statiques une fois créés. Générez-en un nouveau.' },
    pricing_page: { title: 'Tarification Simple', subtitle: 'Essayez-le gratuitement, puis payez une fois pour un accès illimité.', free: 'Essai Gratuit', free_price: '₦0', free_sub: 'Les 3 premiers codes QR sont offerts', f1: 'Jusqu\'à 3 générations', f2: 'Plus de 35 types de QR', f3: 'Téléchargements PNG et JPEG', f4: 'Couleurs et styles personnalisés', f5: 'Prise en charge des logos', start_free: 'Démarrer l\'essai gratuit', premium: 'Accès Illimité', premium_price: '₦1,000', premium_sub: 'Paiement unique, accès à vie', p1: 'Générations illimitées', p2: 'Tous les 35+ types de QR', p3: 'PNG HD, JPEG, SVG et PDF', p4: 'Personnalisation avancée', p5: 'Logos premium', p6: 'Sans abonnement mensuel', get_unlimited: 'Obtenir un accès illimité' },
    contact: { title: 'Contactez-nous', subtitle: 'Nous aimerions avoir de vos nouvelles', get_in_touch: 'Prendre Contact', desc: 'Vous avez une question ou une suggestion ? Envoyez-nous un message.', email: 'Email', phone: 'Téléphone', address: 'Adresse', form_name: 'Nom', form_name_ph: 'Votre nom', form_email: 'Email', form_email_ph: 'votre@email.com', form_subject: 'Sujet', form_subject_ph: 'Comment pouvons-nous aider ?', form_message: 'Message', form_message_ph: 'Votre message...', send: 'Envoyer', success: 'Merci pour votre message ! Nous vous répondrons bientôt.' }
  },
  yo: {
    about: { title: 'Nípa Ẹrọ Ṣíṣẹ̀dá QR', subtitle: 'Iṣẹ́ wa ni láti jẹ́ kí ṣíṣẹ̀dá koodu QR rọrùn, yára, kí ó sì wà fún gbogbo ènìyàn', mission: 'Iṣẹ́ Wa', m1: 'A gbàgbọ́ pé koodu QR yẹ kí ó wà fún gbogbo ènìyàn. A pèsè ọ̀nà ọ̀fẹ́, yára àti ààbò fún gbogbo ènìyàn.', m2: 'Yálà o jẹ́ oníṣòwò tàbí oníṣẹ́-ẹ̀rọ, ẹ̀rọ wa sọ ṣíṣẹ̀dá QR di ìrọ̀rùn.', values: 'Àwọn Ohun Tí A Níyelórí', v1Title: 'Oníbàárà Lákọ̀ọ́kọ́', v1Desc: 'A fẹ́ kí o jẹ ìgbádùn lílo ẹ̀rọ wa.', v2Title: 'Ìyára', v2Desc: 'Ó yára bíi mọ̀nàmọ́ná.', v3Title: 'Àṣírí', v3Desc: 'Kò sí dátà rẹ tí a tọ́jú sí ibikíbi.', v4Title: 'Ìrọ̀rùn', v4Desc: 'Ọ̀fẹ́ ni, kò sí ìforúkọsílẹ̀.', why: 'Kí nìdí tí o fi yẹ kí o yàn wá?', w1: 'Oríṣi koodu QR 35+', w2: 'Àtúnṣe tó péye', w3: 'Fọ́mátì púpọ̀', w4: 'Àwòté ìsinsìnyí', w5: 'Ọ̀fẹ́ 100%', w6: 'Àṣírí pátápátá' },
    faq_page: { title: 'Àwọn Ìbéèrè Lóòrèkóòrè', subtitle: 'Wa ìdáhùn sí àwọn ìbéèrè nipa Ẹrọ QR', q1: 'Ṣé Ẹrọ QR jẹ́ ọ̀fẹ́?', a1: 'Mẹ́ta àkọ́kọ́ jẹ́ ọ̀fẹ́. Lẹ́yìn náà, san ₦1,000 fún lílò tí kò lópin.', q2: 'Ṣé mo nílò àkọọnti?', a2: 'Rárá, o kò nílò àkọọnti.', q3: 'Ṣé dátà mi wà níbìkan?', a3: 'Rárá, a kò tọ́jú dátà rẹ.', q4: 'Àwọn koodu QR wo ni o wà?', a4: 'A ní oríṣi 35+ títí kan URL, WiFi, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ.', q5: 'Ṣé mo le ṣe àtúnṣe rẹ̀?', a5: 'Bẹ́ẹ̀ni, o le yi àwọ̀ àti àmì rẹ padà.', q6: 'Àwọn fọ́mátì wo ni o wà?', a6: 'O le gba PNG, JPEG, SVG, àti PDF.', q7: 'Ṣé mo le lò ó fún iṣẹ́?', a7: 'Bẹ́ẹ̀ni, o le lò ó fún ohunkóhun.', q8: 'Báwo ni mo ṣe le ṣàyẹ̀wò koodu QR?', a8: 'Lo kámẹ́rà foonu rẹ tàbí Ẹrọ Ayẹwo wa.', q9: 'Kí ni àtúnṣe àṣìṣe?', a9: 'Ó fihàn bí koodu rẹ ṣe le ṣiṣẹ́ tó bí ó bá bajẹ́ díẹ̀.', q10: 'Ṣé mo le ṣe àtúnṣe koodu lẹ́yìn tí mo ti ṣẹ̀dá rẹ̀?', a10: 'Koodu QR kì í yipadà. O gbọ́dọ̀ ṣẹ̀dá òmíràn.' },
    pricing_page: { title: 'Iye Owó Tó Mọ́yánmọ́', subtitle: 'Lò ó lọ́fẹ̀ẹ́, lẹ́yìn náà sanwó ẹ̀ẹ̀kan fún lílò tí kò lópin.', free: 'Ìdánwò Ọ̀fẹ́', free_price: '₦0', free_sub: 'Koodu QR 3 àkọ́kọ́ jẹ́ ọ̀fẹ́', f1: 'Ṣẹ̀dá koodu 3', f2: 'Oríṣi koodu QR 35+', f3: 'PNG àti JPEG', f4: 'Àwọ̀ àti ara', f5: 'Fifi àmì síi', start_free: 'Bẹ̀rẹ̀ Ìdánwò', premium: 'Lílò Tí Kò Lópin', premium_price: '₦1,000', premium_sub: 'Sanwó ẹ̀ẹ̀kan soso', p1: 'Ṣẹ̀dá koodu àìmọye', p2: 'Gbogbo oríṣi 35+', p3: 'PNG, JPEG, SVG àti PDF', p4: 'Àtúnṣe ẹ̀kúnrẹ́rẹ́', p5: 'Àmì àkànṣe', p6: 'Kò sí owó oṣooṣù', get_unlimited: 'Gba Lílò Tí Kò Lópin' },
    contact: { title: 'Kàn Sí Wa', subtitle: 'A fẹ́ gbọ́ láti ọ̀dọ̀ rẹ', get_in_touch: 'Bá wa sọ̀rọ̀', desc: 'Ṣé o ní ìbéèrè tàbí àbá? Fi àtẹ̀jísẹ́ ránṣẹ́ sí wa.', email: 'Imeeli', phone: 'Foonu', address: 'Àdírẹ́sì', form_name: 'Orúkọ', form_name_ph: 'Orúkọ rẹ', form_email: 'Imeeli', form_email_ph: 'imeeli@tiẹ.com', form_subject: 'Orí-ọ̀rọ̀', form_subject_ph: 'Báwo ni a ṣe le ràn ọ́ lọ́wọ́?', form_message: 'Àtẹ̀jísẹ́', form_message_ph: 'Àtẹ̀jísẹ́ rẹ...', send: 'Fi Ránṣẹ́', success: 'A ti rí àtẹ̀jísẹ́ rẹ! A óò kàn sí ọ láìpẹ́.' }
  },
  ha: {
    about: { title: 'Game da Injin QR', subtitle: 'Manufarmu ita ce sanya ƙirƙirar QR cikin sauƙi da sauri', mission: 'Manufarmu', m1: 'Mun yi imanin cewa lambobin QR yakamata kowa ya samesu. Muna bada hanya kyauta kuma mai sauri.', m2: 'Ko kai ɗan kasuwa ne ko mai haɓaka manhaja, injin mu yana sauƙaƙa abubuwa.', values: 'Kima', v1Title: 'Mai Amfani Tukuna', v1Desc: 'Muna ba da fifiko ga mai amfani.', v2Title: 'Sauri', v2Desc: 'Sauri kamar walkiya.', v3Title: 'Sirri', v3Desc: 'Komai yana faruwa a manhajarka. Ba mu adana bayananka.', v4Title: 'Samuwa', v4Desc: 'Kyauta don amfani, ba a buƙatar rajista.', why: 'Me Yasa Zaku Zabe Mu?', w1: 'Irin QR 35+', w2: 'Canje-canje na musamman', w3: 'Siffofi daban-daban', w4: 'Dubawa nan take', w5: 'Kyauta 100%', w6: 'Sirri 100%' },
    faq_page: { title: 'Tambayoyin Da Ake Yawan Yi', subtitle: 'Nemo amsoshi game da Injin QR', q1: 'Kyauta ne?', a1: '3 na farko kyauta ne. Bayan haka, muna cajin ₦1,000 don amfani na dindindin.', q2: 'Ina buƙatar asusu?', a2: "A'a, ba a buƙatar asusu.", q3: 'Kuna adana bayanai na?', a3: "A'a, ba mu adana komai.", q4: 'Wadanne irin QR kuke da su?', a4: 'Muna da iri 35+ ciki har da URL da WiFi.', q5: 'Zan iya gyara lambar QR?', a5: 'Eh, zaka iya canza launuka da tambari.', q6: 'A wane siffa zan sauke?', a6: 'Kuna iya saukewa a PNG, JPEG, SVG, da PDF.', q7: 'Zan iya amfani dashi don kasuwanci?', a7: 'Eh, tabbas.', q8: 'Yaya ake duba QR?', a8: 'Yi amfani da kyamarar wayarka ko Injin Duba QR ɗinmu.', q9: 'Menene matakin kuskure?', a9: 'Yana nuna yadda QR ɗin zai yi aiki ko da ya sami matsala.', q10: 'Zan iya canza QR bayan na ƙirƙira?', a10: "A'a, dole ka ƙirƙiri sabo." },
    pricing_page: { title: 'Farashi Mai Sauki', subtitle: 'Gwada kyauta, sannan ka biya sau ɗaya.', free: 'Gwaji Kyauta', free_price: '₦0', free_sub: 'Lambar QR 3 na farko kyauta ne', f1: 'Har zuwa ƙirƙira 3', f2: 'Irin QR 35+', f3: 'Sauke PNG da JPEG', f4: 'Launuka da tsari', f5: 'Saka tambari', start_free: 'Fara Gwaji', premium: 'Amfani na Dindindin', premium_price: '₦1,000', premium_sub: 'Biyan kuɗi sau ɗaya', p1: 'Ƙirƙira marar iyaka', p2: 'Duk iri 35+', p3: 'PNG, JPEG, SVG & PDF', p4: 'Canje-canje babba', p5: 'Tambari na musamman', p6: 'Babu biyan kuɗin wata-wata', get_unlimited: 'Samu Dama Har Abada' },
    contact: { title: 'Tuntube Mu', subtitle: 'Muna son jin daga gare ku', get_in_touch: 'Tuntube Mu', desc: 'Kuna da tambaya? Muna nan don taimakawa.', email: 'Imel', phone: 'Waya', address: 'Adireshi', form_name: 'Suna', form_name_ph: 'Sunanka', form_email: 'Imel', form_email_ph: 'imel@naka.com', form_subject: 'Jigo', form_subject_ph: 'Yaya zamu taimaka?', form_message: 'Saƙo', form_message_ph: 'Saƙonka...', send: 'Aika Saƙo', success: 'Mun gode! Zamu tuntube ka nan ba da jimawa ba.' }
  },
  ig: {
    about: { title: 'Maka Ihe Nmepụta QR', subtitle: 'Ebumnuche anyị bụ ime ka ịmepụta koodu QR dị mfe ma dị ngwa', mission: 'Ebumnuche Anyị', m1: "Anyị kwenyere na onye ọ bụla kwesịrị inwe koodu QR. Anyị na-enye ụzọ n'efu ma dị nchebe.", m2: 'Ma ị bụ onye nwe azụmahịa ma ọ bụ onye nrụpụta, ngwa anyị dị mfe iji.', values: 'Uru Anyị', v1Title: 'Onye Ọrụ Na Mbụ', v1Desc: 'Anyị na-ebute onye ọrụ ụzọ.', v2Title: 'Ọsọ', v2Desc: 'Ọsọ dị ka amụma.', v3Title: 'Nzuzo', v3Desc: 'Ihe niile na-eme na nchọgharị gị. Anyị anaghị echekwa data gị.', v4Title: 'Nnweta', v4Desc: "N'efu, enweghị ndebanye aha.", why: 'Gịnị mere ị ga-eji họrọ anyị?', w1: 'Ụdị QR 35+', w2: 'Nhazi dị elu', w3: 'Ụdị dị iche iche', w4: 'Ịhụ ozugbo', w5: "100% n'efu", w6: 'Nzuzo 100%' },
    faq_page: { title: 'Ajụjụ Ndị A Na-ajụkarị', subtitle: 'Chọta azịza gbasara Ihe Nmepụta QR', q1: 'Ọ bụ n\'efu?', a1: '3 nke mbụ bụ n\'efu. Mgbe ahụ ₦1,000 maka iji mgbe niile.', q2: 'A chọrọ m akaụntụ?', a2: 'Mba, ịchọghị akaụntụ.', q3: 'E chekwara data m?', a3: 'Mba, anyị anaghị echekwa data gị.', q4: 'Kedu ụdị QR dị?', a4: 'Anyị nwere ụdị 35+ gụnyere URL na WiFi.', q5: 'Enwere m ike ịhazi ya?', a5: 'Ee, ị nwere ike ịgbanwe agba na logo.', q6: 'Kedu ụdị m ga-ebudata?', a6: 'PNG, JPEG, SVG, na PDF.', q7: 'Enwere m ike iji ya maka azụmahịa?', a7: 'Ee, kpamkpam.', q8: 'Otu esi enyocha QR?', a8: 'Jiri igwefoto ekwentị gị ma ọ bụ Ihe Nyocha anyị.', q9: 'Kedu ihe bụ mmezi njehie?', a9: 'Ọ na-egosi otu koodu ahụ ga-esi arụ ọrụ ma ọ mebie obere.', q10: 'Enwere m ike ịgbanwe QR?', a10: 'Mba, ị ga-emepụta nke ọhụrụ.' },
    pricing_page: { title: 'Ọnụ ahịa Dị Mfe', subtitle: 'Nwalee n\'efu, kwụọ otu ugboro.', free: 'Nnwale N\'efu', free_price: '₦0', free_sub: 'Koodu QR 3 nke mbụ bụ n\'efu', f1: 'Ruo koodu 3', f2: 'Ụdị QR 35+', f3: 'Nbudata PNG na JPEG', f4: 'Agba na ụdị', f5: 'Tinye logo', start_free: 'Bido Nnwale', premium: 'Nnweta Oge Niile', premium_price: '₦1,000', premium_sub: 'Ịkwụ ụgwọ otu oge', p1: 'Koodu na-akparaghị ókè', p2: 'Ụdị niile 35+', p3: 'PNG, JPEG, SVG & PDF', p4: 'Nhazi dị elu', p5: 'Logo pụrụ iche', p6: 'Enweghị ụgwọ kwa ọnwa', get_unlimited: 'Nweta Oge Niile' },
    contact: { title: 'Kpọtụrụ Anyị', subtitle: 'Anyị ga-achọ ịnụ olu gị', get_in_touch: 'Kpo Anyị Pụ', desc: 'Ị nwere ajụjụ? Anyị nọ ebe a iji nyere gị aka.', email: 'Email', phone: 'Ekwentị', address: 'Adreesị', form_name: 'Aha', form_name_ph: 'Aha gị', form_email: 'Email', form_email_ph: 'email@gị.com', form_subject: 'Isiokwu', form_subject_ph: 'Olee otu anyị ga-esi nyere aka?', form_message: 'Ozi', form_message_ph: 'Ozi gị...', send: 'Ziga Ozi', success: 'Daalụ! Anyị ga-aza gị n\'oge adịghị anya.' }
  }
};

let i18nContent = fs.readFileSync(i18nPath, 'utf8');

for (const lang in newTranslations) {
  const sections = newTranslations[lang];
  let sectionsStr = '';
  for (const section in sections) {
    sectionsStr += `    ${section}: ${JSON.stringify(sections[section])},\n`;
  }
  const regex = new RegExp(`(^|\\n)  ${lang}: \\{`);
  i18nContent = i18nContent.replace(regex, `$1  ${lang}: {\n${sectionsStr}`);
}

fs.writeFileSync(i18nPath, i18nContent);
console.log('Translations added successfully to i18n.ts');

const replaceInFile = (file, replacements) => {
  const fullPath = path.join(srcDir, 'pages', file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (!content.includes('useI18n')) {
    content = content.replace(/import { (.+) } from 'lucide-react';/, "import { $1 } from 'lucide-react';\nimport { useI18n } from '@/i18nContext';");
    content = content.replace(/import (.+) from '@\/components\/SEO';/, "import $1 from '@/components/SEO';\nimport { useI18n } from '@/i18nContext';");
    content = content.replace(/import { Card } from '@\/components\/ui\/card';/, "import { Card } from '@/components/ui/card';\nimport { useI18n } from '@/i18nContext';");
  }
  
  if (!content.includes('const { t } = useI18n()')) {
    content = content.replace(/export default function [A-Za-z]+\(\) \{/, "export default function " + file.replace('.tsx', '') + "() {\n  const { t } = useI18n();");
  }

  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  
  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${file}`);
};

// FAQ.tsx Replace
replaceInFile('FAQ.tsx', [
  ["title=\"Frequently Asked Questions\"", "title={t('faq_page', 'title')}"],
  ["description=\"Find answers to common questions about QR Code Generator\"", "description={t('faq_page', 'subtitle')}"],
  ["<h1 className=\"text-4xl font-bold mb-4\">Frequently Asked Questions</h1>", "<h1 className=\"text-4xl font-bold mb-4\">{t('faq_page', 'title')}</h1>"],
  ["<p className=\"text-blue-100 text-lg\">Find answers to common questions about QR Code Generator</p>", "<p className=\"text-blue-100 text-lg\">{t('faq_page', 'subtitle')}</p>"],
  ["question: 'Is QR Code Generator free to use?'", "question: t('faq_page', 'q1')"],
  ["answer: 'Yes, QR Code Generator is completely free. There are no hidden charges, subscriptions, or premium features. You can generate unlimited QR codes without any cost.'", "answer: t('faq_page', 'a1')"],
  ["question: 'Do I need to create an account?'", "question: t('faq_page', 'q2')"],
  ["answer: 'No, you do not need to create an account. Our QR code generator is completely anonymous and requires no registration. Start generating QR codes immediately.'", "answer: t('faq_page', 'a2')"],
  ["question: 'Is my data stored on your servers?'", "question: t('faq_page', 'q3')"],
  ["answer: 'No, all QR code generation happens entirely in your browser. We do not store any of your data on our servers. Your privacy is completely protected.'", "answer: t('faq_page', 'a3')"],
  ["question: 'What QR code types are supported?'", "question: t('faq_page', 'q4')"],
  ["answer: 'We support 35+ QR code types including URLs, emails, phone numbers, WiFi networks, vCards, business cards, social media profiles, payment links, and much more.'", "answer: t('faq_page', 'a4')"],
  ["question: 'Can I customize the appearance of QR codes?'", "question: t('faq_page', 'q5')"],
  ["answer: 'Yes, you can customize colors, size, error correction level, margin, and more. You can also add logos and frames to your QR codes.'", "answer: t('faq_page', 'a5')"],
  ["question: 'What formats can I download QR codes in?'", "question: t('faq_page', 'q6')"],
  ["answer: 'You can download QR codes as PNG, JPEG, SVG, and PDF. We also offer high-resolution and print-quality export options.'", "answer: t('faq_page', 'a6')"],
  ["question: 'Can I use these QR codes commercially?'", "question: t('faq_page', 'q7')"],
  ["answer: 'Yes, absolutely. You can use QR codes generated here for any purpose - personal, commercial, or otherwise. There are no restrictions.'", "answer: t('faq_page', 'a7')"],
  ["question: 'How do I scan a QR code?'", "question: t('faq_page', 'q8')"],
  ["answer: 'Most modern smartphones have built-in QR code scanning. Simply open your camera app and point it at the QR code. For other devices, you can use our QR Scanner tool.'", "answer: t('faq_page', 'a8')"],
  ["question: 'What is error correction level?'", "question: t('faq_page', 'q9')"],
  ["answer: 'Error correction level determines how much of the QR code can be damaged while still being scannable. Higher levels allow more damage but require larger QR codes.'", "answer: t('faq_page', 'a9')"],
  ["question: 'Can I edit a QR code after generating it?'", "question: t('faq_page', 'q10')"],
  ["answer: 'You can regenerate a QR code with different settings, but QR codes are static once created. To change the content, generate a new QR code.'", "answer: t('faq_page', 'a10')"]
]);

// Pricing.tsx Replace
replaceInFile('Pricing.tsx', [
  ["title=\"Pricing - One Time Payment\"", "title={t('pricing_page', 'title')}"],
  ["description=\"Unlock lifetime unlimited access to all premium QR generator features for a single ₦1,000 payment. No monthly subscriptions.\"", "description={t('pricing_page', 'subtitle')}"],
  ["<h1 className=\"text-4xl font-bold mb-4\">Simple, Transparent Pricing</h1>", "<h1 className=\"text-4xl font-bold mb-4\">{t('pricing_page', 'title')}</h1>"],
  ["<p className=\"text-blue-100 text-lg\">Try it for free, then pay once for unlimited access.</p>", "<p className=\"text-blue-100 text-lg\">{t('pricing_page', 'subtitle')}</p>"],
  ["<h3 className=\"text-2xl font-bold mb-4\">Free Trial</h3>", "<h3 className=\"text-2xl font-bold mb-4\">{t('pricing_page', 'free')}</h3>"],
  ["<p className=\"text-muted-foreground text-sm mb-6\">First 3 QR codes are on us</p>", "<p className=\"text-muted-foreground text-sm mb-6\">{t('pricing_page', 'free_sub')}</p>"],
  ["<span>Up to 3 QR code generations</span>", "<span>{t('pricing_page', 'f1')}</span>"],
  ["<span>35+ QR code types</span>", "<span>{t('pricing_page', 'f2')}</span>"],
  ["<span>PNG & JPEG downloads</span>", "<span>{t('pricing_page', 'f3')}</span>"],
  ["<span>Custom colors and styles</span>", "<span>{t('pricing_page', 'f4')}</span>"],
  ["<span>Logo upload support</span>", "<span>{t('pricing_page', 'f5')}</span>"],
  ["Start Free Trial", "{t('pricing_page', 'start_free')}"],
  ["Unlimited Access", "{t('pricing_page', 'premium')}"],
  ["<p className=\"text-muted-foreground text-sm mb-6\">One-time payment, lifetime access</p>", "<p className=\"text-muted-foreground text-sm mb-6\">{t('pricing_page', 'premium_sub')}</p>"],
  ["<span>Unlimited QR code generations</span>", "<span>{t('pricing_page', 'p1')}</span>"],
  ["<span>All 35+ QR code types</span>", "<span>{t('pricing_page', 'p2')}</span>"],
  ["<span>High-res PNG, JPEG, SVG & PDF</span>", "<span>{t('pricing_page', 'p3')}</span>"],
  ["<span>Advanced customization</span>", "<span>{t('pricing_page', 'p4')}</span>"],
  ["<span>Premium logo support</span>", "<span>{t('pricing_page', 'p5')}</span>"],
  ["<span>No monthly subscriptions</span>", "<span>{t('pricing_page', 'p6')}</span>"],
  ["Get Unlimited Access", "{t('pricing_page', 'get_unlimited')}"]
]);

// Contact.tsx Replace
replaceInFile('Contact.tsx', [
  ["<h1 className=\"text-4xl font-bold mb-4\">Contact Us</h1>", "<h1 className=\"text-4xl font-bold mb-4\">{t('contact', 'title')}</h1>"],
  ["<p className=\"text-blue-100 text-lg\">We would love to hear from you</p>", "<p className=\"text-blue-100 text-lg\">{t('contact', 'subtitle')}</p>"],
  ["<h2 className=\"text-2xl font-bold mb-6\">Get in Touch</h2>", "<h2 className=\"text-2xl font-bold mb-6\">{t('contact', 'get_in_touch')}</h2>"],
  ["Have a question or suggestion? We are here to help. Send us a message and we will respond as soon as possible.", "{t('contact', 'desc')}"],
  ["<h3 className=\"font-semibold mb-1\">Email</h3>", "<h3 className=\"font-semibold mb-1\">{t('contact', 'email')}</h3>"],
  ["<h3 className=\"font-semibold mb-1\">Phone</h3>", "<h3 className=\"font-semibold mb-1\">{t('contact', 'phone')}</h3>"],
  ["<h3 className=\"font-semibold mb-1\">Address</h3>", "<h3 className=\"font-semibold mb-1\">{t('contact', 'address')}</h3>"],
  ["<Label htmlFor=\"name\">Name</Label>", "<Label htmlFor=\"name\">{t('contact', 'form_name')}</Label>"],
  ["placeholder=\"Your name\"", "placeholder={t('contact', 'form_name_ph')}"],
  ["<Label htmlFor=\"email\">Email</Label>", "<Label htmlFor=\"email\">{t('contact', 'form_email')}</Label>"],
  ["placeholder=\"your@email.com\"", "placeholder={t('contact', 'form_email_ph')}"],
  ["<Label htmlFor=\"subject\">Subject</Label>", "<Label htmlFor=\"subject\">{t('contact', 'form_subject')}</Label>"],
  ["placeholder=\"How can we help?\"", "placeholder={t('contact', 'form_subject_ph')}"],
  ["<Label htmlFor=\"message\">Message</Label>", "<Label htmlFor=\"message\">{t('contact', 'form_message')}</Label>"],
  ["placeholder=\"Your message...\"", "placeholder={t('contact', 'form_message_ph')}"],
  ["Send Message", "{t('contact', 'send')}"],
  ["'Thank you for your message! We will get back to you soon.'", "t('contact', 'success')"]
]);

// About.tsx Replace
replaceInFile('About.tsx', [
  ["<h1 className=\"text-4xl font-bold mb-4\">About QR Code Generator</h1>", "<h1 className=\"text-4xl font-bold mb-4\">{t('about', 'title')}</h1>"],
  ["<p className=\"text-blue-100 text-lg\">Our mission is to make QR code generation simple, fast, and accessible</p>", "<p className=\"text-blue-100 text-lg\">{t('about', 'subtitle')}</p>"],
  ["<h2 className=\"text-3xl font-bold mb-6\">Our Mission</h2>", "<h2 className=\"text-3xl font-bold mb-6\">{t('about', 'mission')}</h2>"],
  ["We believe that QR codes should be accessible to everyone. Our platform provides a free, \n              fast, and secure way to generate professional QR codes without any barriers to entry.", "{t('about', 'm1')}"],
  ["Whether you're a small business owner, marketer, or developer, our tool makes it easy to \n              create QR codes for any purpose.", "{t('about', 'm2')}"],
  ["<h2 className=\"text-3xl font-bold mb-6\">Our Values</h2>", "<h2 className=\"text-3xl font-bold mb-6\">{t('about', 'values')}</h2>"],
  ["<h3 className=\"text-lg font-semibold mb-2\">User First</h3>", "<h3 className=\"text-lg font-semibold mb-2\">{t('about', 'v1Title')}</h3>"],
  ["We prioritize user experience and make our tools intuitive and easy to use.", "{t('about', 'v1Desc')}"],
  ["<h3 className=\"text-lg font-semibold mb-2\">Performance</h3>", "<h3 className=\"text-lg font-semibold mb-2\">{t('about', 'v2Title')}</h3>"],
  ["Lightning-fast generation and real-time preview for the best experience.", "{t('about', 'v2Desc')}"],
  ["<h3 className=\"text-lg font-semibold mb-2\">Privacy</h3>", "<h3 className=\"text-lg font-semibold mb-2\">{t('about', 'v3Title')}</h3>"],
  ["All processing happens in your browser. We never store your data.", "{t('about', 'v3Desc')}"],
  ["<h3 className=\"text-lg font-semibold mb-2\">Accessibility</h3>", "<h3 className=\"text-lg font-semibold mb-2\">{t('about', 'v4Title')}</h3>"],
  ["Free to use, no registration required, accessible from anywhere.", "{t('about', 'v4Desc')}"],
  ["<h2 className=\"text-3xl font-bold mb-6\">Why Choose Us?</h2>", "<h2 className=\"text-3xl font-bold mb-6\">{t('about', 'why')}</h2>"],
  ["<span>35+ QR code types supported</span>", "<span>{t('about', 'w1')}</span>"],
  ["<span>Advanced customization options</span>", "<span>{t('about', 'w2')}</span>"],
  ["<span>Multiple export formats</span>", "<span>{t('about', 'w3')}</span>"],
  ["<span>Real-time preview</span>", "<span>{t('about', 'w4')}</span>"],
  ["<span>100% free and no registration</span>", "<span>{t('about', 'w5')}</span>"],
  ["<span>Completely private - processing in browser</span>", "<span>{t('about', 'w6')}</span>"]
]);
