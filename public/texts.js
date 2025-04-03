const formatStr = (template, vars) => {
    return template.replace(/{{(.*?)}}/g, (_, key) => vars[key] || "");
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export default {
    formatStr,

    CONTACT_EMAIL: "goby640@gmail.com",

    HEADER_NAME: "Ім'я сайту",
    HEADER_TEXT: `Супровідний текст.
    Може містити кілька абзаців.`,

    FOOTER_COPYRIGHT_TEXT: `© <a href="mailto:{{email}}">{{author}}</a> {{year}}`,
    FOOTER_LICENSE_TEMPLATE_TEXT: `Текст доступний на умовах ліцензії <a href="{{license_link}}">{{license}}</a>;
    також можуть діяти додаткові умови.
    Використовуючи цей сайт Ви погоджуєтесь із <a href="{{terms_link}}">{{terms}}</a> та <a href="{{privacy_link}}">{{privacy}}</a>.`,
    FOOTER_LICENSE_LINK_TEXT: "Creative Commons Attribution-NonCommercial 4.0 License",
    FOOTER_LICENSE_LINK_URL: "https://creativecommons.org/licenses/by-nc/4.0/deed.uk",
    FOOTER_TERMS_OF_USE_TEXT: "Умовами використання",
    FOOTER_TERMS_OF_USE_URL: baseUrl + "#/terms",
    FOOTER_PRIVACY_POLICY_TEXT: "Політикою конфіденційності",
    FOOTER_PRIVACY_POLICY_URL: baseUrl + "#/privacy",
    FOOTER_CONTACT_SHORT_TEMPLATE: `Зворотній зв'язок: <a href="mailto:{{email}}">{{email}}</a>`,
    FOOTER_CONTACT_LONG_TEMPLATE: `Знайшли невірну інформацію, неточності чи неповні дані? Напишіть листа на <a href="mailto:{{email}}">{{email}}</a>!
    Доповнення та виправлення інформації дуже заохочується!
    Саме Ваш внесок може стати критичним для когось, хто проходить цей шлях.`,

    NOT_FOUND_TEXT: "Сторінку не знайдено"
};