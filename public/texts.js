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
    NOTARY_URL: baseUrl + "#/notary",
    
    LICENSE_LINK_TEXT: "Creative Commons Attribution-NonCommercial 4.0 License",
    LICENSE_LINK_URL: "https://creativecommons.org/licenses/by-nc/4.0/deed.uk",

    FOOTER_COPYRIGHT_TEXT: `© {{author}}, {{year}}`,
    FOOTER_LICENSE_TEMPLATE_TEXT: `Текст доступний на умовах ліцензії <a href="{{license_link}}">{{license}}</a>;
    також можуть діяти додаткові умови.
    Використовуючи цей сайт Ви погоджуєтесь із <a href="{{terms_link}}">{{terms}}</a> та <a href="{{privacy_link}}">{{privacy}}</a>.`,
    FOOTER_TERMS_OF_USE_TEXT: "Умовами використання",
    PRIVACY_POLICY_TEXT: "Політикою конфіденційності",
    FOOTER_CONTACT_SHORT_TEMPLATE: `Зворотній зв'язок: <a href="mailto:{{email}}">{{email}}</a>`,
    FOOTER_CONTACT_LONG_TEMPLATE: `Знайшли невірну інформацію, неточності чи неповні дані? Напишіть листа на <a href="mailto:{{email}}">{{email}}</a>!
    Доповнення та виправлення інформації дуже заохочується!
    Саме Ваш внесок може стати критичним для когось, хто проходить цей шлях.`,

    NOT_FOUND_TEXT: "Сторінку не знайдено",
    MAINTENANCE_TEXT: "Ведуться технічні роботи",

    TERMS_OF_USE_LABEL: "Умови використання",

    MAIN_UPPER_TEXT: `Отож, Ви трансгендерна людина. Що робити далі? З чого почати? Цей гайд допоможе зорієнтуватись.

    <b>Інформація на цьому ресурсі надається виключно з ознайомчою метою та не є професійною порадою. Детальніше — дивись <a href="{{terms_url}}">{{terms_label}}</a>.</b>
    
    На цій сторінці представлена вводна інформація і посилання на <b>конкретні кроки</b> в <b>чіткому порядку</b>, в якому вони мають виконуватись для здійснення переходу uромадянами України в Україні і його юридичного визнання. 
    
    Ви <b>не можете міняти місцями</b> чи пропускати ці кроки якщо це не сказано прямо в розділі. Навіть якщо Вам десь на гарячій лінії чи в самій установі казатимуть, що Ви можете. Люди можуть <b>не знати процедур</b>. І навіть якщо первинно Ваші документи десь приймуть, вони підуть оброблятись далі вище, до людей, які керуються законами, наказами і посадовими інструкціями, де Ваші документи розвернуть і Ви втратите час і гроші.`,

    MAIN_BOTTOM_TEXT: `Вітаю, Ви справились!`,

    MAIN_BEGINNING_BUTTON: "1. Початок та посилання на джерела",
    MAIN_PSYCHIATRIST_BUTTON: "2. Психіатр",
    MAIN_ENDOCRYNOLOGIST_BUTTON: "3. Ендокринолог",
    MAIN_SURGERIES_BUTTON: "4. Операції (опційно)",
    MAIN_GP_BUTTON: "5. Сімейний лікар",
    MAIN_NOTARY_BUTTON: "6. Нотаріус",
    MAIN_BIRTH_CERT_BUTTON: "7. Свідоцтво про народження + Повний витяг про народження",
    MAIN_PASSPORTS_BUTTON: "8. Паспорт та закордонний паспорт",
    MAIN_TAX_CODE_BUTTON: "9. ІПН - Картка платника податків",
    MAIN_ADDRESS_REGISTER_BUTTON: "10. Реєстр територіальної громади",
    MAIN_ENTREPRENEURSHIP_BUTTON: "11. Дані про ФОП та інші документи підприємницької діяльності (якщо є)",
    MAIN_BANKS_BUTTON: "12. Дані в банках",
    MAIN_EMPLOYMENT_BOOK_BUTTON: "13. Трудова книжка (якщо є)",
    MAIN_DIPLOMAS_BUTTON: "14. Дипломи (якщо є)",
    MAIN_REGISTERS_BUTTON: "15. Державні реєстри",
    MAIN_HEALTH_DB_BUTTON: "16. ЕСОЗ та helsi",
    MAIN_DRIVERS_LICENSE_BUTTON: "17. Водійське посвідчення",
    MAIN_OWNERSHIP_DOCS_BUTTON: "18. Документи на право власності",
    MAIN_CONTRACTS_BUTTON: "19. Інші договори та контракти",
    MAIN_MILITARY_OFFICE_BUTTON: "20. ТЦК та СП",

    HOME_BUTTON_TEXT: "На головну",

    BEGINNING_TEXT: `Отож, по-перше, може бути дуже корисним знайти <b>ком'юніті</b> людей, які проходять, проходили чи будуть проходити такий самий шлях, що і Ви. Пошукайте контакти місцевих організацій, що надають підтримку і допомогу ЛГБТ+ людям.

    Також Вам може знадобитись допомога <b>психолога</b>. Контакти психологів, які точно не мають передвзятості відносно трансгендерних людей можна знайти у організацій, що надають підтримку і допомогу ЛГБТ+ людям. Іноді такі організації можуть надавати безкоштовні прийоми для ЛГБТ+ людей.

    Для отримання подальшої допомоги та здійснення трансгендерного переходу Вам має виповнитись 18 років. До цього моменту за потреби можна спостерігатись у психолога та у психіатра.
    
    Далі треба знайти <b>лікарів</b>, які змогли би Вам допомогти. Нажаль не всі лікарі знають про трансгендерних людей і ставлення до них може бути дуже різним. Тож готуйтесь багато пояснювати і можливо навіть сваритись - як повезе; але нерідко попадаються і лікарі, яким або все одно або вони налаштовані відкрито, при чому навіть якщо вперше стикаються з трансгендерними людьми, тож не варто боятись їх. Ну і краще не витрачати свої нерви на лікарів, які ставляться вороже чи проявляють нерозуміння, зверхність або ігнорування Ваших скарг чи потреб.
    
    Контакти <b>профільних лікарів</b>, які знаються на <b>специфіці трансгендерних людей</b> і необхідні для здійснення переходу (наразі це психіатр, ендокринолог та сімйний лікар), найкраще брати у місцевих чи всеукраїнських організацій, що надають підтримку і допомогу ЛГБТ+ людям, або ж через знайомих, які уже пройшли чи наразі проходять через це.

    Також варто зазначити, що наразі оперативні втручання не є обов'язковими для зміни документів.

    Якщо у Вас виникнуть проблеми чи додаткові питання щодо правових моментів чи бюрократичних процедур та чинного законодавства, Ви можете <b>звернутись до юриста</b>, який спеціалізується на допомозі людям, що належать до ЛГБТ+. Контакти таких юристів можна спитати у організаціях, що допомагають та надають підтримку людям, що належать до ЛГБТ+. Випадкові юристи можуть не знатись на специфіці трансгендерних людей і, за досвідом, можуть як нормально виконати свою роботу і дійсно закопатись в законодавство навіть якщо не мали попередньо цих знань, так і не закопуватись і почати щось дуже дивне вигадувати і викачувати гроші. Особливо це стосується зараз консультацій щодо відвідування ТЦК та СП. Тож якщо звертаєтесь до юристів, які не мають відповідного досвіду, обов'язково докладно розпитуйте про план дій, посилання на законодавство, тощо, а ще не піддавайтесь на маніпуляції та залякування.
    
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
    <b id="docs">Нотаріальне завірення <a href="#/beginning#source-3">[3]</a>:</b>
    <ul class="pl-8 list-disc">
        <li id="doc-1"><a href={{doc1}}>Наказ Міністерства охорони здоров’я від 15.09.2016 №972 "Про затвердження та впровадження медико­технологічних документів зі стандартизації медичної допомоги при гендерній дисфорії"</a></li>
        <li id="doc-2"><a href={{doc2}}>Наказ Міністерства охорони здоров’я від 05.10.2016 №1041 "Про встановлення медико-біологічних та соціально-психологічних показань для зміни (корекції) статевої належності та затвердження форми первинної облікової документації й інструкції щодо її заповнення"</a></li>
        <li id="doc-3"><a href={{doc3}}>Наказ Міністерства охорони здоров’я від 25.09.2017 №3007/5</a></li>
    </ul>
    <b id="sources">Джерела:</b>
    <ul class="pl-8 list-decimal">
        <li id="source-1"><a href={{source1}}>Права людини: Зміни до статі - Український юрист</a></li>
        <li id="source-2"><a href={{source2}}>Право на повноцінне життя: як трансґендерам в Україні отримати документи про зміну статі - Зміна Інфо</a></li>
        <li id="source-3"><a href="{{source3}}">Засвідчення вірності копій документів - WikiLegalAid</a></li>
        <li id="source-4"><a href="{{source4}}">Консультації, роз’яснення, поради - Головне управління Держгеокадастру у Житомирській області</a></li>
    </ul>`,

    DOC_1_URL: "https://www.dec.gov.ua/mtd/genderna-dysforiya/",
    DOC_2_URL: "https://zakon.rada.gov.ua/laws/show/z1589-16#Text",
    DOC_3_URL: "https://zakon.rada.gov.ua/laws/show/z1187-17#Text",

    SOURCE_1_URL: "https://jurist.ua/?article/1907",
    SOURCE_2_URL: "https://zmina.info/articles/pravo_na_povnocinne_zhittjia_jiak_transjenderam_v_ukrajini_otrimati_dokumenti_pro_zminu_stati/",
    SOURCE_3_URL: "https://legalaid.wiki/index.php/%D0%97%D0%B0%D1%81%D0%B2%D1%96%D0%B4%D1%87%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%96_%D0%BA%D0%BE%D0%BF%D1%96%D0%B9_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%96%D0%B2",
    SOURCE_4_URL: "https://zhytomyrska.land.gov.ua/zapitannya-vidpovidi/",

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
    </ul>
    
    <b>ВАЖЛИВО!</b>
    Епікриз виписний видається в єдиному екземплярі! Він не може бути нотаріально завірений. Вкрай бажано не втратити його, зробити декілька звичайних ксерокопій та не віддавати оригінал нікому! Віддавати тільки копії, оригінал показувати, але бажано навіть не випускати з рук!`,
    // TODO add illustrative images to instruction

    PSYCHIATRIST_INPUT_1: "Декларація із сімейним лікарем",
    PSYCHIATRIST_INPUT_2: "Паспорт або ID-картка + витяг про місце проживання (не довідка ВПО)",
    PSYCHIATRIST_INPUT_3: "(?) Довідка ВПО",
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
        <li>Опційно для першого прийому, але обов'язково загалом - з результатами аналізів</li>
    </ul>

    В результаті маєте отримати:
    <ul class="pl-8 list-decimal">
        <li><b>Довідку 028/о - Консультаційний висновок ендокринолога</b>. Там має бути зазначена причина звернення (F64.0) та <b>призначення гормональної терапії</b> (конкретний препарат або діюча речовина та вказівки щодо застосування - дозування, частота прийому, тощо).
        Довідка обов'язково має мати <b>печатку медичного закладу, особисту печатку лікаря та підпис лікаря</b>, без цього довідка не вважається дійсною ані для подальших документальних процесів, ані для власне гормональної терапії.</li>
        <li><b>Рецепт</b> на призначений препарат. Може бути виданий в паперовій або електронній формі.</li>
    </ul>
    
    Довідка 028/о може видаватись в кількох екземплярах, а також видаватись повторно. Втратити її може бути сумно, але в цілому нічого критичного.`,

    ENDOCRYNOLOGIST_INPUT_1: "Декларація із сімейним лікарем",
    ENDOCRYNOLOGIST_INPUT_2: "Паспорт або ID-картка + витяг про місце проживання (не довідка ВПО)",
    ENDOCRYNOLOGIST_INPUT_3: "(?) Довідка ВПО",
    ENDOCRYNOLOGIST_INPUT_4: "Ідентифікаційний код",
    ENDOCRYNOLOGIST_INPUT_5: "Епікриз виписний із F64.0",
    ENDOCRYNOLOGIST_INPUT_6: "(?) Результати аналізів",
    ENDOCRYNOLOGIST_INPUT_7: "(?) Гроші",
    ENDOCRYNOLOGIST_OUTPUT_1: "Довідка 028/о з призначеною гормональною терапією",
    ENDOCRYNOLOGIST_OUTPUT_2: "Рецепт на препарат",
    ENDOCRYNOLOGIST_TIME: `1-35 днів на первинні прийоми
    + 6 міс. - 1-2 р. на результати терапії`,
    ENDOCRYNOLOGIST_PRICE: `0 грн. або ~500-2000 грн. за кожен прийом
    + 1-4 тис. грн. на аналізи`,

    SURGERIES_TEXT: `<b>Операції не є обов'язковими для подальшої документальної зміни статі.</b> Ви можете зробити їх як до, так і після зміни документів, або ж не робити їх взагалі, наприклад, якщо не маєте фінансової можливості чи маєте протипокази по здоров'ю. Це важливий етап, який може мати свої негативні наслідки для здоров'я, хоча їх відсутність також має свої негативні наслідки (окрім власне гендерної дисфорії). Проконсультуйтесь з лікарями, позбирайте якомога більше інформації від інших людей, з відкритих джерел, статей, форумів, редіту, тощо.

    Зауважте, що згідно з <a href={{doc1}}>клінічними протоколами</a> для того, аби зробити операції в Україні, необхідно певний час знаходитись на безперервній гормональній терапії (за необхідності та відсутності протипоказань) та/або певний час прожити в гендерній ролі статі, у яку робиться перехід. Це щонайменше 12 місяців на гормональній терапії та щонайменше 12 місяців життя в бажаній гендерній ролі; виключення - для маммопластики для MtF пацієнтів необхідно щонайменше 18 місяців гормональної терапії.
    
    Уважно ознайомтесь з:
    <ul class="pl-8 list-disc">
        <li>Тим які є операції та методи їх виконання</li>
        <li>Які є протипокази</li>
        <li>Період відновлення</li>
        <li>Побічні ефекти</li>
        <li>Ризики, пов'язані із операцією</li>
        <li>Тощо, список не є вичерпним</li>
    </ul>
    
    <b>В Україні є клініки</b>, які надають послуги з операцій такого профілю. Якість та вартість може бути різною. Набір документів, який необхідний для операції, варто перепитати у конкретного медичного закладу та лікаря. Набір документів може відрізнятись залежно від того чи Ви вже змінили документи чи ні.
    
    Ви можете обрати <b>іншу країну</b>, щоб зробити операцію там, але варто ознайомитись із особливостями отримання медичної допомоги саме в цій країні:
    <ul class="pl-8 list-disc">
        <li>Чи можливо зробити цю операцію в цій країні взагалі та чи можливо це для когось, хто не є громадянином цієї країни та не проживає там</li>
        <li>Чи можливо та чи безпечно відвідувати цю країну людям, які належать до ЛГБТ+</li>
        <li>Які необхідні документи (в тому числі медичні) для операції</li>
        <li>Як потрібно перекласти документи (машинний переклад може не підійти, можливо Вам потрібно буде звернутись в спеціалізоване бюро перекладів, але варто уточнити у конкретного медичного закладу може потрібне спеціальне бюро перекладу зі спеціальною ліцензією, також можливо потрібно буде апостилювати переклад та консульське завірення абощо)</li>
        <li>Які необхідно виконати умови відносно періоду безперервної гормональної терапії та життя в бажаній гендерній ролі та чи є в цій країні такі умови взагалі</li>
        <li>Чи потрібна медична страховка (особливо якщо Ви там проживаєте чи плануєте проживати протягом довгого часу, наприклад, через навчання, роботу чи переїзд загалом) та чи вона покриє Вам цю операцію, також чи приймає конкретний медичний заклад конкретну страховку, тощо</li>
        <li>Чи можливо там зробити операцію іноземцю, особливо якщо Ви не проживаєте в цій країні та/або не маєте страховки якщо вона там розповсюджена (як в країні загалом, так і в конкретній клініці чи у окремого лікаря зокрема)</li>
        <li>Якою може бути орієнтовна вартість операції, особливо актуально для іноземця без медичної страховки, бо ця вартість може дуже сильно відрізнятись відносно вартості для місцевих жителів з медичною страховкою</li>
        <li>Та інші питання, цей список далеко не повний</li>
        <li>Також подумайте хто зможе поїхати з Вами для підтримки та допомоги, бажано щоб це був кровний родич, краще першої лінії спорідненості (батьки чи діти) або подружжя чи зареєствораний цивільний партнер; якщо з Вами поїде хтось з родичів, подружжя чи зареєстрований цивільний партнер, то обов'язково візьміть документальні підтвердження Вашого зв'язку та переклади цих документів (офіційний, можливо навіть завірений, апостильований, тощо)</li>
    </ul>`,

    SURGERIES_INPUT_1: "???",
    SURGERIES_INPUT_2: "Гроші",
    SURGERIES_OUTPUT_1: "(?) Довідка 027/о",
    SURGERIES_TIME: `???`,
    SURGERIES_PRICE: `???`,

    GP_TEXT:`Після досягнення видимих результатів від терапії та досягнення відповідного зовнішнього вигляду, Ви можете звернутись <b>до сімейного лікаря для отримання довідки 066-3/о - Медичне свідоцтво про зміну (корекцію) статевої належності</b>. Ви також можете звернутись до сімейного лікаря, який знається на питаннях щодо трансгендерних людей, Ви можете запитати контакти у знайомих, які проходили цей шлях чи у організацій, які надають допомогу та підтримку людям, що належать до ЛГБТ+.

    Довідка видається <b>лікувально-консультативною комісією</b> при медичному закладі, де працює Ваш сімейний лікар. Якщо це приватний медичний заклад, то він може не мати змогу видати Вам таку довідку, тож краще звернутись за цим до державної лікарні.

    Лікувально-консультативна комісія оцінюватиме чи Ви виглядаєте і поводитесь відповідно до Вашого гендеру, на основі чого Вам можуть видати довідку або відмовити у цьому. В процесі комісії Вам можуть задавати різні питання, оцінювати результати аналізів та медичних втручань. Питання можуть бути різними, як коректними, так і не дуже. Якщо не пощастить із комісією, то Вам можуть задавати дуже некоректні, приватні та дегуманізуючі питання, які не стосуються Вашої гендерної ідентичності. Зокрема, всупереч розповсюдженому стереотипу, сексуальна орієнтація не залежить від гендерної ідентичності. Можуть задавати питання, що відносяться до стереотипних уявлень про жіночі та чоловічі моделі поведінки і інтереси, які, здебільшого, теж не мають відношення до гендерної ідентичності (кореляція, так, є, але не причинно-наслідковий зв'язок). Можуть навіть задавати питання про сексуальну поведінку,  в тому числі занадто приватні і такі, що не стосуються теми, як-от про вподобання щодо конкретних поз, використовування органів, тощо. Якщо Вам задаватимуть некоректні питання, які не стосуються гендерної ідентичності, Ви можете, наприклад, впевнено прояснити свою позицію, що стереотипи не мають до цього відношення або що питання занадто делікатне і Ваших скарг не стосується (ну або спитати яке це має відношення до справи, бо Ви маєте в цьому сумніви і ці питання Вас принижують, якщо це дійсно так); або спокійно давати максимально розпливчасті відповіді; або давати ті відповіді, які, як Ви думаєте, від Вас хочуть почути; або звернутись в інший медичний заклад. Все не так страшно і взагалі не факт, що Ви стикнетесь із таким ставленням. Але залежить від того як повезе, тож принаймні морально підготуватись до такого сценарію зайвим не буде.

    <b>Медичне свідоцтво про зміну (корекцію) статевої належності</b> - окремий документ, який, разом із інструкцією щодо його заповнення, був затверджений <a href={{doc2}}>наказом МОЗ від 05.10.2016 № 1041 "Про встановлення медико-біологічних та соціально-психологічних показань для зміни (корекції) статевої належності та затвердження форми первинної облікової документації й інструкції щодо її заповнення"</a>. В наказі є посилання як на форму довідки, так і на інструкції щодо заповнення. <b>Якщо Ваш сімейний лікар не знає про цю довідку</b> (так, таке також може бути), покажіть йому чи їй цей наказ і разом з'ясуйте як цю довідку заповнювати. Якщо працівники лікарні не знають про таку довідку і відмовляються Вам її видавати через це, відстоюйте своє право на її отримання. Якщо не можете зробити це в лікарні, де хотіли отримати цю послугу, можете залишити скаргу на гарячій лінії МОЗ. Якщо ж Ви не хочете скандалити і витрачати на це свій час, то зверніться до іншого сімейного лікаря в будь-якій іншій медичній установі, але перед заключенням декларації уточніть чи видасть цей лікар таку довідку.
    

    Прийти до сімейного лікаря необхідно із: 
    <ul class="pl-8 list-disc">
        <li>Паспортом-книжечкою АБО ID-карткою + витягом про місце проживання (не довідка ВПО)</li>
        <li>Якщо Ви ВПО (внутрішньопереміщена особа) то також із довідкою ВПО</li>
        <li>Можливо знадобиться ідентифікаційний код</li>
        <li>Маючи оформлену і діючу декларацією із сімейним лікарем</li>
        <li>Епікризом з психіатричної лікарні із діагнозом F64.0 Транссексуалізм за МКХ-10</li>
        <li>Довідкою 028/о від ендокринолога з призначеною замісною гормональною терапією</li>
        <li>Результатами гормональних аналізів</li>
        <li>Довідками 027/о про наявні хірургічні втручання, якщо вони були</li>
    </ul>

    В результаті маєте отримати:
    <ul class="pl-8 list-decimal">
        <li><b>Довідку 066-3/о - Медичне свідоцтво про зміну (корекцію) статевої належності</b>. Там має бути зазначений діагноз F64.0 та перелічені медичні втручання, які були зроблені відносно зміни (корекції) статевої належності.
        Довідка обов'язково має мати <b>печатку медичного закладу, а також ПІБ та підписи лікарів, які складали лікувально-консультативну комісію</b>, без цього довідка не вважається дійсною.</li>
        <li><b>Рецепт</b> на призначений препарат. Може бути виданий в паперовій або електронній формі.</li>
    </ul>
    
    <b>ВАЖЛИВО!</b>
    Довідка 066-3/о видається у двох екземплярах - один Вам на руки, а другий підшивається у вашу медичну картку, яка лишається в цьому медичному закладі.
    
    В подальшому цю довідку забирає ДРАЦС для зміни даних в документах, тому важливо зробити нотаріально завірені копії цієї довідки. Докладніше у <a href={{notary_link}}>розділі про нотаріальне завірення</a>.
    
    Ця довідка може знадобитись Вам у подальшому, наприклад, для зміни даних у вже виданих дипломах про вищу освіту або для ТЦК та СП або для проведення хірургічних втручань.
    
    Якщо Ви віддасте цю довідку в ДРАЦС перш ніж встигнете зробити з неї нотаріально завірені копії, то Ви можете взяти з лікарні медичну картку, в якій буде підшитий другий екземпляр довідки 066-3/о і Ви зможете зробити копії з нього.`,

    GP_INPUT_1: "Декларація із сімейним лікарем",
    GP_INPUT_2: "Паспорт або ID-картка + витяг про місце проживання (не довідка ВПО)",
    GP_INPUT_3: "(?) Довідка ВПО",
    GP_INPUT_4: "Ідентифікаційний код",
    GP_INPUT_5: "Епікриз виписний із F64.0",
    GP_INPUT_6: "Довідка 028/о від ендокринолога",
    GP_INPUT_7: "Результати гормональних аналізів",
    GP_INPUT_8: "(?) Довідки 027/о про наявні хірургічні втручання",
    GP_INPUT_9: "(?) Гроші",
    GP_OUTPUT_1: "Довідка 066-3/о",
    GP_TIME: "1-2 днів",
    GP_PRICE: "0 грн. або ~500-2000 грн. за прийом",

    NOTARY_TEXT: `Вам може знадобитись завітати до нотаріуса аби завірити копію довідки 066-3/о перед тим як піти до ДРАЦСу.
    
    Згідно з матеріалами статей <a href={{source3}}>WikiLegalAid</a> та <a href={{source4}}>Головного управління Держгеокадастру у Житомирській області</a> нотаріуси не мають права завіряти <i>деякі</i> медичні документи, а саме: довідки лікувальних установ про народження дитини, лікарняні свідоцтва і фельдшерські довідки про смерть, довідки і висновки про наявність психічних захворювань. Таким чином не можна робити нотаріально завірену копію епікриза з психіатричної лікарні, але можна зробити копію з довідки 066-3/о.
    
    Статті посилаються на ряд документів, в частині з яких я не зміг знайти конкретні вказівки щодо заборони засвідчення копій документів, а єдиний <a href="https://zakon.rada.gov.ua/laws/show/v9779400-83#Text">документ</a>, в якому я знайшов місце, де це було прямо прописано, з 2022 року <a href="https://zakon.rada.gov.ua/laws/show/2215-20#Text">не застосовується в рамках дерадянізації законодавства України</a>. А <a href="https://zakon.rada.gov.ua/laws/show/3425-12#n733">закон України про нотаріат</a> посилається на інші закони України без конкретики. Тож статті статтями, але посилання на конкретний діючий зараз закон у мене не вийшло знайти.
    
    Але не дивлячись на це Ви можете звернутись за цією послугою до нотаріуса, втім перед походом до нього чи неї краще зателефонувати і спитати чи конкретний нотаріус оформить таку копію. В цілому однієї Вам буде достатньо.`,

    NOTARY_INPUT_1: "Оригінали документів для завірення",
    NOTARY_INPUT_2: "Гроші",
    NOTARY_OUTPUT_1: "Нотаріально завірені копії документів",
    NOTARY_TIME: ">1 години",
    NOTARY_PRICE: "від 300 до 500 за копію",

    TERMS_OF_USE_FULL_TEXT: `<div class="text-3xl font-bold">Умови використання</div>
    <ul class="list-decimal font-bold">
    <li class="ml-6 pl-4 text-lg">Інформаційна мета</li>
    <p class="font-normal">Уся інформація, що розміщена на цьому сайті, надається виключно з ознайомчою метою. Вона не є медичною, юридичною, чи будь-якою іншою професійною порадою, а також не є заміною для професійної медичної чи юридичної консультації.</p>

    <li class="ml-6 pl-4 text-lg">Обмеження відповідальності</li>
    <p class="font-normal">Хоча ми прагнемо надавати точну та актуальну інформацію, ми не гарантуємо її повноту, достовірність чи відповідність чинному законодавству.

    Автори, редактори та інші учасники, які брали участь у створенні або доповненні матеріалів на цьому сайті, не несуть жодної відповідальності за будь-які наслідки, що можуть виникнути в результаті використання цієї інформації або неможливості використання цього сайту чи його вмісту, включаючи, але не обмежуючись, втратами, збитками (прямими або непрямими) або іншим негативним впливом.

    Ми не несемо відповідальності за будь-які помилки чи неточності в інформації, наданій на сайті. Інформація на сайті надається лише для загальних ознайомлювальних цілей, і кожен користувач несе відповідальність за перевірку її актуальності та точності перед застосуванням.</p>

    <li class="ml-6 pl-4 text-lg">Використання інформації</li>
    <p class="font-normal">Користуючись цим сайтом, ви погоджуєтесь самостійно нести відповідальність за будь-які дії, які ви здійснюєте на основі отриманої тут інформації. Ми рекомендуємо завжди консультуватися з відповідними кваліфікованими фахівцями перед прийняттям будь-яких важливих рішень.</p>

    <li class="ml-6 pl-4 text-lg">Ліцензія</li>
    <p class="font-normal">Весь вміст сайту (тексти, зображення, графіка, відео тощо) є власністю авторів сайту і доступний за умовами ліцензії <a href={{license_link}}>{{license}}</a>. Це означає, що ви можете копіювати, поширювати та адаптувати матеріали із зазначенням авторства, але виключно в некомерційних цілях.</p>

    <li class="ml-6 pl-4 text-lg">Політика конфіденційності</li>
    <p class="font-normal">Для детальної інформації про обробку ваших персональних даних, будь ласка, ознайомтеся з нашою <a href={{privacy_link}}>{{privacy}}</a>.</p>

    <li class="ml-6 pl-4 text-lg">Посилання на сторонні ресурси</li>
    <p class="font-normal">Цей сайт може містити посилання на сторонні ресурси. Ми не несемо відповідальності за зміст або доступність таких ресурсів.</p>

    <li class="ml-6 pl-4 text-lg">Інші умови</li>
    <p class="font-normal">Ми залишаємо за собою право змінювати умови використання та політику конфіденційності в будь-який час. Оновлені умови будуть опубліковані на цьому сайті, і ваша подальша взаємодія з сайтом після публікації таких змін означатиме вашу згоду з ними. Зміни в умовах використання та політиці конфіденційності набирають чинності з моменту їх публікації на сайті. Рекомендуємо періодично перевіряти ці умови.
    
    Користувачі можуть зв’язуватися з нами через електронну пошту, зазначену на сайті, щоб повідомити про помилки або запропонувати доповнення до інформації. Надання такої інформації є добровільним, і якщо інше не було попередньо погоджено, користувач погоджується з тим, що надає таку інформацію без очікування на будь-яку компенсацію.</p>
    </ul>`,

    PRIVACY_POLICY_FULL_TEXT: `<div class="text-3xl font-bold">Політика конфіденційності</div>
    Цей сайт не збирає жодної особистої інформації про користувачів.
    
    Ми не використовуємо реєстрацію, форми зворотного зв’язку, аналітичні сервіси чи сторонні рекламні мережі. Сайт може використовувати технічні cookie, необхідні для коректної роботи сайту (наприклад, для перемикання теми оформлення, збереження налаштувань користувача та інших функцій, що не впливають на конфіденційність).
    
    Користувачі можуть добровільно зв’язатися з нами за електронною поштою, зазначеною на сайті, щоб повідомити про помилки або запропонувати доповнення. У такому разі адреса відправника та зміст листа будуть використані виключно для обробки звернення. Електронна пошта обробляється через поштовий сервіс Gmail, на умовах конфіденційності, встановлених цією платформою.
    
    Ми залишаємо за собою право змінювати цю політику конфіденційності. Оновлена політика буде публікуватися на сайті, і ваші подальші взаємодії з сайтом після публікації змін означатимуть вашу згоду з оновленою політикою.
    
    Ми не збираємо, не зберігаємо та не обробляємо персональні дані користувачів без їхньої явної ініціативи та згоди. Усі зібрані дані використовуються лише для обробки звернень через електронну пошту та не зберігаються після завершення обробки.`,
};