const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'client', 'src', 'i18n.ts');
let content = fs.readFileSync(i18nPath, 'utf8');

// ── New keys to inject into EACH language block ──────────────────────────────
const additions = {
  en: {
    templates: {
      title: 'QR Code Templates',
      subtitle: 'Pre-configured templates for common use cases',
      use_template: 'Use Template',
      tpl_mobile_title: 'Mobile App Download',
      tpl_mobile_desc: 'Link to your app on App Store or Google Play',
      tpl_wifi_title: 'WiFi Network',
      tpl_wifi_desc: 'Share WiFi credentials with guests',
      tpl_product_title: 'Product Link',
      tpl_product_desc: 'Direct customers to your product page',
      tpl_location_title: 'Location',
      tpl_location_desc: 'Share your business location on Google Maps',
      tpl_social_title: 'Social Media',
      tpl_social_desc: 'Link to your social media profiles',
      tpl_biz_title: 'Business Card',
      tpl_biz_desc: 'Digital business card with contact info'
    }
  },
  es: {
    templates: {
      title: 'Plantillas de Código QR',
      subtitle: 'Plantillas preconfiguradas para casos de uso comunes',
      use_template: 'Usar Plantilla',
      tpl_mobile_title: 'Descarga de App Móvil',
      tpl_mobile_desc: 'Enlace a tu app en App Store o Google Play',
      tpl_wifi_title: 'Red WiFi',
      tpl_wifi_desc: 'Comparte credenciales WiFi con invitados',
      tpl_product_title: 'Enlace de Producto',
      tpl_product_desc: 'Dirige a los clientes a la página del producto',
      tpl_location_title: 'Ubicación',
      tpl_location_desc: 'Comparte la ubicación de tu negocio en Google Maps',
      tpl_social_title: 'Redes Sociales',
      tpl_social_desc: 'Enlace a tus perfiles en redes sociales',
      tpl_biz_title: 'Tarjeta de Visita',
      tpl_biz_desc: 'Tarjeta de visita digital con información de contacto'
    },
    scanner: {
      title: 'Escáner y Decodificador QR', subtitle: 'Escanea con tu cámara o sube una imagen — los resultados aparecen al instante',
      live_cam: 'Escáner de Cámara en Vivo', cam_preview: 'La vista previa de la cámara aparecerá aquí', scanning: 'Escaneando…', stop_cam: 'Detener Cámara', start_cam: 'Iniciar Cámara',
      upload_img: 'Subir Imagen', click_upload: 'Haz clic para subir una imagen', formats: 'PNG, JPG, WEBP admitidos', choose_img: 'Elegir Imagen',
      decoded: 'Contenido Decodificado', open_link: 'Abrir enlace ↗', copy_res: 'Copiar Resultado', clear: 'Limpiar',
      private_title: 'Escaneo 100% Privado', private_desc: 'Todo el escaneo ocurre directamente en tu navegador. Tu cámara y las imágenes subidas nunca se envían a ningún servidor.',
      toast_detected: '¡Código QR detectado!', toast_decoded: '¡Código QR decodificado con éxito!', toast_not_found: 'No se encontró ningún código QR. Intenta con una imagen más clara.', toast_analyze_fail: 'Error al analizar la imagen', toast_process_fail: 'Error al procesar la imagen', toast_copied: 'Copiado al portapapeles', toast_copy_fail: 'Error al copiar',
      cam_error_perm: 'Permiso de cámara denegado. Permite el acceso a la cámara en la configuración del navegador.', cam_error_acc: 'No se pudo acceder a la cámara. Asegúrate de que haya una cámara conectada.'
    }
  },
  fr: {
    templates: {
      title: 'Modèles de Code QR',
      subtitle: 'Modèles préconfigurés pour les cas d\'utilisation courants',
      use_template: 'Utiliser le Modèle',
      tpl_mobile_title: 'Téléchargement d\'Application Mobile',
      tpl_mobile_desc: 'Lien vers votre application sur App Store ou Google Play',
      tpl_wifi_title: 'Réseau WiFi',
      tpl_wifi_desc: 'Partagez les identifiants WiFi avec vos invités',
      tpl_product_title: 'Lien Produit',
      tpl_product_desc: 'Dirigez les clients vers votre page produit',
      tpl_location_title: 'Localisation',
      tpl_location_desc: 'Partagez l\'emplacement de votre entreprise sur Google Maps',
      tpl_social_title: 'Réseaux Sociaux',
      tpl_social_desc: 'Lien vers vos profils de réseaux sociaux',
      tpl_biz_title: 'Carte de Visite',
      tpl_biz_desc: 'Carte de visite numérique avec coordonnées'
    },
    scanner: {
      title: 'Scanner et Décodeur QR', subtitle: 'Scannez avec votre caméra ou téléchargez une image — les résultats apparaissent instantanément',
      live_cam: 'Scanner Caméra en Direct', cam_preview: 'L\'aperçu de la caméra apparaîtra ici', scanning: 'Scan en cours…', stop_cam: 'Arrêter la Caméra', start_cam: 'Démarrer la Caméra',
      upload_img: 'Télécharger une Image', click_upload: 'Cliquez pour télécharger une image', formats: 'PNG, JPG, WEBP pris en charge', choose_img: 'Choisir une Image',
      decoded: 'Contenu Décodé', open_link: 'Ouvrir le lien ↗', copy_res: 'Copier le Résultat', clear: 'Effacer',
      private_title: 'Scan 100% Privé', private_desc: 'Tout le scan se passe directement dans votre navigateur. Votre caméra et les images téléchargées ne sont jamais envoyées à un serveur.',
      toast_detected: 'Code QR détecté !', toast_decoded: 'Code QR décodé avec succès !', toast_not_found: 'Aucun code QR trouvé. Essayez avec une image plus claire.', toast_analyze_fail: 'Échec de l\'analyse de l\'image', toast_process_fail: 'Échec du traitement de l\'image', toast_copied: 'Copié dans le presse-papiers', toast_copy_fail: 'Échec de la copie',
      cam_error_perm: 'Permission caméra refusée. Autorisez l\'accès à la caméra dans les paramètres de votre navigateur.', cam_error_acc: 'Impossible d\'accéder à la caméra. Assurez-vous qu\'une caméra est connectée.'
    }
  },
  yo: {
    templates: {
      title: 'Àwọn Àwòṣe Koodu QR',
      subtitle: 'Àwọn àwòṣe tí a ti ṣètò tẹ́lẹ̀ fún àwọn ìlò tó wọ́pọ̀',
      use_template: 'Lò Àwòṣe Yìí',
      tpl_mobile_title: 'Gbéjáde Àpèjúwe Foonu',
      tpl_mobile_desc: 'Asopọ sí àpèjúwe rẹ lórí App Store tàbí Google Play',
      tpl_wifi_title: 'Nẹ́tíwọ̀ọ̀kì WiFi',
      tpl_wifi_desc: 'Pín àwọn ìwọlé WiFi pẹ̀lú àwọn àlejò',
      tpl_product_title: 'Asopọ Ọjà',
      tpl_product_desc: 'Darí àwọn oníbàárà sí ojúewé ọjà rẹ',
      tpl_location_title: 'Ìpò',
      tpl_location_desc: 'Pín ìpò iṣẹ́ rẹ lórí Google Maps',
      tpl_social_title: 'Àwọn Nẹ́tíwọ̀ọ̀kì Àwùjọ',
      tpl_social_desc: 'Asopọ sí àwọn profaìlì nẹ́tíwọ̀ọ̀kì àwùjọ rẹ',
      tpl_biz_title: 'Káàdì Iṣẹ́',
      tpl_biz_desc: 'Káàdì iṣẹ́ alátagbà pẹ̀lú àlàyé ìkànsí'
    },
    scanner: {
      title: 'Ẹrọ Ayẹwo àti Ìtumọ̀ Koodu QR', subtitle: 'Ṣàyẹ̀wò pẹ̀lú kámẹ́rà rẹ tàbí gbé àwòrán sílẹ̀ — àwọn èsì farahan lẹ́sẹ̀kẹsẹ̀',
      live_cam: 'Ẹrọ Ayẹwo Kámẹ́rà Lárugẹ', cam_preview: 'Àwòté kámẹ́rà yóò farahàn níbí', scanning: 'Ń ṣàyẹ̀wò…', stop_cam: 'Dáwọ́ Kámẹ́rà Dúró', start_cam: 'Bẹ̀rẹ̀ Kámẹ́rà',
      upload_img: 'Gbé Àwòrán Sílẹ̀', click_upload: 'Tẹ láti gbé àwòrán sílẹ̀', formats: 'PNG, JPG, WEBP ni a gbà', choose_img: 'Yan Àwòrán',
      decoded: 'Àkóónú Tí A Túmọ̀', open_link: 'Ṣí atọ́ka ↗', copy_res: 'Daakọ Èsì', clear: 'Ṣe Ìmọ́tótó',
      private_title: 'Àṣírí Ayẹwo 100%', private_desc: 'Gbogbo ìṣàyẹ̀wò ń ṣẹlẹ̀ nínú aṣàwákiri rẹ. Kámẹ́rà rẹ àti àwọn àwòrán tí a gbé sílẹ̀ kò rán sí ọ̀nà-abániwọlé kankan.',
      toast_detected: 'Koodu QR ti rí!', toast_decoded: 'A ti túmọ̀ Koodu QR pẹ̀lú àṣeyọrí!', toast_not_found: 'Kò sí Koodu QR tí a rí. Gbìyànjú àwòrán tó yé jù.', toast_analyze_fail: 'Kò ṣeéṣe láti ṣàtúpalẹ̀ àwòrán', toast_process_fail: 'Kò ṣeéṣe láti ṣe àkóbẹrẹ àwòrán', toast_copied: 'A daakọ sí pẹpẹ-ìpamọ́', toast_copy_fail: 'Kò ṣeéṣe láti daakọ',
      cam_error_perm: 'A kọ̀ ìgbàláàyè kámẹ́rà. Jọ̀wọ́ gbàláàyè ìwọlé kámẹ́rà nínú ètò aṣàwákiri rẹ.', cam_error_acc: 'Kò ṣeéṣe láti wọlé kámẹ́rà. Rí i dájú pé a ti so kámẹ́rà kan mọ́.'
    }
  },
  ha: {
    templates: {
      title: 'Falo na Kodin QR',
      subtitle: 'Falo da aka riga aka tsara don amfani da yawa',
      use_template: 'Yi Amfani da Falon',
      tpl_mobile_title: 'Zazzage Manhaja ta Wayar Hannu',
      tpl_mobile_desc: 'Haɗin gwiwa zuwa manhajarka a App Store ko Google Play',
      tpl_wifi_title: 'Hanyar WiFi',
      tpl_wifi_desc: 'Raba bayanan WiFi da baƙi',
      tpl_product_title: 'Haɗin Kaya',
      tpl_product_desc: 'Kai abokan ciniki zuwa shafin kayan ka',
      tpl_location_title: 'Wuri',
      tpl_location_desc: 'Raba wurin kasuwancinka a Google Maps',
      tpl_social_title: 'Kafofin Watsa Labarai na Zamani',
      tpl_social_desc: 'Haɗin gwiwa zuwa bayanin kanka na kafofin watsa labarai',
      tpl_biz_title: 'Katunan Kasuwanci',
      tpl_biz_desc: 'Katunan kasuwanci na dijital tare da bayanan tuntuɓa'
    },
    scanner: {
      title: 'Injin Duba da Fassara QR', subtitle: 'Duba da kyamarar ka ko loda hoto — sakamakon ya bayyana nan take',
      live_cam: 'Injin Duba Kyamara Kai Tsaye', cam_preview: 'Shimfidar kyamara za ta bayyana nan', scanning: 'Ana Duba…', stop_cam: 'Dakatar Kyamara', start_cam: 'Fara Kyamara',
      upload_img: 'Loda Hoto', click_upload: 'Danna don loda hoto', formats: 'PNG, JPG, WEBP an goyi baya', choose_img: 'Zaɓi Hoto',
      decoded: 'Abun Da Aka Fassara', open_link: 'Buɗe haɗin gwiwa ↗', copy_res: 'Kwafi Sakamakon', clear: 'Share',
      private_title: 'Duba 100% na Sirri', private_desc: 'Duk dubawa yana faruwa kai tsaye a cikin abin binciken ka. Kyamara da hotuna da aka loda ba a taɓa aika su zuwa wani sabar ba.',
      toast_detected: 'An gano kodin QR!', toast_decoded: 'An fassara kodin QR cikin nasara!', toast_not_found: 'Ba a sami kodin QR ba. Gwada hoto mai sarari.', toast_analyze_fail: 'Kuskure wajen nazarin hoto', toast_process_fail: 'Kuskure wajen sarrafa hoto', toast_copied: 'An kwafi zuwa allo', toast_copy_fail: 'Kuskure wajen kwafawa',
      cam_error_perm: 'An ƙi izinin kyamara. Da fatan za a ba da damar shiga kyamara a saitunan abin binciken ka.', cam_error_acc: 'Ba a iya shiga kyamara. Da fatan za a tabbatar da kyamara ta kasance.'
    }
  },
  ig: {
    templates: {
      title: 'Ụdị Koodu QR',
      subtitle: 'Ụdị edeziri tupu maka ojiji ndị a na-ahụkarị',
      use_template: 'Jiri Ụdị a',
      tpl_mobile_title: 'Nbudata Ngwa Ekwentị',
      tpl_mobile_desc: 'Njikọ na ngwa gị na App Store ma ọ bụ Google Play',
      tpl_wifi_title: 'Netwọkụ WiFi',
      tpl_wifi_desc: 'Kekọrịta ihe ndị e ji erbịa WiFi na ọbịa',
      tpl_product_title: 'Njikọ Ngwaahịa',
      tpl_product_desc: 'Duzie ndị ahịa na peeji ngwaahịa gị',
      tpl_location_title: 'Ọnọdụ',
      tpl_location_desc: 'Kekọrịta ọnọdụ azụmahịa gị na Google Maps',
      tpl_social_title: 'Mgbasa Ozi',
      tpl_social_desc: 'Njikọ na profaịlị mgbasa ozi gị',
      tpl_biz_title: 'Kaadị Azụmahịa',
      tpl_biz_desc: 'Kaadị azụmahịa dijitalụ nwere ozi kpọtụrụ'
    },
    scanner: {
      title: 'Ihe Nyocha na Ntụgharị Koodu QR', subtitle: 'Nyochaa site na igwefoto gị ma ọ bụ bulite ihe oyiyi — nsonaazụ pụtara ozugbo',
      live_cam: 'Ihe Nyocha Igwefoto Ndụ', cam_preview: 'Nhụsianya igwefoto ga-apụta ebe a', scanning: 'Na-achọ…', stop_cam: 'Kwụsị Igwefoto', start_cam: 'Malite Igwefoto',
      upload_img: 'Bulite Ihe Oyiyi', click_upload: 'Pịa iji bulite ihe oyiyi', formats: 'PNG, JPG, WEBP kwadoro', choose_img: 'Họrọ Ihe Oyiyi',
      decoded: 'Ọdịnaya Atụgharịrị', open_link: 'Mepee njikọ ↗', copy_res: 'Detuo Nsonaazụ', clear: 'Hichapụ',
      private_title: 'Nyocha 100% Nzuzo', private_desc: 'Nyocha niile na-eme n\'oge nchọgharị gị. Ana-ezigate igwefoto gị na ihe oyiyi ndị ebuliterị na ọ bụ ọ bụ ọ bụ.',
      toast_detected: 'Achọtara koodu QR!', toast_decoded: 'Atụgharịrị koodu QR nke ọma!', toast_not_found: 'Ahụghị koodu QR ọ bụla. Nwalee ihe oyiyi dị ìhè.', toast_analyze_fail: 'Ọ dapụtara n\'inyocha ihe oyiyi', toast_process_fail: 'Ọ dapụtara n\'nhazi ihe oyiyi', toast_copied: 'Detinyere na clipboard', toast_copy_fail: 'Ọ dapụtara n\'idetuọ',
      cam_error_perm: 'Akwụsịrị ikike igwefoto. Biko kwere ikike ịnweta igwefoto na ntọala nchọgharị gị.', cam_error_acc: 'Enweghị ike ịnweta igwefoto. Jisie ike na igwefoto ejikọrọ.'
    }
  }
};

for (const lang in additions) {
  for (const section in additions[lang]) {
    const sectionStr = `    ${section}: ${JSON.stringify(additions[lang][section])},\n`;
    // Insert after "  {lang}: {\n"
    const marker = new RegExp(`(^|\\n)  ${lang}: \\{`);
    if (marker.test(content)) {
      content = content.replace(marker, `$1  ${lang}: {\n${sectionStr}`);
      console.log(`  Added [${section}] to [${lang}]`);
    } else {
      console.warn(`  WARNING: marker for [${lang}] not found`);
    }
  }
}

fs.writeFileSync(i18nPath, content);
console.log('\nDone. i18n.ts updated.');
