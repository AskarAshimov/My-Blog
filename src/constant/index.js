export const BASE_URL = "http://localhost:3000";

export const posts = [
  {
    id:1,
    title: "Особенные дети: чему они учат своих родителей",
    titleDesc: "SaaS / S+S, Бизнес-модели, Локализация продуктов, Облачные сервисы, Управление персоналом",
    date: "18-03-2022",
    desc: "Однажды я услышала фразу «Когда Бог хочет сделать человеку подарок, он заворачивает его в обёртку из проблемы». Особенный ребёнок в семье — это подарок,но он завёрнут в обёртку не просто из проблемы — из очень сильной боли. Однако если начать разворачивать его, внутри окажется много ценного.",
    countComments: "0",
    imgUrl: "https://www.ifs.edu.sg/wp-content/uploads/2020/05/shutterstock_1138276718-v2-e1589876943137.jpg"
  },
  {
    id:2,
    title: "Особенные дети: если они молчат - надо действовать",
    titleDesc: "Благотворительность и добровольчество, Дети солнца, Уникальные дети, Особенные дети",
    date: "18-03-2022",
    desc: "Одна из мам доверительно сообщает мне: 'Видите - там внутри детская площадка, на которой никто никогда не играет? Это площадка (переходит на шепот) для аутистов. Там для них отдельный кружок где-то в этом помещении.'",
    countComments: "12",
    imgUrl: "https://www.asi.org.ru/wp-content/uploads/2022/04/thumbnail_polosatyj-3-788x520.jpg"
  }
]

export const popularPosts = [
  {
    id: 0,
    imgUrl: "https://www.w3schools.com/w3images/workshop.jpg",
    title: 'Lorem Ipsum',
    text: 'Sed mattis nunc',
  },
  {
    id: 1,
    imgUrl: "https://www.w3schools.com/w3images/gondol.jpg",
    title: 'Ipsum',
    text: 'Praes tinci sed',
  },
  {
    id: 2,
    imgUrl: "https://www.w3schools.com/w3images/skies.jpg",
    title: 'Dorum',
    text: 'Ultricies congue',
  },
  {
    id: 3,
    imgUrl: "https://www.w3schools.com/w3images/rock.jpg",
    title: 'Mingsum',
    text: 'Lorem ipsum dipsum',
  },
  {
    id: 4,
    imgUrl: "https://www.w3schools.com/w3images/rock.jpg",
    title: 'Gaougio',
    text: 'Lorem ipsum dipsum',
  },
];

export const tags = [
  {
    id: 0,
    name: "Travel",
  },
  {
    id: 1,
    name: "IKEA",
  },
  {
    id: 2,
    name: "Ideas",
  }, {
    id: 3,
    name: "News",
  }, {
    id: 4,
    name: "New York",
  }, {
    id: 5,
    name: "Sports",
  },
  {
    id: 6,
    name: "NORWAY",
  }, {
    id: 7,
    name: "Baby",
  }, {
    id: 8,
    name: "Clothing",
  }, {
    id: 9,
    name: "Games",
  },
  {
    id: 10,
    name: "London",
  },
  {
    id: 11,
    name: "Family",
  },
  {
    id: 12,
    name: "DIY",
  },
  {
    id: 13,
    name: "Shopping",
  },
];

export const comments = [
  {
    id: 0,
    img: "https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%82%D0%B0-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D0%B9-%D1%80%D0%B0%D0%BC%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-141764869.jpg",
    name: 'Муратбеков Эламан,  3 месяца назад',
    comment: 'Разве Браге работал с оптическими инструментами? Вроде бы у него были только угломерные приборы, а первый телескоп создал Галилей, уже после смерти Браге. Или я не прав?А за статью спасибо, было интересно почитать. А таблица Менделеева с источниками происхождения элементов - вообще бомба.'
  },
  {
    id: 1,
    img: "https://i.pinimg.com/originals/f0/c7/29/f0c729013ede15a59a7dd9d1f1ce2ceb.jpg",
    name: 'Altymyshev Azamat,  4 месяца назад',
    comment: 'Мне кажется, упущена одна важная вещь, которая объясняет, почему сверхновые настолько значимы. Если грубо, есть сверхновые типа Ia и все остальные, не-Ia. Последние -- это так называемые core-collapse supernovae, т.е. результат коллапса массивных звезд на последнем этапе жизни. Типов этих core-collapse - великое множетсво, их спектры и кривые блеска (изменение яркости со временем) зависят от кучи факторов, включая химический состав. '
  },
  {
    id: 2,
    img: "https://p.favim.com/orig/2018/08/09/creativity-animals-naomi-lord-Favim.com-6137536.jpg",
    name: 'Ashimov Askar,  6 месяца назад',
    comment: 'Ну и интересное замечание -- thermal runaway и core-collapse это процессы, отличающиеся друг от друга, а главное происходящие с совершенно разными объектами (крохотный БК массой 1.44Msun vs ядро в несколько масс (иногда десятков масс) Солнца в сверхмассивной звезде), но их наблюдаемые характеристики достаточно схожи, чтобы изначально поместить их в одну категорию "сверхновые" и только спустя некоторое время понять, что Ia (и подтипы) отличаются от всех остальных сверхновых.'
  }
]