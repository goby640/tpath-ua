const formatStr = (template, vars) => {
    return template.replace(/{{(.*?)}}/g, (_, key) => vars[key] || "");
};

const baseUrl = import.meta.env.VITE_BASE_URL;

export default {
    formatStr,

    CONTACT_EMAIL: "goby640@gmail.com",
    AUTHOR_NAME: "Goby640",

    HEADER_NAME: "Трансгендерний перехід в Україні",
    HEADER_TEXT: `Про документально-бюрократичні процеси, часті питання та інше.`,

    TERMS_OF_USE_URL: baseUrl + "#/terms",
    PRIVACY_POLICY_URL: baseUrl + "#/privacy",

    FOOTER_COPYRIGHT_TEXT: `© {{author}}, {{year}}`,
    FOOTER_LICENSE_TEMPLATE_TEXT: `Текст доступний на умовах ліцензії <a href="{{license_link}}">{{license}}</a>;
    також можуть діяти додаткові умови.
    Використовуючи цей сайт Ви погоджуєтесь із <a href="{{terms_link}}">{{terms}}</a> та <a href="{{privacy_link}}">{{privacy}}</a>.`,
    FOOTER_LICENSE_LINK_TEXT: "Creative Commons Attribution-NonCommercial 4.0 License",
    FOOTER_LICENSE_LINK_URL: "https://creativecommons.org/licenses/by-nc/4.0/deed.uk",
    FOOTER_TERMS_OF_USE_TEXT: "Умовами використання",
    FOOTER_PRIVACY_POLICY_TEXT: "Політикою конфіденційності",
    FOOTER_CONTACT_SHORT_TEMPLATE: `Зворотній зв'язок: <a href="mailto:{{email}}">{{email}}</a>`,
    FOOTER_CONTACT_LONG_TEMPLATE: `Знайшли невірну інформацію, неточності чи неповні дані? Напишіть листа на <a href="mailto:{{email}}">{{email}}</a>!
    Доповнення та виправлення інформації дуже заохочується!
    Саме Ваш внесок може стати критичним для когось, хто проходить цей шлях.`,

    NOT_FOUND_TEXT: "Сторінку не знайдено",
    MAINTENANCE_TEXT: "Ведуться технічні роботи",

    TERMS_OF_USE_LABEL: "Умови використання",

    MAIN_UPPER_TEXT: `Отож, Ви трансгендерна людина. Що робити далі? З чого почати? Цей гайд допоможе зорієнтуватись.

    <b>Інформація на цьому ресурсі надається виключно з ознайомчою метою та не є професійною порадою. Детальніше — дивись <a href="{{terms_url}}">{{terms_label}}</a>.</b>
    
    На цій сторінці представлена вводна інформація і посилання на <b>конкретні кроки</b> в <b>чіткому порядку</b>, в якому вони мають виконуватись для здійснення переходу uромадянами України в Україні і його юридичного визнання.`,

    MAIN_BEGINNING_BUTTON: "1. Початок",
    MAIN_PSYCHIATRIST_BUTTON: "2. Психіатр",
    MAIN_ENDOCRYNOLOGIST_BUTTON: "3. Ендокринолог",

    HOME_BUTTON_TEXT: "На головну",

    TEST_TEXT: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,

    BEGINNING_TEXT: `Отож, по-перше, може бути дуже корисним знайти <b>ком'юніті</b> людей, які проходять, проходили чи будуть проходити такий самий шлях, що і Ви. Пошукайте контакти місцевих організацій, що надають підтримку і допомогу ЛГБТ+ людям.

    Також Вам може знадобитись допомога <b>психолога</b>. Контакти психологів, які точно не мають передвзятості відносно трансгендерних людей можна знайти у організацій, що надають підтримку і допомогу ЛГБТ+ людям. Іноді такі організації можуть надавати безкоштовні прийоми для ЛГБТ+ людей.

    Для отримання подальшої допомоги та здійснення трансгендерного переходу Вам має виповнитись 18 років. До цього моменту за потреби можна спостерігатись у психолога та у психіатра.
    
    Далі треба знайти <b>лікарів</b>, які змогли би Вам допомогти. Нажаль не всі лікарі знають про трансгендерних людей і ставлення до них може бути дуже різним. Тож готуйтесь багато пояснювати і можливо навіть сваритись - як повезе; але нерідко попадаються і лікарі, яким або все одно або вони налаштовані відкрито, при чому навіть якщо вперше стикаються з трансгендерними людьми, тож не варто боятись їх. Ну і краще не витрачати свої нерви на лікарів, які ставляться вороже чи проявляють нерозуміння, зверхність або ігнорування Ваших скарг чи потреб.
    
    Контакти <b>профільних лікарів</b>, які знаються на <b>специфіці трансгендерних людей</b> і необхідні для здійснення переходу (наразі це психіатр, ендокринолог та сімйний лікар), найкраще брати у місцевих чи всеукраїнських організацій, що надають підтримку і допомогу ЛГБТ+ людям, або ж через знайомих, які уже пройшли чи наразі проходять через це.

    Також варто зазначити, що наразі оперативні втручання не є обов'язковими для зміни документів.
    
    <b>ВАЖЛИВО!</b>
    Для отримання довідок, необхідних для подальшої зміни документів, Вам <b>ОБОВ'ЯЗКОВО</b> необхідно звертатись саме до лікарів, які працюють в <b>ДЕРЖАВНИХ медичних установах</b> за своїм профілем! І обов'язково при зверненні одразу питати чи вони зможуть видати Вам необхідну довідку!
    Деякі лікарі, що працюють виключно в приватних медичних установах, можуть казати, що вони також видають необхідні довідки, але немає гарантій, що довідку, яку видали на базі приватної медичної установи, приймуть при зміні документів. Це особливо актуально для довідки від психіатра, адже це може коштувати доволі дорого і займати найбільше часу.
    Втім якщо сімейний лікар чи лікар-ендокринолог працює одночасно і в приватній і в державній установах, то він/вона може прийняти Вас у приватній установі, але видати довідку на базі державної установи.
    Але знову наголошую, що це не стосується психіатра, адже там важливо спостерігатись в стаціонарі, тобто на базі лікарні.

    <b>Головні документи, якими регулюється процес зміни статі в Україні - це <a href="#/beginning#source-1">[1]</a>:</b>
    <ul class="pl-8 list-disc">
        <li><a href="https://www.dec.gov.ua/mtd/genderna-dysforiya/">Наказ Міністерства охорони здоров’я від 15.09.2016 №972 "Про затвердження та впровадження медико­технологічних документів зі стандартизації медичної допомоги при гендерній дисфорії"</a></li>
        <li><a href="https://zakon.rada.gov.ua/laws/show/z1589-16#Text">Наказ Міністерства охорони здоров’я від 05.10.2016 №1041 "Про встановлення медико-біологічних та соціально-психологічних показань для зміни (корекції) статевої належності та затвердження форми первинної облікової документації й інструкції щодо її заповнення"</a></li>
        <li><a href="https://zakon.rada.gov.ua/laws/show/z1187-17#Text">Наказ Міністерства охорони здоров’я від 25.09.2017 №3007/5</a></li>
    </ul>
    <b id="sources">Джерела:</b>
    <ul class="pl-8 list-decimal">
        <li id="source-1"><a href="https://jurist.ua/?article/1907">Права людини: Зміни до статі ("Український юрист", автор: Олег Бєлов)</a></li>
        <li id="source-2"><a href="https://zmina.info/articles/pravo_na_povnocinne_zhittjia_jiak_transjenderam_v_ukrajini_otrimati_dokumenti_pro_zminu_stati/">Право на повноцінне життя: як трансґендерам в Україні отримати документи про зміну статі ("Зміна", авторка: Оксана Расулова)</a></li>
    </ul>`,

    PSYCHIATRIST_TEXT: `Перший крок - це психіатр. До нього необхідно йти <b>маючи дійсну декларацію із сімейним лікарем</b>. Краще за все мати направлення від сімейного лікаря до психіатра за Вашою скаргою, але це не обов'язково.

    Перед походом до психіатра з приводу постановки діагноза F64.0 Транссексуалізм (за МКХ-10) треба спочатку впевнитись, що у Вас немає інших психіатричних хвороб, адже деякі з них можуть впливати на самоідентифікацію або ускладнити діагностику. Тож якщо маєте інший психіатричний діагноз чи підозру на нього, можете спочатку сходити з цього питання до іншого психіатра.

    З приводу F64.0 до психіатра варто йти в державну психіатричну лікарню, оскільки вони мають право видавати епікриз із діагнозом F64.0 та найважливіше - такий епікриз точно приймуть при подальшому лікуванні і в процесі зміни документів. З приводу епікризів від приватних лікарень (навіть якщо вони мають ліцензію, загалом можуть видавати довідки офіційного зразка і мають стаціонар) такої впевненості немає.

    Також не обов'язково звертатись в лікарню за пропискою чи за місцем проживання. Це корисно, бо не всі психіатри адекватно ставляться до цього діагнозу. Знайти психіатра, який дійсно може Вам допомогти можна через знайомих або через організації, які надають підтримку і допомогу ЛГБТ+ людям чи конкретно трансгендерним людям. Але якщо звертаєтеся не за пропискою, то можете зіткнутись із необхідністю зробити благодійний внесок у фонд лікарні, це може влетіти у кілька тисяч гривень.

    За законом (<a href="/todo">посилання</a>) для отримання епікризу із діагнозом F64.0 необхідно АБО спостерігатись у психіатра протягом щонайменше двох років АБО лягти у стаціонар щонайменше на два тижні (покладуть Вас у відділення відповідно до Вашої статі при народженні). Якщо лягати в стаціонар, то зауважте, що у Вас є опція лягти на <b>денний стаціонар</b>, а не цілодобовий - тоді матимете змогу ночувати вдома чи в готелі/хостелі/тощо. І найімовірніше, Ви захочете ночувати де завгодно, тільки не психлікарні, тож денний стаціонар може стати дуже в нагоді.

    В результаті перебування у стаціонарі маєте отримати <b>епікриз виписний з діагнозом F64.0 Транссексуалізм за МКХ-10</b>.`,
    // TODO add illustrative images to instruction

    PSYCHIATRIST_INPUT_1: "Декларація із сімейним лікарем",
    PSYCHIATRIST_INPUT_2: "(?) Гроші",
    PSYCHIATRIST_OUTPUT_1: "Епікриз виписний із F64.0",
    PSYCHIATRIST_TIME: "2 тижні або 2 роки",
    PSYCHIATRIST_PRICE: "0 грн. або ~5-7 тис. грн.",

    ENDOCRYNOLOGIST_TEXT: ``,

    TERMS_OF_USE_FULL_TEXT: `TBD
    
    Уся інформація, що представлена на цьому ресурсі, не є медичними та/або юридичними порадами та/або будь-яким іншим видом порад. Дані збирались з досвіду живих людей, за можливості доповнювались посиланням на чинне законодавство, але все ще можуть бути не повними чи не точними. Автори, а також люди, які доповнювали інформацію на сайті, не несуть жодної відповідальності за дії, які ...............`,

    PRIVACY_POLICY_FULL_TEXT: `TBD`,
};