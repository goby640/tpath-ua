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

    <b id="docs">Головні документи, якими регулюється процес зміни статі в Україні - це <a href="#/beginning#source-1">[1]</a>:</b>
    <ul class="pl-8 list-disc">
        <li id="doc-1"><a href={{doc1}}>Наказ Міністерства охорони здоров’я від 15.09.2016 №972 "Про затвердження та впровадження медико­технологічних документів зі стандартизації медичної допомоги при гендерній дисфорії"</a></li>
        <li id="doc-2"><a href={{doc2}}>Наказ Міністерства охорони здоров’я від 05.10.2016 №1041 "Про встановлення медико-біологічних та соціально-психологічних показань для зміни (корекції) статевої належності та затвердження форми первинної облікової документації й інструкції щодо її заповнення"</a></li>
        <li id="doc-3"><a href={{doc3}}>Наказ Міністерства охорони здоров’я від 25.09.2017 №3007/5</a></li>
    </ul>
    <b id="sources">Джерела:</b>
    <ul class="pl-8 list-decimal">
        <li id="source-1"><a href={{source1}}>Права людини: Зміни до статі</a></li>
        <li id="source-2"><a href={{source2}}>Право на повноцінне життя: як трансґендерам в Україні отримати документи про зміну статі</a></li>
    </ul>`,

    DOC_1_URL:"https://www.dec.gov.ua/mtd/genderna-dysforiya/",
    DOC_2_URL:"https://zakon.rada.gov.ua/laws/show/z1589-16#Text",
    DOC_3_URL:"https://zakon.rada.gov.ua/laws/show/z1187-17#Text",

    SOURCE_1_URL:"https://jurist.ua/?article/1907",
    SOURCE_2_URL:"https://zmina.info/articles/pravo_na_povnocinne_zhittjia_jiak_transjenderam_v_ukrajini_otrimati_dokumenti_pro_zminu_stati/",

    PSYCHIATRIST_TEXT: `Перший крок - це психіатр. До нього необхідно йти <b>маючи дійсну декларацію із сімейним лікарем</b>. Краще за все мати направлення від сімейного лікаря до психіатра за Вашою скаргою, але це не обов'язково.

    Перед походом до психіатра з приводу постановки діагноза F64.0 Транссексуалізм (за МКХ-10) треба спочатку впевнитись, що <b>у Вас немає інших психіатричних хвороб</b>, адже деякі з них можуть впливати на самоідентифікацію або ускладнити діагностику. Тож якщо маєте інший психіатричний діагноз чи підозру на нього, можете спочатку сходити з цього питання до іншого психіатра.

    З приводу F64.0 до психіатра варто йти в <b>державну психіатричну лікарню</b>, оскільки вони мають право видавати епікриз із діагнозом F64.0 та найважливіше - такий епікриз точно приймуть при подальшому лікуванні і в процесі зміни документів. З приводу епікризів від приватних лікарень (навіть якщо вони мають ліцензію, загалом можуть видавати довідки офіційного зразка і мають стаціонар) такої впевненості немає.

    Також <b>не обов'язково звертатись в лікарню за пропискою чи за місцем проживання</b>. Це корисно, бо не всі психіатри адекватно ставляться до цього діагнозу. Знайти психіатра, який дійсно може Вам допомогти можна через знайомих або через організації, які надають підтримку і допомогу ЛГБТ+ людям чи конкретно трансгендерним людям. Але якщо звертаєтеся не за пропискою, то можете зіткнутись із необхідністю зробити благодійний внесок у фонд лікарні, це може влетіти у кілька тисяч гривень.

    Згідно з <a href={{doc1}}>протоколами лікування гендерної дисфорії</a> для отримання епікризу із діагнозом F64.0 необхідно АБО спостерігатись у психіатра протягом щонайменше двох років АБО лягти у стаціонар щонайменше на два тижні (покладуть Вас у відділення відповідно до Вашої статі при народженні). Якщо лягати в стаціонар, то зауважте, що у Вас є опція лягти на <b>денний стаціонар</b>, а не цілодобовий - тоді матимете змогу ночувати вдома чи в готелі/хостелі/тощо. І найімовірніше Ви захочете ночувати де завгодно, тільки не в психлікарні, тож денний стаціонар може стати дуже в нагоді.

    Варто підготуватись чітко і за можливості коротко сформулювати свої скарги, почуття, емоції та історію Вашого усвідомлення. Пам'ятайте навіщо Ви туди йдете і майте відповідний вигляд за можливості.


    Прийти до психіатра необхідно із: 
    <ul class="pl-8 list-disc">
        <li>Паспортом-книжечкою АБО ID-карткою + витягом про місце проживання (не довідка ВПО)</li>
        <li>Якщо Ви ВПО (внутрішньопереміщена особа) то також із довідкою ВПО</li>
        <li>Можливо знадобиться ідентифікаційний код</li>
        <li>Маючи оформлену і діючу декларацією із сімейним лікарем</li>
    </ul>

    В результаті перебування у стаціонарі маєте отримати:
    <ul class="pl-8 list-disc">
        <li><b>Епікриз виписний з діагнозом F64.0 Транссексуалізм за МКХ-10</b>. Обов'язково має стояти печатка медичного закладу та підписи лікарів - без цього довідка не вважається дійсною.</li>
    </ul>`,
    // TODO add illustrative images to instruction

    PSYCHIATRIST_INPUT_1: "Декларація із сімейним лікарем",
    PSYCHIATRIST_INPUT_2: "Паспорт або ID-картка + витяг про місце проживання (не довідка ВПО)",
    PSYCHIATRIST_INPUT_3: "Довідка ВПО якщо Ви ВПО",
    PSYCHIATRIST_INPUT_4: "Ідентифікаційний код",
    PSYCHIATRIST_INPUT_5: "(?) Гроші",
    PSYCHIATRIST_OUTPUT_1: "Епікриз виписний із F64.0",
    PSYCHIATRIST_TIME: "2 тижні або 2 роки",
    PSYCHIATRIST_PRICE: "0 грн. або ~5-7 тис. грн.",

    ENDOCRYNOLOGIST_TEXT: `Наступний крок - початок гормональної терапії та отримання довідки від ендокринолога про це. Щодо гормональної терапії необхідно консультуватись із ендокринологом, який знається на гормональній терапії для трансгендерних людей, саме Вашого випадку (тобто FtM female-to-male або MtF male-to-female; лікар може мати досвід як з обома напрямками, так і лише з якимось одним). Краще за все шукати контакти лікаря або по знайомим, які проходили цей шлях, або через організації, які надають допомогу та підтримку ЛГБТ+ людям.

    Для початку гормонотерапії та отримання довідки і рецепта Вам потрібно <b>сходити на прийом до ендокринолога</b>. Можливо не один, залежно від Вашої ситуації.
    
    І хоча Ви можете обрати для консультацій та визначення курсу лікування будь-якого лікаря-ендокринолога не лише з <b>державної лікарні</b>, а й з <b>приватної клініки</b>, але для отримання довідки Вам обов'язково треба уточнити <b>чи може цей лікар видати таку довідку</b>, бо деякі приватні заклади мають право видавати офіційні довідки, а деякі - ні. Тож якщо питання отримання довідки для Вас важливе і без довідки Ви не бачите сенсу у прийомі, то варто уточнити це питання перед прийомом.

    Якщо Ви знаєте які аналізи потрібні перед прийомом з приводу призначення замісної гормональної терапії при зміні статі (або приблизно здогадуєтесь і маєте гроші :D), то можете прийти до ендокринолога попередньо зробивши ці аналізи. Зазвичай це може бути клінічний аналіз крові, в окремих випадках коагулограма, аналізи на статеві гормони звичні для Вашої статі при народженні та аналізи на статеві гормони звичні для бажаної статевої належності. Не всі аналізи з перелічених можуть бути обов'язковими, також можуть призначати додаткові аналізи залежно від Ваших хвороб та стану здоров'я. <b>Конкретний перелік аналізів Вам може сказати лише лікар.</b>
    
    Прийти до ендокринолога необхідно із: 
    <ul class="pl-8 list-disc">
        <li>Паспортом-книжечкою АБО ID-карткою + витягом про місце проживання (не довідка ВПО)</li>
        <li>Якщо Ви ВПО (внутрішньопереміщена особа) то також із довідкою ВПО</li>
        <li>Можливо знадобиться ідентифікаційний код</li>
        <li>Маючи оформлену і діючу декларацією із сімейним лікарем</li>
        <li>Епікризом з психіатричної лікарні із діагнозом F64.0 Транссексуалізм за МКХ-10</li>
    </ul>

    В результаті маєте отримати:
    <ul class="pl-8 list-decimal">
        <li><b>Довідку 028/о - Консультаційний висновок ендокринолога</b>. Там має бути зазначена причина звернення (F64.0) та <b>призначення гормональної терапії</b> (конкретний препарат або діюча речовина та вказівки щодо застосування - дозування, частота прийому, тощо).
        Довідка обов'язково має мати <b>печатку медичного закладу, особисту печатку лікаря та підпис лікаря</b>, без цього довідка не вважається дійсною ані для подальших документальних процесів, ані для власне гормональної терапії.</li>
        <li><b>Рецепт</b> на призначений препарат. Може бути виданий в паперовій або електронній формі.</li>
    </ul>`,

    ENDOCRYNOLOGIST_INPUT_1: "Декларація із сімейним лікарем",
    ENDOCRYNOLOGIST_INPUT_2: "Паспорт або ID-картка + витяг про місце проживання (не довідка ВПО)",
    ENDOCRYNOLOGIST_INPUT_3: "Довідка ВПО якщо Ви ВПО",
    ENDOCRYNOLOGIST_INPUT_4: "Ідентифікаційний код",
    ENDOCRYNOLOGIST_INPUT_5: "Епікриз виписний із F64.0",
    ENDOCRYNOLOGIST_INPUT_6: "(?) Результати аналізів",
    ENDOCRYNOLOGIST_INPUT_7: "(?) Гроші",
    ENDOCRYNOLOGIST_OUTPUT_1: "Довідка 028/о з призначеною гормональною терапією",
    ENDOCRYNOLOGIST_OUTPUT_2: "Рецепт на препарат",
    ENDOCRYNOLOGIST_TIME: "1-35 днів на первинні прийоми та від 6 місяців до кількох років на результати терапії",
    ENDOCRYNOLOGIST_PRICE: "0 грн. або ~500-2000 грн. за кожен прийом",

    TERMS_OF_USE_FULL_TEXT: `TBD
    
    Уся інформація, що представлена на цьому ресурсі, не є медичними та/або юридичними порадами та/або будь-яким іншим видом порад. Дані збирались з досвіду живих людей, за можливості доповнювались посиланням на чинне законодавство, але все ще можуть бути не повними чи не точними. Автори, а також люди, які доповнювали інформацію на сайті, не несуть жодної відповідальності за дії, які ...............`,

    PRIVACY_POLICY_FULL_TEXT: `TBD`,
};