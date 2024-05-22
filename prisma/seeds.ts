import { Article, Category, Post, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const initialCategories: Category[] = [
  {
    id: 1,
    name: 'sell',
    label: 'Продам',
    image: 'https://chamala.tatar/uploads/sell.png',
  },
  {
    id: 2,
    name: 'buy',
    label: 'Куплю',
    image: 'https://chamala.tatar/uploads/buy.png',
  },
  {
    id: 3,
    name: 'services',
    label: 'Услуги',
    image: 'https://chamala.tatar/uploads/services.png',
  },
  {
    id: 5,
    name: 'estate',
    label: 'Недвижимость',
    image: 'https://chamala.tatar/uploads/estate.png',
  },
  {
    id: 6,
    name: 'clothes',
    label: 'Одежда',
    image: 'https://chamala.tatar/uploads/clothes.png',
  },
  {
    id: 7,
    name: 'free',
    label: 'Даром',
    image: 'https://chamala.tatar/uploads/free.png',
  },
];

const initialArticles: Article[] = [
  {
    id: 2,
    slug: 'post-sell',
    title: 'Как выгодно продать на досках объявлений',
    body: '<div>\n<p>Наступает момент, когда надо продать вещь. Причины разные: некогда любимый вид спорта перестал\nвас радовать и надо продать велосипед или гантели, купили новый телефон, переезд. Как выгодно\nпродать?</p>\n<p>\nДля начала, постарайтесь сделать хорошое фото вашего товара. Найдите все аксесуары, чеки и упаковку.\n</p>\n<p>\nПосмотрите сколько стоит такой же товар (яндекс маркет вам в помощь). Лучше ориентироваться на самую\nнизкую цену в сетевых магазинах (он-лайн магазины вам не конкуренты). Если товара уже нет в продаже,\nпостарайтесь найти последнюю цену на нее. Вроде все.\n</p>\n<p>\nНо на той стороне вас ждет покупатель и ему тоже хочется выгодной сделки. Считается, что\nпсихологический барьер - 70 процентов от цены нового товара. Если вы будете продавать дороже, то\nпотенциальный покупатель сможет найти альтернативу в виде купонов, скидок и т.д. Но 30 процентов\nскидки в магазине он уже вряд ли получит.\n</p>\n<p>\nЕсли вам позвонили по объявлению, то не соглашайтесь на просьбу скидки по телефону! Такое часто\nвстречается при продаже машин. Перекупы и просто обыкновенные люди с ходу, даже не увидев машины\nи не предъявив объективные причины для скидки, ее просят. Если вы согласитесь сразу, то наверняка у\nних будет соблазн еще скинуть цену при встрече. Если вы уверены в цене, то вы - хозяин ситуации и не\nсоглашайтесь на уступки. Процесс прощания с товаром должен быть приятным и вам, и покупателю.\n</p>\n<p>\nЕсли же звонков нет вообще, то попробуйте каждые пару недель скидывать цену с шагом в 5\nпроцентов. И рано или поздно покупатель найдется, а возможно он уже приметил объявление, но пока\nцена его не устраивала.\n</p>\n<p>\nПриятных сделок!\n</p>\n</div>',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 3,
    slug: 'delete',
    title: 'Удаление данных',
    body: '<div>Чтобы удалить свои данные, напишите к нам запрос на почту <a href="mailto:support@innoads.ru">support@innoads.ru</a>\n</div>',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 4,
    slug: 'agreement',
    title: 'Пользовательское соглашение',
    body: '<div>\n<p>Настоящий документ «Пользовательское соглашение» представляет собой предложение заключить договор на изложенных ниже\nусловиях</p>\n<h2>Соглашения.</h2>\n<h3>1. Общие положения Пользовательского соглашения</h3>\n<p>1.1. В настоящем документе и вытекающих или связанным с ним отношениях Сторон применяются следующие термины и\nопределения:</p>\n<p>а) Платформа — программно-аппаратные средства, интегрированные с Сайтом Администрации;</p>\n<p>б) Пользователь — дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном интересе либо\nвыступающее от имени и в интересах представляемого им юридического лица.</p>\n<p>в) Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене <a href="https://innoads.ru">https://innoads.ru</a> и его\nподдоменах.</p>\n<p>г) Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с использованием Платформы.</p>\n<p>д) Соглашение — настоящее соглашение со всеми дополнениями и изменениями.\n<br>\n<br>\n1.2. Использование вами Сервиса любым способом и в любой форме в пределах его объявленных функциональных возможностей,\nвключая:</p>\n<p>- просмотр размещенных на Сайте материалов;</p>\n<p>- регистрация и/или авторизация на Сайте;</p>\n<p>- размещение или отображение на Сайте любых материалов, включая, но не ограничиваясь такими как: тексты, гипертекстовые\nссылки, изображения, аудио и видео- файлы, сведения и/или иная информация; создает договор на условиях настоящего\nСоглашения в соответствии с положениями ст.437 и 438 Гражданского кодекса Российской Федерации.\n<br>\n<br>\n1.3. Воспользовавшись любой из указанных выше возможностей по использованию Сервиса вы подтверждаете, что:</p>\n<p>а) Ознакомились с условиями настоящего Соглашения в полном объеме до начала использования Сервиса.</p>\n<p>б) Принимаете все условия настоящего Соглашения в полном объеме без каких-либо изъятий и ограничений с вашей стороны и\nобязуетесь их соблюдать или прекратить использование Сервиса. Если вы не согласны с условиями настоящего Соглашения или\nне имеете права на заключение договора на их основе, вам следует незамедлительно прекратить любое использование Сервиса.</p>\n<p>в) Соглашение (в том числе любая из его частей) может быть изменено Администрацией без какого-либо специального\nуведомления. Новая редакция Соглашения вступает в силу с момента ее размещения на Сайте Администрации либо доведения до\nсведения Пользователя в иной удобной форме, если иное не предусмотрено новой редакцией Соглашения.</p>\n<h3>2. Общие условия пользования Сервисом</h3>\n<p>2.1. Использование функциональных возможностей Сервиса допускается только после прохождения Пользователем регистрации\nи авторизации на Сайте в соответствии с установленной Администрацией процедурой.</p>\n<p>2.2. Технические, организационные и коммерческие условия использования Сервиса, в том числе его функциональных\nвозможностей доводятся до сведения Пользователей путем отдельного размещения на Сайте или путем нотификации\nПользователей.</p>\n<p>2.3. Выбранные Пользователем логин и пароль являются необходимой и достаточной информацией для доступа Пользователя на\nСайт. Пользователь не имеет права передавать свои логин и пароль третьим лицам, несет полную ответственность за их\nсохранность, самостоятельно выбирая способ их хранения.</p>\n</div>',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 1,
    slug: 'rules',
    title: 'Правила InnoAds',
    body: '<div>\n<p>⚠️ Пожалуйста, не подавайте одно и то же объявление чаще 1 раза в неделю!</p>\n<p>⚠️За повторное нарушение правил: бан на 3 дня &gt; 7 дней &gt; 30 дней, и навсегда.</p>\n<h2>Объявления подавать через:</h2>\n<div class="mt-4">сайт: <a href="https://innoads.ru">https://innoads.ru</a><br>\nбот: <a href="https://t.me/InnoAdsHelpBot">https://t.me/InnoAdsHelpBot</a></div>\n<h2>Запрещается:</h2>\n<ul>\n<li>Публиковать объявление повторно чаще одного раза в 7 дней.</li>\n<li>Объявления алкогольной и табачной продукции (включая кальяны и вейпы), продажа лекарств, а также наркотических и психотропных средств.</li>\n<li>Публиковать объявления о продаже молочной или мясной продукции без наличия соответствующих документов.</li>\n<li>Публиковать объявления о продаже реплик.</li>\n<li>Публиковать политические лозунги и призывы.</li>\n<li>Публиковать объявления о духовных практиках. Услуги психолога/врача должны подтверждаться дипломом/документом государственного образца.</li>\n</ul>\n<h3>Редакция InnoAds 11.01.2023</h3>\n</div>',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 5,
    slug: 'classifieds',
    title: 'История досок объявлений',
    body: '<div>\nДоски объявлений - это одно из старейших и наиболее эффективных средств обмена информацией между людьми.\nОни представляют собой место, где можно разместить сообщение о продаже товара или услуги, поиске работы или сотрудников, аренде жилья или поиске спутника по хобби.\n<br/>\nИстория досок объявлений начинается задолго до появления интернета и компьютерной технологии. Первые доски объявлений появились в Европе в XVII веке и использовались для распространения информации о торговых операциях, объявлениях о продаже недвижимости и т.д.\n<br/>\nВ настоящее время доски объявлений стали одним из наиболее популярных способов поиска информации и связи между людьми. С появлением интернета доски объявлений перешли в онлайн-режим, что позволило расширить их возможности и увеличить охват аудитории.\n\nСуществует множество различных видов досок объявлений, которые могут быть использованы для различных целей. Одни из них предназначены для размещения рекламы товаров и услуг, другие - для поиска работы или поиска сотрудников. Кроме того, есть доски объявлений, специализирующиеся на конкретных темах, таких как автомобили, недвижимость, мебель, электроника и т.д.\n<br/>\nПреимущества использования досок объявлений заключаются в том, что они позволяют найти интересующую информацию быстро и удобно. Кроме того, они обычно бесплатны для пользователей, что делает их доступными для всех категорий людей.\n<br/>\nОднако, использование досок объявлений также имеет свои недостатки. В первую очередь, это связано с тем, что на досках объявлений может быть размещена ложная или неполная информация, которая может привести к нежелательным последствиям для пользователя. Кроме того, доски объявлений могут быть перегружены информацией, что затрудняет поиск необходимой информации.\n<br/>\nВ целом, доски объявлений являются эффективным и доступным средством обмена информацией</div>',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 6,
    slug: 'innopolis',
    title: 'Город Иннополис',
    body: 'Иннополис - это город, расположенный в России, в Республике Татарстан. Этот город создан как центр развития инновационных технологий и высокотехнологичных проектов в России.\n<br/>\nГород Иннополис был основан в 2012 году по инициативе президента Республики Татарстан Рустама Минниханова и правительства Российской Федерации. Он был создан с целью стать центром инновационной деятельности в России и привлечения талантливых специалистов в сферу IT-технологий.\n<br/>\nСегодня Иннополис является динамично развивающимся городом с множеством инновационных проектов и стартапов. В городе работают крупнейшие технологические компании, такие как Yandex, Tinkoff, Cisco, Kaspersky Lab, а также ряд местных IT-стартапов.\n\nИннополис также является центром образования и науки. В городе расположены Иннополисский университет, Иннополисский институт высоких технологий и другие образовательные учреждения, предлагающие высококачественное обучение в области информационных технологий и связанных с ними дисциплин.\n<br/>\nКроме того, Иннополис имеет развитую инфраструктуру, включая жилые здания, офисные помещения, торговые центры, спортивные комплексы и другие объекты. Все они оснащены последними технологическими достижениями, что делает город привлекательным для жизни и работы.\n<br/>\nИннополис - это пример того, как с помощью инвестиций в инновации и образование можно создать успешный и процветающий город, который привлекает лучших специалистов и инвесторов со всего мира.',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
  {
    id: 7,
    slug: 'innoads',
    title: 'InnoAds - это онлайн-доска объявлений в Иннополисе',
    body: 'InnoAds - это онлайн-доска объявлений, которая позволяет пользователям размещать бесплатные объявления о продаже товаров и услуг в Иннополисе.\n<br/>\nНа InnoAds можно найти широкий спектр объявлений, включая продажу автомобилей, недвижимости, электроники, мебели, одежды и других товаров, а также услуги различных видов.\n<br/>\nОсобенностью InnoAds является простой и интуитивно понятный интерфейс, который позволяет пользователям быстро и легко размещать свои объявления. Кроме того, InnoAds предлагает различные функции для улучшения объявлений, такие как добавление фотографий и видео, поднятие объявлений в списке, настройки приватности и другие.',
    createdAt: new Date('2021-10-17 00:00:00'),
    updatedAt: new Date('2021-10-17 00:00:00'),
  },
];

const initialPosts: Post[] = [
  {
    id: 1,
    categoryId: 1,
    price: 99,
    title: 'Тестовое объявление',
    body: 'Описание объявления',
    preview: 'https://chamala.tatar/uploads/1715943397663.jpeg',
    images: 'https://chamala.tatar/uploads/free.png',
    slug: 'test-99',
    userId: 71233480,
    createdAt: new Date('2024-05-17T10:56:53.893Z'),
    updatedAt: new Date('2024-05-17T10:56:53.893Z'),
    published: true,
  },
];

const initialUsers: User[] = [
  {
    id: 71233480,
    username: 'maratfaizer',
    createdAt: new Date('2024-05-17T10:56:53.893Z'),
    updatedAt: new Date('2024-05-17T10:56:53.893Z'),
    role: 'USER',
  },
];

const seed = async () => {
  // await prisma.category.deleteMany();
  //
  // for (const category of initialCategories) {
  //   await prisma.category.create({
  //     data: category,
  //   });
  // }

  await prisma.article.deleteMany();

  for (const article of initialArticles) {
    await prisma.article.create({
      data: article,
    });
  }

  // await prisma.user.deleteMany();
  // for (const user of initialUsers) {
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }
  //
  // await prisma.post.deleteMany();
  // for (const post of initialPosts) {
  //   await prisma.post.create({
  //     data: post,
  //   });
  // }
};

seed();
