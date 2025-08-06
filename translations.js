
const translations = {
  ja: {
    title: "富士山のふもとで自由にサイクリング！",
    subtitle: "富士山駅から徒歩7分の場所にある無人レンタルサイクル。<br>電動アシスト自転車を3時間1,500円～の地域最安料金で借りれます。",
    howto: "◆利用方法◆",
    terms: "◆利用規約とよくある質問◆",
    price: "◆利用料金◆",
    location: "◆自転車置き場住所◆",
    company: "◆運営会社◆",
    contact: "◆お問い合わせ◆",
    contactTitle: "◆お問い合わせ◆",  
   
howtoList: [
      "利用規約をご確認下さい。",
      "利用規約をご確認後、現地でQRコードを読み取り、お名前・メールアドレス・電話番号・目安利用時間を入力し、本人確認書類をアップロードして支払いをします。(現金不可)",
      "支払い後、メールアドレスに自転車番号と鍵番号が通知されるので、開錠して利用できます。",
      "支払いの際、返却案内のメールも同時に送りますので、返却後返却案内のメールから返却完了をします。"
    ],

termsHtml: `
  <h2>◆利用規約とよくある質問◆</h2>
   <p>下記のボタンから利用規約とよくある質問をご確認いただけます。</p>
  <a href="terms_faq_jp.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
    利用規約・FAQをPDFで見る
  </a>
`,
    contactDesc: "fujiyoshida.bicycle@gmail.com にメールしてください",
priceHtml: `
  <h2>◆利用料金◆</h2>
  <p>3時間 1,500円<br>
  (※3時間を過ぎると下記追加料金がかかります。)</p>
  <ul>
    <li>3時間1秒～6時間まで　基本プラン＋500円（合計2,000円）</li>
    <li>6時間1秒～24時間まで　基本プラン＋1,500円（合計3,000円）</li>
    <li>24時間1秒～27時間まで　基本プラン＋3,000円（合計4,500円）</li>
    <li>27時間1秒～30時間まで　基本プラン＋3,500円（合計5,000円）</li>
    <li>30時間1秒～42時間まで　基本プラン＋4,500円（合計6,000円）</li>
  </ul>
`,

locationHtml: `
  <h2>◆自転車置き場住所◆</h2>
  <p>
    〒403-0005<br>
    山梨県富士吉田市上吉田4丁目7番2-1号<br>
    （富士山駅から富士山方向に向かい、一つ目の点滅信号を直進して3分程度）<br>
    (※運営会社の所在地とは異なります)
  </p>
  <img src="map.png" alt="地図（富士山駅からのルート）" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
`,
companyHtml: `
  <h2>◆運営会社◆</h2>
  <p>
    運営会社：ヴァン合同会社<br>
    所在地：山梨県富士吉田市上吉田東3丁目7番5号<br>
    (※自転車置き場の住所とは異なります)
  </p>
`,
footerText: "&copy; 2025 Fuji Rental Cycles. All rights reserved."
  },

   en: {
    title: "Cycle freely at the foot of Mt. Fuji!",
    subtitle: "A fully unmanned rental cycle just a 7-minute walk from Mt. Fuji Station.<br>Rent an electric-assisted bicycle from 1,500 yen for 3 hours – the cheapest in the area!",
    howto: "◆How to Use◆",
    howtoList: [
      "Please review the terms and conditions.",
      "Scan the QR code on-site, enter your name, email, phone number, estimated usage time, upload your ID, and make a payment. (Cash not accepted)",
      "After payment, your bicycle number and lock code will be sent to your email. Use them to unlock and ride.",
      "At the time of payment, you will also receive a return instruction email. After returning, complete the return process via the link in that email."
    ],
    terms: "◆Terms & FAQ◆",
    termsHtml: `
      <h2>◆Terms and FAQ◆</h2>
      <p>You can view our terms and frequently asked questions via the button below.</p>
      <a href="terms_faq_en.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
        View Terms & FAQ (PDF)
      </a>
    `,
    price: "◆Usage Fees◆",
    priceHtml: `
      <h2>◆Usage Fees◆</h2>
      <p>3 hours: 1,500 yen<br>
      (*Additional fees apply after 3 hours)</p>
      <ul>
        <li>3h 1s – 6h: +500 yen (Total: 2,000 yen)</li>
        <li>6h 1s – 24h: +1,500 yen (Total: 3,000 yen)</li>
        <li>24h 1s – 27h: +3,000 yen (Total: 4,500 yen)</li>
        <li>27h 1s – 30h: +3,500 yen (Total: 5,000 yen)</li>
        <li>30h 1s – 42h: +4,500 yen (Total: 6,000 yen)</li>
      </ul>
    `,
    location: "◆Bike Parking Location◆",
    locationHtml: `
      <h2>◆Bike Parking Location◆</h2>
      <p>
        4-7-2-1 Kamiyoshida, Fujiyoshida City, Yamanashi Prefecture 403-0005<br>
        (About 3 minutes walk from Mt. Fuji Station toward Mt. Fuji, passing the first blinking signal)<br>
        (*Different from company headquarters address)
      </p>
      <img src="map.png" alt="Map (From Mt. Fuji Station)" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
    `,
    company: "◆Operating Company◆",
    companyHtml: `
      <h2>◆Operating Company◆</h2>
      <p>Company: Van LLC<br>
      Address: 3-7-5 Higashi-Kamiyoshida, Fujiyoshida City, Yamanashi Prefecture<br>
      (*Different from bike parking address)</p>
    `,
    contact: "◆Contact◆",
    contactTitle: "◆Contact◆",
    contactDesc: "Please email: fujiyoshida.bicycle@gmail.com",
    footerText: "<p>&copy; 2025 Fuji Rental Cycles. All rights reserved.</p>"
  },

  zh: {
  title: "在富士山脚下自由骑行！",
  subtitle: "从富士山站步行7分钟即可到达的全自助租赁自行车。<br>电动辅助自行车每3小时仅需1,500日元，是当地最低价格！",
  howto: "◆使用方法◆",
  howtoList: [
    "请确认使用条款。",
    "扫描现场的QR码，输入姓名、电子邮件、电话号码、预计使用时间，上传身份证明并付款（不接受现金）。",
    "付款完成后，自行车编号和锁码将发送至您的电子邮件，请使用该信息解锁使用。",
    "付款时同时会发送归还说明的邮件，归还后请点击邮件中的链接完成归还流程。"
  ],
  terms: "◆使用条款与常见问题◆",
  termsHtml: `
    <h2>◆使用条款与常见问题◆</h2>
    <p>您可以通过以下按钮查看我们的使用条款与常见问题。</p>
    <a href="terms_faq_zh.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      查看使用条款与FAQ（PDF）
    </a>
  `,
  price: "◆使用费用◆",
  priceHtml: `
    <h2>◆使用费用◆</h2>
    <p>3小时：1,500日元<br>
    （*超过3小时后将产生额外费用）</p>
    <ul>
      <li>3小时1秒～6小时：追加500日元（合计2,000日元）</li>
      <li>6小时1秒～24小时：追加1,500日元（合计3,000日元）</li>
      <li>24小时1秒～27小时：追加3,000日元（合计4,500日元）</li>
      <li>27小时1秒～30小时：追加3,500日元（合计5,000日元）</li>
      <li>30小时1秒～42小时：追加4,500日元（合计6,000日元）</li>
    </ul>
  `,
  location: "◆自行车停放地点◆",
  locationHtml: `
    <h2>◆自行车停放地点◆</h2>
    <p>
      邮政编码403-0005<br>
      山梨县富士吉田市上吉田4丁目7番2-1号<br>
      （从富士山站朝富士山方向步行约3分钟，经过第一个闪烁信号灯后直行）<br>
      （※与运营公司地址不同）
    </p>
    <img src="map.png" alt="地图（从富士山站）" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,
  company: "◆运营公司◆",
  companyHtml: `
    <h2>◆运营公司◆</h2>
    <p>公司名称：Van合同公司<br>
    地址：山梨县富士吉田市上吉田东3丁目7番5号<br>
    （※与自行车停放地点不同）</p>
  `,
  contact: "◆联系我们◆",
  contactTitle: "◆联系我们◆",
  contactDesc: "请发送邮件至：fujiyoshida.bicycle@gmail.com",
  footerText: "<p>&copy; 2025 富士租赁自行车版权所有</p>"
},

  ko: {
  title: "후지산 자락에서 자유롭게 사이클링!",
  subtitle: "후지산역에서 도보 7분 거리에 있는 무인 렌털 사이클입니다.<br>전기 자전거를 3시간 1,500엔부터 지역 최저가로 대여할 수 있어요!",
  howto: "◆이용 방법◆",
  terms: "◆이용 약관 및 자주 묻는 질문◆",
  price: "◆이용 요금◆",
  location: "◆자전거 보관소 주소◆",
  company: "◆운영 회사◆",
  contact: "◆문의하기◆",
  contactTitle: "◆문의하기◆",
  contactDesc: "fujiyoshida.bicycle@gmail.com 으로 이메일을 보내주세요",
  howtoList: [
    "이용 약관을 확인해주세요.",
    "이용 약관 확인 후, 현장에서 QR코드를 스캔하여 이름, 이메일 주소, 전화번호, 예상 이용 시간을 입력하고, 신분증을 업로드한 뒤 결제합니다. (현금 불가)",
    "결제 후 자전거 번호와 자물쇠 번호가 이메일로 발송되며, 해당 정보를 사용해 자전거를 해제하여 이용할 수 있습니다.",
    "결제 시 반납 안내 메일도 함께 전송되며, 반납 후 해당 메일의 링크를 통해 반납 완료 처리를 합니다."
  ],
  termsHtml: `
    <h2>◆이용 약관 및 자주 묻는 질문◆</h2>
    <p>아래 버튼을 통해 이용 약관 및 FAQ를 PDF로 확인하실 수 있습니다.</p>
    <a href="terms_faq_ko.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      이용 약관 및 FAQ 보기 (PDF)
    </a>
  `,
  priceHtml: `
    <h2>◆이용 요금◆</h2>
    <p>3시간: 1,500엔<br>
    (*3시간 초과 시 추가 요금이 발생합니다)</p>
    <ul>
      <li>3시간 1초 ~ 6시간: +500엔 (총 2,000엔)</li>
      <li>6시간 1초 ~ 24시간: +1,500엔 (총 3,000엔)</li>
      <li>24시간 1초 ~ 27시간: +3,000엔 (총 4,500엔)</li>
      <li>27시간 1초 ~ 30시간: +3,500엔 (총 5,000엔)</li>
      <li>30시간 1초 ~ 42시간: +4,500엔 (총 6,000엔)</li>
    </ul>
  `,
  locationHtml: `
    <h2>◆자전거 보관소 주소◆</h2>
    <p>
      우편번호 403-0005<br>
      야마나시현 후지요시다시 가미요시다 4-7-2-1<br>
      (후지산역에서 후지산 방향으로 첫 깜빡이는 신호를 지나 도보 약 3분)<br>
      (*운영 회사 주소와 다릅니다)
    </p>
    <img src="map.png" alt="지도 (후지산역에서)" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,
  companyHtml: `
    <h2>◆운영 회사◆</h2>
    <p>
      회사명: Van合同회사<br>
      주소: 야마나시현 후지요시다시 가미요시다 히가시 3-7-5<br>
      (*자전거 보관소 주소와 다릅니다)
    </p>
  `,
  footerText: "<p>&copy; 2025 후지 렌털 사이클. All rights reserved.</p>"
},

es: {
  title: "¡Pedalea libremente al pie del Monte Fuji!",
  subtitle: "Alquiler de bicicletas sin personal a solo 7 minutos a pie desde la estación de Fuji.<br>¡Alquila una bicicleta eléctrica desde 1,500 yenes por 3 horas, el precio más bajo de la zona!",
  howto: "◆Cómo utilizar◆",
  terms: "◆Términos y Preguntas Frecuentes◆",
  price: "◆Tarifas◆",
  location: "◆Dirección del estacionamiento de bicicletas◆",
  company: "◆Empresa Operadora◆",
  contact: "◆Contacto◆",
  contactTitle: "◆Contacto◆",
  contactDesc: "Por favor envíe un correo a: fujiyoshida.bike@gmail.com",
  howtoList: [
    "Por favor revise los términos y condiciones.",
    "Después de revisarlos, escanee el código QR en el lugar, introduzca su nombre, correo electrónico, número de teléfono y tiempo estimado de uso, cargue su identificación y realice el pago. (No se acepta efectivo)",
    "Después del pago, se le enviará por correo electrónico el número de bicicleta y el código del candado. Use esa información para desbloquear la bicicleta.",
    "También se enviará un correo con las instrucciones de devolución. Después de devolver la bicicleta, complete el proceso de devolución desde ese correo."
  ],
  termsHtml: `
    <h2>◆Términos y Preguntas Frecuentes◆</h2>
    <p>Puede consultar los términos y condiciones y las preguntas frecuentes en el siguiente botón.</p>
    <a href="terms_faq_es.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Ver Términos y FAQ (PDF)
    </a>
  `,
  priceHtml: `
    <h2>◆Tarifas◆</h2>
    <p>3 horas: 1,500 yenes<br>
    (*Se aplican cargos adicionales después de 3 horas)</p>
    <ul>
      <li>De 3h 1s a 6h: +500 yenes (Total: 2,000 yenes)</li>
      <li>De 6h 1s a 24h: +1,500 yenes (Total: 3,000 yenes)</li>
      <li>De 24h 1s a 27h: +3,000 yenes (Total: 4,500 yenes)</li>
      <li>De 27h 1s a 30h: +3,500 yenes (Total: 5,000 yenes)</li>
      <li>De 30h 1s a 42h: +4,500 yenes (Total: 6,000 yenes)</li>
    </ul>
  `,
  locationHtml: `
    <h2>◆Dirección del estacionamiento de bicicletas◆</h2>
    <p>
      Código postal 403-0005<br>
      4-7-2-1 Kamiyoshida, Ciudad de Fujiyoshida, Prefectura de Yamanashi<br>
      (A unos 3 minutos caminando desde la estación de Fuji hacia el Monte Fuji, pasando el primer semáforo intermitente)<br>
      (*Diferente de la dirección de la empresa operadora)
    </p>
    <img src="map.png" alt="Mapa (desde la estación de Fuji)" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,
  companyHtml: `
    <h2>◆Empresa Operadora◆</h2>
    <p>
      Empresa: Van LLC<br>
      Dirección: 3-7-5 Higashi-Kamiyoshida, Ciudad de Fujiyoshida, Prefectura de Yamanashi<br>
      (*Diferente de la dirección del estacionamiento de bicicletas)
    </p>
  `,
  footerText: "<p>&copy; 2025 Fuji Rental Cycles. Todos los derechos reservados.</p>"
},

fr: {
  title: "Faites du vélo librement au pied du Mont Fuji !",
  subtitle: "Location de vélos sans personnel à 7 minutes à pied de la gare de Fujisan.<br>Louez un vélo électrique à partir de 1 500 yens pour 3 heures, le tarif le plus bas de la région.",
  howto: "◆Comment utiliser◆",
  terms: "◆Conditions d'utilisation et FAQ◆",
  price: "◆Tarifs◆",
  location: "◆Adresse du parking vélo◆",
  company: "◆Entreprise exploitante◆",
  contact: "◆Contact◆",
  contactTitle: "◆Contact◆",

  howtoList: [
    "Veuillez lire les conditions d'utilisation.",
    "Après lecture, scannez le QR code sur place, saisissez votre nom, adresse e-mail, numéro de téléphone, durée estimée d'utilisation, téléversez un document d'identité, puis procédez au paiement. (Espèces non acceptées)",
    "Une fois le paiement effectué, le numéro du vélo et le code de verrouillage vous seront envoyés par e-mail pour commencer votre utilisation.",
    "Le message de confirmation contiendra également les instructions de retour ; veuillez compléter la procédure après avoir rendu le vélo."
  ],

  termsHtml: `
    <h2>◆Conditions d'utilisation et FAQ◆</h2>
    <p>Vous pouvez consulter les conditions d'utilisation et la FAQ en cliquant sur le bouton ci-dessous.</p>
    <a href="terms_faq_fr.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Voir les conditions et la FAQ (PDF)
    </a>
  `,

  contactDesc: "Veuillez envoyer un e-mail à fujiyoshida.bicycle@gmail.com",
  
  priceHtml: `
    <h2>◆Tarifs◆</h2>
    <p>3 heures : 1 500 yens<br>
    (※Des frais supplémentaires s'appliquent au-delà de 3 heures)</p>
    <ul>
      <li>De 3h01 à 6h : forfait de base + 500 yens (total 2 000 yens)</li>
      <li>De 6h01 à 24h : forfait de base + 1 500 yens (total 3 000 yens)</li>
      <li>De 24h01 à 27h : forfait de base + 3 000 yens (total 4 500 yens)</li>
      <li>De 27h01 à 30h : forfait de base + 3 500 yens (total 5 000 yens)</li>
      <li>De 30h01 à 42h : forfait de base + 4 500 yens (total 6 000 yens)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Adresse du parking vélo◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Yamanashi, Japon<br>
      (À environ 3 minutes tout droit après le premier feu clignotant en sortant de la gare de Fujisan en direction du Mont Fuji)<br>
      (※Adresse différente de celle de l'entreprise)
    </p>
    <img src="map.png" alt="Carte depuis la gare de Fujisan" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Entreprise exploitante◆</h2>
    <p>
      Société : Van LLC<br>
      Adresse : 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi<br>
      (※Adresse différente de celle du parking vélo)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Tous droits réservés."
}
,
 
de: {
  title: "Frei radeln am Fuße des Fuji!",
  subtitle: "Unbemannter Fahrradverleih nur 7 Gehminuten vom Bahnhof Fujisan entfernt.<br>Elektrofahrräder ab 1.500 Yen für 3 Stunden – der günstigste Preis in der Region.",
  howto: "◆Nutzungsanleitung◆",
  terms: "◆Nutzungsbedingungen und FAQ◆",
  price: "◆Nutzungsgebühren◆",
  location: "◆Adresse des Fahrradstellplatzes◆",
  company: "◆Betreiberfirma◆",
  contact: "◆Kontakt◆",
  contactTitle: "◆Kontakt◆",

  howtoList: [
    "Bitte lesen Sie die Nutzungsbedingungen.",
    "Nach dem Lesen scannen Sie den QR-Code vor Ort, geben Sie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer und geplante Nutzungsdauer ein, laden Sie ein Ausweisdokument hoch und bezahlen Sie. (Bargeld nicht akzeptiert)",
    "Nach der Bezahlung erhalten Sie per E-Mail die Fahrradnummer und den Schlosscode und können das Fahrrad benutzen.",
    "Gleichzeitig wird Ihnen auch eine Rückgabeanleitung per E-Mail zugesendet. Bitte schließen Sie die Rückgabe darüber nach der Nutzung ab."
  ],

  termsHtml: `
    <h2>◆Nutzungsbedingungen und FAQ◆</h2>
    <p>Sie können die Nutzungsbedingungen und häufig gestellten Fragen über den folgenden Button einsehen.</p>
    <a href="terms_faq_de.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Nutzungsbedingungen & FAQ als PDF ansehen
    </a>
  `,

  contactDesc: "Bitte senden Sie eine E-Mail an fujiyoshida.bike@gmail.com",

  priceHtml: `
    <h2>◆Nutzungsgebühren◆</h2>
    <p>3 Stunden: 1.500 Yen<br>
    (※ Bei Überschreitung von 3 Stunden fallen folgende Zusatzgebühren an:)</p>
    <ul>
      <li>3 Std. 1 Sek. – 6 Std.: Grundtarif + 500 Yen (insgesamt 2.000 Yen)</li>
      <li>6 Std. 1 Sek. – 24 Std.: Grundtarif + 1.500 Yen (insgesamt 3.000 Yen)</li>
      <li>24 Std. 1 Sek. – 27 Std.: Grundtarif + 3.000 Yen (insgesamt 4.500 Yen)</li>
      <li>27 Std. 1 Sek. – 30 Std.: Grundtarif + 3.500 Yen (insgesamt 5.000 Yen)</li>
      <li>30 Std. 1 Sek. – 42 Std.: Grundtarif + 4.500 Yen (insgesamt 6.000 Yen)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Adresse des Fahrradstellplatzes◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Präfektur Yamanashi, Japan<br>
      (Gehen Sie vom Bahnhof Fujisan in Richtung Fuji, geradeaus über die erste Blinkampel, ca. 3 Minuten)<br>
      (※Abweichend von der Adresse der Betreiberfirma)
    </p>
    <img src="map.png" alt="Karte (Weg vom Bahnhof Fujisan)" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Betreiberfirma◆</h2>
    <p>
      Betreiber: Van LLC<br>
      Adresse: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Präfektur Yamanashi<br>
      (※Abweichend von der Adresse des Fahrradstellplatzes)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Alle Rechte vorbehalten."
},

ru: {
  title: "Свободная велопрогулка у подножия Фудзи!",
  subtitle: "Бесконтактный прокат велосипедов в 7 минутах ходьбы от станции Фудзисан.<br>Электровелосипеды от 1 500 иен за 3 часа — самая низкая цена в регионе.",
  howto: "◆Как пользоваться◆",
  terms: "◆Условия использования и ЧаВО◆",
  price: "◆Тарифы◆",
  location: "◆Адрес стоянки велосипедов◆",
  company: "◆Компания◆",
  contact: "◆Контакты◆",
  contactTitle: "◆Контакты◆",

  howtoList: [
    "Пожалуйста, ознакомьтесь с условиями использования.",
    "После этого отсканируйте QR-код на месте, введите имя, e-mail, номер телефона и предполагаемое время аренды, загрузите документ для подтверждения личности и оплатите. (Наличные не принимаются)",
    "После оплаты вы получите номер велосипеда и код замка по электронной почте, и сможете начать использовать велосипед.",
    "Вместе с подтверждением оплаты вы получите письмо с инструкцией по возврату. Пожалуйста, завершите процесс возврата через эту ссылку после окончания использования."
  ],

  termsHtml: `
    <h2>◆Условия использования и ЧаВО◆</h2>
    <p>Вы можете ознакомиться с условиями использования и часто задаваемыми вопросами по кнопке ниже.</p>
    <a href="terms_faq_ru.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Посмотреть PDF с условиями и ЧаВО
    </a>
  `,

  contactDesc: "Пожалуйста, напишите на fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆Тарифы◆</h2>
    <p>3 часа — 1 500 иен<br>
    (※ При превышении 3 часов действуют следующие доплаты:)</p>
    <ul>
      <li>От 3 ч. 1 с до 6 ч: базовый тариф + 500 иен (всего 2 000 иен)</li>
      <li>От 6 ч. 1 с до 24 ч: базовый тариф + 1 500 иен (всего 3 000 иен)</li>
      <li>От 24 ч. 1 с до 27 ч: базовый тариф + 3 000 иен (всего 4 500 иен)</li>
      <li>От 27 ч. 1 с до 30 ч: базовый тариф + 3 500 иен (всего 5 000 иен)</li>
      <li>От 30 ч. 1 с до 42 ч: базовый тариф + 4 500 иен (всего 6 000 иен)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Адрес стоянки велосипедов◆</h2>
    <p>
      403-0005<br>
      Япония, преф. Яманаси, г. Фудзийошида, Камийошида 4-7-2-1<br>
      (От станции Фудзисан — в сторону горы Фудзи, пройти один мигающий светофор прямо, примерно 3 минуты)<br>
      (※ Отличается от адреса компании)
    </p>
    <img src="map.png" alt="Карта (от станции Фудзисан)" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Компания◆</h2>
    <p>
      Компания: Van LLC<br>
      Адрес: Япония, преф. Яманаси, г. Фудзийошида, Хигаши Камийошида 3-7-5<br>
      (※ Отличается от адреса стоянки велосипедов)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Все права защищены."
},

hi: {
  title: "फूजी पर्वत के पास स्वतंत्र साइकिलिंग का आनंद लें!",
  subtitle: "फूजीसान स्टेशन से徒歩 7 मिनट की दूरी पर स्थित एक बिना स्टाफ वाला रेंटल साइकिल सेवा।<br>इलेक्ट्रिक साइकिल केवल 1,500 येन से शुरू — क्षेत्र में सबसे सस्ती दर।",
  howto: "◆उपयोग विधि◆",
  terms: "◆उपयोग की शर्तें और सामान्य प्रश्न◆",
  price: "◆प्रयोग शुल्क◆",
  location: "◆साइकिल स्टैंड का पता◆",
  company: "◆संचालन कंपनी◆",
  contact: "◆संपर्क करें◆",
  contactTitle: "◆संपर्क करें◆",

  howtoList: [
    "कृपया पहले उपयोग की शर्तें पढ़ें।",
    "पढ़ने के बाद, स्थान पर QR कोड स्कैन करें, अपना नाम, ईमेल, फोन नंबर, अनुमानित उपयोग समय दर्ज करें, पहचान दस्तावेज़ अपलोड करें और भुगतान करें। (नकद स्वीकार्य नहीं है)",
    "भुगतान के बाद, साइकिल नंबर और लॉक कोड ईमेल पर भेजे जाएंगे, जिससे आप साइकिल का उपयोग कर सकते हैं।",
    "भुगतान के साथ ही आपको रिटर्न गाइड ईमेल भी मिलेगा, जिसमें से आप वापसी प्रक्रिया पूरी कर सकते हैं।"
  ],

  termsHtml: `
    <h2>◆उपयोग की शर्तें और सामान्य प्रश्न◆</h2>
    <p>नीचे दिए गए बटन से आप उपयोग की शर्तें और सामान्य प्रश्न (FAQ) देख सकते हैं।</p>
    <a href="terms_faq_hi.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      PDF में शर्तें और FAQ देखें
    </a>
  `,

  contactDesc: "कृपया fujiyoshida.bicycle@gmail.com पर ईमेल करें",

  priceHtml: `
    <h2>◆प्रयोग शुल्क◆</h2>
    <p>3 घंटे: 1,500 येन<br>
    (※3 घंटे से अधिक होने पर निम्नलिखित अतिरिक्त शुल्क लागू होंगे:)</p>
    <ul>
      <li>3 घंटे 1 सेकंड – 6 घंटे: मूल योजना + 500 येन (कुल 2,000 येन)</li>
      <li>6 घंटे 1 सेकंड – 24 घंटे: मूल योजना + 1,500 येन (कुल 3,000 येन)</li>
      <li>24 घंटे 1 सेकंड – 27 घंटे: मूल योजना + 3,000 येन (कुल 4,500 येन)</li>
      <li>27 घंटे 1 सेकंड – 30 घंटे: मूल योजना + 3,500 येन (कुल 5,000 येन)</li>
      <li>30 घंटे 1 सेकंड – 42 घंटे: मूल योजना + 4,500 येन (कुल 6,000 येन)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆साइकिल स्टैंड का पता◆</h2>
    <p>
      403-0005<br>
      4-7-2-1, Kamiyoshida, Fujiyoshida, Yamanashi, Japan<br>
      (फूजीसान स्टेशन से फूजी पर्वत की दिशा में जाएँ, पहली ब्लिंकिंग लाइट को पार कर सीधा चलें, लगभग 3 मिनट)<br>
      (※ संचालन कंपनी के पते से अलग है)
    </p>
    <img src="map.png" alt="फूजीसान स्टेशन से मार्ग नक्शा" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆संचालन कंपनी◆</h2>
    <p>
      कंपनी: Van LLC<br>
      पता: 3-7-5, Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Japan<br>
      (※ साइकिल स्टैंड के पते से अलग है)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. सभी अधिकार सुरक्षित।"
},

ar: {
  title: "استمتع بركوب الدراجة بحرية عند سفح جبل فوجي!",
  subtitle: "خدمة تأجير دراجات بدون طاقم على بعد 7 دقائق سيرًا على الأقدام من محطة فوجيسان.<br>استأجر دراجة كهربائية ابتداءً من 1500 ين لمدة 3 ساعات - الأرخص في المنطقة.",
  howto: "◆طريقة الاستخدام◆",
  terms: "◆شروط الاستخدام والأسئلة الشائعة◆",
  price: "◆الرسوم◆",
  location: "◆عنوان موقف الدراجات◆",
  company: "◆الشركة المشغلة◆",
  contact: "◆اتصل بنا◆",
  contactTitle: "◆اتصل بنا◆",

  howtoList: [
    "يرجى قراءة شروط الاستخدام.",
    "بعد قراءتها، امسح رمز QR في الموقع، وأدخل اسمك، بريدك الإلكتروني، رقم هاتفك، المدة التقريبية، ثم حمّل وثيقة الهوية وقم بالدفع. (لا يُقبل الدفع نقدًا)",
    "بعد الدفع، سيتم إرسال رقم الدراجة ورمز القفل إلى بريدك الإلكتروني، ويمكنك فتح القفل واستخدام الدراجة.",
    "سيتم إرسال بريد إلكتروني يحتوي على إرشادات الإرجاع مع الدفع. بعد الاستخدام، يرجى إتمام عملية الإرجاع من خلال ذلك البريد."
  ],

  termsHtml: `
    <h2>◆شروط الاستخدام والأسئلة الشائعة◆</h2>
    <p>يمكنك عرض الشروط والأسئلة الشائعة بالنقر على الزر أدناه.</p>
    <a href="terms_faq_ar.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      عرض الشروط والأسئلة بصيغة PDF
    </a>
  `,

  contactDesc: "يرجى إرسال بريد إلكتروني إلى fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆الرسوم◆</h2>
    <p>3 ساعات: 1500 ين<br>
    (※ عند تجاوز 3 ساعات، يتم فرض رسوم إضافية كما يلي:)</p>
    <ul>
      <li>من 3:01 إلى 6 ساعات: الخطة الأساسية + 500 ين (المجموع 2000 ين)</li>
      <li>من 6:01 إلى 24 ساعة: الخطة الأساسية + 1500 ين (المجموع 3000 ين)</li>
      <li>من 24:01 إلى 27 ساعة: الخطة الأساسية + 3000 ين (المجموع 4500 ين)</li>
      <li>من 27:01 إلى 30 ساعة: الخطة الأساسية + 3500 ين (المجموع 5000 ين)</li>
      <li>من 30:01 إلى 42 ساعة: الخطة الأساسية + 4500 ين (المجموع 6000 ين)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆عنوان موقف الدراجات◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 كاميوشيدا، فوجييوشيدا، محافظة ياماناشي، اليابان<br>
      (من محطة فوجيسان، اتجه نحو جبل فوجي، سر لمدة 3 دقائق بعد أول إشارة وامضة)<br>
      (※ يختلف عن عنوان الشركة المشغلة)
    </p>
    <img src="map.png" alt="خريطة من محطة فوجيسان" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆الشركة المشغلة◆</h2>
    <p>
      الشركة: Van LLC<br>
      العنوان: 3-7-5 هيغاشي كاميوشيدا، فوجييوشيدا، محافظة ياماناشي، اليابان<br>
      (※ يختلف عن عنوان موقف الدراجات)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. جميع الحقوق محفوظة."
},

pt: {
  title: "Pedale livremente aos pés do Monte Fuji!",
  subtitle: "Serviço de aluguel de bicicletas sem funcionários a 7 minutos a pé da Estação Fujisan.<br>Alugue bicicletas elétricas a partir de 1.500 ienes por 3 horas — o preço mais barato da região.",
  howto: "◆Como utilizar◆",
  terms: "◆Termos de uso e FAQ◆",
  price: "◆Taxas de uso◆",
  location: "◆Endereço do estacionamento das bicicletas◆",
  company: "◆Empresa operadora◆",
  contact: "◆Contato◆",
  contactTitle: "◆Contato◆",

  howtoList: [
    "Por favor, leia os termos de uso.",
    "Depois de ler, escaneie o QR code no local, insira seu nome, e-mail, telefone, tempo estimado de uso, envie um documento de identidade e faça o pagamento. (Dinheiro não aceito)",
    "Após o pagamento, você receberá por e-mail o número da bicicleta e o código da trava para usá-la.",
    "Um e-mail com instruções de devolução também será enviado junto. Após o uso, siga o link do e-mail para concluir a devolução."
  ],

  termsHtml: `
    <h2>◆Termos de uso e FAQ◆</h2>
    <p>Você pode verificar os termos de uso e as perguntas frequentes clicando no botão abaixo.</p>
    <a href="terms_faq_pt.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Ver termos e FAQ em PDF
    </a>
  `,

  contactDesc: "Envie um e-mail para fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆Taxas de uso◆</h2>
    <p>3 horas: 1.500 ienes<br>
    (※ Para uso superior a 3 horas, aplicam-se as seguintes taxas adicionais:)</p>
    <ul>
      <li>3h01 até 6h: plano básico + 500 ienes (total 2.000 ienes)</li>
      <li>6h01 até 24h: plano básico + 1.500 ienes (total 3.000 ienes)</li>
      <li>24h01 até 27h: plano básico + 3.000 ienes (total 4.500 ienes)</li>
      <li>27h01 até 30h: plano básico + 3.500 ienes (total 5.000 ienes)</li>
      <li>30h01 até 42h: plano básico + 4.500 ienes (total 6.000 ienes)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Endereço do estacionamento das bicicletas◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Yamanashi, Japão<br>
      (Siga em direção ao Monte Fuji saindo da Estação Fujisan, atravesse o primeiro semáforo piscante e caminhe cerca de 3 minutos)<br>
      (※ Diferente do endereço da empresa operadora)
    </p>
    <img src="map.png" alt="Mapa da Estação Fujisan até o local" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Empresa operadora◆</h2>
    <p>
      Empresa: Van LLC<br>
      Endereço: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Japão<br>
      (※ Diferente do endereço do estacionamento das bicicletas)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Todos os direitos reservados."
}
,

 vi: {
  title: "Đạp xe tự do dưới chân núi Phú Sĩ!",
  subtitle: "Dịch vụ thuê xe đạp không cần nhân viên, cách ga Fujisan 7 phút đi bộ.<br>Thuê xe đạp điện từ 1.500 yên cho 3 giờ — giá rẻ nhất khu vực.",
  howto: "◆Cách sử dụng◆",
  terms: "◆Điều khoản sử dụng & Câu hỏi thường gặp◆",
  price: "◆Phí sử dụng◆",
  location: "◆Địa chỉ bãi đỗ xe đạp◆",
  company: "◆Công ty vận hành◆",
  contact: "◆Liên hệ◆",
  contactTitle: "◆Liên hệ◆",

  howtoList: [
    "Vui lòng đọc kỹ điều khoản sử dụng.",
    "Sau khi đọc, quét mã QR tại chỗ, nhập tên, email, số điện thoại, thời gian dự kiến sử dụng, tải giấy tờ tùy thân và tiến hành thanh toán. (Không chấp nhận tiền mặt)",
    "Sau khi thanh toán, số xe và mã khóa sẽ được gửi đến email của bạn. Bạn có thể mở khóa và sử dụng xe.",
    "Bạn cũng sẽ nhận được email hướng dẫn trả xe. Sau khi sử dụng xong, hãy hoàn tất trả xe qua email đó."
  ],

  termsHtml: `
    <h2>◆Điều khoản sử dụng & Câu hỏi thường gặp◆</h2>
    <p>Bạn có thể xem điều khoản và câu hỏi thường gặp bằng cách nhấn nút bên dưới.</p>
    <a href="terms_faq_vi.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Xem PDF điều khoản & FAQ
    </a>
  `,

  contactDesc: "Vui lòng gửi email đến fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆Phí sử dụng◆</h2>
    <p>3 giờ: 1.500 yên<br>
    (※ Vượt quá 3 giờ sẽ áp dụng phí thêm như sau:)</p>
    <ul>
      <li>3 giờ 1 giây – 6 giờ: +500 yên (tổng 2.000 yên)</li>
      <li>6 giờ 1 giây – 24 giờ: +1.500 yên (tổng 3.000 yên)</li>
      <li>24 giờ 1 giây – 27 giờ: +3.000 yên (tổng 4.500 yên)</li>
      <li>27 giờ 1 giây – 30 giờ: +3.500 yên (tổng 5.000 yên)</li>
      <li>30 giờ 1 giây – 42 giờ: +4.500 yên (tổng 6.000 yên)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Địa chỉ bãi đỗ xe đạp◆</h2>
    <p>
      403-0005<br>
      Số 4-7-2-1, Kamiyoshida, Fujiyoshida, tỉnh Yamanashi, Nhật Bản<br>
      (Từ ga Fujisan đi về hướng núi Phú Sĩ, băng qua đèn chớp đầu tiên, đi thẳng khoảng 3 phút)<br>
      (※ Khác với địa chỉ công ty vận hành)
    </p>
    <img src="map.png" alt="Bản đồ từ ga Fujisan" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Công ty vận hành◆</h2>
    <p>
      Tên công ty: Van LLC<br>
      Địa chỉ: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Nhật Bản<br>
      (※ Khác với địa chỉ bãi đỗ xe đạp)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Đã đăng ký bản quyền."
},

id: {
  title: "Bersepeda Bebas di Kaki Gunung Fuji!",
  subtitle: "Layanan penyewaan sepeda tanpa staf, hanya 7 menit berjalan kaki dari Stasiun Fujisan.<br>Sewa sepeda listrik mulai dari 1.500 yen untuk 3 jam — tarif termurah di kawasan ini.",
  howto: "◆Cara Penggunaan◆",
  terms: "◆Syarat Penggunaan & FAQ◆",
  price: "◆Biaya Penggunaan◆",
  location: "◆Alamat Tempat Parkir Sepeda◆",
  company: "◆Perusahaan Pengelola◆",
  contact: "◆Kontak◆",
  contactTitle: "◆Kontak◆",

  howtoList: [
    "Silakan baca syarat penggunaan terlebih dahulu.",
    "Setelah membaca, pindai kode QR di lokasi, isi nama, email, nomor telepon, perkiraan durasi penggunaan, unggah dokumen identitas dan lakukan pembayaran. (Tunai tidak diterima)",
    "Setelah pembayaran, nomor sepeda dan kode kunci akan dikirim ke email Anda. Gunakan kode tersebut untuk membuka dan menggunakan sepeda.",
    "Email panduan pengembalian juga akan dikirim bersamaan. Setelah penggunaan, selesaikan pengembalian melalui tautan dalam email tersebut."
  ],

  termsHtml: `
    <h2>◆Syarat Penggunaan & FAQ◆</h2>
    <p>Anda dapat melihat syarat dan pertanyaan yang sering ditanyakan melalui tombol di bawah ini.</p>
    <a href="terms_faq_id.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Lihat PDF Syarat & FAQ
    </a>
  `,

  contactDesc: "Silakan kirim email ke fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆Biaya Penggunaan◆</h2>
    <p>3 jam: 1.500 yen<br>
    (※Jika melebihi 3 jam, biaya tambahan berlaku sebagai berikut:)</p>
    <ul>
      <li>3 jam 1 detik – 6 jam: +500 yen (total 2.000 yen)</li>
      <li>6 jam 1 detik – 24 jam: +1.500 yen (total 3.000 yen)</li>
      <li>24 jam 1 detik – 27 jam: +3.000 yen (total 4.500 yen)</li>
      <li>27 jam 1 detik – 30 jam: +3.500 yen (total 5.000 yen)</li>
      <li>30 jam 1 detik – 42 jam: +4.500 yen (total 6.000 yen)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Alamat Tempat Parkir Sepeda◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Yamanashi, Jepang<br>
      (Dari Stasiun Fujisan, berjalan ke arah Gunung Fuji, lurus sekitar 3 menit melewati lampu berkedip pertama)<br>
      (※ Berbeda dengan alamat kantor perusahaan)
    </p>
    <img src="map.png" alt="Peta dari Stasiun Fujisan" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Perusahaan Pengelola◆</h2>
    <p>
      Perusahaan: Van LLC<br>
      Alamat: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Jepang<br>
      (※ Berbeda dengan lokasi tempat parkir sepeda)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Hak cipta dilindungi undang-undang."
},


it: {
  title: "Pedala liberamente ai piedi del Monte Fuji!",
  subtitle: "Servizio di noleggio biciclette senza personale a 7 minuti a piedi dalla stazione Fujisan.<br>Noleggio bici elettriche a partire da 1.500 yen per 3 ore — il prezzo più basso della zona.",
  howto: "◆Come funziona◆",
  terms: "◆Termini di utilizzo e FAQ◆",
  price: "◆Tariffe◆",
  location: "◆Indirizzo parcheggio biciclette◆",
  company: "◆Gestore◆",
  contact: "◆Contatti◆",
  contactTitle: "◆Contatti◆",

  howtoList: [
    "Si prega di leggere i termini di utilizzo.",
    "Dopo la lettura, scansiona il codice QR in loco, inserisci il tuo nome, email, numero di telefono, tempo stimato e carica un documento di identità per procedere al pagamento. (Contanti non accettati)",
    "Dopo il pagamento, riceverai via email il numero della bici e il codice del lucchetto per iniziare a usarla.",
    "Insieme al pagamento riceverai anche un’email con le istruzioni per la restituzione. Dopo aver restituito la bici, completa la procedura cliccando il link nell’email."
  ],

  termsHtml: `
    <h2>◆Termini di utilizzo e FAQ◆</h2>
    <p>Puoi consultare i termini e le domande frequenti cliccando sul pulsante qui sotto.</p>
    <a href="terms_faq_it.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      Visualizza Termini & FAQ in PDF
    </a>
  `,

  contactDesc: "Invia un'email a fujiyoshida.bicycle@gmail.com",

  priceHtml: `
    <h2>◆Tariffe◆</h2>
    <p>3 ore: 1.500 yen<br>
    (※ Dopo 3 ore si applicano i seguenti supplementi:)</p>
    <ul>
      <li>Da 3h01 a 6h: +500 yen (totale 2.000 yen)</li>
      <li>Da 6h01 a 24h: +1.500 yen (totale 3.000 yen)</li>
      <li>Da 24h01 a 27h: +3.000 yen (totale 4.500 yen)</li>
      <li>Da 27h01 a 30h: +3.500 yen (totale 5.000 yen)</li>
      <li>Da 30h01 a 42h: +4.500 yen (totale 6.000 yen)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Indirizzo parcheggio biciclette◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Yamanashi, Giappone<br>
      (Dalla stazione Fujisan, procedi verso il Monte Fuji, attraversa il primo semaforo lampeggiante e cammina per circa 3 minuti)<br>
      (※ Diverso dalla sede del gestore)
    </p>
    <img src="map.png" alt="Mappa dalla stazione Fujisan" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆Gestore◆</h2>
    <p>
      Società: Van LLC<br>
      Indirizzo: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Giappone<br>
      (※ Diverso dall’indirizzo del parcheggio biciclette)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Tutti i diritti riservati."
},


tr: {
  title: "Fuji Dağı'nın eteklerinde özgürce bisiklet sürün!",
  subtitle: "Fujisan İstasyonu'ndan yürüyerek 7 dakika uzaklıkta, insansız bisiklet kiralama hizmeti.<br>Elektrikli destekli bisikletler 3 saat 1.500 yen’den başlayan bölgenin en uygun fiyatıyla kiralanabilir.",
  howto: "◆Kullanım Yöntemi◆",
  terms: "◆Kullanım Şartları ve Sıkça Sorulan Sorular◆",
  price: "◆Ücretler◆",
  location: "◆Bisiklet Park Yeri Adresi◆",
  company: "◆İşletmeci◆",
  contact: "◆İletişim◆",
  contactTitle: "◆İletişim◆",

  howtoList: [
    "Lütfen kullanım şartlarını okuyun.",
    "Şartları onayladıktan sonra, alandaki QR kodunu tarayın; adınızı, e-posta adresinizi, telefon numaranızı ve tahmini kullanım süresini girin, kimlik belgenizi yükleyin ve ödemeyi yapın. (Nakit kabul edilmez)",
    "Ödeme sonrası, bisiklet numarası ve kilit şifresi e-posta ile gönderilecektir. Bu bilgilerle kilidi açıp kullanmaya başlayabilirsiniz.",
    "Ödeme sırasında, iade işlemi için gerekli bilgiler içeren bir e-posta da gönderilecektir. Bisikleti iade ettikten sonra bu e-posta üzerinden işlemi tamamlayın."
  ],

  termsHtml: `
    <h2>◆Kullanım Şartları ve Sıkça Sorulan Sorular◆</h2>
    <p>Aşağıdaki düğmeye tıklayarak kullanım şartlarını ve SSS'yi görüntüleyebilirsiniz.</p>
    <a href="terms_faq_tr.pdf" target="_blank" style="display:inline-block;padding:10px 20px;background:#007bff;color:white;border-radius:5px;text-decoration:none;">
      PDF olarak Şartlar ve SSS'yi Görüntüle
    </a>
  `,

  contactDesc: "Lütfen fujiyoshida.bike@gmail.com adresine e-posta gönderin",

  priceHtml: `
    <h2>◆Ücretler◆</h2>
    <p>3 saat: 1.500 yen<br>
    (※3 saati aşarsanız aşağıdaki ek ücretler uygulanır.)</p>
    <ul>
      <li>3 saat 1 saniye - 6 saate kadar: +500 yen (toplam 2.000 yen)</li>
      <li>6 saat 1 saniye - 24 saate kadar: +1.500 yen (toplam 3.000 yen)</li>
      <li>24 saat 1 saniye - 27 saate kadar: +3.000 yen (toplam 4.500 yen)</li>
      <li>27 saat 1 saniye - 30 saate kadar: +3.500 yen (toplam 5.000 yen)</li>
      <li>30 saat 1 saniye - 42 saate kadar: +4.500 yen (toplam 6.000 yen)</li>
    </ul>
  `,

  locationHtml: `
    <h2>◆Bisiklet Park Yeri Adresi◆</h2>
    <p>
      403-0005<br>
      4-7-2-1 Kamiyoshida, Fujiyoshida, Yamanashi, Japonya<br>
      (Fujisan İstasyonu'ndan Fuji Dağı yönüne doğru ilerleyin, ilk yanıp sönen ışığı geçtikten sonra yaklaşık 3 dakika yürüyün)<br>
      (※ İşletmecinin adresi ile farklıdır)
    </p>
    <img src="map.png" alt="Fujisan İstasyonu'ndan harita" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:8px;">
  `,

  companyHtml: `
    <h2>◆İşletmeci◆</h2>
    <p>
      Şirket: Van LLC<br>
      Adres: 3-7-5 Higashi Kamiyoshida, Fujiyoshida, Yamanashi, Japonya<br>
      (※ Bisiklet park yeri adresinden farklıdır)
    </p>
  `,

  footerText: "&copy; 2025 Fuji Rental Cycles. Tüm hakları saklıdır."
},

};
