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

    NOT_FOUND_TEXT: "Сторінку не знайдено",

    MAIN_UPPER_TEXT: `Попередня інструкція.
    Ймовірно міститиме кілька абзаців.`,

    MAIN_PSYCHIATRIST_BUTTON: "1. Психіатр",
    MAIN_ENDOCRYNOLOGIST_BUTTON: "2. Ендокринолог",

    PSYCHIATRIST_TEXT: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,

};