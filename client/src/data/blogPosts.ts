export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  imageUrl?: string;
  author: string;
  readTime: Record<string, string>;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-generate-restaurant-menu-qr-code',
    date: '2026-07-21',
    author: 'KennyKentola Digital',
    readTime: {
      en: '4 min read',
      es: '4 min de lectura',
      fr: '4 min de lecture',
      yo: 'Ìṣẹ́jú 4',
      ha: 'Minti 4',
      ig: 'Nkeji 4'
    },
    title: {
      en: 'How to Generate a QR Code for Your Restaurant Menu (2026 Guide)',
      es: 'Cómo Generar un Código QR para el Menú de su Restaurante (Guía 2026)',
      fr: 'Comment générer un code QR pour le menu de votre restaurant (Guide 2026)',
      yo: 'Bí O Ṣe Le Ṣẹ̀dá Koodu QR fún Mẹ́nù Ilé Oúnjẹ Rẹ',
      ha: 'Yadda Ake Ƙirƙirar Lambar QR don Menu na Gidan Abincinku',
      ig: 'Otu esi emepụta Koodu QR maka Menu Ụlọ oriri na ọṅụṅụ gị'
    },
    excerpt: {
      en: 'Stop paying monthly subscriptions for PDF menus. Learn how to create a high-quality, permanent QR code for your restaurant menu for free.',
      es: 'Deje de pagar suscripciones mensuales por menús en PDF. Aprenda a crear un código QR permanente y de alta calidad para su restaurante gratis.',
      fr: 'Arrêtez de payer des abonnements mensuels pour des menus PDF. Apprenez à créer gratuitement un code QR permanent de haute qualité.',
      yo: 'Dẹkun sísanwó lóṣooṣù fún mẹ́nù. Kọ́ bí o ṣe le ṣẹ̀dá koodu QR tó dára jùlọ fún ilé oúnjẹ rẹ lọ́fẹ̀ẹ́.',
      ha: 'Daina biyan kuɗin wata-wata don menu na PDF. Koyi yadda ake ƙirƙirar lambar QR na dindindin kyauta.',
      ig: 'Kwụsị ịkwụ ụgwọ kwa ọnwa maka menu PDF. Mụta otu esi emepụta koodu QR n\'efu maka ụlọ oriri gị.'
    },
    content: {
      en: `
## Why Every Restaurant Needs a QR Code Menu
In 2026, contactless menus are not just a trend—they are an expectation. Customers want to sit down, scan a code, and instantly view what you have to offer without waiting for a waiter to wipe down a physical menu.

However, many restaurants make a critical mistake: they sign up for "free" QR code services that eventually hit them with a paywall, deactivating their menus until they pay a hefty monthly subscription.

At KennyKentola Digital, our QR Code Generator allows you to create permanent, high-resolution QR codes that **never expire**.

### Step-by-Step: Creating Your Menu QR Code

#### 1. Host Your Menu Online
Before generating the QR code, your menu needs to live somewhere on the internet. 
- If you have a website, create a dedicated page (e.g., \`yourrestaurant.com/menu\`).
- If you don't have a website, you can upload your PDF menu to Google Drive or Dropbox. Make sure the sharing settings are set to **"Anyone with the link can view."**

#### 2. Generate the Code
1. Navigate to the **KennyKentola QR Code Generator**.
2. Select the **URL** option.
3. Paste the link to your menu or Google Drive PDF.

#### 3. Customize for Your Brand
A generic black-and-white QR code looks cheap. Use our customization tools to make it yours:
- **Colors:** Match the foreground color to your restaurant's branding.
- **Logo:** Upload your restaurant's logo. It will be perfectly centered in the middle of the QR code.
- **Shape:** Change the dot styles to something modern and elegant.

#### 4. Export for Print
This is the most important step for restaurants. If you download a standard PNG and send it to your professional printer (for table tents or window stickers), it might come out blurry.
- Always use the **SVG (Vector)** download option. 
- SVG files scale infinitely without losing quality, ensuring your table codes scan instantly every single time.

### Conclusion
By generating your QR code with our tool, you maintain complete ownership. No subscriptions, no hidden fees, and absolute control over your branding. Try it for free today!
      `,
      es: `
## Por qué todo restaurante necesita un menú con código QR
En 2026, los menús sin contacto no son solo una tendencia, son una expectativa. Los clientes quieren sentarse, escanear un código y ver instantáneamente lo que ofrece sin esperar un menú físico.

Sin embargo, muchos restaurantes cometen un error crítico: se registran en servicios "gratuitos" que eventualmente bloquean sus menús hasta que pagan una costosa suscripción mensual.

En KennyKentola Digital, nuestro Generador le permite crear códigos QR permanentes que **nunca expiran**.

### Paso a paso: Creando el código QR de su menú

#### 1. Aloje su menú en línea
Antes de generar el código, su menú debe vivir en internet.
- Súbalo a su sitio web o use Google Drive/Dropbox asegurándose de que el enlace sea público.

#### 2. Genere el código
1. Vaya a nuestro Generador.
2. Seleccione la opción **URL**.
3. Pegue el enlace de su menú.

#### 3. Personalícelo
Use nuestras herramientas para que coincida con su marca:
- Cambie los colores.
- Agregue el logotipo de su restaurante.

#### 4. Exporte para imprimir
Descargue siempre en **SVG**. Los archivos SVG se escalan infinitamente sin perder calidad, asegurando que sus códigos de mesa se escaneen perfectamente.

### Conclusión
Mantenga el control total sin suscripciones ni tarifas ocultas. ¡Pruébelo gratis hoy!
      `,
      fr: `
## Pourquoi chaque restaurant a besoin d'un menu QR
En 2026, les menus sans contact sont une attente. Les clients veulent s'asseoir, scanner un code et voir instantanément ce que vous offrez.

Cependant, beaucoup font une erreur : ils utilisent des services "gratuits" qui bloquent leurs menus jusqu'à ce qu'ils paient un abonnement.

Notre générateur vous permet de créer des codes QR permanents qui **n'expirent jamais**.

### Étape par étape : Création de votre menu

#### 1. Hébergez votre menu en ligne
Votre menu doit être sur internet (site web, Google Drive ou Dropbox).

#### 2. Générez le code
1. Allez sur notre Générateur.
2. Sélectionnez **URL**.
3. Collez votre lien.

#### 3. Personnalisez-le
- Changez les couleurs.
- Ajoutez votre logo.

#### 4. Exportez pour l'impression
Utilisez toujours **SVG** pour une qualité d'impression parfaite.

### Conclusion
Gardez le contrôle total sans abonnements. Essayez-le gratuitement !
      `,
      yo: `
## Kí nìdí tí gbogbo ilé oúnjẹ fi nílò mẹ́nù QR
Ní 2026, àwọn ènìyàn fẹ́ láti jókòó, ṣàyẹ̀wò koodu, kí wọn sì rí oúnjẹ lẹ́sẹ̀kẹsẹ̀.

Ọ̀pọ̀lọpọ̀ ilé oúnjẹ máa ń lo àwọn ohun-èlò "ọ̀fẹ́" tí yóò wá béèrè owó lóṣooṣù lẹ́yìnwá.

Lọ́dọ̀ wa, o le ṣẹ̀dá koodu QR tí **kì í parí láé**.

### Bí O Ṣe Le Ṣẹ̀dá Rẹ̀
1. Gbé mẹ́nù rẹ sí orí Íńtánẹ́ẹ̀tì (Google Drive tàbí wẹ́bùsáìtì rẹ).
2. Wá sí Ẹrọ Ṣíṣẹ̀dá wa, yan **URL**, kí o sì líńkì rẹ síi.
3. Ṣe àtúnṣe rẹ̀ pẹ̀lú àwọ̀ àti àmì ilé oúnjẹ rẹ.
4. Gba wọlé gẹ́gẹ́ bí **SVG** fún títẹ̀ tó ga jùlọ.

Dẹkun sísanwó lóṣooṣù, bẹ̀rẹ̀ lọ́fẹ̀ẹ́ lónìí!
      `,
      ha: `
## Me yasa gidan abinci ke buƙatar menu na QR
A 2026, mutane suna son zama su duba menu a wayoyinsu nan take.

Amma gidajen abinci da yawa suna yin kuskure wajen yin amfani da manhajojin "kyauta" da zasu nemi kuɗi daga baya.

A nan, zaka iya ƙirƙirar lambar QR wanda **baya ƙarewa**.

### Yadda Zaka Ƙirƙira
1. Saka menu ɗinka a intanet (Google Drive ko shafin yanar gizo).
2. Je zuwa Injin Ƙirƙirar mu, zaɓi **URL**, sannan ka saka link ɗin.
3. Gyara tsarin da launuka da tambarin gidan abincinka.
4. Sauke a matsayin **SVG** don bugawa mai kyau.

Daina biyan kuɗin wata-wata, fara kyauta yau!
      `,
      ig: `
## Ihe mere ụlọ oriri na ọṅụṅụ ji chọọ QR Menu
Na 2026, ndị mmadụ chọrọ ịnọdụ ala, nyochaa koodu, wee hụ nri ozugbo.

Otú ọ dị, ọtụtụ ụlọ oriri na-eji ngwa "n'efu" nke ga-achọ ego ma emechaa.

N'ebe a, ịnwere ike ịmepụta koodu QR nke **anaghị agwụ agwụ**.

### Otu Esi Emepụta Ya
1. Tinye menu gị n'ịntanetị (Google Drive ma ọ bụ weebụsaịtị gị).
2. Gaa na Ihe Nmepụta anyị, họrọ **URL**, tinye njikọ gị.
3. Hazi ya na agba na logo ụlọ oriri gị.
4. Budata dị ka **SVG** maka mbipụta kacha mma.

Kwụsị ịkwụ ụgwọ kwa ọnwa, bido n'efu taa!
      `
    }
  },
  {
    id: '2',
    slug: 'how-to-make-whatsapp-qr-code',
    date: '2026-07-21',
    author: 'KennyKentola Digital',
    readTime: {
      en: '3 min read',
      es: '3 min de lectura',
      fr: '3 min de lecture',
      yo: 'Ìṣẹ́jú 3',
      ha: 'Minti 3',
      ig: 'Nkeji 3'
    },
    title: {
      en: 'How to Make a Custom WhatsApp QR Code',
      es: 'Cómo hacer un código QR de WhatsApp personalizado',
      fr: 'Comment créer un code QR WhatsApp personnalisé',
      yo: 'Bí O Ṣe Le Ṣẹ̀dá Koodu QR fún WhatsApp',
      ha: 'Yadda Ake Ƙirƙirar Lambar QR na WhatsApp',
      ig: 'Otu esi emepụta Koodu QR maka WhatsApp'
    },
    excerpt: {
      en: 'Want customers to instantly message you on WhatsApp without typing your number? Learn how to build a custom WhatsApp QR code.',
      es: '¿Quiere que los clientes le envíen mensajes al instante sin escribir su número? Aprenda a crear un código QR de WhatsApp.',
      fr: 'Vous voulez que vos clients vous envoient des messages instantanément ? Apprenez à créer un code QR WhatsApp.',
      yo: 'Ṣé o fẹ́ kí àwọn oníbàárà rẹ bá ọ sọ̀rọ̀ lórí WhatsApp lẹ́sẹ̀kẹsẹ̀? Kọ́ bí a ṣe ń ṣe é.',
      ha: 'Kuna son abokan ciniki su turo muku sako a WhatsApp nan take? Koyi yadda ake ƙirƙira.',
      ig: 'Ị chọrọ ka ndị ahịa zitere gị ozi na WhatsApp ozugbo? Mụta otu esi emepụta ya.'
    },
    content: {
      en: `
## Stop Making Customers Type Your Phone Number
If you run a business on WhatsApp, the biggest friction point is getting customers to add your number to their contacts before they can message you. 

A **WhatsApp QR Code** eliminates this friction. When a customer scans the code, it automatically opens the WhatsApp app on their phone, pre-filled with a custom message addressed to you.

### How to Create a WhatsApp QR Code in Seconds

#### Step 1: Select the WhatsApp Tool
Go to the **KennyKentola QR Code Generator** and select the **WhatsApp** option.

#### Step 2: Enter Your Details
1. **Your Phone Number:** Make sure to include your country code (e.g., \`2348000000000\`).
2. **The Pre-filled Message:** Example: *"Hi! I would like to place an order."*

#### Step 3: Add Your Business Logo
To build trust, upload your business logo or the WhatsApp icon to the center of the QR code.

#### Step 4: Download and Share
Download the QR code and add it to flyers, business cards, or product packaging.

### The Best Part? It's Free.
You don't need a premium subscription to create an unlimited-scans WhatsApp QR code. Generate yours today!
      `,
      es: `
## No haga que los clientes escriban su número
Si tiene un negocio en WhatsApp, el mayor problema es lograr que agreguen su número.

Un **código QR de WhatsApp** elimina esto. Cuando escanean el código, abre WhatsApp automáticamente con un mensaje preescrito.

### Cómo crearlo en segundos
1. Vaya a nuestro Generador y seleccione **WhatsApp**.
2. Ingrese su número de teléfono (con código de país) y un mensaje preescrito.
3. Agregue su logotipo o el ícono de WhatsApp en el centro.
4. Descárguelo y póngalo en volantes o tarjetas de presentación.

¡No necesita suscripción, hágalo gratis hoy mismo!
      `,
      fr: `
## Ne faites plus taper votre numéro
Si vous utilisez WhatsApp pour votre entreprise, ajouter un contact est une friction.

Un **code QR WhatsApp** élimine cela. Le scanner ouvre automatiquement WhatsApp avec un message pré-rempli.

### Comment le créer
1. Allez sur notre Générateur et sélectionnez **WhatsApp**.
2. Entrez votre numéro et un message pré-rempli.
3. Ajoutez votre logo ou l'icône WhatsApp.
4. Téléchargez-le pour vos flyers.

C'est gratuit, générez le vôtre aujourd'hui !
      `,
      yo: `
## Kí wọn má kọ nọ́mbà rẹ mọ́
Bí o bá ń lo WhatsApp fún iṣẹ́, ó ṣòro kí àwọn ènìyàn kọ nọ́mbà rẹ.

Pẹ̀lú **Koodu QR WhatsApp**, wọ́n yóò kàn ṣàyẹ̀wò rẹ̀, WhatsApp yóò sì ṣí lẹ́sẹ̀kẹsẹ̀.

### Bí a ṣe ń ṣe é
1. Yan **WhatsApp** nínú Ẹrọ Ṣíṣẹ̀dá wa.
2. Kọ nọ́mbà rẹ àti ọ̀rọ̀ tí o fẹ́ kí wọ́n fi ránṣẹ́.
3. Fi àmì ìṣòwò rẹ tàbí àmì WhatsApp síi.
4. Gba wọlé kí o sì pín in.

Ọ̀fẹ́ ni pátápátá!
      `,
      ha: `
## Ka daina sa mutane rubuta lambarka
Idan kana kasuwanci a WhatsApp, saka lamba yana da wahala.

**Lambar QR na WhatsApp** zai magance wannan. Da zarar an duba shi, zai buɗe WhatsApp da saƙon da ka tsara.

### Yadda za ka ƙirƙira
1. Zaɓi **WhatsApp** a Injin Ƙirƙirar mu.
2. Saka lambarka da saƙonka.
3. Saka tambarinka ko na WhatsApp.
4. Sauke shi don amfani a filaya ko katin kasuwanci.

Kyauta ne gaba ɗaya!
      `,
      ig: `
## Kwụsị ime ka ndị ahịa na-ede nọmba gị
Ọ bụrụ na ị na-azụ ahịa na WhatsApp, ide nọmba na-enye nsogbu.

**Koodu QR WhatsApp** na-edozi nke a. Ozugbo enyochara ya, ọ ga-emepe WhatsApp ozugbo.

### Otu esi emepụta ya
1. Họrọ **WhatsApp** na Ihe Nmepụta anyị.
2. Tinye nọmba gị na ozi ịchọrọ.
3. Tinye logo gị ma ọ bụ nke WhatsApp.
4. Budata ya maka achụmnta ego gị.

Ọ bụ n'efu!
      `
    }
  }
];
