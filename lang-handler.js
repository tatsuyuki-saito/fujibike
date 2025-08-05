function setLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;

  const $ = (id) => document.getElementById(id);

  if ($("main-title")) $("main-title").textContent = translations[lang].title;
  if ($("nav-howto")) $("nav-howto").textContent = translations[lang].howto;
  if ($("nav-contact")) $("nav-contact").textContent = translations[lang].contact;
  if ($("howto-title")) $("howto-title").textContent = translations[lang].howto;
  if ($("contact-title")) $("contact-title").textContent = translations[lang].contactTitle;
  if ($("contact-desc")) $("contact-desc").textContent = translations[lang].contactDesc;
  if (document.querySelector(".subtitle")) {
    document.querySelector(".subtitle").innerHTML = translations[lang].subtitle;
  }
  if ($("price")) $("price").innerHTML = translations[lang].priceHtml;
  if ($("terms")) $("terms").innerHTML = translations[lang].termsHtml;
  if ($("faq")) $("faq").innerHTML = translations[lang].faqHtml;
  if ($("location")) $("location").innerHTML = translations[lang].locationHtml;
  if ($("company")) $("company").innerHTML = translations[lang].companyHtml;
  if (document.querySelector("footer")) {
    document.querySelector("footer").innerHTML = translations[lang].footerText;
  }
  if ($("nav-price")) $("nav-price").textContent = translations[lang].price;
  if ($("nav-terms")) $("nav-terms").textContent = translations[lang].terms;
  if ($("nav-faq")) $("nav-faq").textContent = translations[lang].faq;
  if ($("nav-location")) $("nav-location").textContent = translations[lang].location;
  if ($("nav-company")) $("nav-company").textContent = translations[lang].company;

  // 利用方法リスト更新
  const howtoList = $("howto-list");
  if (howtoList && translations[lang].howtoList) {
    howtoList.innerHTML = "";
    translations[lang].howtoList.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      howtoList.appendChild(li);
    });
  }

  // 保存
  localStorage.setItem("lang", lang);
}
