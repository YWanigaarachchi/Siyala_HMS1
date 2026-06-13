import React, { createContext, useState, useContext } from 'react';

export const translations = {
  en: {
    nav: { home: "Home", about: "About", travel: "Travel", contact: "Contact", login: "Log In", register: "Register" },
    flag: "https://flagcdn.com/w40/gb.png",
    langName: "English",
    home: {
      welcome: "Welcome to",
      sriLankan: "Sri Lankan",
      system: "Multi-chain Hotel Management System",
      welcoming: "Welcoming the World",
      guests: "Guests from across the globe",
      explore: "Explore Our Sanctuaries",
      reviews: "REVIEWS"
    },
    footer: {
      about: "A premier multi-chain hotel management system dedicated to showcasing the pristine beauty and rich heritage of Sri Lanka to the world.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      newsletter: "Newsletter",
      newsletterSub: "Subscribe for exclusive offers and updates.",
      subscribe: "Subscribe",
      rights: "All rights reserved."
    },
    auth: {
      welcomeBack: "Welcome Back",
      signIn: "Sign in to continue your journey",
      email: "Email Address",
      password: "Password",
      forgot: "Forgot Password?",
      noAccount: "Don't have an account?",
      createAccount: "Create one",
      createTitle: "Create Account",
      createSub: "Join Siyala to start your journey",
      name: "Full Name",
      alreadyHave: "Already have an account?",
      loginBtn: "Log In",
      registerBtn: "Create Account"
    }
  },
  si: {
    nav: { home: "මුල් පිටුව", about: "අප ගැන", travel: "සංචාර", contact: "විමසීම්", login: "ඇතුල් වන්න", register: "ලියාපදිංචි වන්න" },
    flag: "https://flagcdn.com/w40/lk.png",
    langName: "සිංහල",
    home: {
      welcome: "ආයුබෝවන්",
      sriLankan: "ශ්‍රී ලාංකීය",
      system: "හෝටල් කළමනාකරණ පද්ධතිය",
      welcoming: "ලෝකයම පිළිගනිමු",
      guests: "ලොව පුරා සිටින අමුත්තන්",
      explore: "අපගේ නවාතැන් ගවේෂණය කරන්න",
      reviews: "විචාර"
    },
    footer: {
      about: "ශ්‍රී ලංකාවේ සුන්දරත්වය ලොවට ගෙන යන ප්‍රමුඛතම හෝටල් ජාල කළමනාකරණ පද්ධතියකි.",
      quickLinks: "ඉක්මන් සබැඳි",
      contact: "අප අමතන්න",
      newsletter: "පුවත් පත්‍රිකාව",
      newsletterSub: "සුවිශේෂී දීමනා සඳහා ලියාපදිංචි වන්න.",
      subscribe: "ලියාපදිංචි වන්න",
      rights: "සියලුම හිමිකම් ඇවිරිණි."
    },
    auth: {
      welcomeBack: "යළි සාදරයෙන් පිළිගනිමු",
      signIn: "ඔබගේ ගමන කරගෙන යාමට ඇතුළු වන්න",
      email: "විද්‍යුත් තැපෑල",
      password: "මුරපදය",
      forgot: "මුරපදය අමතකද?",
      noAccount: "ගිණුමක් නැද්ද?",
      createAccount: "නව ගිණුමක් සාදන්න",
      createTitle: "ගිණුමක් සාදන්න",
      createSub: "ඔබගේ ගමන ආරම්භ කිරීමට එකතු වන්න",
      name: "සම්පූර්ණ නම",
      alreadyHave: "දැනටමත් ගිණුමක් තිබේද?",
      loginBtn: "ඇතුල් වන්න",
      registerBtn: "ගිණුම සාදන්න"
    }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", travel: "Voyage", contact: "Contact", login: "Connexion", register: "S'inscrire" },
    flag: "https://flagcdn.com/w40/fr.png",
    langName: "Français",
    home: {
      welcome: "Bienvenue à",
      sriLankan: "Srilankais",
      system: "Système de gestion hôtelière",
      welcoming: "Accueillir le monde",
      guests: "Des invités du monde entier",
      explore: "Explorez nos sanctuaires",
      reviews: "AVIS"
    },
    footer: {
      about: "Un système de gestion hôtelière de premier plan dédié à la présentation de la beauté de Sri Lanka au monde.",
      quickLinks: "Liens Rapides",
      contact: "Nous Contacter",
      newsletter: "Bulletin",
      newsletterSub: "Abonnez-vous pour des offres exclusives.",
      subscribe: "S'abonner",
      rights: "Tous droits réservés."
    },
    auth: {
      welcomeBack: "Content de te revoir",
      signIn: "Connectez-vous pour continuer votre voyage",
      email: "Adresse Email",
      password: "Mot de passe",
      forgot: "Mot de passe oublié?",
      noAccount: "Vous n'avez pas de compte?",
      createAccount: "Créer un compte",
      createTitle: "Créer un compte",
      createSub: "Rejoignez Siyala pour commencer votre voyage",
      name: "Nom complet",
      alreadyHave: "Vous avez déjà un compte?",
      loginBtn: "Connexion",
      registerBtn: "S'inscrire"
    }
  },
  ja: {
    nav: { home: "ホーム", about: "概要", travel: "旅行", contact: "連絡先", login: "ログイン", register: "登録" },
    flag: "https://flagcdn.com/w40/jp.png",
    langName: "日本語",
    home: {
      welcome: "へようこそ",
      sriLankan: "スリランカの",
      system: "ホテル管理システム",
      welcoming: "世界を歓迎する",
      guests: "世界中からのゲスト",
      explore: "私たちの聖域を探索する",
      reviews: "レビュー"
    },
    footer: {
      about: "スリランカの自然の美しさと豊かな遺産を世界に紹介する、一流のマルチチェーンホテル管理システム。",
      quickLinks: "クイックリンク",
      contact: "お問い合わせ",
      newsletter: "ニュースレター",
      newsletterSub: "限定オファーや最新情報を購読する。",
      subscribe: "購読する",
      rights: "無断転載を禁じます。"
    },
    auth: {
      welcomeBack: "お帰りなさい",
      signIn: "旅を続けるためにサインインしてください",
      email: "メールアドレス",
      password: "パスワード",
      forgot: "パスワードをお忘れですか？",
      noAccount: "アカウントを持っていませんか？",
      createAccount: "作成する",
      createTitle: "アカウント作成",
      createSub: "シヤラに参加して旅を始めましょう",
      name: "フルネーム",
      alreadyHave: "すでにアカウントを持っていますか？",
      loginBtn: "ログイン",
      registerBtn: "作成する"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
